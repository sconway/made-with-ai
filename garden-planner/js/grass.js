/* ============================================================
   grass.js — lawn advice from latitude and the shadier of solstice and equinox sun
   Hours are direct sun. Full sun ≥6h, part sun 4–6h, shade <4h.
   Seeding windows are day-of-year in the northern hemisphere;
   adviseLawn shifts them for the southern hemisphere.
   ============================================================ */

const GRASSES = {
  kbg: {
    name: 'Kentucky bluegrass blend',
    botanical: 'Poa pratensis',
    minHours: 6,
    seed: [2, 3],
    nitrogen: [3, 4],
    mow: 'Mow at 2½–3½ inches, and never take more than a third of the blade.',
    feed: 'cool',
  },
  ttf: {
    name: 'Turf-type tall fescue',
    botanical: 'Lolium arundinaceum',
    minHours: 4,
    seed: [6, 8],
    nitrogen: [2.5, 3.5],
    mow: 'Mow at 3–4 inches. Taller grass shades out weeds and roots deeper.',
    feed: 'cool',
  },
  fine: {
    name: 'Fine fescue blend',
    botanical: 'Festuca rubra and kin',
    minHours: 3,
    seed: [4, 5],
    nitrogen: [1, 2],
    mow: 'Mow at 3–4 inches, or leave it a little longer in the shade.',
    feed: 'cool',
  },
  bermuda: {
    name: 'Bermudagrass',
    botanical: 'Cynodon dactylon',
    minHours: 6,
    seed: [1, 2],
    nitrogen: [2, 4],
    mow: 'Mow at 1–2 inches, and often. It creeps, so edge it or it will walk into the beds.',
    feed: 'warm',
  },
  staug: {
    name: 'St. Augustinegrass',
    botanical: 'Stenotaphrum secundatum',
    minHours: 4,
    seed: null,
    nitrogen: [2, 4],
    mow: 'Mow at 3–4 inches. It spreads by stolons — edge it where it meets the garden. Skip weed killers labeled only for Bermuda.',
    feed: 'warm',
  },
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function grassDateLabel(doy) {
  const d = new Date(Date.UTC(new Date().getFullYear(), 0, doy));
  return `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}`;
}

function shiftDoy(doy, delta) {
  return ((doy - 1 + delta) % 365 + 365) % 365 + 1;
}

function climateBand(lat) {
  const a = Math.abs(lat);
  if (a >= 40) return 'cool';
  if (a >= 33) return 'transition';
  return 'warm';
}

const BAND_LABEL = {
  cool: 'Cool-season climate',
  transition: 'Transition-zone climate',
  warm: 'Warm-season climate',
};

function rangeLb(perK, areaFt) {
  const k = areaFt / 1000;
  const a = perK[0] * k, b = perK[1] * k;
  if (b < 0.1) return 'a few ounces';
  const fmt = (n) => (n < 10 ? n.toFixed(1) : String(Math.round(n)));
  return `${fmt(a)}–${fmt(b)} lb`;
}

/** @returns the advice object the inspector renders. */
function adviseLawn({ lat, doy, areaM2, summer, equinox, now, openSky }) {
  const south = lat < 0;
  const abs = Math.abs(lat);
  const band = climateBand(lat);
  const seasonDoy = south ? shiftDoy(doy, 182) : doy;
  const areaFt = areaM2 * 10.7639;
  // June sun sits high and hides the shade a house throws in spring and fall.
  const useEquinox = equinox.mean <= summer.mean;
  const light = useEquinox ? equinox : summer;

  const shady = light.mean < 4 || light.shade >= 0.4;
  const deep = light.mean < 2.5;
  const part = !shady && (light.mean < 6 || light.full < 0.55);
  const mixed = light.full >= 0.25 && light.shade >= 0.25;

  let id = 'ttf';
  let alt = null;
  let caution = null;

  if (band === 'cool') {
    if (deep) {
      id = 'fine';
      caution = 'Under about 3 hours of direct sun, even fine fescue thins out. This outline may be happier as a shade bed than a lawn.';
    } else if (shady) {
      id = 'fine';
    } else if (part) {
      id = 'ttf';
    } else if (abs >= 43) {
      id = 'kbg';
      alt = 'Turf-type tall fescue is the tougher pick if this lawn gets heavy wear, or if you want one species instead of a blend.';
    } else {
      id = 'ttf';
      alt = 'Kentucky bluegrass is the classic sunny northern lawn if you can water it through summer.';
    }
  } else if (band === 'transition') {
    id = 'ttf';
    if (deep) {
      caution = 'Shade in the transition zone is a hard place for turf. Tall fescue is the least-bad choice, and under 3 hours it will still thin.';
    } else if (!shady && !part) {
      alt = 'Bermudagrass is the warm-season option if you want a summer lawn and can live with a brown winter.';
    }
  } else if (deep) {
    id = 'staug';
    caution = 'No common lawn grass thrives in deep shade. St. Augustine is the most tolerant warm-season grass, and it still wants about 4 hours.';
  } else if (shady || part) {
    id = 'staug';
    alt = 'Zoysia handles light shade and needs less water, but it establishes slowly from plugs or sod.';
  } else {
    id = 'bermuda';
    alt = 'Zoysia is the lower-water alternative if you can wait a season for it to fill in. Buy sod or plugs, not seed.';
  }

  if (mixed) {
    const split = 'This outline mixes full sun and real shade. The pick is the grass that can live in the shadier part. Split the area if you want a sun type on the bright side.';
    caution = caution ? `${caution} ${split}` : split;
  }

  const g = GRASSES[id];
  const why = grassWhy(id, band, light);

  const fall = abs >= 45 ? [220, 258] : [237, 288];
  const spring = [75, 120];
  const warmSow = abs < 28 ? [110, 200] : [125, 190];
  const sodLay = [120, 210];

  let seedTitle = 'Seed';
  let seedBody;
  if (!g.seed) {
    seedTitle = 'Plant';
    const [a, b] = localWindow(sodLay, south);
    const when = inRange(seasonDoy, sodLay[0], sodLay[1])
      ? `This date is in the laying window (${grassDateLabel(a)} – ${grassDateLabel(b)}).`
      : `Lay it between ${grassDateLabel(a)} and ${grassDateLabel(b)}, once the soil is warm.`;
    seedBody = `${g.name} is sold as sod or plugs, not seed. This outline is about ${Math.round(areaFt).toLocaleString()} ft² of sod. ${when} Water daily the first week, then taper.`;
  } else {
    const primary = g.feed === 'cool' ? fall : warmSow;
    const [a, b] = localWindow(primary, south);
    const amount = `A new lawn wants ${g.seed[0]}–${g.seed[1]} lb of seed per 1,000 ft² — about ${rangeLb(g.seed, areaFt)} for this one.`;
    let when;
    if (inRange(seasonDoy, primary[0], primary[1])) {
      when = `This date is in the best seeding window, ${grassDateLabel(a)} – ${grassDateLabel(b)}.`;
    } else if (g.feed === 'cool' && inRange(seasonDoy, spring[0], spring[1])) {
      const [c, d] = localWindow(spring, south);
      when = `This date is in the spring backup window (${grassDateLabel(c)} – ${grassDateLabel(d)}). Fall, ${grassDateLabel(a)} – ${grassDateLabel(b)}, is more reliable if you can wait.`;
    } else if (g.feed === 'cool') {
      when = `The best window here is ${grassDateLabel(a)} – ${grassDateLabel(b)}. This date is outside it.`;
    } else {
      when = `Seed once the soil is warm, ${grassDateLabel(a)} – ${grassDateLabel(b)}. This date is outside that window — Bermuda sown into cold soil just sits there.`;
    }
    seedBody = `${amount} ${when} Rake seed into the top quarter-inch and keep that layer damp.`;
  }

  const nYear = rangeLb(g.nitrogen, areaFt);
  let fertBody;
  if (g.feed === 'cool') {
    const [fa, fb] = localWindow(fall, south);
    fertBody = `Over a year, plan ${g.nitrogen[0]}–${g.nitrogen[1]} lb of nitrogen per 1,000 ft² — about ${nYear} of nitrogen for this lawn. Put most of it down in early fall and again in late fall (${grassDateLabel(fa)} – ${grassDateLabel(fb)}). A light late-spring feeding is enough. Skip nitrogen in summer heat. On seeding day, use a starter fertilizer labeled for new lawns instead of regular lawn food.`;
    if (inRange(seasonDoy, 160, 243)) {
      fertBody += ' This date is midsummer — do not feed it now.';
    }
  } else {
    fertBody = `While it is green, plan ${g.nitrogen[0]}–${g.nitrogen[1]} lb of nitrogen per 1,000 ft² — about ${nYear} of nitrogen for this lawn. Feed every 6–8 weeks from late spring through midsummer, and stop about six weeks before frost.`;
    if (inRange(seasonDoy, 300, 365) || inRange(seasonDoy, 1, 80)) {
      fertBody += ' This date is dormancy. Wait until the lawn is mostly green again.';
    }
    if (!g.seed) fertBody += ' On planting day, use a starter labeled for new sod.';
  }

  const inches = light.mean >= 6 ? '1½ inches' : light.mean >= 4 ? '1 inch' : '¾ inch';
  let waterBody = `For the first 10–14 days after seeding, water lightly two or three times a day so the top half-inch stays damp. Then once a day for a week. After that, this spot wants about ${inches} a week in summer, rain included — two or three deep morning waterings, not a daily sprinkle. Morning only. Evening wet foliage invites fungus.`;
  if (!g.seed) {
    waterBody = `The first week after sod, water daily so the soil under the slabs stays moist. Then taper to about ${inches} a week in summer, rain included, in deep morning soaks. Evening water invites fungus.`;
  }
  if (light.mean < 4) {
    waterBody += ' Shade dries slowly. This lawn will rot before it wilts if you water it like a sunny one.';
  }
  if (g.feed === 'cool' && inRange(seasonDoy, 160, 243)) {
    waterBody += ' On a midsummer date like this, water to keep it from going dormant and raise the mowing height.';
  }
  if (g.feed === 'warm' && (inRange(seasonDoy, 300, 365) || inRange(seasonDoy, 1, 90))) {
    waterBody += ' On this date the grass is dormant. Water only if a dry spell hits and the soil is not frozen.';
  }

  let level = light.mean + 0.4 >= g.minHours ? 'ok' : light.mean + 1.5 >= g.minHours ? 'warn' : 'bad';
  if (level === 'ok' && (light.shade >= 0.45 || light.mean < g.minHours)) level = 'warn';

  return {
    band: BAND_LABEL[band],
    name: g.name,
    botanical: g.botanical,
    why,
    alt,
    caution,
    level,
    sunLine: `Summer solstice ${summer.mean.toFixed(1)}h · equinox ${equinox.mean.toFixed(1)}h. The pick uses the ${useEquinox ? 'equinox, when shadows are longer' : 'summer solstice'}.`,
    nowLine: doyApart(doy, south ? 355 : 172) > 20 && doyApart(doy, south ? 266 : 80) > 20 && now
      ? `On this date the same outline averages ${now.mean.toFixed(1)}h. The grass pick stays on the solstice and the equinox.`
      : null,
    seedTitle,
    seedBody,
    fertBody,
    waterBody,
    mow: g.mow,
    openSky: openSky
      ? 'Nothing traced here casts shade, so this reads as open sky. Outline the house and trees or the sun hours — and the grass pick — will be too optimistic.'
      : null,
  };
}

function grassWhy(id, band, summer) {
  const light = summer.mean >= 6 ? 'full sun' : summer.mean >= 4 ? 'part sun' : 'shade';
  if (id === 'kbg') return `A sunny cool-season lawn. Kentucky bluegrass wants ${light} like this and repairs itself by spreading. Mix in a little perennial rye if you want faster cover.`;
  if (id === 'ttf') {
    if (band === 'transition') return `Tall fescue is the reliable lawn where winters are too cold for Bermuda and summers are too hot for bluegrass. It will take ${light}.`;
    return `Tall fescue tolerates heat and ${light} better than bluegrass, and a single species is easier to keep even.`;
  }
  if (id === 'fine') return `Fine fescues are the shade grasses of cool climates. This outline's light is ${light}, which is their territory.`;
  if (id === 'bermuda') return `Bermuda is the full-sun warm-season lawn. It loves heat, takes wear, and goes brown in winter.`;
  return `St. Augustine is the warm-season grass that copes with ${light}. It wants humidity more than Bermuda does, and it is planted as sod.`;
}

function localWindow(range, south) {
  if (!south) return range;
  return [shiftDoy(range[0], 182), shiftDoy(range[1], 182)];
}

function inRange(doy, a, b) {
  if (a <= b) return doy >= a && doy <= b;
  return doy >= a || doy <= b;
}

function doyApart(a, b) {
  const d = Math.abs(a - b);
  return Math.min(d, 365 - d);
}
