import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Point = { id: string; x: number; y: number };

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function HeroTrustToy({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [cursor, setCursor] = useState<{ x: number; y: number } | null>(null);
  const [stitched, setStitched] = useState<Record<string, boolean>>({});

  const points: Point[] = useMemo(
    () => [
      { id: 'p1', x: 0.18, y: 0.52 },
      { id: 'p2', x: 0.36, y: 0.30 },
      { id: 'p3', x: 0.52, y: 0.60 },
      { id: 'p4', x: 0.68, y: 0.36 },
      { id: 'p5', x: 0.84, y: 0.55 },
    ],
    []
  );

  useEffect(() => {
    if (reduceMotion) return;
    const el = hostRef.current;
    if (!el) return;

    const toLocal = (clientX: number, clientY: number) => {
      const r = el.getBoundingClientRect();
      const x = clamp((clientX - r.left) / r.width, 0, 1);
      const y = clamp((clientY - r.top) / r.height, 0, 1);
      return { x, y };
    };

    const onPointerDown = (e: PointerEvent) => {
      (e.currentTarget as HTMLElement)?.setPointerCapture?.(e.pointerId);
      setIsActive(true);
      setCursor(toLocal(e.clientX, e.clientY));
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!isActive) return;
      setCursor(toLocal(e.clientX, e.clientY));
    };
    const onPointerUp = () => {
      setIsActive(false);
    };

    el.addEventListener('pointerdown', onPointerDown);
    el.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);

    return () => {
      el.removeEventListener('pointerdown', onPointerDown);
      el.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
    };
  }, [isActive, reduceMotion]);

  useEffect(() => {
    if (!cursor || reduceMotion) return;
    const hitRadius = 0.06; // normalized
    for (const p of points) {
      if (stitched[p.id]) continue;
      const dx = cursor.x - p.x;
      const dy = cursor.y - p.y;
      if (dx * dx + dy * dy <= hitRadius * hitRadius) {
        setStitched((prev) => ({ ...prev, [p.id]: true }));
      }
    }
  }, [cursor, points, reduceMotion, stitched]);

  const stitchedPoints = points.filter((p) => stitched[p.id]);
  const pathD =
    stitchedPoints.length >= 2
      ? `M ${stitchedPoints
          .map((p) => `${Math.round(p.x * 1000) / 10},${Math.round(p.y * 1000) / 10}`)
          .join(' L ')}`
      : '';

  const needle = cursor ?? { x: 0.52, y: 0.46 };
  const needleAngle = isActive ? 18 : 0;

  return (
    <div
      ref={hostRef}
      className={[
        'relative w-full max-w-[720px] mx-auto',
        'rounded-2xl border border-border/60 bg-background/40 backdrop-blur-sm',
        'px-4 py-3 sm:px-6 sm:py-4',
        'select-none',
        // allow interaction but keep it feeling light
        'touch-pan-y',
        className ?? '',
      ].join(' ')}
      aria-label="Interactive stitching toy"
      role="application"
    >
      <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
        <span className="hidden sm:inline">Drag to stitch the points</span>
        <button
          type="button"
          className="text-xs font-medium text-foreground/80 hover:text-foreground transition-colors"
          onClick={() => setStitched({})}
        >
          Reset
        </button>
      </div>

      <div className="relative mt-2 h-16 sm:h-20">
        {/* thread + points */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="toyThread" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="hsl(var(--primary) / 0.0)" />
              <stop offset="0.25" stopColor="hsl(var(--primary) / 0.65)" />
              <stop offset="0.65" stopColor="hsl(var(--gold-light) / 0.65)" />
              <stop offset="1" stopColor="hsl(var(--gold-light) / 0.0)" />
            </linearGradient>
            <filter id="toyGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {pathD && (
            <path
              d={pathD}
              fill="none"
              stroke="url(#toyThread)"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeDasharray="6 8"
              filter="url(#toyGlow)"
            />
          )}

          {points.map((p) => {
            const done = !!stitched[p.id];
            return (
              <g key={p.id} transform={`translate(${p.x * 100},${p.y * 100})`}>
                <circle r="3.8" fill={done ? 'hsl(var(--primary))' : 'hsl(var(--foreground) / 0.25)'} />
                <circle
                  r="7.5"
                  fill="transparent"
                  stroke={done ? 'hsl(var(--gold-light) / 0.55)' : 'hsl(var(--foreground) / 0.18)'}
                  strokeWidth="1.2"
                />
                {done && <circle r="12" fill="hsl(var(--gold-light) / 0.12)" />}
              </g>
            );
          })}
        </svg>

        {/* needle */}
        <motion.div
          className="absolute"
          style={{
            left: `${needle.x * 100}%`,
            top: `${needle.y * 100}%`,
            transform: `translate(-50%, -50%) rotate(${needleAngle}deg)`,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  filter: isActive ? 'drop-shadow(0 0 18px rgba(255, 210, 90, 0.55))' : 'drop-shadow(0 0 10px rgba(255, 210, 90, 0.35))',
                }
          }
          transition={{ duration: 0.15 }}
        >
          <svg width="54" height="20" viewBox="0 0 54 20" aria-hidden="true">
            <defs>
              <linearGradient id="needleGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0" stopColor="hsl(var(--gold-light) / 0.95)" />
                <stop offset="0.5" stopColor="hsl(var(--primary) / 0.9)" />
                <stop offset="1" stopColor="hsl(var(--gold-dark) / 0.95)" />
              </linearGradient>
            </defs>
            <path d="M4 10 L48 10" stroke="url(#needleGold)" strokeWidth="5.5" strokeLinecap="round" />
            <path d="M46 10 L52 7.5 L52 12.5 Z" fill="hsl(var(--foreground) / 0.85)" />
            <circle cx="6.5" cy="10" r="3" fill="hsl(var(--background))" stroke="hsl(var(--foreground) / 0.45)" />
            <circle cx="6.5" cy="10" r="1.1" fill="hsl(var(--primary))" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

