import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, createContext, useContext } from "react";
import { Heart, MapPin, Clock, PartyPopper, Bus, BedDouble, Gift, Send, ChevronDown, CalendarDays, Users, Camera, Wine, Instagram, Facebook, MessageCircle, Volume2, VolumeX } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import entranceBg from "@/assets/entrance-bg.png";
import desktopEntranceBg from "@/assets/desktop-entrance-bg.jpg";
import formalInvitationBg from "@/assets/formal-invitation.png";
import welcomeBg from "@/assets/welcome-bg.jpg";
import welcomeBgMobile from "@/assets/welcome-bg-mobile.png";
import bgMusic from "@/assets/bg-music.mp3";

export const Route = createFileRoute("/")({
  component: AppWrapper,
});

type Language = "en" | "ur" | "hi";
const LanguageContext = createContext<Language>("en");
const useLanguage = () => useContext(LanguageContext);

const t = {
  en: {
    heroSub: "The Wedding Of",
    forever: "Forever Together",
    chooseLanguage: "Choose Your Language",
    welcomeTitle: "Welcome",
    welcomeText: "We are honored to welcome you to\nthe wedding ceremony of Gibran & Yasmeen\nas they begin their journey together in\nfaith and love.",
    scratchToReveal: "Scratch to Reveal",
    youAreInvited: "You're Invited!",
    sunday: "Sunday",
    gallery: "Gallery",
    countdownTitle: "Counting Down to Forever",
    days: "DAYS",
    hours: "HOURS",
    minutes: "MINUTES",
    seconds: "SECONDS",
    timelineTitle: "Program Timeline",
    guestArrival: "Guest Arrival",
    weWelcomeYou: "We welcome you!",
    weddingCeremony: "Wedding Ceremony",
    yourPresence: "Your presence is special",
    dinner: "Dinner",
    letsCelebrate: "Let's celebrate together!",
    venueTitle: "Venue",
    venueName: "Diamond Banquet Hall",
    venueAddress: "Near St. Mary School, Khadi Machine Road...",
    viewOnMap: "VIEW ON MAP",
    rsvpTitle: "RSVP",
    rsvpDate: "Kindly respond by October 15, 2026",
    gibransFamily: "Gibran's Family",
    yasmeensFamily: "Yasmeen's Family",
    sendWishes: "Send Wishes",
    shareBlessings: "Share your blessings",
    thankYou: "Thank you for being a part of our special day",
  },
  ur: {
    heroSub: "کی شادی",
    forever: "ہمیشہ ایک ساتھ",
    chooseLanguage: "اپنی زبان کا انتخاب کریں",
    welcomeTitle: "خوش آمدید",
    welcomeText: "ہمیں آپ کو جبران اور یاسمین کی شادی کی\nتقریب میں مدعو کرتے ہوئے دلی خوشی محسوس ہو رہی ہے\nجیسا کہ وہ ایمان اور محبت میں\nاپنے نئے سفر کا آغاز کر رہے ہیں۔",
    scratchToReveal: "دیکھنے کے لیے اسکریچ کریں",
    youAreInvited: "آپ کو دعوت دی جاتی ہے!",
    sunday: "اتوار",
    gallery: "تصاویر",
    countdownTitle: "یادگار لمحے کا انتظار",
    days: "دن",
    hours: "گھنٹے",
    minutes: "منٹ",
    seconds: "سیکنڈ",
    timelineTitle: "پروگرام کی تفصیلات",
    guestArrival: "مہمانوں کی آمد",
    weWelcomeYou: "ہم آپ کو خوش آمدید کہتے ہیں!",
    weddingCeremony: "تقریب نکاح",
    yourPresence: "آپ کی شرکت ہمارے لیے باعث مسرت ہے",
    dinner: "دعوت ولیمہ",
    letsCelebrate: "آئیے مل کر خوشیاں منائیں!",
    venueTitle: "مقام",
    venueName: "ڈائمنڈ بینکوئٹ ہال",
    venueAddress: "سینٹ میری اسکول کے قریب، کھادی مشین روڈ...",
    viewOnMap: "نقشے پر دیکھیں",
    rsvpTitle: "جواب طلب",
    rsvpDate: "براہ کرم 15 اکتوبر 2026 تک مطلع کریں",
    gibransFamily: "جبران کی فیملی",
    yasmeensFamily: "یاسمین کی فیملی",
    sendWishes: "دعائیں بھیجیں",
    shareBlessings: "اپنی نیک تمناؤں کا اظہار کریں",
    thankYou: "ہمارے اس خاص دن کا حصہ بننے کے لیے آپ کا شکریہ",
  },
  hi: {
    heroSub: "की शादी",
    forever: "हमेशा एक साथ",
    chooseLanguage: "अपनी भाषा चुनें",
    welcomeTitle: "स्वागत है",
    welcomeText: "हमें आपको जिब्रान और यास्मीन के विवाह\nसमारोह में आमंत्रित करते हुए अत्यंत हर्ष हो रहा है\nजैसे कि वे विश्वास और प्रेम के साथ\nअपनी नई यात्रा शुरू कर रहे हैं।",
    scratchToReveal: "देखने के लिए स्क्रैच करें",
    youAreInvited: "आप आमंत्रित हैं!",
    sunday: "रविवार",
    gallery: "तस्वीरें",
    countdownTitle: "अनमोल पल का इंतज़ार",
    days: "दिन",
    hours: "घंटे",
    minutes: "मिनट",
    seconds: "सेकंड",
    timelineTitle: "कार्यक्रम विवरण",
    guestArrival: "अतिथियों का आगमन",
    weWelcomeYou: "हम आपका स्वागत करते हैं!",
    weddingCeremony: "विवाह समारोह (निकाह)",
    yourPresence: "आपकी उपस्थिति हमारे लिए विशेष है",
    dinner: "रात्रिकालीन भोज (दावत-ए-वलीमा)",
    letsCelebrate: "आइए मिलकर जश्न मनाएं!",
    venueTitle: "स्थान",
    venueName: "डायमंड बैंक्वेट हॉल",
    venueAddress: "सेंट मैरी स्कूल के पास, खादी मशीन रोड...",
    viewOnMap: "नक्शे पर देखें",
    rsvpTitle: "आरएसवीपी",
    rsvpDate: "कृपया 15 अक्टूबर 2026 तक सूचित करें",
    gibransFamily: "जिब्रान का परिवार",
    yasmeensFamily: "यास्मीन का परिवार",
    sendWishes: "शुभकामनाएं भेजें",
    shareBlessings: "अपना आशीर्वाद साझा करें",
    thankYou: "हमारे इस खास दिन का हिस्सा बनने के लिए आपका धन्यवाद",
  }
};

const WEDDING_DATE = new Date("2026-11-01T20:00:00");

const GALLERY = [
  "/gallery/gallery-1.png",
  "/gallery/gallery-2.png",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
];

function AppWrapper() {
  const [lang, setLang] = useState<Language | null>(null);

  if (!lang) {
    return <LanguageSelection onSelect={setLang} />;
  }

  return (
    <LanguageContext.Provider value={lang}>
      <Invitation />
    </LanguageContext.Provider>
  );
}

function LanguageSelection({ onSelect }: { onSelect: (lang: Language) => void }) {
  return (
    <div className="fixed inset-0 z-[200] bg-[#F7E5DE] overflow-hidden flex flex-col items-center justify-center p-4">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }} />
      
      <div className="relative z-10 w-full max-w-sm flex flex-col items-center">
        <p className="font-serif text-[0.7rem] uppercase tracking-[0.3em] text-[#6E4950] mb-2">THE WEDDING OF</p>
        <h1 className="font-script text-[3.5rem] md:text-[4.5rem] text-[#7A2040] leading-[0.9] mb-4 text-center">
          Gibran & Yasmeen
        </h1>
        <p className="font-serif text-[0.7rem] uppercase tracking-[0.3em] text-[#6E4950] mb-12">FOREVER TOGETHER</p>

        <p className="font-serif text-lg text-[#8C6239] mb-8">Choose Your Language</p>

        <div className="flex flex-col gap-5 w-full">
           <LanguageButton label="English" subLabel="English" onClick={() => onSelect("en")} />
           <LanguageButton label="اردو" subLabel="Urdu" onClick={() => onSelect("ur")} />
           <LanguageButton label="हिन्दी" subLabel="Hindi" onClick={() => onSelect("hi")} />
        </div>
      </div>
    </div>
  );
}

function LanguageButton({ label, subLabel, onClick }: { label: string; subLabel: string; onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="relative w-full h-[65px] rounded-full flex items-center justify-center border border-[#C2A878] bg-[#FDF8F0]/90 shadow-sm transition-all hover:scale-105 active:scale-95 group"
    >
      <div className="absolute inset-1.5 border border-[#C2A878]/40 rounded-full pointer-events-none" />
      <span className="font-serif text-2xl text-[#7A2040] font-medium min-w-[80px] text-center">{label}</span>
      <div className="w-1 h-1 mx-4 rotate-45 border border-[#C2A878] bg-[#C2A878] group-hover:bg-[#7A2040] transition-colors" />
      <span className="font-script text-2xl text-[#7A2040] min-w-[80px] text-center">{subLabel}</span>
    </button>
  );
}

function Divider() {
  return (
    <div className="divider-heart my-6">
      <Heart className="h-3.5 w-3.5 fill-current" />
    </div>
  );
}

function SectionTitle({ icon: Icon, children }: { icon?: any; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center text-center">
      {Icon && <Icon className="mb-3 h-7 w-7 text-rose" />}
      <h2 className="font-hand text-4xl md:text-5xl font-semibold text-rose-deep">{children}</h2>
      <Divider />
    </div>
  );
}

function Invitation() {
  const [opened, setOpened] = useState(false);
  const [sealing, setSealing] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOpen = () => {
    if (sealing) return;
    setSealing(true);
    setTimeout(() => setOpened(true), 1400);

    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      audioRef.current.play().then(() => setIsPlaying(true)).catch((e) => console.log("Audio play failed:", e));
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />

      {opened && (
        <button
          onClick={toggleAudio}
          className="fixed top-4 right-4 z-[999] p-3 rounded-full shadow-lg backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
          style={{ backgroundColor: "rgba(122, 32, 64, 0.85)", color: "#FDF8F0", border: "1px solid rgba(212, 175, 55, 0.4)" }}
          aria-label={isPlaying ? "Mute music" : "Play music"}
        >
          {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}

      {(sealing || opened) && <InvitationBody />}
      {!opened && (
        <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden={sealing}>
          <style>{`
            .entrance-door-left {
              background-image: url(${entranceBg});
              background-size: cover;
              background-position: center;
              clip-path: polygon(0 0, 50% 0, 50% 100%, 0 100%);
            }
            .entrance-door-right {
              background-image: url(${entranceBg});
              background-size: cover;
              background-position: center;
              clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
            }
            @media (min-width: 768px) {
              .entrance-door-left { background-image: url(${desktopEntranceBg}); }
              .entrance-door-right { background-image: url(${desktopEntranceBg}); }
            }
          `}</style>
          {/* Left gate using clip-path */}
          <div className={`entrance-door-left absolute inset-0 pointer-events-auto transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${sealing ? "-translate-x-full" : "translate-x-0"}`}></div>

          {/* Right gate using clip-path */}
          <div className={`entrance-door-right absolute inset-0 pointer-events-auto transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${sealing ? "translate-x-full" : "translate-x-0"}`}></div>

          {/* Invisible interactive area over the seal */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <button
              onClick={handleOpen}
              aria-label="Tap to open"
              className={`pointer-events-auto w-48 h-48 rounded-full transition-transform duration-700 ${sealing ? "scale-150 opacity-0" : "hover:scale-105 active:scale-95"}`}
            >
              <span className="sr-only">Tap to open</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function useCountdown(target: Date) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

function InvitationBody() {
  const lang = useLanguage();
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Welcome />
      <ScratchSection />
      <FormalInvitation />
      <Gallery />
      <Countdown />
      <Timeline />
      <Venue />
      <Footer />
    </main>
  );
}

function Hero() {
  const lang = useLanguage();
  return (
    <section className="relative w-full overflow-hidden" style={{ background: "oklch(0.97 0.015 25)" }}>
      {/* ── MOBILE ONLY: shown on screens narrower than 768px ── */}
      <div className="md:hidden">
        <div style={{
          position: "relative",
          width: "100%",
          height: "100svh",
          overflow: "hidden",
          background: "oklch(0.96 0.02 25)",
        }}>
          {/* Couple image — fully centered vertically & horizontally */}
          <div
            className="hero-fade"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: `url(${heroBgMobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          />
          {/* Soft gradient at top for text readability - removed because image has text built in */}

          {/* Scroll cue */}
          <div
            className="float-y"
            style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", color: "oklch(0.55 0.15 15 / 0.7)" }}
          >
            <ChevronDown className="h-6 w-6" />
          </div>
        </div>
      </div>


      {/* ── TABLET & DESKTOP: unchanged full-screen side-by-side layout ── */}
      <div
        className="hidden md:flex"
        style={{ position: "relative", minHeight: "100vh", width: "100%", flexDirection: "row", alignItems: "center" }}
      >
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          width={1600}
          height={1008}
          className="hero-fade hero-bg-img"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
        />
        {/* Desktop text positioned on the left side */}
        <div className="hero-fade" style={{ position: "relative", zIndex: 10, width: "50%", maxWidth: "28rem", textAlign: "center", padding: "4rem 2rem 4rem 4rem", marginLeft: "10%" }}>
          <p style={{ letterSpacing: "0.35em", fontSize: "0.8rem", textTransform: "uppercase", color: "oklch(0.45 0.03 20 / 0.7)" }}>
            {t[lang].heroSub}
          </p>
          <h1
            className="font-script"
            style={{ fontSize: "5rem", lineHeight: 1, color: "oklch(0.35 0.14 20)", marginTop: "1.5rem" }}
          >
            Gibran &amp; Yasmeen
          </h1>
          <div className="divider-heart" style={{ color: "oklch(0.6 0.13 40)", margin: "1.5rem 0" }}>
            <Heart className="h-3 w-3 fill-current" />
          </div>
          <p style={{ letterSpacing: "0.4em", fontSize: "0.8rem", textTransform: "uppercase", color: "oklch(0.6 0.13 60)" }}>
            {t[lang].forever}
          </p>
        </div>
        <div
          className="float-y"
          style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", color: "oklch(0.55 0.15 15 / 0.7)" }}
        >
          <ChevronDown className="h-6 w-6" />
        </div>
      </div>
    </section>
  );
}

function FormalInvitation() {
  return (
    <section className="relative w-full overflow-hidden">
      <img src={formalInvitationBg} alt="Formal Invitation" className="w-full h-auto block" />
    </section>
  );
}

function Welcome() {
  const lang = useLanguage();
  return (
    <section className="relative w-full overflow-hidden flex flex-row min-h-[50vh]" style={{ background: "oklch(0.97 0.015 25)" }}>
      {/* Left decorative border using the floral part of heroBg */}
      <div className="w-16 md:w-32 lg:w-48 relative flex-shrink-0">
        <img src={heroBg} className="w-full h-full object-cover object-left" alt="" />
        {/* Gradient overlay to blend the border smoothly into the cream background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[oklch(0.97_0.015_25)]" />
        {/* Subtle white lace-like overlay just to give it that card feel */}
        <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
      </div>

      {/* Center text content */}
      <div className="flex-1 flex flex-col items-center justify-center py-16 px-4 md:px-12 text-center z-10">
        <h2
          className="font-script text-5xl md:text-6xl mb-6 md:mb-8"
          style={{ color: "oklch(0.35 0.14 20)" }}
        >
          {t[lang].welcomeTitle}
        </h2>
        
        <p
          className="font-serif text-[0.95rem] md:text-lg leading-[2] md:leading-loose max-w-lg whitespace-pre-line"
          style={{ color: "oklch(0.25 0.05 20)" }}
        >
          {t[lang].welcomeText}
        </p>
        
        <div className="mt-6 md:mt-8">
          <Heart className="h-5 w-5" style={{ fill: "oklch(0.35 0.14 20)", color: "oklch(0.35 0.14 20)" }} />
        </div>
      </div>
    </section>
  );
}

function WaveDivider() {
  return (
    <svg viewBox="0 0 400 20" className="mx-auto w-full max-w-sm text-rose/60" fill="none">
      <path d="M0 10 Q 50 0 100 10 T 200 10 T 300 10 T 400 10" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="50" cy="6" r="1.5" fill="currentColor" />
      <circle cx="150" cy="14" r="1.5" fill="currentColor" />
      <circle cx="250" cy="6" r="1.5" fill="currentColor" />
      <circle cx="350" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PetalShower({ active }: { active: boolean }) {
  const petals = useMemo(() => {
    const colors = ["#d4717a", "#f4c542", "#f8e8e0", "#c48b12", "#e8a598"];
    return Array.from({ length: 90 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 1.5}s`,
      duration: `${2.5 + Math.random() * 2}s`,
      size: 6 + Math.random() * 10,
      color: colors[Math.floor(Math.random() * colors.length)],
      swayDuration: `${2 + Math.random() * 2}s`,
    }));
  }, []);

  if (!active) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[200] overflow-hidden">
      {petals.map((p) => (
        <span
          key={p.id}
          className="absolute top-0 rounded-full opacity-0"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: "60% 40% 70% 30% / 40% 50% 60% 50%",
            animation: `petal-fall ${p.duration} linear ${p.delay} forwards, petal-sway ${p.swayDuration} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

function ScratchSection() {
  const [scratched, setScratched] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawing = useRef(false);
  const lang = useLanguage();
  const [shower, setShower] = useState(false);
  const showered = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    const g = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    g.addColorStop(0, "#d4a017");
    g.addColorStop(0.5, "#f4c542");
    g.addColorStop(1, "#c48b12");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    ctx.font = "600 16px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦  " + t[lang].scratchToReveal + "  ✦", rect.width / 2, rect.height / 2);
  }, []);

  const checkProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return 0;
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;
    const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let cleared = 0;
    const step = 40;
    for (let i = 3; i < img.data.length; i += step) {
      if (img.data[i] === 0) cleared++;
    }
    return cleared / (img.data.length / step);
  };

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x - rect.left, y - rect.top, 30, 0, Math.PI * 2);
    ctx.fill();

    const pct = checkProgress();
    if (pct >= 0.5 && !showered.current) {
      showered.current = true;
      setShower(true);
      setTimeout(() => setScratched(true), 600);
      setTimeout(() => setShower(false), 5000);
    }
  };

  return (
    <section style={{ background: "oklch(0.97 0.015 25)", padding: "3rem 1rem" }}>
      {/* Single centered scratch card */}
      <div style={{ display: "flex", justifyContent: "center", maxWidth: "28rem", margin: "0 auto" }}>

        {/* ── LEFT CARD: Maroon scratch card ── */}
        <div style={{
          flex: 1,
          background: "linear-gradient(135deg, #5a1a2a 0%, #7a2040 40%, #4a1020 100%)",
          borderRadius: "1rem",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(90, 26, 42, 0.3)",
        }}>
          {/* Subtle floral pattern overlay */}
          <div style={{
            position: "absolute",
            inset: 0,
            opacity: 0.08,
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            pointerEvents: "none",
          }} />

          {/* Title */}
          <h3
            className="font-script"
            style={{ fontSize: "1.6rem", color: "#f5e6d3", marginBottom: "0.3rem", position: "relative", zIndex: 2 }}
          >
            {t[lang].scratchToReveal}
          </h3>
          {/* Decorative line + heart */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem", position: "relative", zIndex: 2 }}>
            <div style={{ width: "3rem", height: "1px", background: "#d4af37" }} />
            <Heart style={{ width: "0.75rem", height: "0.75rem", fill: "#d4af37", color: "#d4af37" }} />
            <div style={{ width: "3rem", height: "1px", background: "#d4af37" }} />
          </div>

          {/* Scratch area */}
          <div style={{
            position: "relative",
            width: "100%",
            flex: 1,
            minHeight: "10rem",
            borderRadius: "0.75rem",
            overflow: "hidden",
            zIndex: 2,
          }}>
            {/* Revealed content underneath */}
            <div style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #faf6f0 0%, #f5ebe0 100%)",
              textAlign: "center",
              padding: "1rem",
            }}>
              <CalendarDays style={{ width: "2rem", height: "2rem", color: "#7a2040", marginBottom: "0.5rem" }} />
              <p className="font-script" style={{ fontSize: "1.5rem", color: "#7a2040", marginBottom: "0.25rem" }}>{t[lang].youAreInvited}</p>
              <p className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2a0a14", letterSpacing: "0.05em" }}>NOVEMBER <span style={{ fontFamily: "sans-serif" }}>1</span>, 2026</p>
              <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", color: "#7a2040", textTransform: "uppercase", margin: "0.2rem 0" }}>{t[lang].sunday}</p>
              <p style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "#7a2040" }}>8:00 PM</p>
            </div>
            {/* Gold scratch canvas */}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 h-full w-full touch-none cursor-pointer transition-opacity duration-700 ${scratched ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              style={{ zIndex: 5 }}
              onPointerDown={(e) => { drawing.current = true; scratch(e.clientX, e.clientY); }}
              onPointerMove={(e) => drawing.current && scratch(e.clientX, e.clientY)}
              onPointerUp={() => (drawing.current = false)}
              onPointerLeave={() => (drawing.current = false)}
            />
          </div>
        </div>

      </div>
      <PetalShower active={shower} />
    </section>
  );
}

function Gallery() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % GALLERY.length), 4000);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="bg-blush-soft py-16 px-6">
      <div className="mx-auto max-w-md">
        <WaveDivider />
        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-lg">
          {GALLERY.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Wedding moment ${i + 1}`}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${i === idx ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {GALLERY.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-rose" : "w-2 bg-rose/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Countdown() {
  const { d, h, m, s } = useCountdown(WEDDING_DATE);
  const lang = useLanguage();
  const cells = [
    { label: t[lang].days, value: d },
    { label: t[lang].hours, value: h },
    { label: t[lang].minutes, value: m },
    { label: t[lang].seconds, value: s },
  ];
  return (
    <section className="relative w-full py-16 overflow-hidden" style={{ backgroundColor: "#641829" }}>
      {/* Subtle overlay to give a rich, velvety texture to the maroon background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center px-2 sm:px-4">
        <h2 className="font-script text-4xl md:text-[3.25rem] tracking-wide" style={{ color: "#E8C385" }}>
          {t[lang].countdownTitle}
        </h2>
        
        <div className="flex items-center justify-center gap-3 mt-4 mb-10">
          <div className="h-[1px] w-12 sm:w-20" style={{ backgroundColor: "#E8C385", opacity: 0.6 }}></div>
          <Heart className="w-3 h-3 fill-current" style={{ color: "#E8C385" }} />
          <div className="h-[1px] w-12 sm:w-20" style={{ backgroundColor: "#E8C385", opacity: 0.6 }}></div>
        </div>

        {/* Removed flex-wrap, reduced gap on mobile to ensure it fits in one line */}
        <div className="flex items-center justify-center flex-nowrap gap-1 sm:gap-3 w-full">
          {cells.map((c, i) => (
            <div key={c.label} className="flex items-center">
              <div 
                className="flex flex-col items-center justify-center rounded-lg shadow-xl w-[70px] h-[75px] sm:w-[85px] sm:h-[90px]"
                style={{ 
                  backgroundColor: "#FCF6E8", 
                  border: "2px solid #E8C385",
                }}
              >
                <span className="font-serif text-2xl sm:text-3xl md:text-[2.5rem] font-semibold tabular-nums leading-none" style={{ color: "#641829" }}>
                  {String(c.value).padStart(2, "0")}
                </span>
                <span className="mt-1 sm:mt-2 text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.1em] sm:tracking-[0.15em] font-medium" style={{ color: "#3D0B16" }}>
                  {c.label}
                </span>
              </div>
              
              {/* Diamond Separator - scale down on mobile */}
              {i < cells.length - 1 && (
                <div className="mx-1 sm:mx-2 md:mx-4 flex items-center justify-center">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rotate-45" style={{ backgroundColor: "#E8C385" }}></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function RingsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="8.5" cy="12" r="5" />
      <circle cx="15.5" cy="12" r="5" />
    </svg>
  );
}

function Timeline() {
  const lang = useLanguage();
  const TIMELINE_DATA = [
    { title: t[lang].guestArrival, date: "Nov 01, 2026", time: "8:00 PM", note: t[lang].weWelcomeYou, icon: Users },
    { title: t[lang].weddingCeremony, date: "Nov 01, 2026", time: "9:00 PM", note: t[lang].yourPresence, icon: Heart },
    { title: t[lang].dinner, date: "Nov 01, 2026", time: "10:00 PM", note: t[lang].letsCelebrate, icon: Wine },
  ];

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden bg-white">
      {/* Delicate floral corners */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "top left" }} />
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: `url(${heroBg})`, backgroundPosition: "bottom right" }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionTitle icon={CalendarDays}>{t[lang].timelineTitle}</SectionTitle>
        <div className="mt-16 space-y-12 md:space-y-24 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[oklch(0.97_0.015_25)] before:via-[oklch(0.85_0.05_30)] before:to-[oklch(0.97_0.015_25)]">
          
          <div className="relative justify-between w-full hidden md:flex">
            {TIMELINE_DATA.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex flex-col items-center w-1/3 px-4 z-10 group cursor-default">
                  {/* Icon Node */}
                  <div className="w-14 h-14 rounded-full border-4 border-[#FDF8F0] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-2 shadow-lg" style={{ backgroundColor: "#983A4E" }}>
                    <Icon className="w-6 h-6" style={{ color: "#FDF8F0" }} />
                  </div>
                  
                  {/* Content */}
                  <div className="mt-8 opacity-90 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-1 text-center">
                    <h3 className="font-script text-3xl mb-3" style={{ color: "#983A4E" }}>{t.title}</h3>
                    <div className="font-serif text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "#6E4950" }}>{t.time}</div>
                    <p className="font-serif text-sm leading-relaxed max-w-[200px] mx-auto" style={{ color: "#983A4E", opacity: 0.85 }}>{t.note}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden relative border-l ml-6 pl-8 space-y-12 text-left pb-4 mt-8" style={{ borderColor: "rgba(212, 175, 55, 0.4)" }}>
            {TIMELINE_DATA.map((t, i) => (
               <div key={i} className="relative">
                 {/* Dot */}
                 <div className="absolute -left-[37.5px] top-2 h-3.5 w-3.5 rounded-full ring-4 ring-[#FDF8F0]" style={{ backgroundColor: "#983A4E" }} />
                 
                 <h3 className="font-script text-[1.75rem] leading-none" style={{ color: "#983A4E" }}>{t.title}</h3>
                 <p className="mt-3 text-sm font-medium tracking-wide" style={{ color: "#6E4950" }}>{t.date}, {t.time}</p>
                 <p className="mt-2 text-sm leading-relaxed" style={{ color: "#983A4E", opacity: 0.9 }}>{t.note}</p>
               </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Venue() {
  const q = encodeURIComponent("Diamond Banquet Hall, Mumbra, Thane");
  const lang = useLanguage();
  return (
    <section className="relative py-24 px-6 overflow-hidden" style={{ backgroundColor: "#F9EFE5" }}>
      
      {/* Decorative Top Divider */}
      <div className="absolute top-0 left-0 w-full flex justify-center items-center opacity-50 pt-8">
        <div className="w-1/4 md:w-1/3 h-[1px]" style={{ backgroundColor: "#D4AF37" }}></div>
        <div className="mx-4 md:mx-6 flex items-center gap-2">
           <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: "#D4AF37" }}></div>
           <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current mx-1" style={{ color: "#D4AF37" }} />
           <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: "#D4AF37" }}></div>
        </div>
        <div className="w-1/4 md:w-1/3 h-[1px]" style={{ backgroundColor: "#D4AF37" }}></div>
      </div>

      <div className="mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-12 mt-6">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-7 h-7" style={{ color: "#641829" }} />
            <h2 className="font-script text-[3.5rem] md:text-[4rem] leading-none" style={{ color: "#641829" }}>{t[lang].venueTitle}</h2>
          </div>
          <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase mb-4" style={{ color: "#641829" }}>
            {t[lang].venueName}
          </h3>
          <p className="text-lg mb-8 font-medium leading-relaxed max-w-[320px]" style={{ color: "#3D0B16" }}>
            {t[lang].venueAddress}
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.15em] shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#641829", color: "#FDF8F0" }}
          >
            {t[lang].viewOnMap}
          </a>
        </div>
        <div className="md:w-1/2 w-full z-10">
          <div className="overflow-hidden rounded-2xl border-[6px] shadow-2xl transition-transform hover:scale-[1.02]" style={{ borderColor: "#FDF8F0" }}>
            <iframe
              title="Venue map"
              src={`https://www.google.com/maps?q=${q}&output=embed`}
              className="h-72 md:h-80 w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const lang = useLanguage();
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden" style={{ backgroundColor: "#641829" }}>
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Divider with J&R */}
        <div className="relative flex items-center justify-center mt-4 mb-16">
          <div className="w-full h-[1px]" style={{ backgroundColor: "#E8C385", opacity: 0.4 }}></div>
          <div className="absolute w-24 h-24 rounded-full border flex items-center justify-center" style={{ backgroundColor: "#641829", borderColor: "#E8C385" }}>
            <span className="font-serif text-4xl italic font-semibold" style={{ color: "#E8C385" }}>G&amp;Y</span>
          </div>
        </div>

        {/* Thank You & Copyright */}
        <div className="text-center pb-6" style={{ color: "#FDF8F0" }}>
          <p className="font-serif text-[1.45rem] tracking-wide mb-8 leading-relaxed whitespace-pre-line">
            {t[lang].thankYou}
          </p>
          <Heart className="w-4 h-4 fill-current mx-auto" style={{ color: "#E8C385" }} />
        </div>

      </div>
    </footer>
  );
}
