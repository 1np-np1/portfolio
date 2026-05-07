// ═══════════════════════════════════════════
// CLOCK — shows the current time in the nav
// ═══════════════════════════════════════════
function tick() {
  const d = new Date();
  const hh = String(d.getHours()).padStart(2, '0');
  const mm = String(d.getMinutes()).padStart(2, '0');
  const el = document.getElementById('clock');
  if (el) el.textContent = `${hh}:${mm}`;
}
tick();
setInterval(tick, 1000);

// ═══════════════════════════════════════════
// More interactivity (oscilloscope etc.)
// will be added as sections are built.
// ═══════════════════════════════════════════
