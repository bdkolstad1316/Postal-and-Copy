/* Populates the page from window.BUSINESS and injects LocalBusiness JSON-LD. */
(function () {
  var B = window.BUSINESS || {};

  // --- Icons (inline SVG, currentColor) ---
  var ICONS = {
    ship: '<path d="M3 13h18l-2 6H5l-2-6Z"/><path d="M12 13V4M8 7h8"/>',
    box: '<path d="M21 8 12 3 3 8l9 5 9-5Z"/><path d="M3 8v8l9 5 9-5V8"/><path d="M12 13v8"/>',
    print: '<path d="M6 9V3h12v6"/><rect x="4" y="9" width="16" height="8" rx="1"/><path d="M8 17h8v4H8z"/>',
    notary: '<path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4Z"/><path d="m9 12 2 2 4-4"/>',
    mailbox: '<path d="M4 8h12a4 4 0 0 1 4 4v6H4V8Z"/><path d="M8 8V5h6M8 13h4"/>',
    passport: '<rect x="5" y="3" width="14" height="18" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/>',
    fax: '<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="9" rx="1"/><path d="M7 13h2"/>',
    stamp: '<path d="M5 21h14M7 21v-4h10v4M9 9a3 3 0 1 1 6 0c0 2-2 2-2 4h-2c0-2-2-2-2-4Z"/>',
    banner: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 16 5-4 4 3 3-2 6 4"/><circle cx="8.5" cy="9.5" r="1.5"/>',
    card: '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M3 10h18"/><path d="M7 14h5"/>',
    gift: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8C9 8 7.5 6.5 8 5s3 0 4 3c1-3 3.5-4.5 4-3S15 8 12 8Z"/>',
  };

  function setText(field, value) {
    document.querySelectorAll('[data-field="' + field + '"]').forEach(function (el) {
      el.textContent = value;
    });
  }
  function setHref(field, value) {
    document.querySelectorAll('[data-field="' + field + '"]').forEach(function (el) {
      el.setAttribute("href", value);
    });
  }

  var telHref = "tel:" + (B.phone || "").replace(/[^0-9+]/g, "");
  var mailHref = "mailto:" + (B.email || "");
  var cityLine = [B.city, B.state].filter(Boolean).join(", ") + " " + (B.zip || "");
  var mapsUrl = "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(B.mapsQuery || [B.name, B.street, B.city, B.state].filter(Boolean).join(" "));

  // Simple text fields
  setText("name", B.name);
  setText("tagline", B.tagline);
  setText("phone", B.phone);
  setText("email", B.email);
  setText("street", B.street);
  setText("cityline", cityLine.trim());
  setText("cityline2", [B.city, B.state].filter(Boolean).join(", "));

  // Links
  ["phoneLink", "phoneLink2", "phoneLink3"].forEach(function (f) { setHref(f, telHref); });
  ["directions", "directions2"].forEach(function (f) { setHref(f, mapsUrl); });
  // The hours-block phone link shows the number as its own text.
  document.querySelectorAll('[data-field="phoneLink2"]').forEach(function (el) {
    el.textContent = B.phone;
  });

  // Email is optional — wire it up if present, otherwise remove the email UI.
  if (B.email) {
    ["emailLink", "emailLink2"].forEach(function (f) { setHref(f, mailHref); });
  } else {
    ["email-line", "email-card"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.remove();
    });
  }
  // Visible phone text inside the header/contact phone links
  document.querySelectorAll('[data-field="phoneLink"]').forEach(function (el) {
    if (el.classList.contains("btn-phone")) el.textContent = B.phone || "Call Us";
  });

  // Services grid
  var grid = document.getElementById("services-grid");
  if (grid && Array.isArray(B.services)) {
    grid.innerHTML = B.services.map(function (s) {
      var icon = ICONS[s.icon] || ICONS.box;
      return '<article class="service-card">' +
        '<span class="service-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + icon + '</svg></span>' +
        '<h3>' + s.title + '</h3><p>' + s.desc + '</p></article>';
    }).join("");
  }

  // Hours table
  var hoursBody = document.querySelector("#hours-table tbody");
  if (hoursBody && B.hours) {
    var today = new Date().toLocaleDateString("en-US", { weekday: "long" });
    hoursBody.innerHTML = Object.keys(B.hours).map(function (day) {
      var closed = /closed/i.test(B.hours[day]);
      var isToday = day === today;
      return '<tr' + (isToday ? ' class="today"' : "") + '><th scope="row">' + day +
        (isToday ? ' <span class="today-tag">Today</span>' : "") + '</th>' +
        '<td' + (closed ? ' class="closed"' : "") + '>' + B.hours[day] + "</td></tr>";
    }).join("");
  }

  // Map iframe (lazy: only set src after defining it to avoid about:blank cost)
  var map = document.getElementById("map");
  if (map) {
    map.src = "https://www.google.com/maps?q=" +
      encodeURIComponent(B.mapsQuery || [B.name, B.city, B.state].filter(Boolean).join(" ")) +
      "&output=embed";
  }

  // Real shop photos under the services grid
  var sp = document.getElementById("service-photos");
  if (sp && Array.isArray(B.servicePhotos)) {
    sp.innerHTML = B.servicePhotos.map(function (p) {
      return '<figure class="service-photo">' +
        '<img loading="lazy" src="' + p.src + '" alt="' + (p.alt || "") + '" />' +
        '<figcaption>' + (p.caption || "") + "</figcaption></figure>";
    }).join("");
  }

  // Featured gifts section (gated by config.gifts.enabled; section + nav link are
  // hidden in the markup by default and revealed only when enabled).
  var G = B.gifts;
  if (G && G.enabled) {
    var giftsSec = document.getElementById("gifts");
    if (giftsSec) giftsSec.removeAttribute("hidden");
    var giftsNav = document.querySelector('#primary-nav a[href="#gifts"]');
    if (giftsNav) giftsNav.removeAttribute("hidden");
    setText("giftsHeading", G.heading);
    setText("giftsBlurb", G.blurb);
    var chips = document.getElementById("gifts-chips");
    if (chips && Array.isArray(G.categories)) {
      chips.innerHTML = G.categories.map(function (c) {
        return '<li class="gift-chip">' + c + "</li>";
      }).join("");
    }
    var gd = document.getElementById("gifts-directions");
    if (gd) { gd.setAttribute("href", mapsUrl); if (G.cta) gd.textContent = G.cta; }
    var gc = document.getElementById("gifts-call");
    if (gc) gc.setAttribute("href", telHref);
    // Photo-ready: when real photos are added to config, render a gallery above the chips.
    if (chips && Array.isArray(G.photos) && G.photos.length) {
      var gallery = document.createElement("div");
      gallery.className = "gifts-gallery";
      gallery.innerHTML = G.photos.map(function (p) {
        return '<img loading="lazy" src="' + p.src + '" alt="' + (p.alt || "") + '" />';
      }).join("");
      chips.parentNode.insertBefore(gallery, chips);
    }
  }

  // Mobile nav toggle (hamburger)
  var navToggle = document.querySelector(".nav-toggle");
  var primaryNav = document.getElementById("primary-nav");
  if (navToggle && primaryNav) {
    navToggle.addEventListener("click", function () {
      var open = primaryNav.classList.toggle("nav--open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    // Close the menu after tapping a link.
    primaryNav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        primaryNav.classList.remove("nav--open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Open menu");
      }
    });
  }

  // Logo click returns to top (header is sticky, so #top hash-nav is unreliable)
  var brand = document.querySelector(".brand");
  if (brand) {
    brand.addEventListener("click", function (e) {
      e.preventDefault();
      var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      if (primaryNav) {
        primaryNav.classList.remove("nav--open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Footer year + social
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  var social = document.getElementById("footer-social");
  if (social && B.social) {
    var labels = { facebook: "Facebook", instagram: "Instagram", google: "Google" };
    social.innerHTML = Object.keys(B.social).filter(function (k) { return B.social[k]; })
      .map(function (k) {
        return '<a href="' + B.social[k] + '" target="_blank" rel="noopener">' + (labels[k] || k) + "</a>";
      }).join("");
  }

  // LocalBusiness structured data for SEO / AI assistants
  var schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: B.name,
    description: B.tagline,
    telephone: B.phone,
    email: B.email,
    url: "https://www.postalandcopyplus.com/",
    address: {
      "@type": "PostalAddress",
      streetAddress: B.street,
      addressLocality: B.city,
      addressRegion: B.state,
      postalCode: B.zip,
      addressCountry: "US",
    },
    openingHoursSpecification: Object.keys(B.hours || {}).map(function (day) {
      if (/closed/i.test(B.hours[day])) return null;
      var parts = B.hours[day].split("–").map(function (x) { return x.trim(); });
      return { "@type": "OpeningHoursSpecification", dayOfWeek: day, opens: parts[0], closes: parts[1] };
    }).filter(Boolean),
  };
  if (!schema.email) delete schema.email;
  var ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify(schema);
  document.head.appendChild(ld);
})();
