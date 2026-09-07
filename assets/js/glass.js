/* ==========================================================================
   Glass — progressive enhancements for the frosted-glass layer.

   Everything here is additive: with JavaScript off the page still renders
   completely, just without the spotlight, filters and reveal animation.
   ========================================================================== */

(function () {
  "use strict";

  var CARD_SELECTOR = ".hero, .paper-box, .profile_box, .intro-card";
  var reduceMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ----------------------------------------------------------------------
     Move the opening paragraphs of the page into the hero card.
     Without JavaScript they simply stay where the Markdown put them.
     ---------------------------------------------------------------------- */

  function placeIntro() {
    var content = document.querySelector(".page__content");
    if (!content) return;

    var firstHeading = content.querySelector("h1");
    if (!firstHeading) return;

    var nodes = [];
    var children = Array.prototype.slice.call(content.childNodes);

    for (var i = 0; i < children.length; i++) {
      var node = children[i];
      if (node === firstHeading) break;
      if (node.nodeType === 8) continue; /* comment */
      if (node.nodeType === 3 && !node.textContent.trim()) continue;
      /* Keep the scroll anchor where it is. Kramdown wraps a lone
         <span class="anchor"> in its own <p>, so check the wrapper too —
         moving it drags .anchor:before's -5em margin into the hero and
         pulls the bio up over the affiliation lines. */
      if (
        node.nodeType === 1 &&
        (node.className.indexOf("anchor") !== -1 ||
          (node.querySelector && node.querySelector(".anchor")))
      ) {
        continue;
      }
      nodes.push(node);
    }

    if (!nodes.length) return;

    var target = document.querySelector("[data-hero-bio]");

    if (!target) {
      /* No hero on this page — fall back to a standalone glass card. */
      target = document.createElement("div");
      target.className = "intro-card";
      nodes[0].parentNode.insertBefore(target, nodes[0]);
    }

    for (var j = 0; j < nodes.length; j++) {
      target.appendChild(nodes[j]);
    }
  }

  /* ----------------------------------------------------------------------
     Cursor spotlight on glass cards
     ---------------------------------------------------------------------- */

  function bindSpotlight() {
    if (reduceMotion) return;

    var cards = document.querySelectorAll(CARD_SELECTOR);

    Array.prototype.forEach.call(cards, function (card) {
      card.addEventListener("mousemove", function (event) {
        var rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        var x = ((event.clientX - rect.left) / rect.width) * 100;
        var y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", x.toFixed(2) + "%");
        card.style.setProperty("--my", y.toFixed(2) + "%");
      });
    });
  }

  /* ----------------------------------------------------------------------
     Turn each paper's "Paper | Code | Dataset" row into chips
     ---------------------------------------------------------------------- */

  function chipifyPaperLinks() {
    var paras = document.querySelectorAll(".paper-box-text p");

    Array.prototype.forEach.call(paras, function (para) {
      if (!para.getElementsByTagName("a").length) return;

      var text = "";
      var onlyLinks = true;
      var nodes = para.childNodes;

      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.nodeType === 3) {
          text += node.textContent;
        } else if (node.nodeType === 8) {
          continue;
        } else if (node.nodeType === 1 && node.tagName === "A") {
          continue;
        } else {
          onlyLinks = false;
          break;
        }
      }

      /* Only a row whose loose text is nothing but "|" separators qualifies. */
      if (!onlyLinks || !/^[\s|]*$/.test(text)) return;

      for (var j = para.childNodes.length - 1; j >= 0; j--) {
        var child = para.childNodes[j];
        if (child.nodeType === 3) para.removeChild(child);
      }

      para.className = para.className
        ? para.className + " paper-links"
        : "paper-links";
    });
  }

  /* ----------------------------------------------------------------------
     Drop the ":" / "," that separated the date from the text in Markdown —
     the date is now a pill, so the punctuation just reads as a typo.
     ---------------------------------------------------------------------- */

  function tidyTimelines() {
    var items = document.querySelectorAll(
      '[id="-news"] + ul > li'
    );

    Array.prototype.forEach.call(items, function (item) {
      var date = item.querySelector("em");
      if (!date) return;
      var next = date.nextSibling;
      if (next && next.nodeType === 3) {
        next.textContent = next.textContent.replace(
          /^[\s\u00a0]*[:\uff1a,\uff0c][\s\u00a0]*/,
          " "
        );
      }
    });
  }

  /* ----------------------------------------------------------------------
     Venue filter chips, derived from the badge on each paper card
     ---------------------------------------------------------------------- */

  function buildPublicationFilter() {
    var heading = document.getElementById("-publications");
    if (!heading) return;

    var boxes = document.querySelectorAll(".paper-box");
    if (boxes.length < 3) return;

    var order = [];
    var seen = {};

    Array.prototype.forEach.call(boxes, function (box) {
      var badge = box.querySelector(".badge");
      var label = badge ? badge.textContent.trim() : "";
      box.setAttribute("data-venue", label);
      if (label && !seen[label]) {
        seen[label] = true;
        order.push(label);
      }
    });

    if (order.length < 2) return;

    var bar = document.createElement("div");
    bar.className = "pub-filter";

    var chips = [];

    function select(value) {
      chips.forEach(function (chip) {
        var active = chip.getAttribute("data-value") === value;
        if (active) chip.classList.add("is-active");
        else chip.classList.remove("is-active");
        chip.setAttribute("aria-pressed", active ? "true" : "false");
      });

      Array.prototype.forEach.call(boxes, function (box) {
        var match = value === "*" || box.getAttribute("data-venue") === value;
        if (match) {
          box.classList.remove("is-filtered-out");
          /* A card revealed by filtering must not stay stuck at opacity 0. */
          box.classList.add("is-visible");
        } else {
          box.classList.add("is-filtered-out");
        }
      });
    }

    function addChip(label, value) {
      var chip = document.createElement("button");
      chip.type = "button";
      chip.className = "pub-filter__chip";
      chip.textContent = label;
      chip.setAttribute("data-value", value);
      chip.setAttribute("aria-pressed", "false");
      chip.addEventListener("click", function () {
        select(value);
      });
      bar.appendChild(chip);
      chips.push(chip);
    }

    addChip("All", "*");
    order.forEach(function (label) {
      addChip(label, label);
    });

    /* Insert just above the first paper card. */
    boxes[0].parentNode.insertBefore(bar, boxes[0]);
    select("*");
  }

  /* ----------------------------------------------------------------------
     Paper cover videos: play at 2x only while on screen.
     Reduced-motion visitors keep the poster frame.
     ---------------------------------------------------------------------- */

  function bindPaperVideos() {
    var videos = document.querySelectorAll(".paper-media");
    if (!videos.length) return;

    var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var states = [];

    Array.prototype.forEach.call(videos, function (video) {
      var state = { video: video, visible: false, timer: null, time: 0 };
      states.push(state);
      video.muted = true;
      video.loop = true;
      video.preload = "none";
      video.defaultPlaybackRate = 2;
      video.playbackRate = 2;

      function shouldPlay() {
        return state.visible && !document.hidden && !motion.matches;
      }

      state.sync = function () {
        if (!shouldPlay()) {
          window.clearTimeout(state.timer);
          state.timer = null;
          video.pause();
          if (video.hasAttribute("src")) {
            if (video.readyState >= 1) state.time = video.currentTime;
            // Detach to stop buffering and decoding outside the viewport.
            video.removeAttribute("src");
            video.load();
          }
          return;
        }
        if (state.timer !== null || video.hasAttribute("src")) return;
        // Skip cards that only pass through the viewport during a fast scroll.
        state.timer = window.setTimeout(function () {
          state.timer = null;
          if (!shouldPlay() || !video.dataset.src) return;
          video.src = video.dataset.src;
          var played = video.play();
          if (played && played.catch) played.catch(function () {});
        }, 200);
      };

      video.addEventListener("loadedmetadata", function () {
        if (!shouldPlay()) return;
        video.playbackRate = 2;
        if (state.time > 0 && isFinite(video.duration)) {
          video.currentTime = state.time % video.duration;
        }
      });

      if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            state.visible = entry.isIntersecting && entry.intersectionRatio >= 0.25;
            state.sync();
          });
        }, { threshold: [0, 0.25] });
        observer.observe(video);
      }
    });

    function syncAll() {
      states.forEach(function (state) { state.sync(); });
    }
    document.addEventListener("visibilitychange", syncAll);
    if (motion.addEventListener) motion.addEventListener("change", syncAll);
  }

  /* ----------------------------------------------------------------------
     Reveal on scroll
     ---------------------------------------------------------------------- */

  function bindReveal() {
    if (reduceMotion || !("IntersectionObserver" in window)) return;

    var targets = [];

    function collect(selector, stagger) {
      var found = document.querySelectorAll(selector);
      Array.prototype.forEach.call(found, function (el, index) {
        el.classList.add("reveal");
        if (stagger) {
          el.style.transitionDelay = Math.min(index * 60, 360) + "ms";
        }
        targets.push(el);
      });
    }

    collect(".intro-card", false);
    collect(".paper-box", false);
    collect('[id="-news"] + ul > li', true);

    if (!targets.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------------------
     Masthead state, scroll spy and back-to-top
     ---------------------------------------------------------------------- */

  function bindScroll() {
    var masthead = document.querySelector(".masthead");
    var toTop = document.querySelector(".to-top");
    var links = document.querySelectorAll(
      ".greedy-nav .visible-links li:not(.masthead__menu-home-item) a"
    );

    var sections = [];
    ["about-me", "research", "-news", "-publications", "educations", "collaborators"].forEach(
      function (id) {
        var el = document.getElementById(id);
        if (el) sections.push({ id: id, el: el });
      }
    );

    function hashOf(link) {
      var href = link.getAttribute("href") || "";
      var index = href.indexOf("#");
      return index === -1 ? "" : href.slice(index + 1);
    }

    function activate(id) {
      Array.prototype.forEach.call(links, function (link) {
        if (hashOf(link) === id) link.classList.add("is-active");
        else link.classList.remove("is-active");
      });
    }

    var ticking = false;

    function update() {
      ticking = false;
      var y = window.pageYOffset || document.documentElement.scrollTop;

      if (masthead) {
        if (y > 12) masthead.classList.add("masthead--scrolled");
        else masthead.classList.remove("masthead--scrolled");
      }

      if (toTop) {
        if (y > 420) toTop.classList.add("is-visible");
        else toTop.classList.remove("is-visible");
      }

      if (!sections.length) return;

      var offset = (masthead ? masthead.offsetHeight : 0) + 28;
      var current = sections[0].id;
      var atBottom =
        window.innerHeight + y >= document.body.offsetHeight - 4;

      if (atBottom) {
        current = sections[sections.length - 1].id;
      } else {
        for (var i = 0; i < sections.length; i++) {
          if (sections[i].el.getBoundingClientRect().top <= offset) {
            current = sections[i].id;
          }
        }
      }

      activate(current);
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame
        ? window.requestAnimationFrame(update)
        : window.setTimeout(update, 16);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    if (toTop) {
      toTop.addEventListener("click", function () {
        if (reduceMotion || !("scrollBehavior" in document.documentElement.style)) {
          window.scrollTo(0, 0);
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    }
  }

  /* ---------------------------------------------------------------------- */

  function init() {
    placeIntro();
    tidyTimelines();
    chipifyPaperLinks();
    buildPublicationFilter();
    bindSpotlight();
    bindPaperVideos();
    bindReveal();
    bindScroll();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
