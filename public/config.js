/* =============================================================
   POSTAL & COPY + (Postal and Copy Plus) — BUSINESS INFO
   Single source of truth. Everything on the site (header, contact,
   footer, hours, and Google's LocalBusiness data) reads from here.
   ============================================================= */
window.BUSINESS = {
  name: "Postal & Copy +",
  tagline: "Pack. Ship. Print. Notarize. All in one place — in Clarkston, WA.",

  // --- Contact ---
  phone: "(509) 758-0234",
  email: "", // No domain email yet. Add (e.g. info@postalandcopyplus.com) once
            // Cloudflare Email Routing / Google Workspace is set up — see README/plan Step 9.

  // --- Address ---
  street: "601 3rd Street",
  city: "Clarkston",
  state: "WA",
  zip: "99403",
  mapsQuery: "Postal & Copy +, 601 3rd St, Clarkston, WA 99403",

  // --- Hours (verified against Google Business Profile) ---
  hours: {
    Monday: "8:00 AM – 6:30 PM",
    Tuesday: "8:00 AM – 6:30 PM",
    Wednesday: "8:00 AM – 6:30 PM",
    Thursday: "8:00 AM – 6:30 PM",
    Friday: "8:00 AM – 4:00 PM",
    Saturday: "Closed",
    Sunday: "Closed",
  },

  // --- Services (verified from the owner's own description) ---
  services: [
    { icon: "ship",    title: "Shipping",            desc: "FedEx Authorized ShipCenter & USPS. Prelabeled UPS Ground drop-off too." },
    { icon: "box",     title: "Packing & Custom Boxes", desc: "We box your items, or build a custom-sized box on-site with our box builder." },
    { icon: "print",   title: "Printing & Copies",   desc: "Color/B&W copies, business cards, invitations, flyers & posters." },
    { icon: "banner",  title: "Banners & Blueprints", desc: "Wide-format printing up to 24\" banners, plus blueprint copies." },
    { icon: "notary",  title: "Free Notary",         desc: "Free notary public services — no appointment needed." },
    { icon: "mailbox", title: "Mailbox Rental",      desc: "Private mailbox rental with package acceptance." },
    { icon: "card",    title: "Lamination",          desc: "Laminating from wallet-size cards to large documents." },
    { icon: "fax",     title: "Fax & Scanning",      desc: "Send/receive faxes; scan documents to disk or email." },
  ],

  // --- Featured gifts (showcase, not e-commerce) ---
  gifts: {
    enabled: false, // flip to true after Vince confirms categories/photos (meeting Tue 6/30)
    heading: "More than shipping — a gift shop worth the stop",
    blurb: "Browse a full selection of unique, reasonably priced gifts while you're in — perfect for birthdays, holidays, and last-minute occasions.",
    // EDIT: replace with the owner's real categories (these are placeholders).
    categories: ["Greeting Cards", "Candles & Home", "Local & Handmade", "Toys & Novelties", "Jewelry & Accessories", "Seasonal & Holiday"],
    cta: "Come browse in store",
    photos: [], // later: [{ src: "/gifts/x.webp", alt: "..." }] renders a gallery
  },

  // --- Social (leave "" to hide) ---
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
};
