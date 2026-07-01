# Online Print Ordering — Recommendation for Postal & Copy +

**Prepared for:** Vince · **By:** Brian (KD70) · **Re:** postalandcopyplus.com

A simple way for customers to start a print order from the website — upload their file
and fill out the job ticket — that works *with* your PostalMate setup, not around it.

---

## What you asked for

From the website, a customer should be able to:

1. **Securely upload their print file** (a PDF).
2. **Fill out the job ticket** — the same details you capture on the paper ticket.
3. For **simpler jobs, pay online**; more complex jobs still get a quote from you first.

## Recommendation: JotForm for the online order form

**JotForm** is a hosted online-form service. We build your job ticket as an online form
and add an **"Order Printing Online"** button to postalandcopyplus.com. It handles the
secure file upload and the form — nothing new to install in the shop.

- **Secure file upload** — customers attach their PDF right in the form.
- **A form that mirrors your job ticket:** contact info; paper size, color/grayscale, media
  type/weight/color, quantity, single/double-sided, orientation; finishing (stapling, hole
  punch, creasing, perforation, lamination); binding (spiral / comb / saddle-stitch);
  trimming; and notes.
- **Every order comes to you** by email and in your JotForm inbox, with the file attached.

## How this fits with PostalMate

You already run **PostalMate** for point-of-sale, shipping, mailboxes, and card payments
(PostalMate Pay / Cayan / SignaPay). PostalMate doesn't have a customer-facing website form
for print jobs — that's exactly the gap the online form fills. The two work together:

- **JotForm = the online front door.** The customer submits the job and file from the website.
- **PostalMate = your system of record.** You produce the job and ring it up in PostalMate,
  the same way you would for a walk-in ticket.

The online form **feeds** PostalMate; it doesn't replace it.

## The one real decision: how to handle payment

Because your card processing lives in PostalMate, "pay online" is the one spot worth a choice:

**Option A — Intake only (recommended to start).** The website form collects the job, the
file, and all the ticket details — no payment online. You produce it and charge the customer
in **PostalMate** at pickup (or a card on file), exactly like today. Every payment stays in
PostalMate, so your reports and QuickBooks sync are untouched. Simplest and fastest to launch.

**Option B — Add online payment for set-price jobs.** For simple items with a known price
(e.g., a 24×36 poster = $20), the customer pays by card on the form through a JotForm-connected
processor (Square/Stripe/PayPal). More convenient and it locks in payment up front — but that's
a **separate** payment channel from PostalMate, so those charges won't automatically appear in
PostalMate/QuickBooks; you'd reconcile them. Best if you want true prepay on standard jobs.

Most shops **start with Option A** and add Option B later only if they want prepayment on
common items.

## What the customer experiences

1. Clicks **"Order Printing Online"** on the website.
2. Fills out the job ticket and attaches the PDF.
3. Submits the order (Option A) — or pays for a set-price job (Option B).
4. The order and file reach you; you produce it and ring it up in PostalMate.

## What it costs

- **JotForm plan:** free tier (about 100 submissions/month, small upload limit) up to paid
  plans (**~$34/month**) for more submissions, larger uploads, and more storage — chosen by
  your order volume and file sizes.
- **Only if you choose Option B:** card fees (roughly **2.9% + 30¢** per transaction) go to
  the processor you connect (Square/Stripe/PayPal) — separate from PostalMate.

## A few decisions for you

1. **Option A (intake only, charge in PostalMate) or Option B (add online payment)?**
2. If Option B: which processor to connect, and which jobs are "pay now" vs. "request a quote"?
3. **Where should order notifications go?** (Ties into setting up an `info@postalandcopyplus.com`
   email.)
4. **Include proof-approval or due-date fields** on the online ticket?

## What happens once you say go

- Brian builds the JotForm order form (your job ticket + file upload, plus payment if you pick
  Option B) in your JotForm account.
- Adds a clean **"Order Printing Online"** page and button to the website.
- Tests it end to end — a sample PDF upload (and a test payment if Option B) — then we launch.

## Worth a 5-minute call

Ask **PC Synergy** (PostalMate's maker) whether they offer any web-order or online add-on that
feeds PostalMate directly. If they do, that could be the most integrated option — though likely
more setup and cost than the JotForm approach. Either way, JotForm is a fast, low-risk way to
start taking online orders now.

## Alternatives, for the record

- **Full "web-to-print" software** (shopVOX, Printavo, PrintPLANR): online proofs, order-status
  tracking, invoicing — more powerful, but heavier to set up and more expensive. Revisit if
  online orders grow into real volume.
- **A fully custom-built system:** maximum control, no monthly form fee, but ongoing software we'd
  maintain and secure. Not where I'd start.

**Bottom line:** JotForm is the right front door for online orders and secure file upload;
PostalMate stays your system of record. Start **intake-only** to keep payments and books in
PostalMate, and add online payment later if you want prepay on standard jobs.
