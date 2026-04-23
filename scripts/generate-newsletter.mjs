#!/usr/bin/env node
/**
 * Newsletter generation script.
 *
 * Usage:
 *   node scripts/generate-newsletter.mjs 2026-05
 *
 * Reads:  ~/Documents/Last30Days/newsletter-migdalor-{YYYY-MM}.json
 * Writes: src/app/metataplim/gliyon/{slug}/page.tsx
 *         src/data/drafts.ts  (prepends new draft)
 *
 * Then sends Inbal an email via Resend (needs RESEND_API_KEY in env or .env.local).
 */

import fs from "fs";
import path from "path";
import os from "os";
import { fileURLToPath } from "url";

// ─── Helpers ───────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

function loadEnv() {
  const envPath = path.join(ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, "utf-8").split("\n")) {
    const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const MONTH_EN = ["january","february","march","april","may","june","july","august","september","october","november","december"];
const MONTH_HE = ["ינואר","פברואר","מרץ","אפריל","מאי","יוני","יולי","אוגוסט","ספטמבר","אוקטובר","נובמבר","דצמבר"];

function parseYYYYMM(arg) {
  const m = /^(\d{4})-(\d{2})$/.exec(arg);
  if (!m) throw new Error(`Bad date format: "${arg}" — expected YYYY-MM`);
  return { year: parseInt(m[1]), month: parseInt(m[2]) };
}

// Accent palette cycling by (num - 1) % 3
const ACCENTS = [
  { accent: "#c9a97a", tagBg: "#FDF3E0", tagColor: "#9B7020" },
  { accent: "#8faa8b", tagBg: "#EFF6EE", tagColor: "#4a7a45" },
  { accent: "#b08a9a", tagBg: "#F9EEF4", tagColor: "#7a4060" },
];

function escapeTsx(str) {
  return str
    .replace(/\\/g, "\\\\")
    .replace(/`/g, "\\`")
    .replace(/\$/g, "\\$");
}

// ─── Page generator ────────────────────────────────────────────────────────

function buildPageTsx({ slug, yearNum, monthNum, data }) {
  const monthHe = MONTH_HE[monthNum - 1];
  const yearStr = String(yearNum);
  const { findings, tip, intro } = data;

  const mainFindings = findings.slice(0, 3);
  const gridItems = findings.slice(3);

  const findingsArray = mainFindings
    .map((f, i) => {
      const { accent, tagBg, tagColor } = ACCENTS[(i) % 3];
      return `  {
    num: "${f.num}",
    tag: "${f.tag.replace(/"/g, '\\"')}",
    title: "${f.title.replace(/"/g, '\\"')}",
    body: "${f.body.replace(/"/g, '\\"')}",
    source: "${f.source.replace(/"/g, '\\"')}",
    sourceUrl: "${f.sourceUrl}",
    accent: "${accent}",
    tagBg: "${tagBg}",
    tagColor: "${tagColor}",
  }`;
    })
    .join(",\n");

  const gridArray = gridItems
    .map((f) => {
      return `  {
    num: "${f.num}",
    tag: "${f.tag.replace(/"/g, '\\"')}",
    title: "${f.title.replace(/"/g, '\\"')}",
    body: "${f.body.replace(/"/g, '\\"')}",
    source: "${f.source.replace(/"/g, '\\"')}",
    sourceUrl: "${f.sourceUrl}",
  }`;
    })
    .join(",\n");

  const tipTitle = tip?.title ?? "כלי חודשי";
  const tipText = tip?.text ?? "";

  return `import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "ניוזלטר מגדלור — ${monthHe} ${yearStr}",
  description: "גיליון ${monthHe} ${yearStr}: ${mainFindings[0]?.title ?? ""}",
};

const findings = [
${findingsArray}
];

${gridItems.length > 0 ? `const gridItems = [\n${gridArray}\n];\n` : ""}
export default function NewsletterPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-[#f0ebe0] font-sans">

      {/* ── Header ── */}
      <header className="bg-[#3d2b1a] text-center px-6 py-8">
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="מגדלור" width={64} height={64} className="object-contain" />
        </div>
        <h1 className="text-3xl font-bold text-[#e8d5b0] mb-1 tracking-wide">מגדלור</h1>
        <p className="text-[#c9a97a] text-sm">ניוזלטר חודשי | מגדלור למטפלים</p>
        <div className="flex justify-center gap-5 mt-4 text-xs text-[#c9a97a]/60 border-t border-[#c9a97a]/15 pt-4">
          <span>ליווי רוחני</span>
          <span>·</span>
          <span>Play Therapy</span>
          <span>·</span>
          <span>${monthHe} ${yearStr}</span>
        </div>
      </header>

      {/* ── Body ── */}
      <main className="max-w-[620px] mx-auto px-5 py-10 space-y-6">

        {/* Tagline */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
          <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-2">ליווי רוחני ו-Play Therapy — מה חדש בשדה</p>
          <p className="text-[#5a4a38] text-sm leading-relaxed">${intro.replace(/'/g, "\\'")}</p>
        </section>

        {/* Main findings */}
        {findings.map(({ num, tag, title, body, source, accent, tagBg, tagColor }) => (
          <section key={num}>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-0.5 w-6 rounded-full" style={{ backgroundColor: accent }} />
              <span className="text-xs font-bold uppercase tracking-widest" style={{ color: accent }}>
                ממצא {num}
              </span>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e0d0b8]">
              <span
                className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-3"
                style={{ background: tagBg, color: tagColor }}
              >
                {tag}
              </span>
              <h2 className="text-[#3d2b1a] font-bold text-base mb-3 leading-snug">{title}</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed mb-3">{body}</p>
              <div className="border-t border-dashed border-[#e0d0b8] pt-3 mt-1">
                <p className="text-[#c9a97a] text-xs">{source}</p>
              </div>
            </div>
          </section>
        ))}
${gridItems.length > 0 ? `
        {/* Grid: additional findings */}
        <section>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-0.5 w-6 bg-[#c9a97a] rounded-full" />
            <span className="text-xs font-bold text-[#c9a97a] uppercase tracking-widest">ממצאים נוספים</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gridItems.map(({ num, tag, title, body, source }) => (
              <div key={num} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e0d0b8]">
                <div className="text-3xl font-black text-[#e8d5b0] leading-none mb-2">{num}</div>
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded mb-2 bg-[#FDF3E0] text-[#9B7020]">
                  {tag}
                </span>
                <h3 className="text-[#3d2b1a] font-bold text-sm mb-2 leading-snug">{title}</h3>
                <p className="text-[#5a4a38] text-xs leading-relaxed mb-2">{body}</p>
                <div className="border-t border-dashed border-[#e0d0b8] pt-2">
                  <p className="text-[#c9a97a] text-[11px]">{source}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
` : ""}
        {/* Tip of the month */}
        <section className="overflow-hidden rounded-2xl shadow-sm border border-[#e0d0b8]">
          <div className="flex">
            <div className="w-2 shrink-0" style={{ background: "linear-gradient(to bottom, #c8922a, #8B6914)" }} />
            <div className="bg-[#fffdf7] px-6 py-6 flex-1">
              <p className="text-[#c9a97a] text-xs font-bold tracking-widest uppercase mb-3">כלי חודשי</p>
              <h2 className="text-[#3d2b1a] font-bold text-lg mb-3 leading-snug">${tipTitle.replace(/'/g, "\\'")}</h2>
              <p className="text-[#5a4a38] text-sm leading-relaxed">${tipText.replace(/'/g, "\\'")}</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#3d2b1a] rounded-2xl p-7 text-center">
          <p className="text-[#c9a97a] text-xs tracking-widest uppercase mb-2">שאלות? ממצא שמהדהד?</p>
          <p className="text-[#e8d5b0] font-bold text-base mb-1">ענבל ליבר</p>
          <p className="text-[#c9a97a]/70 text-xs mb-5 leading-relaxed">
            מטפלת ראשית · Play Therapy · ליווי רוחני · הכשרות מורים
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:0545524516"
              className="inline-block bg-[#c9a97a] hover:bg-[#e8d5b0] text-[#3d2b1a] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200">
              054-552-4516
            </a>
            <Link href="/metataplim"
              className="inline-block border border-[#c9a97a]/50 hover:border-[#c9a97a] text-[#c9a97a] hover:text-[#e8d5b0] font-bold text-sm px-6 py-3 rounded-full transition-colors duration-200">
              הצטרפי לניוזלטר
            </Link>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#3d2b1a] text-center px-6 py-8 mt-4">
        <div className="flex justify-center mb-3">
          <Image src="/logo.png" alt="מגדלור" width={40} height={40} className="object-contain opacity-80" />
        </div>
        <p className="text-[#e8d5b0] font-bold text-sm mb-1">ענבל ליבר | קליניקת מגדלור</p>
        <div className="flex justify-center gap-3 text-xs text-[#c9a97a]/60 mt-2">
          <a href="mailto:inbal@liber.co.il" className="hover:text-[#c9a97a] transition-colors">inbal@liber.co.il</a>
          <span>·</span>
          <a href="https://migdalor.me" className="hover:text-[#c9a97a] transition-colors">migdalor.me</a>
        </div>
        <p className="text-[#c9a97a]/30 text-xs mt-4">
          מגדלור — ניוזלטר חודשי למטפלים · להסרה — השיבי &quot;הסר&quot; לאחת ההודעות
        </p>
      </footer>
    </div>
  );
}
`;
}

// ─── drafts.ts updater ─────────────────────────────────────────────────────

function buildDraftEntry({ slug, monthHe, yearStr, data }) {
  const { emailSubject, intro, teasers } = data;
  const subject = emailSubject ?? `מגדלור | גיליון ${monthHe} ${yearStr}`;
  const introText = intro ?? "";
  const teaserList = (teasers ?? data.findings.slice(0, 3).map((f) => f.title));

  const teasersStr = teaserList
    .map((t) => `      "${t.replace(/"/g, '\\"')}"`)
    .join(",\n");

  const findingsStr = data.findings
    .map((f) => `      { title: "${f.title.replace(/"/g, '\\"')}", source: "${f.source.replace(/"/g, '\\"')}", sourceUrl: "${f.sourceUrl}" }`)
    .join(",\n");

  return `  {
    id: "${slug}",
    date: "${monthHe} ${yearStr}",
    title: "${(data.findings[0]?.title ?? "").replace(/"/g, '\\"')}",
    emailSubject: "${subject.replace(/"/g, '\\"')}",
    intro: "${introText.replace(/"/g, '\\"')}",
    teasers: [
${teasersStr}
    ],
    findings: [
${findingsStr}
    ],
    newsletterUrl: "/metataplim/gliyon/${slug}",
    createdAt: "${new Date().toISOString()}",
  }`;
}

function updateDraftsTs(draftEntry) {
  const draftsPath = path.join(ROOT, "src", "data", "drafts.ts");
  let content = fs.readFileSync(draftsPath, "utf-8");

  // Find the opening bracket of the drafts array
  const marker = "const drafts: NewsletterDraft[] = [";
  const markerIdx = content.indexOf(marker);
  if (markerIdx === -1) throw new Error("Could not find drafts array in drafts.ts");

  // insertAt points right after the "["
  const insertAt = markerIdx + marker.length;
  const before = content.slice(0, insertAt);
  // Strip any leading newline already present so we don't double-space
  const after = content.slice(insertAt).replace(/^\n/, "");

  const isEmpty = after.trimStart().startsWith("]");
  if (isEmpty) {
    content = before + "\n" + draftEntry + ",\n" + after;
  } else {
    content = before + "\n" + draftEntry + ",\n" + after;
  }

  fs.writeFileSync(draftsPath, content, "utf-8");
  console.log("✓ Updated src/data/drafts.ts");
}

// ─── Email notification ────────────────────────────────────────────────────

async function sendNotification({ slug, monthHe, yearStr, data }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("⚠  RESEND_API_KEY not set — skipping email notification");
    return;
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://migdalor.me";
  const adminUrl = `${baseUrl}/admin/gliyon/${slug}`;
  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const adminEmail = process.env.ADMIN_EMAIL ?? "liber.ofir@gmail.com";
  const teaserLines = (data.teasers ?? data.findings.slice(0, 3).map((f) => f.title))
    .map((t) => `<li style="padding:3px 0;color:#4a3020;">${t}</li>`)
    .join("");

  await resend.emails.send({
    from: "מגדלור Admin <inbal@liber.co.il>",
    to: adminEmail,
    subject: `[מגדלור] גיליון ${monthHe} ${yearStr} מוכן לבדיקה`,
    html: `
      <div dir="rtl" style="font-family:sans-serif;max-width:480px;color:#333;">
        <div style="background:#3d2b1a;padding:24px 28px;border-radius:8px 8px 0 0;">
          <p style="color:#c9a97a;font-size:11px;letter-spacing:2px;margin:0 0 4px;">מגדלור למטפלים</p>
          <h2 style="color:#e8d5b0;font-size:20px;margin:0;">גיליון ${monthHe} ${yearStr} מוכן לבדיקה</h2>
        </div>
        <div style="background:#fff;padding:28px;border-radius:0 0 8px 8px;border:1px solid #e0d0b8;border-top:none;">
          <p style="color:#5a3e1b;margin:0 0 16px;">הגיליון החודשי הופק ומחכה לאישורך.</p>
          <p style="font-weight:bold;color:#3d2b1a;margin:0 0 8px;">הנושאים בגיליון:</p>
          <ul style="padding-right:20px;margin:0 0 20px;">${teaserLines}</ul>
          <div style="text-align:center;">
            <a href="${adminUrl}"
               style="display:inline-block;background:#c9a97a;color:#3d2b1a;font-weight:bold;
                      font-size:15px;padding:14px 32px;border-radius:50px;text-decoration:none;">
              לבדיקה ואישור הגיליון
            </a>
          </div>
        </div>
      </div>
    `,
  });

  console.log(`✓ Email sent to ${adminEmail}`);
}

// ─── Main ──────────────────────────────────────────────────────────────────

async function main() {
  loadEnv();

  const arg = process.argv[2];
  if (!arg) {
    console.error("Usage: node scripts/generate-newsletter.mjs YYYY-MM");
    process.exit(1);
  }

  const { year, month } = parseYYYYMM(arg);
  const monthIdx = month - 1;
  const slug = `${MONTH_EN[monthIdx]}-${year}`;
  const monthHe = MONTH_HE[monthIdx];
  const yearStr = String(year);

  // Read JSON
  const jsonPath = path.join(os.homedir(), "Documents", "Last30Days", `newsletter-migdalor-${arg}.json`);
  if (!fs.existsSync(jsonPath)) {
    console.error(`JSON file not found: ${jsonPath}`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  console.log(`✓ Read JSON: ${jsonPath} (${data.findings.length} findings)`);

  // Create page directory
  const pageDir = path.join(ROOT, "src", "app", "metataplim", "gliyon", slug);
  fs.mkdirSync(pageDir, { recursive: true });

  // Write page
  const pagePath = path.join(pageDir, "page.tsx");
  const pageContent = buildPageTsx({ slug, yearNum: year, monthNum: month, data });
  fs.writeFileSync(pagePath, pageContent, "utf-8");
  console.log(`✓ Created ${pagePath}`);

  // Update drafts.ts
  const draftEntry = buildDraftEntry({ slug, monthHe, yearStr, data });
  updateDraftsTs(draftEntry);

  // Send email
  await sendNotification({ slug, monthHe, yearStr, data });

  console.log(`\n✅  Done! Newsletter "${monthHe} ${yearStr}" is ready.`);
  console.log(`   Commit and push to deploy: git add -A && git commit -m "Add newsletter ${slug}" && git push`);
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
