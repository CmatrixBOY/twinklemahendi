import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="henna-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M50,10 Q60,20 50,30 Q40,20 50,10 M30,50 Q40,40 50,50 Q40,60 30,50 M70,50 Q80,40 90,50 Q80,60 70,50" 
                    fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#henna-pattern)" className="text-pistachio-deep"/>
        </svg>
      </div>
      <main className="relative z-10">{children}</main>
    </div>
  );
}
