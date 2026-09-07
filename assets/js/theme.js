/* ==========================================================================
   Theme toggle — cycles system -> light -> dark and back.

   The initial resolution happens inline in <head> (see _includes/head/custom.html)
   so the page never flashes the wrong theme. This file only wires up the button.
   ========================================================================== */

(function () {
  "use strict";

  var MODES = ["system", "light", "dark"];
  var ICONS = { system: "fa-desktop", light: "fa-sun", dark: "fa-moon" };
  var LABELS = { system: "system", light: "light", dark: "dark" };

  var root = document.documentElement;
  var media = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;

  function currentMode() {
    var mode = root.getAttribute("data-theme-mode");
    return MODES.indexOf(mode) === -1 ? "system" : mode;
  }

  function resolve(mode) {
    if (mode === "dark") return "dark";
    if (mode === "light") return "light";
    return media && media.matches ? "dark" : "light";
  }

  function paint(button, mode) {
    root.setAttribute("data-theme-mode", mode);
    root.setAttribute("data-theme", resolve(mode));

    if (!button) return;
    var icon = button.querySelector("i");
    if (icon) icon.className = "fas " + ICONS[mode];
    button.setAttribute("title", "Theme: " + LABELS[mode]);
    button.setAttribute("aria-label", "Switch colour theme (currently " + LABELS[mode] + ")");
  }

  function store(mode) {
    try {
      window.localStorage.setItem("theme", mode);
    } catch (e) {
      /* storage blocked — the choice simply will not persist */
    }
  }

  function init() {
    var button = document.querySelector(".theme-toggle");
    paint(button, currentMode());
    if (!button) return;

    button.addEventListener("click", function () {
      var next = MODES[(MODES.indexOf(currentMode()) + 1) % MODES.length];

      /* Animate colours only for this transition, then drop the class again. */
      root.classList.add("theme-anim");
      window.setTimeout(function () {
        root.classList.remove("theme-anim");
      }, 400);

      paint(button, next);
      store(next);
    });

    /* Follow the OS while in "system" mode. */
    if (media) {
      var onChange = function () {
        if (currentMode() === "system") paint(button, "system");
      };
      if (media.addEventListener) media.addEventListener("change", onChange);
      else if (media.addListener) media.addListener(onChange);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
