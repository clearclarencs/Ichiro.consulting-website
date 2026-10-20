document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Repeat the logo set until it spans the viewport, then duplicate it so the
  // -50% translate loops seamlessly
  document.querySelectorAll(".marquee-track").forEach(function (track) {
    var originals = Array.prototype.slice.call(track.children);
    var append = function (items) {
      items.forEach(function (item) {
        var clone = item.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        track.appendChild(clone);
      });
    };
    while (track.scrollWidth < window.innerWidth) append(originals);
    append(Array.prototype.slice.call(track.children));
  });

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
