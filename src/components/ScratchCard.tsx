import React, { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  children: React.ReactNode;
  frontText?: string;
}

export function ScratchCard({ children, frontText = "✦ Scratch to Reveal ✦" }: ScratchCardProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set actual size in memory (scaled for retina displays)
    const dpr = window.devicePixelRatio || 1;
    const rect = container.getBoundingClientRect();
    
    // Make sure we have a valid size
    if (rect.width === 0 || rect.height === 0) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    
    // CSS size
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    // Fill with gold color
    ctx.fillStyle = '#d4af37'; // gold
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add some texture/gradient for metallic look
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, '#cca73b');
    gradient.addColorStop(0.5, '#e5c965');
    gradient.addColorStop(1, '#b5922e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Add text
    ctx.font = '16px serif';
    ctx.fillStyle = '#fff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(frontText, rect.width / 2, rect.height / 2);

    // Prepare for erasing
    ctx.globalCompositeOperation = 'destination-out';

    // Event handlers
    const getCoordinates = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      let clientX, clientY;

      if ('touches' in e) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = (e as MouseEvent).clientX;
        clientY = (e as MouseEvent).clientY;
      }

      return {
        x: clientX - rect.left,
        y: clientY - rect.top
      };
    };

    const scratch = (e: MouseEvent | TouchEvent) => {
      if (!isScratching) return;
      e.preventDefault();
      
      const { x, y } = getCoordinates(e);
      
      ctx.beginPath();
      ctx.arc(x, y, 30, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseDown = (e: MouseEvent | TouchEvent) => {
      setIsScratching(true);
      scratch(e);
    };

    const handleMouseUp = () => {
      setIsScratching(false);
    };

    // Attach events
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', scratch);
    window.addEventListener('mouseup', handleMouseUp);

    canvas.addEventListener('touchstart', handleMouseDown, { passive: false });
    canvas.addEventListener('touchmove', scratch, { passive: false });
    window.addEventListener('touchend', handleMouseUp);

    return () => {
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', scratch);
      window.removeEventListener('mouseup', handleMouseUp);
      
      canvas.removeEventListener('touchstart', handleMouseDown);
      canvas.removeEventListener('touchmove', scratch);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isRevealed, frontText]); // Re-run if container changes

  return (
    <div ref={containerRef} className="relative w-full h-full rounded-xl overflow-hidden shadow-inner">
      {/* Revealed content (underneath) */}
      <div className="absolute inset-0 z-0">
        {children}
      </div>
      
      {/* Scratchable canvas overlay */}
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 z-10 cursor-pointer touch-none transition-opacity duration-1000 ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />
    </div>
  );
}
