/**
 * Tap targets under 44px (TASKS.md R1), measured in the page.
 *
 * Every visible button, link, field and tab is measured. The label stands in
 * for a visually hidden checkbox or radio (it's what a finger hits). Exempt: a
 * link inside a sentence (WCAG 2.5.8's inline exception), and the compare
 * divider's 2px line, whose 44px grip is measured on its own.
 * Returns "WxH description" for each one too small; empty means none.
 */
export async function smallTargets(page, { scope = 'body', min = 44 } = {}) {
  await page.waitForTimeout(100);
  return page.evaluate(({ scopeSel, min }) => {
    const root = document.querySelector(scopeSel) || document.body;
    const shown = (el) => {
      for (let n = el; n; n = n.parentElement) {
        const s = getComputedStyle(n);
        if (s.display === 'none' || s.visibility === 'hidden' || n.hidden) return false;
      }
      return true;
    };
    const describe = (el) => {
      const cls = typeof el.className === 'string' ? el.className.trim().split(/\s+/).slice(0, 2).join('.') : '';
      const name = (el.getAttribute('aria-label') || el.textContent || el.value || '').trim().replace(/\s+/g, ' ').slice(0, 30);
      return `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}${cls ? `.${cls}` : ''} "${name}"`;
    };
    const out = [];
    const controls = root.querySelectorAll(
      'button, a[href], input:not([type=hidden]), select, textarea, [role=button], [role=tab], [role=slider], summary, .compare-handle-grip'
    );
    for (const el of controls) {
      if (el.matches('.compare-handle')) continue;
      if (!shown(el)) continue;
      let r = el.getBoundingClientRect();
      if (el.matches('input[type=checkbox], input[type=radio]')) {
        const label = el.labels?.[0] || el.closest('label');
        if (label) r = label.getBoundingClientRect();
      }
      if (r.width < 1 || r.height < 1) continue;
      if (el.tagName === 'A') {
        const p = el.closest('p, li');
        if (p && p.textContent.trim().length > el.textContent.trim().length + 10) continue;
      }
      if (r.width + 0.5 < min || r.height + 0.5 < min) out.push(`${Math.round(r.width)}x${Math.round(r.height)} ${describe(el)}`);
    }
    return [...new Set(out)];
  }, { scopeSel: scope, min });
}
