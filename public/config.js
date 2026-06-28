/* =============================================================
   POSTAL AND COPY PLUS — BUSINESS INFO (single source of truth)
   Edit the values below. Everything on the site (header, contact
   section, footer, and Google's LocalBusiness data) reads from here.
   Placeholders are wrapped in « » — replace each one.
   ============================================================= */
window.BUSINESS = {
  name: "Postal and Copy Plus",
  tagline: "Pack. Ship. Print. Notarize. All in one place.",

  // --- Contact ---
  phone: "«(000) 000-0000»",        // e.g. "(281) 494-0018"
  email: "«info@postalandcopyplus.com»",

  // --- Address ---
  street: "«123 Main Street, Suite 000»",
  city: "«City»",
  state: "«ST»",
  zip: "«00000»",
  // Google Maps embed: paste the place's share URL or leave to use an address search.
  mapsQuery: "«Postal and Copy Plus, City, ST»",

  // --- Hours (use "Closed" where applicable) ---
  hours: {
    Monday: "9:00 AM – 6:00 PM",
    Tuesday: "9:00 AM – 6:00 PM",
    Wednesday: "9:00 AM – 6:00 PM",
    Thursday: "9:00 AM – 6:00 PM",
    Friday: "9:00 AM – 6:00 PM",
    Saturday: "10:00 AM – 2:00 PM",
    Sunday: "Closed",
  },

  // --- Services (remove any that don't apply, add your own) ---
  services: [
    { icon: "ship",    title: "Shipping",        desc: "USPS, UPS, FedEx & DHL — domestic and international." },
    { icon: "box",     title: "Packing Supplies", desc: "Boxes, packaging, tape & custom packing for fragile items." },
    { icon: "print",   title: "Printing & Copies", desc: "Color & B/W copies, banners, binding, lamination." },
    { icon: "notary",  title: "Notary Public",    desc: "On-site notary services — no appointment needed." },
    { icon: "mailbox", title: "Mailbox Rental",   desc: "Private mailboxes with package acceptance & alerts." },
    { icon: "passport",title: "Passport Photos",  desc: "Compliant passport & ID photos while you wait." },
    { icon: "fax",     title: "Fax & Scan",       desc: "Send/receive faxes and scan documents to email." },
    { icon: "stamp",   title: "Stamps & Mail",    desc: "Postage stamps, money orders & mail services." },
  ],

  // --- Social (leave "" to hide) ---
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },

  // --- Year is auto-filled in the footer ---
};
