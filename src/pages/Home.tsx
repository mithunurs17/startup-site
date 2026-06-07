import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Menu,
  Share2,
  Globe,
  MessageCircle,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover z-0"
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <section className="relative z-10 min-h-screen flex">
        {/* LEFT PANEL */}
        <div className="w-full lg:w-[52%] p-4 lg:p-6">
          <div className="liquid-glass-strong rounded-[2rem] h-full flex flex-col p-8">
            {/* NAVBAR */}
            <nav className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-xs text-white uppercase">
                  B
                </div>
                <h2 className="text-2xl font-semibold tracking-tight text-white">
                  bloom
                </h2>
              </div>

              <button className="liquid-glass rounded-full px-5 py-3 flex items-center gap-2 hover:scale-105 transition-all">
                <Menu size={18} />
                Menu
              </button>
            </nav>

            {/* HERO */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="w-20 h-20 mb-8 rounded-3xl bg-white/10 flex items-center justify-center text-3xl text-white">
                B
              </div>

              <h1 className="text-6xl lg:text-7xl font-medium tracking-[-0.05em] leading-[0.95] text-white max-w-xl">
                Innovating the
                <br />
                spirit of{" "}
                <span className="font-serif italic text-white/80">
                  bloom AI
                </span>
              </h1>

              <button className="liquid-glass-strong mt-10 rounded-full px-8 py-4 flex items-center gap-4 w-fit hover:scale-105 active:scale-95 transition-all">
                Explore Now

                <span className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <Download size={16} />
                </span>
              </button>

              <div className="flex flex-wrap gap-3 mt-10">
                {[
                  "Artistic Gallery",
                  "AI Generation",
                  "3D Structures",
                ].map((item) => (
                  <div
                    key={item}
                    className="liquid-glass rounded-full px-4 py-2 text-xs text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* QUOTE */}
            <div className="space-y-4">
              <p className="uppercase tracking-[0.3em] text-xs text-white/50">
                Visionary Design
              </p>

              <h3 className="text-xl text-white/90">
                We imagined a{" "}
                <span className="font-serif italic">realm</span>
                {" "}with no{" "}
                <span className="font-serif italic">ending</span>.
              </h3>

              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-white/20" />

                <span className="text-xs tracking-[0.3em] text-white/60">
                  MARCUS AURELIO
                </span>

                <div className="h-px flex-1 bg-white/20" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="hidden lg:flex w-[48%] p-6">
          <div className="h-full flex flex-col w-full">
            {/* TOP BAR */}
            <div className="flex justify-end gap-4">
              <div className="liquid-glass rounded-full px-4 py-3 flex items-center gap-4">
                <Share2 size={18} />
                <Globe size={18} />
                <MessageCircle size={18} />
                <ArrowRight size={18} />
              </div>

              <button className="liquid-glass rounded-full p-3 hover:scale-105 transition-all">
                <Sparkles size={18} />
              </button>
            </div>

            {/* COMMUNITY CARD */}
            <div className="mt-12">
              <div className="liquid-glass rounded-3xl p-6 w-56">
                <h3 className="text-white text-lg">
                  Enter our ecosystem
                </h3>

                <p className="text-white/60 text-sm mt-2">
                  Connect with creators building future botanical experiences.
                </p>
              </div>
            </div>

            {/* BOTTOM SECTION */}
            <div className="mt-auto liquid-glass-strong rounded-[2.5rem] p-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="liquid-glass rounded-3xl p-6">
                  <Wand2 size={22} />
                  <h4 className="mt-4 text-white">
                    Processing
                  </h4>
                </div>

                <div className="liquid-glass rounded-3xl p-6">
                  <BookOpen size={22} />
                  <h4 className="mt-4 text-white">
                    Growth Archive
                  </h4>
                </div>
              </div>

              <div className="liquid-glass rounded-3xl mt-4 p-4 flex items-center gap-4">
                <div className="w-24 h-16 rounded-2xl bg-white/10" />

                <div className="flex-1">
                  <h4 className="text-white">
                    Advanced Plant Sculpting
                  </h4>

                  <p className="text-white/60 text-sm">
                    AI-assisted floral architecture.
                  </p>
                </div>

                <button className="w-10 h-10 rounded-full bg-white/10 hover:scale-105 transition-all">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}