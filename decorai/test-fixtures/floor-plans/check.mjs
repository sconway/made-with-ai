// Runs every test plan through the importer and prints what it found, two ways:
//   plain   the quick pass with no review (walls / doors / windows / stairs)
//   review  the layer review accepted as suggested, without the AI (rv walls / rv doors / rv win)
// Use it after changing src/planImport/ to spot files that got worse.
//
//   node test-fixtures/floor-plans/check.mjs              (needs Node 22+, like pdfjs-dist)
//   node test-fixtures/floor-plans/check.mjs ~/plan.pdf   (also runs any files you pass)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, '../..');
const load = (p) => import(pathToFileURL(path.join(repo, p)).href);

const { parseDxfText } = await load('src/planImport/dxf.js');
const { pdfToPrimitives } = await load('src/planImport/pdf.js');
const { reconstructLayout, estimateScale, classifyLayer } = await load('src/planImport/reconstruct.js');
const { detectStairs } = await load('src/planImport/stairs.js');
const { buildGroups } = await load('src/planImport/groups.js');
const { splitIntoObjects } = await load('src/planImport/objects.js');
const { buildFromReview } = await load('src/planImport/index.js');
const { findHatching } = await load('src/planImport/hatch.js');
const pdfjs = await load('node_modules/pdfjs-dist/legacy/build/pdf.mjs');

const files = ['synthetic', 'real'].flatMap(dir => {
    const d = path.join(here, dir);
    return fs.existsSync(d) ? fs.readdirSync(d).filter(f => /\.(dxf|pdf)$/i.test(f)).sort().map(f => path.join(d, f)) : [];
}).concat(process.argv.slice(2).map(f => path.resolve(f)));

const rows = [];
for (const file of files) {
    const started = Date.now();
    try {
        const prims = file.endsWith('.dxf')
            ? parseDxfText(fs.readFileSync(file, 'utf8'))
            : await pdfToPrimitives(pdfjs, new Uint8Array(fs.readFileSync(file)));
        // same first steps as analyzePlanFile: hatching, stairs, then walls
        const rough = estimateScale(prims).feetPerUnit;
        for (const i of findHatching(prims, rough)) prims.segments[i].hatch = true;
        const stairs = detectStairs(prims, rough);
        const stairSeg = new Set(stairs.flatMap(s => s.segments));
        const { report } = reconstructLayout({ ...prims, segments: prims.segments.map((s, i) => (stairSeg.has(i) ? { ...s, role: 'stairs' } : s)) });
        // the review path, as analyzePlanFile + buildFromReview run it in the app
        const k = report.scale.feetPerUnit;
        const kind = file.endsWith('.dxf') ? 'dxf' : 'pdf';
        const groups = buildGroups(prims, k, kind, report.wallSegments, stairs);
        const objects = splitIntoObjects(prims, groups, k, report.wallSegments, { classifyLayer });
        const roomLabels = (report.labelCandidates || []).map(i => ({ index: i, name: prims.texts[i].text }));
        const rv = (await buildFromReview({ kind, prims, groups, objects, roomLabels, scale: report.scale, warnings: [] })).report;
        rows.push({
            file: file.startsWith(here) ? path.relative(here, file) : path.basename(file),
            walls: report.walls, doors: report.doors, windows: report.windows, stairs: stairs.length,
            'rv walls': rv.walls, 'rv doors': rv.doors, 'rv win': rv.windows,
            size: report.widthFt ? `${report.widthFt} × ${report.heightFt} ft` : '-',
            scale: report.scale.source,
            ms: Date.now() - started
        });
    } catch (err) {
        rows.push({ file: path.basename(file), error: err.message });
    }
}
console.table(rows);
if (!fs.existsSync(path.join(here, 'real'))) console.log('Tip: run ./download-real.sh to add the real-world plans.');
