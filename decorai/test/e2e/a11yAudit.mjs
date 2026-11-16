/**
 * A small accessibility check run inside the page (no dependency):
 *
 *   - contrast: visible text against what's behind it, WCAG AA (4.5:1, or
 *     3:1 for large text: 24px, or 18.66px bold)
 *   - names: buttons, links, fields and images an assistive tool can announce
 *
 * It is not a full audit. Text over a photo or a gradient is skipped (the
 * colour behind it can't be read from CSS), as is anything hidden.
 * Returns a list of problems; empty means none found.
 */
export async function auditPage(page, { scope = 'body' } = {}) {
  // Let anything just switched on or off finish fading first: with reduced
  // motion every transition is a hair long, but a control re-enabled a moment
  // ago can still read at its dimmed opacity.
  await page.waitForTimeout(100);
  return page.evaluate((scopeSel) => {
    const root = document.querySelector(scopeSel) || document.body;
    const problems = [];

    const parse = (c) => {
      const m = c && c.match(/rgba?\(([^)]+)\)/);
      if (!m) return null;
      const [r, g, b, a = 1] = m[1].split(/[ ,/]+/).filter(Boolean).map(Number);
      return { r, g, b, a };
    };
    const lum = ({ r, g, b }) => {
      const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
      return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b);
    };
    const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };
    const over = (top, bottom) => ({
      r: top.r * top.a + bottom.r * (1 - top.a),
      g: top.g * top.a + bottom.g * (1 - top.a),
      b: top.b * top.a + bottom.b * (1 - top.a),
      a: 1,
    });
    const visible = (el) => {
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') return false;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return false;
      for (let n = el; n; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (s.opacity === '0' || n.hidden || n.getAttribute?.('aria-hidden') === 'true') return false;
        if (s.clipPath === 'inset(50%)') return false;
      }
      return true;
    };
    /** The solid colour behind `el`, or null when an image or gradient is in the way. */
    const background = (el) => {
      const layers = [];
      for (let n = el; n; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (s.backgroundImage && s.backgroundImage !== 'none') return null;
        if (n.tagName === 'IMG' || n.tagName === 'VIDEO' || n.tagName === 'CANVAS') return null;
        const c = parse(s.backgroundColor);
        if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; }
      }
      let bg = { r: 255, g: 255, b: 255, a: 1 };
      for (const l of layers.reverse()) bg = over(l, bg);
      return bg;
    };
    const describe = (el) => {
      const cls = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
      return el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (cls ? `.${cls}` : '');
    };

    // ── Contrast ──
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const checked = new Set();
    for (let t = walker.nextNode(); t; t = walker.nextNode()) {
      if (!t.textContent.trim()) continue;
      const el = t.parentElement;
      if (!el || checked.has(el) || !visible(el)) continue;
      checked.add(el);
      if (el.closest('[disabled], [aria-disabled="true"], svg')) continue; // disabled controls are exempt
      const cs = getComputedStyle(el);
      const fg = parse(cs.color);
      const bg = background(el);
      if (!fg || !bg) continue;
      const size = parseFloat(cs.fontSize);
      const bold = Number(cs.fontWeight) >= 700;
      const large = size >= 24 || (bold && size >= 18.66);
      const need = large ? 3 : 4.5;
      // Text faded with opacity reads lighter than its colour.
      let alpha = fg.a;
      for (let n = el; n && n !== document.body; n = n.parentElement) alpha *= Number(getComputedStyle(n).opacity);
      const got = ratio(over({ ...fg, a: alpha }, bg), bg);
      if (got + 0.01 < need) {
        problems.push(`contrast ${got.toFixed(2)}:1 (needs ${need}) ${describe(el)} "${t.textContent.trim().slice(0, 40)}"`);
      }
    }

    // ── Names ──
    const nameOf = (el) => {
      const labelled = el.getAttribute('aria-labelledby');
      if (labelled) return labelled.split(/\s+/).map((id) => document.getElementById(id)?.textContent || '').join(' ').trim();
      return (el.getAttribute('aria-label') || el.labels?.[0]?.textContent || el.getAttribute('title')
        || el.getAttribute('placeholder') || el.textContent || el.getAttribute('alt') || el.value || '').trim()
        || (el.querySelector('img[alt]')?.getAttribute('alt') || '').trim();
    };
    for (const el of root.querySelectorAll('button, a[href], input:not([type="hidden"]), select, textarea, [role="button"], [role="slider"], [role="tab"]')) {
      if (!visible(el) && !(el.matches('input[type="radio"], input[type="checkbox"]') && el.labels?.[0] && visible(el.labels[0]))) continue;
      if (!nameOf(el)) problems.push(`no name: ${describe(el)}`);
    }
    for (const img of root.querySelectorAll('img')) {
      if (visible(img) && !img.hasAttribute('alt')) problems.push(`img without alt: ${describe(img)} ${img.src.slice(0, 60)}`);
    }
    return [...new Set(problems)];
  }, scope);
}
