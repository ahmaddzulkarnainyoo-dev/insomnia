// Vanilla JS: scroll reveal + stamp pop + parallax ringan.
// Tanpa library. Menghormati prefers-reduced-motion. Konten tetap terbaca tanpa JS.
(function () {
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reduceMotion.matches) {
    // Tampilkan semua tanpa animasi.
    document.querySelectorAll(".reveal, .stamp-target").forEach(function (el) {
      el.classList.add("is-in");
    });
    return;
  }

  // Reveal on scroll — sekali masuk, lepas observer.
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    document.querySelectorAll(".reveal, .stamp-target").forEach(function (el) {
      io.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal, .stamp-target").forEach(function (el) {
      el.classList.add("is-in");
    });
  }

  // Parallax ringan: hanya elemen [data-parallax], dibatasi ±60px.
  var parallaxEls = Array.prototype.slice.call(document.querySelectorAll("[data-parallax]"));
  if (parallaxEls.length && !reduceMotion.matches) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var y = window.scrollY || window.pageYOffset || 0;
        parallaxEls.forEach(function (el) {
          var speed = parseFloat(el.getAttribute("data-parallax")) || 0.12;
          var shift = Math.max(-60, Math.min(60, y * speed * -1 + 30));
          el.style.transform = "translateY(" + shift.toFixed(1) + "px)";
        });
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Ikuti perubahan preferensi secara live.
    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", function (e) {
        if (e.matches) {
          parallaxEls.forEach(function (el) {
            el.style.transform = "none";
          });
        }
      });
    }
  }
})();
