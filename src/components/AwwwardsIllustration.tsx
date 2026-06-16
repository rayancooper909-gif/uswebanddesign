import { motion, useReducedMotion } from "framer-motion";

type Props = {
  src: string;
  alt?: string;
  className?: string;
};

export function AwwwardsIllustration({ src, alt = "", className }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={className}>
      {/* Soft color wash behind */}
      <div className="pointer-events-none absolute -inset-16 bg-gradient-radial from-primary/10 via-transparent to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -inset-16 bg-gradient-radial from-gold-light/10 via-transparent to-transparent blur-3xl opacity-50" />

      {/* Artwork */}
      <motion.img
        src={src}
        alt={alt}
        className={[
          "pointer-events-none select-none",
          "h-full w-full object-cover",
          "opacity-[0.22] md:opacity-[0.28]",
          "mix-blend-multiply",
          // vignette + mask to keep text readable
          "[mask-image:radial-gradient(closest-side,rgba(0,0,0,1)_55%,rgba(0,0,0,0)_100%)]",
          "filter saturate-0 contrast-125",
        ].join(" ")}
        animate={
          reduceMotion
            ? undefined
            : {
                y: [0, -10, 0],
                scale: [1, 1.02, 1],
              }
        }
        transition={
          reduceMotion
            ? undefined
            : {
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      />

      {/* Grain overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}

