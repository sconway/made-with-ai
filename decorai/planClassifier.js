// Vision-model classification for the floor plan importer.
// The client sends rendered images of the drawing plus a description of each layer group
// and every text item; the model says what each group is (walls, doors, windows, …) and
// which texts are room names. Geometry never comes from the model — only labels.
import Anthropic from '@anthropic-ai/sdk';

const CATEGORIES = ['wall', 'door', 'window', 'furniture', 'stairs', 'detail', 'text', 'annotation'];
const FURNITURE_TYPES = [
    'none', 'sofa', 'armchair', 'coffee-table', 'floor-plant', 'tv-stand', 'bookshelf', 'queen-bed', 'king-bed',
    'twin-bed', 'nightstand', 'dresser', 'wardrobe', 'dining-table', 'dining-chair', 'buffet', 'fridge', 'stove',
    'sink-kitchen', 'dishwasher', 'counter', 'toilet', 'bathtub', 'shower', 'sink-bath', 'towel-holder',
    'floor-mat', 'light-fixture', 'desk', 'office-chair', 'filing-cabinet'
];

const SYSTEM_PROMPT = `You review architectural floor plan drawings that are being imported into a 2D floor plan editor.

The drawing has already been split into groups of geometry (CAD layers, CAD block types, or — for PDFs — drawing styles such as fill color and line weight). Your job is to say what each group is, so the importer can rebuild walls, doors and windows and keep everything else exactly as drawn. You never produce coordinates; the geometry stays exactly as in the file.

You get:
- An overview image of the whole drawing.
- Contact sheets: each tile shows the whole drawing in light gray with ONE group highlighted in red, labelled with its id (G1, G2, …) in the tile's top-left corner.
- A JSON description of every group (name, kind, counts, total length, block sizes, sample text, and a heuristic guess) and a list of every text item.

Categories for groups:
- wall: wall outlines or wall fills (double lines, solid poché, thick single lines). Includes exterior and interior walls and partitions, columns attached to walls.
- door: door leaves, swing arcs, door frames, sliding/pocket door symbols.
- window: window frames and glazing lines inside walls.
- furniture: furniture, appliances, plumbing fixtures, casework (beds, sofas, tables, toilets, sinks, tubs, counters, kitchen units, plants).
- stairs: stair treads, ramps, stair arrows.
- detail: other drawing content worth keeping visible (floor patterns, hatching, room outlines, balcony rails, built-in lines that are not walls).
- text: text that belongs on the plan (room names, room labels, furniture labels).
- annotation: noise to hide — dimension strings and dimension lines, grid lines/bubbles, section and elevation markers, north arrows, title blocks, borders, revision clouds, leaders, notes/specifications, center lines.

Guidance:
- Judge mainly by what the red geometry looks like in its tile and where it sits; use names as supporting evidence (names can be in any language and can be misleading — e.g. a block called "fridge with two doors" is furniture).
- A group can mix things (e.g. one PDF line style used for walls and furniture). Pick the category that the walls/structure depend on: if a group contains a meaningful share of the building's walls, call it wall.

Objects (O1, O2, …): mixed groups have also been split into separate objects, and each object gets its own label. Object tiles are zoomed in on ONE object (red) with its surroundings in gray, labelled with its id and real size in feet. An object's label overrides its group's label for that object, so label each object for what it actually is: a door swing is door, a sofa or toilet is furniture, a stair run is stairs, a dimension string (line with ticks and a number) is annotation, glazing lines in an opening are window, wall outlines are wall. Objects of kind "lines the wall finder paired as walls" are usually wall but can be furniture edges or stair treads — check the tile. Use the real size: a 3 ft quarter-circle is a door, a 5×6.7 ft rectangle with pillows is a bed, a long thin line with ticks and a number nearby is a dimension.
- Thin parallel lines inside wall openings are windows; quarter-circle arcs hinged at an opening are doors.
- If unsure, prefer detail over annotation so nothing useful is hidden, and lower the confidence.
- For furniture groups, set furniture_type to the closest editor catalog item when the group is clearly one kind of object (typical for CAD blocks); otherwise "none". For every non-furniture group use "none".
- For every furniture object, set furniture_type to the closest editor catalog item, judging by its shape and real size: each one becomes that item in the editor, placed where it's drawn, and one left as "none" stays as plain lines. A bed drawn with nightstands on either side is still the bed (twin about 3.3 ft wide, queen about 5 ft, king about 6.5 ft; all about 6.7 ft long). A table drawn with its chairs is the table. A plant is floor-plant. Use "none" only when it matches nothing in the catalog (e.g. an L-shaped built-in). For every non-furniture object use "none".
- room_labels: list the text items that name a room or space (e.g. "Kitchen", "Bedroom 2", "화장실-1", "Living / Dining"). Give a clean display name with codes, levels and areas stripped (e.g. "BEDROOM 2 12'x14'" → "Bedroom 2", "화장실-1 F.L" → "화장실-1"). Do not include dimension values, notes, material specs, door/window tags, stair arrows (UP/DN), or title-block text.
- hidden_texts: ids of text items that are annotation noise to hide, the same way annotation groups are hidden: dimension values (12'-6", 3500, 50'), floor-level and elevation marks (F.L +160, S.L 0, EL. 100), door/window/room tag codes and numbers (AW, 12B, D-3, 201), grid labels, section/elevation references (A-601), notes and material/pipe specifications, title-block and sheet text. Keep room names, furniture/fixture labels and short functional words a person reading the plan would want (e.g. UP/DN on stairs, OPEN, REF). Room-name texts must not be in this list.

Return every group id exactly once and every object id exactly once.`;

const OUTPUT_SCHEMA = {
    type: 'object',
    additionalProperties: false,
    required: ['groups', 'objects', 'room_labels', 'hidden_texts', 'notes'],
    properties: {
        groups: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['id', 'category', 'confidence', 'furniture_type'],
                properties: {
                    id: { type: 'string' },
                    category: { type: 'string', enum: CATEGORIES },
                    confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
                    furniture_type: { type: 'string', enum: FURNITURE_TYPES }
                }
            }
        },
        room_labels: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['id', 'name'],
                properties: { id: { type: 'string' }, name: { type: 'string' } }
            }
        },
        objects: {
            type: 'array',
            items: {
                type: 'object',
                additionalProperties: false,
                required: ['id', 'category', 'furniture_type'],
                properties: {
                    id: { type: 'string' },
                    category: { type: 'string', enum: CATEGORIES },
                    furniture_type: { type: 'string', enum: FURNITURE_TYPES }
                }
            }
        },
        hidden_texts: { type: 'array', items: { type: 'string' } },
        notes: { type: 'string' }
    }
};

const MAX_IMAGES = 10;
const MAX_GROUPS = 120;
const MAX_OBJECTS = 120;
const MAX_TEXTS = 600;
const DATA_URL_RE = /^data:(image\/png|image\/jpeg|image\/webp);base64,([A-Za-z0-9+/=]+)$/;

/** Validate and normalize the request body. Throws { status, message } on bad input. */
export function parseClassifyRequest(body) {
    const bad = (message) => Object.assign(new Error(message), { status: 400 });
    const { overview, sheets, groups, texts, source } = body || {};
    const objectSheets = body?.objectSheets || [];
    const objects = body?.objects || [];
    if (typeof overview !== 'string' || !DATA_URL_RE.test(overview)) throw bad('overview must be a PNG/JPEG/WebP data URL');
    if (!Array.isArray(sheets) || !Array.isArray(objectSheets) || sheets.length + objectSheets.length + 1 > MAX_IMAGES) throw bad(`at most ${MAX_IMAGES} images in total`);
    if (!Array.isArray(objects) || objects.length > MAX_OBJECTS) throw bad(`objects must have at most ${MAX_OBJECTS} items`);
    for (const s of [...sheets, ...objectSheets]) {
        if (!s || typeof s.image !== 'string' || !DATA_URL_RE.test(s.image) || !Array.isArray(s.ids)) throw bad('each sheet needs an image data URL and ids');
    }
    if (!Array.isArray(groups) || !groups.length || groups.length > MAX_GROUPS) throw bad(`groups must have 1-${MAX_GROUPS} items`);
    if (!Array.isArray(texts) || texts.length > MAX_TEXTS) throw bad(`texts must have at most ${MAX_TEXTS} items`);
    return {
        overview,
        sheets: sheets.map(s => ({ image: s.image, ids: s.ids.map(String).slice(0, 24) })),
        objectSheets: objectSheets.map(s => ({ image: s.image, ids: s.ids.map(String).slice(0, 24) })),
        objects: objects.map(o => ({ ...o, id: String(o.id) })),
        groups: groups.map(g => ({ ...g, id: String(g.id) })),
        texts: texts.map(t => ({ id: String(t.id), text: String(t.text).slice(0, 120), ...(t.layer ? { layer: String(t.layer).slice(0, 60) } : {}) })),
        source: source === 'pdf' ? 'pdf' : 'dxf'
    };
}

function imageBlock(dataUrl) {
    const m = dataUrl.match(DATA_URL_RE);
    return { type: 'image', source: { type: 'base64', media_type: m[1], data: m[2] } };
}

let anthropicClient = null;
function getClient() {
    if (!anthropicClient) anthropicClient = new Anthropic(); // reads ANTHROPIC_API_KEY
    return anthropicClient;
}

async function classifyWithClaude(req) {
    const content = [
        { type: 'text', text: `Overview of the whole drawing (source: ${req.source.toUpperCase()}):` },
        imageBlock(req.overview)
    ];
    req.sheets.forEach((s, i) => {
        content.push({ type: 'text', text: `Contact sheet ${i + 1}: tiles left→right, top→bottom are ${s.ids.join(', ')}.` });
        content.push(imageBlock(s.image));
    });
    req.objectSheets.forEach((s, i) => {
        content.push({ type: 'text', text: `Object sheet ${i + 1}: zoomed tiles left→right, top→bottom are ${s.ids.join(', ')}.` });
        content.push(imageBlock(s.image));
    });
    const withTiles = new Set(req.sheets.flatMap(s => s.ids));
    const objWithTiles = new Set(req.objectSheets.flatMap(s => s.ids));
    content.push({
        type: 'text',
        text: [
            'Groups (those without a tile were too small to show; judge them from their description):',
            JSON.stringify(req.groups.map(g => ({ ...g, has_tile: withTiles.has(g.id) }))),
            '',
            ...(req.objects.length ? [
                'Objects (pieces of mixed groups; label each one):',
                JSON.stringify(req.objects.map(o => ({ ...o, has_tile: objWithTiles.has(o.id) }))),
                ''
            ] : []),
            'Text items:',
            JSON.stringify(req.texts),
            '',
            'Classify every group and every object, and pick the room-name texts.'
        ].join('\n')
    });

    const response = await getClient().beta.messages.create({
        model: 'claude-opus-5-5',
        max_tokens: 16000,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content }],
        output_config: { effort: 'high', format: { type: 'json_schema', schema: OUTPUT_SCHEMA } },
        // if a safety classifier declines, retry on Anthropic's recommended fallback model
        betas: ['server-side-fallback-2026-07-01'],
        fallbacks: 'default'
    });

    if (response.stop_reason === 'refusal') {
        throw Object.assign(new Error('The model declined to classify this drawing.'), { status: 502 });
    }
    if (response.stop_reason === 'max_tokens') {
        throw Object.assign(new Error('The model response was cut off.'), { status: 502 });
    }
    const textBlock = response.content.find(b => b.type === 'text');
    if (!textBlock) throw Object.assign(new Error('The model returned no result.'), { status: 502 });
    return {
        result: JSON.parse(textBlock.text),
        model: response.model,
        usage: { input_tokens: response.usage.input_tokens, output_tokens: response.usage.output_tokens }
    };
}

/** Keep only answers that refer to ids we sent. */
function sanitize(result, req) {
    const groupIds = new Set(req.groups.map(g => g.id));
    const textIds = new Set(req.texts.map(t => t.id));
    const seen = new Set();
    const groups = (result.groups || []).filter(g => groupIds.has(g.id) && !seen.has(g.id) && seen.add(g.id) && CATEGORIES.includes(g.category));
    const room_labels = (result.room_labels || []).filter(r => textIds.has(r.id) && typeof r.name === 'string' && r.name.trim())
        .map(r => ({ id: r.id, name: r.name.trim().slice(0, 60) }));
    const roomIds = new Set(room_labels.map(r => r.id));
    const hidden_texts = [...new Set((result.hidden_texts || []).map(String))].filter(id => textIds.has(id) && !roomIds.has(id));
    const objectIds = new Set(req.objects.map(o => o.id));
    const seenObj = new Set();
    const objects = (result.objects || []).filter(o => objectIds.has(o.id) && !seenObj.has(o.id) && seenObj.add(o.id) && CATEGORIES.includes(o.category));
    return { groups, objects, room_labels, hidden_texts, notes: String(result.notes || '').slice(0, 1000) };
}

/**
 * Classify a plan. Provider is chosen by PLAN_CLASSIFIER_PROVIDER (default "anthropic") so
 * other vision models can be compared on the same inputs.
 */
export async function classifyPlan(body) {
    const req = parseClassifyRequest(body);
    const provider = (process.env.PLAN_CLASSIFIER_PROVIDER || 'anthropic').toLowerCase();
    if (provider !== 'anthropic') {
        throw Object.assign(new Error(`Unknown PLAN_CLASSIFIER_PROVIDER "${provider}"`), { status: 500 });
    }
    if (!process.env.ANTHROPIC_API_KEY) {
        throw Object.assign(new Error('Anthropic API key not configured'), { status: 500 });
    }
    const started = Date.now();
    const { result, model, usage } = await classifyWithClaude(req);
    return { ...sanitize(result, req), provider, model, usage, ms: Date.now() - started };
}

export { Anthropic };
