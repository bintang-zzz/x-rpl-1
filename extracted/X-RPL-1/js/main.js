/* =========================================================
   X RPL-1 — main.js
   Shared site-wide behavior: navbar scroll state,
   active nav link, lightbox gallery
   ========================================================= */

(function () {
  /* ---- Navbar border intensifies on scroll ---- */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.style.borderBottomColor =
        window.scrollY > 8 ? "var(--border)" : "var(--border-soft)";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- Highlight active nav link based on current page ---- */
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (linkPath === currentPath) {
      link.classList.add("active");
    }
  });

  /* ---- Lightbox gallery (only runs if lightbox markup exists) ---- */
  const lightbox = document.querySelector("[data-lightbox]");
  if (lightbox) {
    const lightboxImg = lightbox.querySelector("img");
    const closeBtn = lightbox.querySelector("[data-lightbox-close]");
    const triggers = document.querySelectorAll("[data-lightbox-trigger]");

    function openLightbox(src, alt) {
      lightboxImg.setAttribute("src", src);
      lightboxImg.setAttribute("alt", alt || "");
      lightbox.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const fullSrc = trigger.getAttribute("data-full") ||
          trigger.querySelector("img")?.getAttribute("src");
        const alt = trigger.querySelector("img")?.getAttribute("alt");
        openLightbox(fullSrc, alt);
      });
    });

    closeBtn?.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeLightbox();
    });
  }
})();
