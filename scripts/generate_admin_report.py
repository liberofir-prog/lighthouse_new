import requests
import os
from datetime import datetime

month_he = {
    1: "ינואר", 2: "פברואר", 3: "מרץ", 4: "אפריל",
    5: "מאי", 6: "יוני", 7: "יולי", 8: "אוגוסט",
    9: "ספטמבר", 10: "אוקטובר", 11: "נובמבר", 12: "דצמבר"
}
now = datetime.now()
month_str = month_he[now.month] + " " + str(now.year)
date_str = now.strftime("%d.%m.%Y")

# --- PageSpeed ---
try:
    ps = requests.get(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://migdalor.me&strategy=mobile",
        timeout=20
    ).json()
    lhr = ps.get("lighthouseResult", {})
    cats = lhr.get("categories", {})
    perf  = int((cats.get("performance",  {}).get("score", 0) or 0) * 100)
    seo   = int((cats.get("seo",          {}).get("score", 0) or 0) * 100)
    a11y  = int((cats.get("accessibility",{}).get("score", 0) or 0) * 100)
    bp    = int((cats.get("best-practices",{}).get("score",0) or 0) * 100)

    audits = lhr.get("audits", {})
    lcp = audits.get("largest-contentful-paint", {}).get("displayValue", "—")
    cls = audits.get("cumulative-layout-shift",  {}).get("displayValue", "—")
    inp = audits.get("total-blocking-time",       {}).get("displayValue", "—")

    def score_color(s):
        if s >= 90: return "#0cce6b"
        if s >= 50: return "#ffa400"
        return "#ff4e42"

    pagespeed_html = f"""
    <table>
      <tr>
        <th>קטגוריה</th><th>ציון</th>
      </tr>
      <tr><td>ביצועים (מובייל)</td>
          <td style="color:{score_color(perf)};font-weight:bold">{perf}/100</td></tr>
      <tr style="background:#fff8ed"><td>SEO</td>
          <td style="color:{score_color(seo)};font-weight:bold">{seo}/100</td></tr>
      <tr><td>נגישות</td>
          <td style="color:{score_color(a11y)};font-weight:bold">{a11y}/100</td></tr>
      <tr style="background:#fff8ed"><td>Best Practices</td>
          <td style="color:{score_color(bp)};font-weight:bold">{bp}/100</td></tr>
    </table>
    <p style="margin-top:8px;font-size:13px">
      LCP: <b>{lcp}</b> &nbsp;|&nbsp; CLS: <b>{cls}</b> &nbsp;|&nbsp; TBT: <b>{inp}</b>
    </p>"""
except Exception as e:
    pagespeed_html = f"<p style='color:red'>לא ניתן לטעון נתוני PageSpeed: {e}</p>"

# --- robots.txt ---
try:
    robots_text = requests.get("https://migdalor.me/robots.txt", timeout=5).text
    robots_status = "תקין ✅"
    robots_content = "<pre style='font-size:12px;background:#f0f0f0;padding:8px;border-radius:4px'>" + robots_text[:400] + "</pre>"
except Exception:
    robots_status = "לא נמצא ❌"
    robots_content = ""

# --- sitemap ---
try:
    r = requests.get("https://migdalor.me/sitemap.xml", timeout=5)
    sitemap_status = "תקין ✅" if r.status_code == 200 else f"שגיאה {r.status_code} ❌"
except Exception:
    sitemap_status = "לא נמצא ❌"

# --- Google Ads Tag ---
try:
    html_src = requests.get("https://migdalor.me", timeout=10).text
    ads_tag = "מזוהה ✅" if "AW-18083758679" in html_src else "לא מזוהה ❌"
    schema = "מזוהה ✅" if "MedicalClinic" in html_src else "חסר ❌"
    og_image = "מזוהה ✅" if 'og:image' in html_src else "חסר ❌"
except Exception:
    ads_tag = schema = og_image = "שגיאה בבדיקה"

# --- Build HTML ---
html = f"""<!DOCTYPE html>
<html dir="rtl" lang="he">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>דוח מנהל — מגדלור {month_str}</title>
  <style>
    body {{ font-family: Arial, sans-serif; background: #f9f7f4; color: #333; margin: 0; padding: 20px; }}
    .container {{ max-width: 800px; margin: 0 auto; background: white; padding: 32px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }}
    h1 {{ color: #5a3e1b; border-bottom: 3px solid #d4a853; padding-bottom: 12px; }}
    h2 {{ color: #8B6914; border-bottom: 2px solid #d4a853; padding-bottom: 6px; margin-top: 32px; }}
    table {{ width: 100%; border-collapse: collapse; margin: 12px 0; }}
    th {{ background: #d4a853; color: white; padding: 10px; text-align: right; }}
    td {{ padding: 9px 10px; border-bottom: 1px solid #eee; }}
    tr:nth-child(even) td {{ background: #fff8ed; }}
    .box {{ background: #fff8ed; border-right: 4px solid #d4a853; padding: 12px 16px; margin: 12px 0; border-radius: 4px; }}
    .status-ok {{ color: #0cce6b; font-weight: bold; }}
    .status-warn {{ color: #ffa400; font-weight: bold; }}
    .status-err {{ color: #ff4e42; font-weight: bold; }}
    .badge {{ display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 12px; font-weight: bold; }}
    footer {{ color: #999; font-size: 12px; margin-top: 40px; padding-top: 12px; border-top: 1px solid #eee; text-align: center; }}
  </style>
</head>
<body>
<div class="container">
  <h1>דוח מנהל — מגדלור<br><small style="font-size:16px;font-weight:normal">{month_str} | הופק {date_str}</small></h1>

  <div class="box">
    <b>סיכום מהיר:</b><br>
    • Google Ads Tag: {ads_tag}<br>
    • Schema Markup: {schema}<br>
    • OG Image: {og_image}<br>
    • robots.txt: {robots_status}<br>
    • sitemap.xml: {sitemap_status}
  </div>

  <h2>ביצועי האתר — PageSpeed</h2>
  {pagespeed_html}

  <h2>בדיקות טכניות</h2>
  <table>
    <tr><th>בדיקה</th><th>סטטוס</th></tr>
    <tr><td>Google Ads Tag (AW-18083758679)</td><td>{ads_tag}</td></tr>
    <tr><td>Schema.org MedicalClinic</td><td>{schema}</td></tr>
    <tr><td>Open Graph Image</td><td>{og_image}</td></tr>
    <tr><td>robots.txt</td><td>{robots_status}</td></tr>
    <tr><td>sitemap.xml</td><td>{sitemap_status}</td></tr>
  </table>
  {robots_content}

  <h2>מילות מפתח מומלצות לקמפיין</h2>
  <table>
    <tr><th>מילת מפתח</th><th>כוונה</th><th>עדיפות</th></tr>
    <tr><td>טיפול רגשי לילדים אלפי מנשה</td><td>מקומי — גבוהה</td><td>⭐⭐⭐</td></tr>
    <tr><td>Play therapy שרון</td><td>מקומי — גבוהה</td><td>⭐⭐⭐</td></tr>
    <tr><td>מטפלת ילדים כפר יונה</td><td>מקומי — גבוהה</td><td>⭐⭐⭐</td></tr>
    <tr><td>ליווי רוחני ילדים חולים</td><td>נישה</td><td>⭐⭐⭐</td></tr>
    <tr><td>הדרכת הורים אלפי מנשה</td><td>בינוני</td><td>⭐⭐</td></tr>
    <tr><td>טיפול ילדים אחרי אובדן</td><td>נישה</td><td>⭐⭐⭐</td></tr>
    <tr><td>מטפלת רגשית שרון</td><td>כללי</td><td>⭐⭐</td></tr>
  </table>

  <h2>המלצות לחודש הקרוב</h2>
  <ol>
    <li><b>Google Business Profile</b> — פתח/אמת אם עדיין לא בוצע (גורם #1 בדירוג מקומי)</li>
    <li><b>Bing Places</b> — רשום את הקליניקה (מזין את ChatGPT ו-Copilot)</li>
    <li><b>ביקורות Google</b> — בקש מ-10 לקוחות מרוצים להשאיר ביקורת</li>
    <li><b>עמוד Play Therapy</b> — צור עמוד נפרד עם מילת המפתח באלפי מנשה</li>
    <li><b>Apple Business Connect</b> — הרשמה חינמית, שימוש הוכפל ב-2026</li>
  </ol>

  <footer>דוח מנהל אוטומטי | מגדלור | נשלח לאופיר בלבד | {date_str}</footer>
</div>
</body>
</html>"""

os.makedirs("research-reports", exist_ok=True)
with open("research-reports/admin-report.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Report generated successfully")
