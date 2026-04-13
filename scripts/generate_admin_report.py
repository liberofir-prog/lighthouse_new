import anthropic
import requests
import os
from datetime import datetime

# Fetch migdalor.me
try:
    site = requests.get("https://migdalor.me", timeout=10).text[:8000]
except Exception:
    site = "Could not fetch site"

# Fetch PageSpeed
try:
    ps = requests.get(
        "https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://migdalor.me&strategy=mobile",
        timeout=15
    ).json()
    perf_score = int(ps.get("lighthouseResult", {}).get("categories", {}).get("performance", {}).get("score", 0) * 100)
except Exception:
    perf_score = "לא זמין"

# Fetch robots + sitemap
try:
    robots = requests.get("https://migdalor.me/robots.txt", timeout=5).text[:500]
except Exception:
    robots = "לא נמצא"

try:
    sitemap_status = requests.get("https://migdalor.me/sitemap.xml", timeout=5).status_code
    sitemap = "תקין" if sitemap_status == 200 else "שגיאה " + str(sitemap_status)
except Exception:
    sitemap = "לא נמצא"

month_he = {
    1: "ינואר", 2: "פברואר", 3: "מרץ", 4: "אפריל",
    5: "מאי", 6: "יוני", 7: "יולי", 8: "אוגוסט",
    9: "ספטמבר", 10: "אוקטובר", 11: "נובמבר", 12: "דצמבר"
}
now = datetime.now()
month_str = month_he[now.month] + " " + str(now.year)

prompt = (
    "אתה אנליסט SEO ושיווק. צור דוח HTML מקיף בעברית עבור אופיר - מנהל מערכת של קליניקת מגדלור.\n\n"
    "נתונים שנאספו:\n"
    "- PageSpeed Mobile: " + str(perf_score) + "/100\n"
    "- robots.txt: " + robots[:200] + "\n"
    "- sitemap.xml: " + sitemap + "\n"
    "- תוכן האתר (חלקי): " + site[:3000] + "\n\n"
    "חודש הדוח: " + month_str + "\n\n"
    "צור דוח HTML מלא עם הסקציות הבאות:\n"
    "1. סיכום מנהל (3-4 נקודות מפתח)\n"
    "2. ניתוח SEO טכני (PageSpeed, robots, sitemap, המלצות מיידיות)\n"
    "3. ניתוח מתחרים - מי מתחרה על 'טיפול רגשי לילדים אלפי מנשה', 'Play therapy שרון'\n"
    "4. הזדמנויות מילות מפתח (טבלה: מילה | כוונה | עדיפות)\n"
    "5. המלצות לחודש הקרוב (ממוספרות לפי עדיפות)\n\n"
    "עיצוב HTML:\n"
    "- dir=rtl, font-family: Arial, background: #f9f7f4\n"
    "- h1: color #5a3e1b, כולל '" + month_str + "'\n"
    "- h2: color #8B6914, border-bottom: 2px solid #d4a853\n"
    "- טבלאות עם zebra rows\n"
    "- highlight boxes: background #fff8ed, border-right: 4px solid #d4a853, padding 12px\n"
    "- footer: color #999, font-size 12px - 'דוח מנהל אוטומטי | מגדלור | נשלח לאופיר בלבד'\n\n"
    "החזר HTML מלא בלבד, ללא הסברים."
)

client = anthropic.Anthropic()
message = client.messages.create(
    model="claude-opus-4-6",
    max_tokens=4096,
    messages=[{"role": "user", "content": prompt}]
)

html = message.content[0].text
os.makedirs("research-reports", exist_ok=True)
with open("research-reports/admin-report.html", "w", encoding="utf-8") as f:
    f.write(html)
print("Report generated successfully")
