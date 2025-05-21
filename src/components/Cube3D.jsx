import React from "react";

export default function Cube3D() {
  return (
    <div className="scene w-48 h-48 mx-auto my-8 perspective-1000">
      <div className="cube relative w-48 h-48 transform-style-preserve-3d animate-spin-slow">
        {["front", "back", "right", "left", "top", "bottom"].map((face) => (
          <div
            key={face}
            className={`face face-${face} absolute w-48 h-48 bg-gradient-to-br from-blue-300 to-white border border-blue-500 opacity-90`}
          />
        ))}
      </div>
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .cube {
          transform-style: preserve-3d;
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        .face {
          position: absolute;
          width: 12rem;
          height: 12rem;
          border: 2px solid #2563eb;
          border-radius: 0.5rem;
        }
        .face-front  { transform: translateZ(6rem); }
        .face-back   { transform: rotateY(180deg) translateZ(6rem); }
        .face-right  { transform: rotateY(90deg) translateZ(6rem); }
        .face-left   { transform: rotateY(-90deg) translateZ(6rem); }
        .face-top    { transform: rotateX(90deg) translateZ(6rem); }
        .face-bottom { transform: rotateX(-90deg) translateZ(6rem); }
      `}</style>
    </div>
  );
}
