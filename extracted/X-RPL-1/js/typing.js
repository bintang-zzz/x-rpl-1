/* =========================================================
   X RPL-1 — typing.js
   Simple typewriter effect for hero section
   ========================================================= */

(function () {
  const el = document.querySelector("[data-typing]");
  if (!el) return;

  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const words = ["Learn.", "Build.", "Create.", "Grow Together."];
  const textEl = el.querySelector(".typing-text");
  const cursorEl = el.querySelector(".cursor");

  // If user prefers reduced motion, just show the first phrase statically
  if (reduceMotion) {
    textEl.textContent = words[0];
    if (cursorEl) cursorEl.style.display = "none";
    return;
  }

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 90;
  const DELETE_SPEED = 45;
  const HOLD_TIME = 1400;

  function tick() {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      charIndex++;
      textEl.textContent = currentWord.slice(0, charIndex);

      if (charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(tick, HOLD_TIME);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    } else {
      charIndex--;
      textEl.textContent = currentWord.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(tick, TYPE_SPEED);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    }
  }

  tick();
})();
