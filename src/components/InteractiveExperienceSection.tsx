import { useEffect, useState } from 'react';
import { Bot, RotateCcw, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';

type Status = 'idle' | 'playing' | 'done';

const SLOTS = 5;
const ROUND_MS = 18000;

export function InteractiveExperienceSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [score, setScore] = useState(0);
  const [activeSlot, setActiveSlot] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(ROUND_MS);

  const reset = () => {
    setStatus('idle');
    setScore(0);
    setActiveSlot(null);
    setTimeLeft(ROUND_MS);
  };

  const start = () => {
    setStatus('playing');
    setScore(0);
    setTimeLeft(ROUND_MS);
    setActiveSlot(Math.floor(Math.random() * SLOTS));
  };

  useEffect(() => {
    if (status !== 'playing') return;
    const tick = window.setInterval(() => {
      setTimeLeft((prev) => {
        const next = prev - 250;
        if (next <= 0) {
          setStatus('done');
          setActiveSlot(null);
          return 0;
        }
        return next;
      });
    }, 250);
    return () => window.clearInterval(tick);
  }, [status]);

  useEffect(() => {
    if (status !== 'playing') return;
    const shuffle = window.setInterval(() => {
      setActiveSlot(Math.floor(Math.random() * SLOTS));
    }, 700);
    return () => window.clearInterval(shuffle);
  }, [status]);

  const tapSlot = (index: number) => {
    if (status !== 'playing') return;
    if (index === activeSlot) {
      setScore((s) => s + 1);
      setActiveSlot(Math.floor(Math.random() * SLOTS));
    }
  };

  return (
    <section id="interactive-experience" className="py-3 md:py-5">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <Reveal as="div" variant="up" className="rounded-xl border border-foreground/10 bg-background/95 p-3.5 md:p-5 shadow-md">
            <div className="flex items-center justify-between gap-2 mb-3">
              <div>
                <p className="text-xs font-semibold text-foreground/85">Quick Bot Tap</p>
                <p className="text-[10px] text-muted-foreground">Tap the glowing slot.</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-muted-foreground">Score</p>
                <p className="text-base font-display font-bold">{score}</p>
              </div>
            </div>

            <div className="mb-3 h-1.5 rounded-full bg-foreground/10 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-200"
                style={{ width: `${(timeLeft / ROUND_MS) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-5 gap-2 mb-3">
              {Array.from({ length: SLOTS }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => tapSlot(i)}
                  disabled={status !== 'playing'}
                  className={`h-11 md:h-9 rounded-md border transition-all ${
                    i === activeSlot
                      ? 'border-primary/60 bg-primary/15'
                      : 'border-foreground/15 bg-background'
                  } disabled:opacity-60`}
                  aria-label={`Slot ${i + 1}`}
                >
                  {i === activeSlot ? (
                    <Sparkles className="w-4 h-4 md:w-3.5 md:h-3.5 mx-auto text-primary" />
                  ) : (
                    <Bot className="w-4 h-4 md:w-3.5 md:h-3.5 mx-auto text-foreground/45" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between gap-2">
              {status !== 'playing' ? (
                <Button variant="gold" size="sm" onClick={start}>
                  {status === 'idle' ? 'Start' : 'Play Again'}
                </Button>
              ) : (
                <Button variant="outline" size="sm" onClick={reset}>
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </Button>
              )}
              <p className="text-[10px] text-muted-foreground">
                {status === 'done' ? 'Round done.' : '18s round'}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
