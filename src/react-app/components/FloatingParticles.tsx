import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  size: number;
  delay: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const particleArray: Particle[] = [];
    for (let i = 0; i < 8; i++) {
      particleArray.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 15,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
