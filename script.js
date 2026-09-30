(function () {
  "use strict";

  /* ---------- MENU ---------- */
  var brandBox = document.getElementById("brandBox");
  var menu = document.getElementById("menu");

  function toggleMenu(force) {
    var open = typeof force === "boolean"
      ? force
      : !document.body.classList.contains("menu-open");
    document.body.classList.toggle("menu-open", open);
    menu.classList.toggle("open", open);
    menu.setAttribute("aria-hidden", open ? "false" : "true");
    document.body.style.overflow = open ? "hidden" : "";
  }

  brandBox.addEventListener("click", function () { toggleMenu(); });
  brandBox.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMenu();
    }
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { toggleMenu(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") toggleMenu(false);
  });

  /* ---------- PAGE DATA ---------- */
  var PAGES = {
    hair: {
      kicker: "Service", title: "Hair Studio", subtitle: "Cut, colour, gloss",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1600&q=80",
      body: "Our hair studio is a calm, light-filled space where precision meets ease. From sharp cuts to lived-in colour, every service is tailored to how you actually wear your hair.",
      highlights: ["Precision cuts", "Balayage & colour", "Keratin smoothing", "Scalp rituals"],
      price: "From $85"
    },
    skin: {
      kicker: "Service", title: "Skin Rituals", subtitle: "Facials that glow",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1600&q=80",
      body: "A facial at Maison Éclat is a slow, deliberate reset. We read your skin, then work with it — cleansing, exfoliating, hydrating and protecting with products chosen for the day you are having.",
      highlights: ["Deep cleanse facials", "Hydration therapy", "LED light therapy", "Bespoke masks"],
      price: "From $120"
    },
    nails: {
      kicker: "Service", title: "Nails & Makeup", subtitle: "Every detail",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
      body: "From a clean, considered manicure to a full makeup look for an evening, our nail and makeup artists work with a steady hand and a sharp eye for colour.",
      highlights: ["Gel & classic manicure", "Nail art", "Event makeup", "Bridal styling"],
      price: "From $60"
    },
    gloss: {
      kicker: "Treatment", title: "Signature Gloss", subtitle: "Mirror shine, zero weight",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
      body: "A translucent gloss that adds shine and tone without commitment. Perfect before an event or as a monthly refresh.",
      highlights: ["Ammonia-free", "Adds shine", "Tones brass", "60 minutes"],
      price: "$180"
    },
    cut: {
      kicker: "Treatment", title: "Precision Cut", subtitle: "Shape that grows out well",
      image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1600&q=80",
      body: "A cut built around your hair's natural fall and your daily routine. We finish with a style lesson so you can recreate it at home.",
      highlights: ["Consultation included", "Wash & style", "Product advice", "45–60 minutes"],
      price: "$85"
    },
    facial: {
      kicker: "Treatment", title: "Radiance Facial", subtitle: "Immediate glow",
      image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1600&q=80",
      body: "A results-driven facial that leaves skin plump, even and luminous. Includes lymphatic massage and a bespoke mask.",
      highlights: ["Double cleanse", "Enzyme peel", "Lymphatic massage", "75 minutes"],
      price: "$140"
    },
    kerastase: {
      kicker: "Brand", title: "Kérastase", subtitle: "Hair couture since 1964",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1600&q=80",
      body: "We stock the full Kérastase ritual range — from the iconic Elixir Ultime to the Specifique scalp line. Our stylists will match you to the right routine.",
      highlights: ["12 products in salon", "Personalised routine", "In-salon treatments"],
      price: "In-salon from $45"
    },
    olaplex: {
      kicker: "Brand", title: "Olaplex", subtitle: "Bond repair, proven",
      image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1600&q=80",
      body: "Every colour service at Maison Éclat includes an Olaplex bond-building step. It is the reason our clients can go lighter without the damage.",
      highlights: ["No.3 at home", "No.0 intensive", "In-salon No.1 & No.2"],
      price: "Add-on from $30"
    },
    oribe: {
      kicker: "Brand", title: "Oribe", subtitle: "Luxury haircare, backstage roots",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1600&q=80",
      body: "Born backstage at fashion week, Oribe is the line we reach for when hair needs to look effortless and hold all night.",
      highlights: ["Signature shampoo", "Dry texturising spray", "Gold Lust range"],
      price: "Retail from $38"
    },
    aesop: {
      kicker: "Brand", title: "Aesop", subtitle: "Botanical skin and body",
      image: "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1600&q=80",
      body: "Aesop's formulations are precise, plant-based and beautifully considered. We use them in our facials and stock the full range for home.",
      highlights: ["Parsley Seed range", "Resurrection hand balm", "Body cleansers"],
      price: "Retail from $25"
    },
    dyson: {
      kicker: "Brand", title: "Dyson", subtitle: "Pro styling tools",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1600&q=80",
      body: "Our styling stations are equipped with Dyson Supersonic and Airwrap. Less heat damage, more control, faster finishes.",
      highlights: ["Supersonic dryer", "Airwrap styler", "Corrale straightener"],
      price: "In salon use"
    },
    bader: {
      kicker: "Brand", title: "Augustinus Bader", subtitle: "Advanced skincare",
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1600&q=80",
      body: "The Cream and The Rich Cream are staples in our facial room. Powered by TFC8, they support skin's own repair.",
      highlights: ["The Cream", "The Rich Cream", "The Eye Cream"],
      price: "Retail from $85"
    },
    loreal: {
      kicker: "Brand", title: "L'Oréal Pro", subtitle: "Colour innovation",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
      body: "Our colourists use L'Oréal Professionnel for reliable, luminous results. The Majirel and Inoa lines are our workhorses.",
      highlights: ["Majirel colour", "Inoa ammonia-free", "Blond Studio"],
      price: "In-salon from $95"
    },
    policy: {
      kicker: "Information", title: "Booking Policy", subtitle: "How we hold your appointment",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80",
      body: "We ask for 24 hours notice to cancel or reschedule. A card is held to secure bookings over $150. Late cancellations may incur a 50% fee.",
      highlights: ["24h cancellation", "Card on file for large bookings", "Arrive 5 min early"],
      price: ""
    },
    terms: {
      kicker: "Information", title: "Terms of Use", subtitle: "The legal bits",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1600&q=80",
      body: "By booking with Maison Éclat you agree to our terms of service, privacy policy and cancellation policy. Full details available on request.",
      highlights: ["Privacy respected", "Data never sold", "Secure payments"],
      price: ""
    }
  };

  /* ---------- MODAL ---------- */
  var modal = document.getElementById("modal");
  var modalBody = document.getElementById("modalBody");

  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function renderPage(data) {
    return '<div class="page-view">' +
      '<div class="page-hero" style="background-image:url(\'' + data.image + '\')">' +
        '<div class="page-hero-grad"></div>' +
        '<div class="page-hero-copy">' +
          '<span class="page-kicker">' + (data.kicker || "Maison Éclat") + '</span>' +
          '<h1>' + data.title + '</h1>' +
          '<p>' + (data.subtitle || "") + '</p>' +
        '</div></div>' +
      '<div class="page-main">' +
        '<p class="page-lead">' + (data.body || "") + '</p>' +
        (data.highlights
          ? '<ul class="page-list">' +
            data.highlights.map(function (h) { return "<li>" + h + "</li>"; }).join("") +
            '</ul>'
          : "") +
        (data.price ? '<p class="page-price">' + data.price + '</p>' : "") +
        '<div class="page-actions">' +
          '<button class="btn-solid" data-book="' + data.title + '">Book This</button>' +
          '<button class="btn-ghost" data-close>Back</button>' +
        '</div></div></div>';
  }

  function renderBooking(service) {
    var services = ["Hair Studio", "Skin Rituals", "Nails & Makeup", "Signature Gloss", "Precision Cut", "Radiance Facial"];
    return '<div class="booking-view">' +
      '<div class="booking-head">' +
        '<span class="page-kicker">Reservation</span>' +
        '<h1>Book Your Visit</h1>' +
        '<p>' + (service ? "Selected: " + service : "Choose your ritual") + '</p>' +
      '</div>' +
      '<form class="booking-form" id="bookingForm">' +
        '<div class="field"><label>Full Name</label><input type="text" name="name" required placeholder="Your name"></div>' +
        '<div class="field"><label>Email</label><input type="email" name="email" required placeholder="you@email.com"></div>' +
        '<div class="field"><label>Phone</label><input type="tel" name="phone" placeholder="+33 ..."></div>' +
        '<div class="field"><label>Service</label><select name="service">' +
          services.map(function (s) {
            return "<option" + (s === service ? " selected" : "") + ">" + s + "</option>";
          }).join("") +
        '</select></div>' +
        '<div class="field-row">' +
          '<div class="field"><label>Date</label><input type="date" name="date" required></div>' +
          '<div class="field"><label>Time</label><input type="time" name="time" required></div>' +
        '</div>' +
        '<div class="field"><label>Notes</label><textarea name="notes" rows="3" placeholder="Anything we should know?"></textarea></div>' +
        '<button type="submit" class="btn-solid full">Confirm Booking</button>' +
      '</form></div>';
  }

  function openPage(key) {
    var data = PAGES[key];
    if (!data) return;
    modalBody.innerHTML = renderPage(data);
    openModal();
  }
  function openBooking(service) {
    modalBody.innerHTML = renderBooking(service);
    openModal();
  }

  document.addEventListener("click", function (e) {
    var pageEl = e.target.closest("[data-page]");
    if (pageEl) { e.preventDefault(); openPage(pageEl.dataset.page); return; }

    var bookEl = e.target.closest("[data-book]");
    if (bookEl) { e.preventDefault(); openBooking(bookEl.dataset.book); return; }

    var cta = e.target.closest("#ctaBook");
    if (cta) { e.preventDefault(); openBooking(); return; }

    var closeEl = e.target.closest("[data-close]");
    if (closeEl) { e.preventDefault(); closeModal(); return; }
  });

  document.addEventListener("submit", function (e) {
    if (e.target.id === "bookingForm") {
      e.preventDefault();
      var data = new FormData(e.target);
      modalBody.innerHTML = '<div class="booking-success">' +
        '<div class="success-icon">✓</div>' +
        '<h1>Thank you, ' + (data.get("name") || "friend") + '</h1>' +
        '<p>Your appointment request has been received. We will confirm by email shortly.</p>' +
        '<button class="btn-solid" data-close>Close</button></div>';
    }
  });

  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.classList.contains("modal-backdrop")) closeModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeModal();
  });

  /* ---------- REVEAL ---------- */
  var reveals = document.querySelectorAll(".reveal, .g-item");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------- CATEGORY ZOOM ---------- */
  var rows = document.querySelectorAll(".cat-row");
  if ("IntersectionObserver" in window) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        en.target.classList.toggle("in-view", en.isIntersecting);
      });
    }, { threshold: 0.25 });
    rows.forEach(function (r) { io2.observe(r); });
  } else {
    rows.forEach(function (r) { r.classList.add("in-view"); });
  }

})();