"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const photos = [
  "/BB_NewHaven.jpeg",
  // Add more personal photos here:
  // "/photos/photo2.jpg",
  // "/photos/photo3.jpg",
];

export default function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPhoto = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  useEffect(() => {
    if (photos.length <= 1) return;
    const interval = setInterval(nextPhoto, 4000);
    return () => clearInterval(interval);
  }, [nextPhoto]);

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center">
      <div className="relative w-52 h-68 md:w-60 md:h-78 lg:w-64 lg:h-84 rounded-3xl overflow-hidden bg-[#FF4500]/50 backdrop-blur-sm border border-white/20 shadow-2xl shadow-black/50">
        {/* Pulsing ring */}
        <div className="absolute -inset-3 rounded-[2rem] border border-[#FF4500]/20 animate-ping opacity-30 pointer-events-none" style={{ animationDuration: "3s" }} />

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none z-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFB800]/20 via-transparent to-[#9A00FF]/15 mix-blend-overlay z-10 pointer-events-none" />

        {/* Photos */}
        <div className="relative w-full h-full">
          {photos.map((photo, index) => (
            <div
              key={photo}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={photo}
                alt={`Blaike Bradford ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-[10px] uppercase tracking-widest font-mono text-white/80">
            Blaike Bradford
          </p>
          <p className="text-[10px] uppercase tracking-widest font-mono text-[#FF4500]">
            Dallas, TX
          </p>
        </div>

        {/* Dots indicator */}
        {photos.length > 1 && (
          <div className="absolute bottom-16 left-0 right-0 z-20 flex justify-center gap-1.5">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-white w-4"
                    : "bg-white/40 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
