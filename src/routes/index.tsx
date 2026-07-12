import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Heart, MapPin, Clock, PartyPopper, Bus, BedDouble, Gift, Send, ChevronDown, CalendarDays, Users, Camera, Wine, Instagram, Facebook, MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";

export const Route = createFileRoute("/")({
  component: Invitation,
});

const WEDDING_DATE = new Date("2026-06-30T10:20:00");

const GALLERY = [
  "/gallery/gallery-1.png",
  "/gallery/gallery-2.png",
  "/gallery/gallery-3.jpg",
  "/gallery/gallery-4.jpg",
];

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

  const handleOpen = () => {
    if (sealing) return;
    setSealing(true);
    setTimeout(() => setOpened(true), 1400);
  };

  return (
    <>
      {(sealing || opened) && <InvitationBody />}
      {!opened && (
        <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden={sealing}>
          {/* Left gate */}
          <div
            className={`absolute inset-y-0 left-0 w-1/2 pointer-events-auto transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${sealing ? "-translate-x-full" : "translate-x-0"}`}
            style={{
              background: "linear-gradient(90deg, oklch(0.92 0.04 20), oklch(0.96 0.02 25))",
              boxShadow: "inset -12px 0 30px -12px rgba(153,40,66,0.25)",
            }}
          >
            <div className="absolute inset-y-0 right-0 w-px bg-rose/30" />
          </div>

          {/* Right gate */}
          <div
            className={`absolute inset-y-0 right-0 w-1/2 pointer-events-auto transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${sealing ? "translate-x-full" : "translate-x-0"}`}
            style={{
              background: "linear-gradient(270deg, oklch(0.92 0.04 20), oklch(0.96 0.02 25))",
              boxShadow: "inset 12px 0 30px -12px rgba(153,40,66,0.25)",
            }}
          >
            <div className="absolute inset-y-0 left-0 w-px bg-rose/30" />
          </div>

          {/* Title above the seal */}
          <div className={`absolute top-32 inset-x-0 text-center transition-opacity duration-500 ${sealing ? "opacity-0" : "opacity-100"}`}>
            <p className="font-script text-4xl md:text-5xl text-rose-deep">You're Invited</p>
          </div>

          {/* Center seal - sits on the seam */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={handleOpen}
              aria-label="Tap the seal to open"
              className={`pointer-events-auto relative h-24 w-24 rounded-full text-white transition-all duration-700 ease-out ${sealing ? "scale-50 opacity-0" : "seal-anim hover:scale-105"}`}
              style={{
                background: "radial-gradient(circle at 30% 30%, oklch(0.7 0.15 15), oklch(0.45 0.14 15) 70%, oklch(0.35 0.12 15))",
              }}
            >
              <span className="absolute inset-2 rounded-full border border-white/40" />
              <span className="absolute inset-4 rounded-full border border-white/25" />
              <span className="relative flex flex-col items-center justify-center h-full">
                <Heart className="h-4 w-4 fill-white mb-0.5" />
                <span className="text-[8px] tracking-[0.25em] font-sans">TAP TO OPEN</span>
              </span>
            </button>
          </div>

          {/* Bottom hint */}
          <div className={`absolute bottom-16 inset-x-0 text-center transition-opacity duration-500 ${sealing ? "opacity-0" : "opacity-100"}`}>
            <p className="font-script text-xl text-rose-deep/80">tap the seal to open</p>
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
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Welcome />
      <ScratchSection />
      <Gallery />
      <Countdown />
      <Timeline />
      <Venue />
      <Footer />
    </main>
  );
}

function Hero() {
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
          {/* Soft gradient at top for text readability */}
          <div style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            height: "40%",
            background: "linear-gradient(to bottom, oklch(0.96 0.02 25) 0%, oklch(0.96 0.02 25 / 0.85) 45%, oklch(0.96 0.02 25 / 0.3) 80%, transparent 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }} />
          {/* Text overlaid at the TOP */}
          <div
            className="hero-fade"
            style={{
              position: "absolute",
              top: "1.5rem",
              left: 0,
              right: 0,
              textAlign: "center",
              zIndex: 10,
              padding: "0 1.5rem",
            }}
          >
            <p style={{ letterSpacing: "0.35em", fontSize: "0.65rem", textTransform: "uppercase", color: "oklch(0.4 0.04 20 / 0.8)", marginBottom: "0.3rem" }}>
              The Wedding Of
            </p>
            <h1
              className="font-script"
              style={{ fontSize: "3rem", lineHeight: 1.05, color: "oklch(0.32 0.15 20)", margin: "0.15rem 0" }}
            >
              Jack &amp; Rose
            </h1>
            <div className="divider-heart" style={{ color: "oklch(0.6 0.13 40)", margin: "0.35rem 0" }}>
              <Heart className="h-3 w-3 fill-current" />
            </div>
            <p style={{ letterSpacing: "0.38em", fontSize: "0.65rem", textTransform: "uppercase", color: "oklch(0.55 0.13 60)" }}>
              Forever Together
            </p>
          </div>
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
        <div className="hero-fade" style={{ position: "relative", zIndex: 10, width: "50%", maxWidth: "28rem", textAlign: "center", padding: "4rem 2rem 4rem 4rem", margin: "0 auto" }}>
          <p style={{ letterSpacing: "0.35em", fontSize: "0.8rem", textTransform: "uppercase", color: "oklch(0.45 0.03 20 / 0.7)" }}>
            The Wedding Of
          </p>
          <h1
            className="font-script"
            style={{ fontSize: "5rem", lineHeight: 1, color: "oklch(0.35 0.14 20)", marginTop: "1.5rem" }}
          >
            Jack &amp; Rose
          </h1>
          <div className="divider-heart" style={{ color: "oklch(0.6 0.13 40)", margin: "1.5rem 0" }}>
            <Heart className="h-3 w-3 fill-current" />
          </div>
          <p style={{ letterSpacing: "0.4em", fontSize: "0.8rem", textTransform: "uppercase", color: "oklch(0.6 0.13 60)" }}>
            Forever Together
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

function Welcome() {
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
          Welcome
        </h2>
        
        <p
          className="font-serif text-[0.95rem] md:text-lg leading-[2] md:leading-loose max-w-lg"
          style={{ color: "oklch(0.25 0.05 20)" }}
        >
          We are honored to welcome you to<br />
          the wedding ceremony of Jack &amp; Rose<br />
          as they begin their journey together in<br />
          faith and love.
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
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [shower, setShower] = useState(false);
  const drawing = useRef(false);
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
    ctx.fillText("✦  Scratch to Reveal  ✦", rect.width / 2, rect.height / 2);
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
      setTimeout(() => setRevealed(true), 600);
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
            Scratch to Reveal
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
              <p className="font-script" style={{ fontSize: "1.5rem", color: "#7a2040", marginBottom: "0.25rem" }}>You're Invited!</p>
              <p className="font-serif" style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2a0a14", letterSpacing: "0.05em" }}>JUNE 30, 2026</p>
              <p style={{ fontSize: "0.8rem", letterSpacing: "0.2em", color: "#7a2040", textTransform: "uppercase", margin: "0.2rem 0" }}>Tuesday</p>
              <p style={{ fontSize: "0.85rem", letterSpacing: "0.15em", color: "#7a2040" }}>10:20 AM</p>
            </div>
            {/* Gold scratch canvas */}
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 h-full w-full touch-none cursor-pointer transition-opacity duration-700 ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
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
  const cells = [
    { label: "DAYS", value: d },
    { label: "HOURS", value: h },
    { label: "MINUTES", value: m },
    { label: "SECONDS", value: s },
  ];
  return (
    <section className="relative w-full py-16 overflow-hidden" style={{ backgroundColor: "#641829" }}>
      {/* Subtle overlay to give a rich, velvety texture to the maroon background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-5xl text-center px-2 sm:px-4">
        <h2 className="font-script text-4xl md:text-[3.25rem] tracking-wide" style={{ color: "#E8C385" }}>
          Counting Down to Forever
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

const TIMELINE = [
  { title: "Guest Arrival", date: "Jun 30, 2026", time: "10:00 AM", note: "We welcome you!", icon: Users },
  { title: "Wedding Ceremony", date: "Jun 30, 2026", time: "10:20 AM", note: "Your presence is special ❤", icon: RingsIcon },
  { title: "Photo Session", date: "Jun 30, 2026", time: "5:00 PM", note: "Capture the best moments", icon: Camera },
  { title: "Reception", date: "Jul 02, 2026", time: "7:30 PM", note: "Let's celebrate together!", icon: Wine },
];

function Timeline() {
  return (
    <section className="py-24 px-6 overflow-hidden" style={{ backgroundColor: "#FDF8F0" }}>
      <div className="mx-auto max-w-6xl text-center">
        
        {/* Mobile Title */}
        <div className="flex flex-col items-center justify-center md:hidden mb-12">
           <div className="w-10 h-10 rounded-full border flex items-center justify-center mb-4" style={{ borderColor: "#D4AF37" }}>
             <Clock className="w-5 h-5" style={{ color: "#983A4E" }} />
           </div>
           <h2 className="font-script text-[2.5rem]" style={{ color: "#983A4E" }}>Program Timeline</h2>
           <div className="flex items-center justify-center gap-4 mt-5">
              <div className="h-[1px] w-12" style={{ backgroundColor: "#D4AF37", opacity: 0.6 }}></div>
              <Heart className="w-3 h-3 fill-current" style={{ color: "#D4AF37" }} />
              <div className="h-[1px] w-12" style={{ backgroundColor: "#D4AF37", opacity: 0.6 }}></div>
           </div>
        </div>

        {/* Desktop Title */}
        <div className="hidden md:flex flex-col items-center justify-center mb-20">
           <div className="flex items-center justify-center gap-6">
             <div className="flex items-center gap-3">
               <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: "#D4AF37" }}></div>
               <div className="w-20 h-[1px]" style={{ backgroundColor: "#D4AF37" }}></div>
               <div className="text-xl leading-none -mt-1" style={{ color: "#D4AF37" }}>›</div>
             </div>
             
             <h2 className="font-script text-[3.25rem] -mt-3" style={{ color: "#983A4E" }}>Program Timeline</h2>
             
             <div className="flex items-center gap-3">
               <div className="text-xl leading-none -mt-1" style={{ color: "#D4AF37" }}>‹</div>
               <div className="w-20 h-[1px]" style={{ backgroundColor: "#D4AF37" }}></div>
               <div className="w-1.5 h-1.5 rotate-45 border" style={{ borderColor: "#D4AF37" }}></div>
             </div>
           </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative w-full mt-10">
          {/* Horizontal Line */}
          <div className="absolute top-[28px] left-[12%] right-[12%] h-[1px] border-t-2 border-dotted" style={{ borderColor: "#D4AF37", opacity: 0.5 }}></div>
          
          <div className="relative flex justify-between w-full">
            {TIMELINE.map((t, i) => {
              const Icon = t.icon;
              return (
                <div key={i} className="flex flex-col items-center w-1/4 relative px-4">
                  {/* Circle on line */}
                  <div className="z-10 w-14 h-14 rounded-full flex items-center justify-center shadow-md relative" style={{ backgroundColor: "#983A4E" }}>
                     <div className="absolute inset-1 rounded-full border border-white/20"></div>
                     <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mt-8 text-center">
                    <h3 className="font-serif text-[1.15rem] font-semibold" style={{ color: "#983A4E" }}>{t.title}</h3>
                    <p className="mt-4 text-sm font-medium tracking-wide" style={{ color: "#6E4950" }}>{t.date}</p>
                    <p className="text-sm font-bold mt-1" style={{ color: "#6E4950" }}>{t.time}</p>
                    <p className="mt-4 text-sm leading-relaxed max-w-[200px] mx-auto" style={{ color: "#983A4E", opacity: 0.9 }}>{t.note}</p>
                  </div>
                </div>
              );
            })}
            
            {/* intermediate dots on line */}
            <div className="absolute top-[28px] left-[25%] w-2.5 h-2.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-sm" style={{ backgroundColor: "#E8C385" }}></div>
            <div className="absolute top-[28px] left-[50%] w-2.5 h-2.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-sm" style={{ backgroundColor: "#E8C385" }}></div>
            <div className="absolute top-[28px] left-[75%] w-2.5 h-2.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-sm" style={{ backgroundColor: "#E8C385" }}></div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden relative border-l ml-6 pl-8 space-y-12 text-left pb-4 mt-8" style={{ borderColor: "rgba(212, 175, 55, 0.4)" }}>
          {TIMELINE.map((t, i) => (
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
    </section>
  );
}

function Venue() {
  const q = encodeURIComponent("Royal Palm Banquet, Lahore, Pakistan");
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
            <h2 className="font-script text-[3.5rem] md:text-[4rem] leading-none" style={{ color: "#641829" }}>Venue</h2>
          </div>
          <h3 className="font-serif text-xl md:text-2xl tracking-[0.2em] uppercase mb-4" style={{ color: "#641829" }}>
            Royal Palm Banquet
          </h3>
          <p className="text-lg mb-8 font-medium leading-relaxed max-w-[320px]" style={{ color: "#3D0B16" }}>
            123, Palm Avenue, Garden City, Lahore, Pakistan
          </p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${q}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full px-8 py-3.5 text-sm font-semibold tracking-[0.15em] shadow-lg transition-transform hover:scale-105"
            style={{ backgroundColor: "#641829", color: "#FDF8F0" }}
          >
            VIEW ON MAP
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
  return (
    <footer className="relative pt-20 pb-10 px-6 overflow-hidden" style={{ backgroundColor: "#641829" }}>
      <div className="mx-auto max-w-5xl relative z-10">
        
        {/* Divider with J&R */}
        <div className="relative flex items-center justify-center mt-4 mb-16">
          <div className="w-full h-[1px]" style={{ backgroundColor: "#E8C385", opacity: 0.4 }}></div>
          <div className="absolute w-24 h-24 rounded-full border flex items-center justify-center" style={{ backgroundColor: "#641829", borderColor: "#E8C385" }}>
            <span className="font-serif text-4xl italic font-semibold" style={{ color: "#E8C385" }}>J&amp;R</span>
          </div>
        </div>

        {/* Thank You & Copyright */}
        <div className="text-center pb-2" style={{ color: "#FDF8F0" }}>
          <p className="font-serif text-[1.45rem] tracking-wide mb-10 leading-relaxed">
            Thank you for being a part of our<br/>special day
          </p>
          <Heart className="w-4 h-4 fill-current mx-auto mb-10" style={{ color: "#E8C385" }} />
          <p className="text-[0.7rem] tracking-[0.2em] opacity-80 uppercase leading-loose max-w-[350px] mx-auto">
            © 2026 Jack &amp; Rose Wedding. All Rights<br/>Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
