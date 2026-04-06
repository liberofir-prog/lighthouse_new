"use client";

import Image from "next/image";
import {
  MessageCircle, CalendarCheck, Lightbulb, Feather,
  Users, Gamepad2, ChevronDown, MapPin, Timer,
  Map, Phone, Mail, Globe, Navigation,
} from "lucide-react";

export default function WelcomePage() {
  return (
    <div
      dir="rtl"
      className="antialiased min-h-screen"
      style={{
        fontFamily: "'Heebo', sans-serif",
        backgroundColor: "#fdf8f0",
        color: "#2d1f0e",
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c8922a' fill-opacity='0.03'%3E%3Cpath d='M40 40c0-11.046-8.954-20-20-20S0 28.954 0 40s8.954 20 20 20 20-8.954 20-20zm40 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}
    >
      {/* ═══ HERO ═══ */}
      <header className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(to bottom, rgba(253,248,240,0.6), #fdf8f0)" }} />
        <div className="relative z-10 flex flex-col items-center max-w-5xl w-full">
          {/* לוגו */}
          <div className="flex justify-center w-full mb-8">
            <Image
              src="/logo.png"
              alt="לוגו קליניקת מגדלור"
              width={600}
              height={240}
              className="w-full max-w-[600px] h-auto"
              style={{ filter: "drop-shadow(0 12px 25px rgba(0,0,0,0.08))" }}
              priority
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight" style={{ color: "#5a3e1b" }}>
              יוצאים לדרך יחד
            </h1>
            <p className="text-2xl md:text-3xl font-light max-w-3xl mx-auto leading-relaxed mt-4" style={{ color: "#6b5c45" }}>
              מדריך הכנה אישי להורים לקראת המפגש הראשון
            </p>
            <div className="h-1 w-24 rounded-full mx-auto mt-8" style={{ backgroundColor: "#c8922a" }} />
          </div>

          <div className="mt-12 animate-bounce opacity-50">
            <ChevronDown size={32} style={{ color: "#c8922a" }} />
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 pb-32">

        {/* ═══ מכתב פתיחה ═══ */}
        <section className="mb-32">
          <div className="bg-white rounded-[2rem] p-10 md:p-16" style={{ boxShadow: "0 10px 40px rgba(90,62,27,0.05)", border: "1px solid rgba(200,146,42,0.1)" }}>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
              <div className="flex-shrink-0">
                <Image
                  src="/inbal-profile.jpg"
                  alt="ענבל ליבר"
                  width={200}
                  height={200}
                  className="rounded-full object-cover object-[center_20%]"
                  style={{ border: "6px solid white", boxShadow: "0 15px 30px rgba(90,62,27,0.2)", width: 200, height: 200 }}
                />
              </div>
              <div className="flex-grow text-right">
                <h2 className="text-4xl font-extrabold mb-8" style={{ color: "#5a3e1b" }}>הורים יקרים,</h2>
                <div className="text-xl leading-relaxed space-y-6" style={{ color: "#2d1f0e" }}>
                  <p>
                    הבחירה להביא את הילד או הילדה שלכם לטיפול היא צעד של אהבה ואומץ. אני יודעת שלצד התקווה לשינוי, עולים גם סימני שאלה: "איך זה יראה?", "מה אם הוא לא ירצה לדבר?" ו"האם זה באמת יעזור?".
                  </p>
                  <p>
                    החוברת הזו נכתבה כדי לעשות סדר, להפיג את הערפל ולהזכיר לכם: אתם לא לבד בזה. המגדלור כאן כדי להאיר את הדרך, גם כשהים קצת סוער.
                  </p>
                  <div className="pt-6">
                    <p className="font-bold text-2xl" style={{ color: "#c8922a" }}>מחכה לפגוש אתכם,</p>
                    <p className="font-bold text-3xl mt-2 italic" style={{ color: "#5a3e1b" }}>ענבל.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="space-y-40">

          {/* ═══ פרק 1 ═══ */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-3" style={{ background: "linear-gradient(135deg, #5a3e1b, #3d2a12)" }}>1</div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#5a3e1b" }}>איך מספרים לילד?</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-white rounded-[2rem] p-10 border-t-8" style={{ borderColor: "#c8922a", boxShadow: "0 4px 20px rgba(90,62,27,0.05)", border: "1px solid rgba(200,146,42,0.1)", borderTopWidth: 8, borderTopColor: "#c8922a" }}>
                <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-4">
                  <MessageCircle style={{ color: "#c8922a" }} />
                  מה לומר?
                </h3>
                <p className="text-xl leading-relaxed italic" style={{ color: "#6b5c45" }}>
                  "אנחנו הולכים לפגוש את ענבל. היא פוגשת ילדים ועוזרת להם להרגיש טוב יותר. בחדר שלה יש המון משחקים, יצירה ובובות, ואפשר לשחק בהם יחד".
                </p>
              </div>

              <div className="bg-white rounded-[2rem] p-10" style={{ boxShadow: "0 4px 20px rgba(90,62,27,0.05)", border: "1px solid rgba(200,146,42,0.1)" }}>
                <h3 className="text-2xl font-extrabold mb-6 flex items-center gap-4">
                  <CalendarCheck style={{ color: "#c8922a" }} />
                  מתי לספר?
                </h3>
                <div className="text-xl space-y-4" style={{ color: "#6b5c45" }}>
                  <p><strong>גילאי 2.5-5:</strong> ביום המפגש או יום לפני.</p>
                  <p><strong>גילאי 6-10:</strong> יומיים-שלושה מראש.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-10 rounded-[2.5rem] border-2 border-dashed text-center" style={{ backgroundColor: "rgba(251,191,36,0.08)", borderColor: "rgba(200,146,42,0.3)" }}>
              <Lightbulb size={40} className="mx-auto mb-4" style={{ color: "#c8922a" }} />
              <p className="text-2xl font-medium" style={{ color: "#5a3e1b" }}>
                <strong>טיפ מאיתנו:</strong> אל תבטיחו ש"יהיה כיף" (כדי לא לייצר לחץ), אלא הבטיחו ש"ענבל מחכה להכיר אותך".
              </p>
            </div>
          </section>

          {/* ═══ פרק 2 ═══ */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl -rotate-3" style={{ background: "linear-gradient(135deg, #5a3e1b, #3d2a12)" }}>2</div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#5a3e1b" }}>מה קורה במפגש?</h2>
            </div>

            <div className="space-y-12">
              {[
                { icon: <Feather size={36} style={{ color: "#c8922a" }} />, title: "הקצב של הילד", text: "אנחנו זורמים איתו לגמרי. יש ילדים שצוללים ישר למשחק, ויש שזקוקים לזמן של צפייה מהצד. כל תגובה היא חלק מהתהליך." },
                { icon: <Users size={36} style={{ color: "#c8922a" }} />, title: "נוכחות הורים", text: "נחליט יחד, לפי הצורך של הילד, אם תישארו בחדר או שתמתינו בפינה הנעימה שלנו בזמן שהוא חוקר את המרחב." },
                { icon: <Gamepad2 size={36} style={{ color: "#c8922a" }} />, title: "השפה היא משחק", text: "ב-Play Therapy, הצעצועים הם המילים והמשחק הוא השפה. הילד מעבד קשיים ובונה חוסן דרך הדמיון והיצירה." },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="bg-white p-5 rounded-3xl shadow-md border flex-shrink-0" style={{ borderColor: "rgba(200,146,42,0.15)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-2xl font-extrabold mb-3" style={{ color: "#5a3e1b" }}>{item.title}</h4>
                    <p className="text-xl leading-relaxed" style={{ color: "#6b5c45" }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ═══ פרק 3 ═══ */}
          <section>
            <div className="flex items-center gap-6 mb-16">
              <div className="w-16 h-16 rounded-3xl flex items-center justify-center text-white text-3xl font-black shadow-xl rotate-2" style={{ background: "linear-gradient(135deg, #5a3e1b, #3d2a12)" }}>3</div>
              <h2 className="text-4xl md:text-5xl font-black" style={{ color: "#5a3e1b" }}>שאלות שעולות בדרך</h2>
            </div>

            <div className="space-y-12">
              <div className="bg-white rounded-[2rem] p-12 shadow-lg" style={{ borderRight: "6px solid #c8922a", paddingRight: "1.5rem", backgroundColor: "rgba(200,146,42,0.02)" }}>
                <h3 className="text-3xl font-black mb-6" style={{ color: "#5a3e1b" }}>"מה אם הילד מסרב להיכנס?"</h3>
                <p className="text-2xl leading-relaxed mb-6">
                  זה קורה, וזה טבעי לגמרי. עבור חלק מהילדים, כניסה למקום חדש היא אתגר.
                </p>
                <div className="inline-block p-6 rounded-2xl shadow-lg mb-6" style={{ backgroundColor: "#c8922a" }}>
                  <p className="text-2xl font-bold italic text-white">אנחנו לא נבהלים מהתנגדות.</p>
                </div>
                <p className="text-xl leading-relaxed" style={{ color: "#6b5c45" }}>
                  לפעמים הטיפול מתחיל ממש שם, במסדרון. אני אהיה שם איתכם כדי לעזור לילד להרגיש בטוח, גם אם זה ייקח זמן. הטיפול בהתנגדות הוא לב התהליך.
                </p>
              </div>

              <div className="rounded-[2rem] p-12 text-white text-center shadow-2xl" style={{ background: "linear-gradient(135deg, #5a3e1b, #3d2a12)" }}>
                <h3 className="text-3xl font-black mb-6">סבלנות היא המפתח</h3>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                  טיפול רגשי הוא תהליך של בניית יציבות. השותפות שלכם כהורים היא המנוע הכי חזק לצמיחה של הילד.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* ═══ פרטים טכניים ═══ */}
        <section className="mt-40 bg-white rounded-[3.5rem] p-16 shadow-lg" style={{ border: "1px solid rgba(200,146,42,0.15)" }}>
          <h2 className="text-4xl font-black text-center mb-16" style={{ color: "#5a3e1b" }}>פרטים טכניים</h2>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="space-y-10 text-right">
              {[
                { icon: <MapPin size={24} style={{ color: "#c8922a" }} />, label: "איפה הקליניקה?", value: "דן 30, אלפי מנשה" },
                { icon: <Timer size={24} style={{ color: "#c8922a" }} />, label: "משך המפגש", value: "45 דקות" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-sm" style={{ backgroundColor: "rgba(200,146,42,0.08)" }}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-lg" style={{ color: "#6b5c45" }}>{item.label}</p>
                    <p className="text-2xl font-black" style={{ color: "#5a3e1b" }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="pt-4">
                <a
                  href="https://waze.com/ul/hsv8z7f7d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 text-white px-10 py-4 rounded-full font-black text-xl hover:scale-105 transition-all shadow-lg"
                  style={{ backgroundColor: "#05c3ff" }}
                >
                  <Navigation size={28} />
                  נווטו אלינו ב-Waze
                </a>
              </div>
            </div>

            <div className="rounded-[3rem] overflow-hidden h-80 flex flex-col items-center justify-center text-center p-8" style={{ backgroundColor: "rgba(200,146,42,0.06)", border: "8px solid white", boxShadow: "0 10px 30px rgba(90,62,27,0.1)" }}>
              <Map size={64} className="mb-6" style={{ color: "#c8922a" }} />
              <p className="font-black text-2xl" style={{ color: "#5a3e1b" }}>מפת הגעה</p>
              <p className="text-lg mt-2" style={{ color: "#6b5c45" }}>מחכה לכם באווירה רגועה ושקטה</p>
            </div>
          </div>
        </section>

        {/* ═══ פוטר ═══ */}
        <footer className="mt-40 text-center">
          <h2 className="text-5xl font-black mb-16 italic" style={{ color: "#5a3e1b" }}>אני כאן לכל שאלה</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
            {[
              { href: "tel:0545524516", icon: <Phone size={36} />, label: "054-552-4516" },
              { href: "mailto:inbal@liber.co.il", icon: <Mail size={36} />, label: "inbal@liber.co.il" },
              { href: "https://migdalor.me", icon: <Globe size={36} />, label: "migdalor.me" },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex flex-col items-center group">
                <div
                  className="w-24 h-24 rounded-full border-4 flex items-center justify-center transition-all duration-500 mb-6 shadow-md group-hover:text-white"
                  style={{ borderColor: "rgba(200,146,42,0.3)", color: "#c8922a" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg, #5a3e1b, #3d2a12)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                >
                  {item.icon}
                </div>
                <span className="text-2xl font-black" style={{ color: "#5a3e1b" }}>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="h-px w-24 mx-auto opacity-20 rounded-full" style={{ backgroundColor: "#c8922a" }} />
          <p className="text-sm mt-12 pb-16 font-medium uppercase tracking-widest" style={{ color: "#6b5c45" }}>
            קליניקת מגדלור © ענבל ליבר — מרחב בטוח לצמיחה
          </p>
        </footer>
      </main>

      {/* כפתור שיחה צף */}
      <div className="fixed bottom-12 left-12 z-50">
        <a
          href="tel:0545524516"
          className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-pulse"
          style={{ background: "linear-gradient(135deg, #5a3e1b, #3d2a12)" }}
        >
          <Phone size={32} />
        </a>
      </div>
    </div>
  );
}
