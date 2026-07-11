import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Heart, MapPin, Clock, PartyPopper, Bus, BedDouble, Gift, Send, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Route = createFileRoute("/")({
  component: Invitation,
});

const WEDDING_DATE = new Date("2026-06-30T10:20:00");

const GALLERY = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=900&h=600&fit=crop",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?w=900&h=600&fit=crop",
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
      <DressCode />
      <PreWedding />
      <InfoCards />
      <Gifts />
      <RSVPForm />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center px-6 py-16 overflow-hidden bg-blush-soft">
      <img
        src={heroBg}
        alt="Jack and Rose wedding"
        width={1600}
        height={1008}
        className="hero-fade absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center"
      />
      <div className="fade-up relative z-10 w-full md:w-1/2 max-w-md md:pl-8 lg:pl-16 text-center">
        <p className="tracking-[0.35em] text-xs md:text-sm uppercase text-foreground/70">
          The Wedding Of
        </p>
        <h1
          className="font-script text-6xl md:text-7xl lg:text-8xl leading-none mt-6"
          style={{ color: "oklch(0.35 0.14 20)" }}
        >
          Jack &amp; Rose
        </h1>
        <div className="divider-heart my-6" style={{ color: "oklch(0.6 0.13 40)" }}>
          <Heart className="h-3 w-3 fill-current" />
        </div>
        <p
          className="tracking-[0.4em] text-xs md:text-sm uppercase"
          style={{ color: "oklch(0.6 0.13 60)" }}
        >
          Forever Together
        </p>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center text-rose-deep/70 float-y">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="bg-blush-soft py-20 px-6">
      <div className="mx-auto max-w-xl text-center">
        <WaveDivider />
        <p className="font-serif italic text-xl md:text-2xl leading-relaxed text-foreground/80 my-10">
          We are honored to welcome you to the Wedding ceremony of Jack &amp; Rose As they begin their journey together in faith and love,
          we thank you for being part of this blessed occasion <Heart className="inline h-4 w-4 fill-foreground/80" />
        </p>
        <WaveDivider />
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
    ctx.font = "600 20px 'Inter', sans-serif";
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
    ctx.arc(x - rect.left, y - rect.top, 35, 0, Math.PI * 2);
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
    <section className="bg-blush py-20 px-6">
      <SectionTitle>Scratch to Reveal</SectionTitle>
      <div className="relative mx-auto mt-8 w-full max-w-sm aspect-[16/10] rounded-2xl overflow-hidden shadow-xl">
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-center px-6"
             style={{ background: "linear-gradient(135deg, #fff 0%, oklch(0.96 0.02 20) 100%)" }}>
          <p className="font-hand text-3xl text-rose-deep">You're Invited!</p>
          <p className="font-serif text-2xl mt-2">June 30, 2026</p>
          <p className="text-sm text-muted-foreground mt-1">Tuesday</p>
          <p className="font-serif text-xl mt-2 text-rose">10:20 AM</p>
        </div>
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 h-full w-full touch-none cursor-pointer transition-opacity duration-700 ${revealed ? "opacity-0 pointer-events-none" : "opacity-100"}`}
          onPointerDown={(e) => { drawing.current = true; scratch(e.clientX, e.clientY); }}
          onPointerMove={(e) => drawing.current && scratch(e.clientX, e.clientY)}
          onPointerUp={() => (drawing.current = false)}
          onPointerLeave={() => (drawing.current = false)}
        />
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
    { label: "Days", value: d },
    { label: "Hours", value: h },
    { label: "Minutes", value: m },
    { label: "Seconds", value: s },
  ];
  return (
    <section className="bg-blush py-20 px-6">
      <SectionTitle>Counting Down to Forever</SectionTitle>
      <div className="mx-auto mt-8 grid max-w-md grid-cols-4 gap-3">
        {cells.map((c) => (
          <div key={c.label} className="flex flex-col items-center rounded-xl bg-white/70 backdrop-blur p-4 shadow-sm">
            <span className="font-serif text-3xl md:text-4xl font-semibold text-foreground tabular-nums">
              {String(c.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{c.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

const TIMELINE = [
  { title: "Guest Arrival", when: "Jun 30, 2026, 10:00 AM", note: "We welcome you..!" },
  { title: "Wedding Ceremony", when: "Jun 30, 2026, 10:20 AM", note: "Your gracious presence is requested ❤" },
  { title: "Reception", when: "Jul 2, 2026, 7:30 PM", note: "Your gracious presence is requested at the Reception at 7:30 PM onwards." },
];

function Timeline() {
  return (
    <section className="bg-blush-soft py-20 px-6">
      <SectionTitle icon={Clock}>Program Timeline</SectionTitle>
      <ol className="mx-auto mt-10 max-w-md space-y-8 border-l-2 border-rose/30 pl-6">
        {TIMELINE.map((t) => (
          <li key={t.title} className="relative">
            <span className="absolute -left-[33px] top-1 h-4 w-4 rounded-full bg-rose ring-4 ring-blush-soft" />
            <h3 className="font-hand text-2xl text-rose-deep">{t.title}</h3>
            <p className="mt-1 text-foreground">{t.when}</p>
            <p className="mt-1 text-sm text-muted-foreground">{t.note}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Venue() {
  const q = encodeURIComponent("Grand Palace Hall, 123, Abc Road, Xyz City");
  return (
    <section className="bg-blush py-20 px-6">
      <SectionTitle icon={MapPin}>Venue</SectionTitle>
      <div className="mx-auto mt-6 max-w-md text-center">
        <h3 className="font-serif text-2xl font-semibold">Grand Palace Hall</h3>
        <p className="mt-2 text-muted-foreground">123, Abc Road, Xyz City</p>
        <div className="mt-6 overflow-hidden rounded-2xl border border-rose/20 shadow-md">
          <iframe
            title="Venue map"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            className="h-64 w-full"
            loading="lazy"
          />
        </div>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-rose px-6 py-3 text-sm font-medium text-white shadow-md transition hover:bg-rose-deep"
        >
          <MapPin className="h-4 w-4" /> View on Google Maps
        </a>
      </div>
    </section>
  );
}

function DressCode() {
  return (
    <section className="bg-blush-soft py-20 px-6">
      <SectionTitle>Dress Code</SectionTitle>
      <div className="mx-auto mt-8 grid max-w-md gap-6 sm:grid-cols-2">
        {[
          { t: "Women", d: "Elegant formal attire in pastel or jewel tones" },
          { t: "Men", d: "Suit or traditional formal wear" },
        ].map((x) => (
          <div key={x.t} className="rounded-2xl bg-white/70 p-6 text-center shadow-sm">
            <h3 className="font-hand text-2xl text-rose-deep">{x.t}</h3>
            <div className="mx-auto my-3 h-px w-10 bg-rose/40" />
            <p className="text-sm text-muted-foreground leading-relaxed">{x.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const PRE = [
  { t: "Mahendi", w: "Jun 27, 2026, 9:30 PM", l: "At Bride's Home" },
  { t: "Haldi", w: "Jun 28, 2026, 8:30 PM", l: "At Groom's Home" },
  { t: "Sangeet", w: "Jun 29, 2026, 9:30 PM", l: "At Grand Palace Hall" },
];

function PreWedding() {
  return (
    <section className="bg-blush py-20 px-6">
      <SectionTitle icon={PartyPopper}>Pre-Wedding Events</SectionTitle>
      <div className="mx-auto mt-8 max-w-md space-y-4">
        {PRE.map((e) => (
          <div key={e.t} className="rounded-2xl bg-white/70 p-6 text-center shadow-sm">
            <h3 className="font-hand text-2xl text-rose-deep">{e.t}</h3>
            <p className="mt-1 font-serif text-lg">{e.w}</p>
            <p className="text-sm text-muted-foreground">{e.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function InfoCards() {
  return (
    <section className="bg-blush-soft py-20 px-6">
      <div className="mx-auto grid max-w-md gap-6">
        <InfoCard icon={Bus} title="Transportation">
          Shuttle service will be available from the city center to the venue. Pickup point: Central Station at 9:30 AM.
        </InfoCard>
        <InfoCard icon={BedDouble} title="Accommodation">
          Special rates at The Grand Palace Hall (5 min from venue). Use code <span className="font-semibold text-rose-deep">WEDDING2026</span> when booking.
        </InfoCard>
      </div>
    </section>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-white/80 p-6 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-rose/10 text-rose">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="font-hand text-2xl text-rose-deep">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function Gifts() {
  return (
    <section className="bg-blush py-20 px-6 text-center">
      <SectionTitle icon={Gift}>Gifts</SectionTitle>
      <p className="mx-auto mt-4 max-w-md font-serif italic text-lg text-foreground/80">
        Your love, blessings, and presence are the greatest gifts we could ever ask for.
      </p>
    </section>
  );
}

function RSVPForm() {
  const [sent, setSent] = useState(false);
  return (
    <section className="bg-blush-soft py-20 px-6">
      <SectionTitle icon={Send}>Send a Message</SectionTitle>
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="mx-auto mt-6 max-w-md space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm"
      >
        <Field label="Your Name">
          <input required className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:border-rose focus:outline-none" />
        </Field>
        <Field label="Email">
          <input type="email" required className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:border-rose focus:outline-none" />
        </Field>
        <Field label="Will you be attending?">
          <select required className="w-full rounded-lg border border-border bg-white px-4 py-3 focus:border-rose focus:outline-none">
            <option value="">Select...</option>
            <option>Yes, I'll be there!</option>
            <option>Sorry, I can't make it</option>
          </select>
        </Field>
        <Field label="Your Message">
          <textarea rows={4} className="w-full resize-none rounded-lg border border-border bg-white px-4 py-3 focus:border-rose focus:outline-none" />
        </Field>
        <button
          type="submit"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-rose px-6 py-3 font-medium text-white shadow-md transition hover:bg-rose-deep"
        >
          <Send className="h-4 w-4" /> {sent ? "Message Sent ❤" : "Send Message"}
        </button>
      </form>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-foreground/80">{label}</span>
      {children}
    </label>
  );
}

function Footer() {
  return (
    <footer className="bg-plum text-white/90 py-16 px-6 text-center">
      <p className="font-hand text-2xl">We can't wait to celebrate with you!</p>
      <h3 className="mt-4 font-script text-6xl" style={{ color: "oklch(0.8 0.13 85)" }}>Jack &amp; Rose</h3>
      <div className="divider-heart mt-6 text-white/40">
        <Heart className="h-3 w-3 fill-current" />
      </div>
      <p className="mt-4 text-xs tracking-[0.3em] uppercase text-white/50">Test Mode</p>
    </footer>
  );
}
