/**
 * Premium smooth scroll with easeInOutCubic easing.
 * Much silkier than the browser's default CSS `scroll-behavior: smooth`.
 *
 * @param targetId   Anchor id, e.g. "contact" (without the #)
 * @param offset     Additional offset in px (useful to account for sticky header)
 * @param duration   Animation duration in ms (default 900)
 */
export function smoothScrollTo(
  targetId: string,
  offset = 88,
  duration = 900
): void {
  const el = document.getElementById(targetId);
  if (!el) return;

  const startY = window.scrollY;
  const targetY = el.getBoundingClientRect().top + window.scrollY - offset;
  const distance = targetY - startY;

  let startTime: number | null = null;

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (startTime === null) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

/**
 * Attach smooth-scroll to an anchor click event.
 * Usage: <a href="#contact" onClick={handleAnchorClick}>
 */
export function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  offset = 88
): void {
  const href = e.currentTarget.getAttribute("href");
  if (!href || !href.startsWith("#")) return;

  const targetId = href.slice(1);
  if (!targetId) return;

  e.preventDefault();
  smoothScrollTo(targetId, offset);
}
