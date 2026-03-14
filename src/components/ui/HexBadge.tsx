import React from 'react';

interface HexBadgeProps {
  className?: string;
  size?: number; // width of the hexagon
}

export const HexBadge: React.FC<HexBadgeProps> = ({ className, size = 320 }) => {
  const height = size * (Math.sqrt(3) / 2); // Side length * sqrt(3)
  
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: height }}>
      {/* Hexagon SVG Background */}
      <svg
        viewBox={`0 0 ${size} ${height}`}
        className="absolute inset-0 w-full h-full drop-shadow-xl"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.1))' }}
      >
        <defs>
          <radialGradient id="hexGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#F0F9FF" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </radialGradient>
        </defs>
        <path
          d={`
            M ${size * 0.25} 0
            L ${size * 0.75} 0
            L ${size} ${height * 0.5}
            L ${size * 0.75} ${height}
            L ${size * 0.25} ${height}
            L 0 ${height * 0.5}
            Z
          `}
          fill="url(#hexGradient)"
          stroke="#7DD3FC"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>

      {/* Text Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center -mt-2">
        <span className="text-[#2F5672] text-[24px] md:text-[28px] font-bold tracking-widest mb-1 font-serif">
          紙より薄い
        </span>
        <div className="flex items-baseline gap-1 text-[#1D4E89]">
          <span className="text-[20px] md:text-[24px] font-bold">約</span>
          <span className="text-[48px] md:text-[64px] font-serif font-black leading-none tracking-tight">
            0.04
          </span>
          <span className="text-[24px] md:text-[32px] font-bold">mm</span>
        </div>
      </div>
    </div>
  );
};
