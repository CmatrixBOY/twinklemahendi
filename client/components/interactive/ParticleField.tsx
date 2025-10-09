import { useMemo } from "react";
import { motion } from "framer-motion";

const createParticles = (count: number) =>
  Array.from({ length: count }, (_, index) => ({
    id: `particle-${index}`,
    size: Math.floor(Math.random() * 8) + 4,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 12 + 12,
    delay: Math.random() * 8,
  }));

export const ParticleField = ({ count = 26 }: { count?: number }) => {
  const particles = useMemo(() => createParticles(count), [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/60 shadow-[0_0_20px_rgba(255,255,255,0.6)] dark:bg-white/20"
          style={{
            height: particle.size,
            width: particle.size,
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0.1, 0.55, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};
