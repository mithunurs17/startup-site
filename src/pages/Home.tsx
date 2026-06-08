import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const LOGOS = ['Vortex', 'Nimbus', 'Prysma', 'Cirrus', 'Kynder', 'Halcyn'];

function LogoItem({ name }: { name: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', flexShrink: 0 }}>
      <div
        className="liquid-glass"
        style={{
          width: 32,
          height: 32,
          borderRadius: '0.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '0.8125rem',
          fontWeight: 700,
          color: 'hsl(var(--foreground) / 0.7)',
          fontFamily: '"General Sans", sans-serif',
        }}
      >
        {name[0]}
      </div>
      <span style={{ fontSize: '1rem', fontWeight: 600, color: 'hsl(var(--foreground) / 0.6)', whiteSpace: 'nowrap' }}>
        {name}
      </span>
    </div>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let rafId: number;
    let fadeOutStarted = false;

    const FADE_IN_DURATION = 0.5;
    const FADE_OUT_DURATION = 0.5;

    function tick() {
      if (!video) return;
      const t = video.currentTime;
      const dur = video.duration || 0;

      // Fade in
      if (t < FADE_IN_DURATION) {
        video.style.opacity = String(t / FADE_IN_DURATION);
      }
      // Fade out
      else if (dur > 0 && t > dur - FADE_OUT_DURATION) {
        const remaining = dur - t;
        video.style.opacity = String(remaining / FADE_OUT_DURATION);
        fadeOutStarted = true;
      } else {
        video.style.opacity = '1';
        fadeOutStarted = false;
      }

      rafId = requestAnimationFrame(tick);
    }

    const handlePlay = () => {
      video.style.opacity = '0';
      fadeOutStarted = false;
      rafId = requestAnimationFrame(tick);
    };

    const handleEnded = () => {
      cancelAnimationFrame(rafId);
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
      }, 100);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);
    video.style.opacity = '0';
    video.play().catch(() => {});

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const marqueeItems = [...LOGOS, ...LOGOS];

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: 0,
          zIndex: 0,
        }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_065045_c44942da-53c6-4804-b734-f9e07fc22e08.mp4"
          type="video/mp4"
        />
      </video>

      {/* Blurred overlay shape */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 984,
          height: 527,
          opacity: 0.9,
          background: 'hsl(220 10% 4%)',
          filter: 'blur(82px)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* Hero content (spaced for site header) */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', minHeight: '100vh', overflow: 'visible', paddingTop: '3.5rem' }}>

        {/* ── Hero body ── */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', maxWidth: 900 }}>
            {/* Eyebrow */}
            <div style={{ marginBottom: '2rem' }}>
              <span className="section-pill">Premium Agricultural Exports</span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: '"General Sans", sans-serif',
              fontSize: 'clamp(4rem, 12vw, 11rem)',
              fontWeight: 400,
              lineHeight: 1.02,
              letterSpacing: '-0.024em',
              color: 'hsl(var(--foreground))',
              marginBottom: '1.5rem',
            }}>
              <span>LIAM</span>
              {' '}
              <span style={{
                backgroundImage: 'linear-gradient(to left, #6366f1, #a855f7, #fcd34d)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Fresh
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              color: 'hsl(var(--hero-sub))',
              fontSize: '1.125rem',
              lineHeight: 2,
              maxWidth: '28rem',
              margin: '0 auto',
              opacity: 0.8,
            }}>
              Premium ginger & spice exports<br/>trusted by buyers across continents
            </p>

          </div>
        </div>

        {/* ── Logo marquee ── */}
        <div style={{ paddingBottom: '2.5rem', paddingTop: '1rem' }}>
          <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', gap: '3rem' }}>
            {/* Static text */}
            <div style={{ flexShrink: 0, fontSize: '0.875rem', color: 'hsl(var(--foreground) / 0.5)', lineHeight: 1.5, minWidth: 140 }}>
              Relied on by brands<br />across the globe
            </div>

            {/* Scrolling logos */}
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
              <div style={{ display: 'flex', gap: '4rem', width: 'max-content' }} className="animate-marquee">
                {marqueeItems.map((name, i) => (
                  <LogoItem key={`${name}-${i}`} name={name} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}