import { type ReactNode } from "react";
import { cn } from "../lib/utils";

const SPLINE_SCENE =
  "https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode";

interface AnimatedProps {
  delay: string;
  className?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

function Animated({ delay, className, children, as: Tag = "div" }: AnimatedProps) {
  return (
    <Tag
      className={cn("opacity-0 animate-fade-up", className)}
      style={{ animationDelay: delay }}
    >
      {children}
    </Tag>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden">

      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,235,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,235,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)",
        }}
      />

      {/* ── Scan line ── */}
      <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
        <div
          className="absolute left-0 right-0 h-[2px] animate-scan-line"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(0,235,0,0.08), transparent)",
          }}
        />
      </div>

      {/* ── Decorative background ── */}
      <div className="absolute inset-0 z-[2] bg-hero-bg" />

      {/* ── Dark gradient overlay ── */}
      <div
        className="absolute inset-0 z-[3] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,8,8,0.96) 0%, rgba(8,8,8,0.4) 40%, rgba(8,8,8,0.1) 70%, transparent 100%), linear-gradient(to right, rgba(8,8,8,0.65) 0%, transparent 60%)",
        }}
      />

      {/* ── Noise overlay ── */}
      <div className="absolute inset-0 z-[4] pointer-events-none noise-overlay" />

      {/* ── Corner decorations ── */}
      <div className="absolute top-20 left-5 z-[5] w-14 h-14 border-t border-l border-primary/30 pointer-events-none" />
      <div className="absolute bottom-5 right-5 z-[5] w-14 h-14 border-b border-r border-primary/30 pointer-events-none" />

      {/* ── Status badge (top-right desktop) ── */}
      <div
        className="absolute top-[88px] right-16 z-10 hidden md:flex items-center gap-2 text-[0.65rem] font-medium tracking-[0.12em] uppercase text-muted-foreground opacity-0 animate-fade-in"
        style={{ animationDelay: "1.2s" }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full bg-primary"
          style={{ animation: "status-pulse 2s ease-in-out infinite" }}
        />
        Systems Active
      </div>

      {/* ── Vertical text (right side, lg+) ── */}
      <div
        className="absolute right-16 bottom-1/2 translate-y-1/2 z-10 hidden lg:block text-[0.6rem] tracking-[0.2em] uppercase text-white/15 opacity-0 animate-fade-in"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          animationDelay: "1.5s",
        }}
      >
        Columbus · OH · EST. 2019
      </div>

      {/* ── HERO CONTENT ── */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-14 pt-32">

        {/* Eyebrow */}
        <Animated delay="0.05s" className="mb-5">
          <span className="inline-flex items-center gap-2 text-[0.65rem] font-medium tracking-[0.2em] uppercase text-primary border border-primary/20 px-3.5 py-1.5 rounded-sm bg-primary/4">
            <span className="w-4 h-px bg-primary" />
            Enterprise Security Platform
          </span>
        </Animated>

        {/* H1 */}
        <Animated delay="0.2s" as="h1">
          <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-3 md:mb-4 uppercase">
            SENTINEL
            <span className="text-primary animate-flicker"> AI</span>
          </h1>
        </Animated>

        {/* Subheading */}
        <Animated delay="0.4s" as="p">
          <p className="text-foreground/80 text-[clamp(1.125rem,2.5vw,1.875rem)] font-light mb-3 md:mb-5">
            We implement security correctly.
          </p>
        </Animated>

        {/* Description */}
        <Animated delay="0.55s" as="p">
          <p className="text-muted-foreground text-[clamp(0.875rem,1.5vw,1.1rem)] font-light max-w-[520px] mb-5 md:mb-7 leading-relaxed">
            Enterprise security systems built in days. AI-powered surveillance
            deployed with zero-trust architecture. Smart access control set up
            for your entire facility. All of it done right, not just fast.
          </p>
        </Animated>

        {/* CTA Buttons */}
        <Animated delay="0.7s" className="flex flex-wrap gap-3 font-bold pointer-events-auto mb-7 md:mb-9">
          <button className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] uppercase tracking-wider font-bold font-sora">
            Book a Call
          </button>
          <button className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] uppercase tracking-wider font-bold font-sora">
            Our Work
          </button>
        </Animated>

        {/* Stats row */}
        <Animated delay="0.82s" className="flex flex-wrap items-center gap-6 pointer-events-auto">
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-foreground tracking-tight">12+</span>
            <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest">Systems Deployed</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-foreground tracking-tight">99.9%</span>
            <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest">Uptime SLA</span>
          </div>
          <div className="w-px h-8 bg-border" />
          <div className="flex flex-col gap-0.5">
            <span className="text-2xl font-bold text-foreground tracking-tight">0-Day</span>
            <span className="text-[0.65rem] text-muted-foreground uppercase tracking-widest">Breach Record</span>
          </div>
        </Animated>

        {/* Trust line */}
        <Animated delay="1s" as="p">
          <p className="text-muted-foreground/60 text-xs font-light mt-4 md:mt-5">
            Trusted security partner. Columbus, OH. 12 systems deployed.
          </p>
        </Animated>

      </div>

      {/* ── Bottom bar ── */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between px-6 md:px-10 py-4 border-t border-white/5 pointer-events-none opacity-0 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/20">
          © 2026 Sentinel AI
        </span>
        <div className="flex items-center gap-4">
          <div className="w-10 h-px bg-primary/30" />
          <span className="text-[0.6rem] tracking-[0.15em] uppercase text-white/20">
            Zero-Trust Architecture
          </span>
        </div>
      </div>

    </section>
  );
}