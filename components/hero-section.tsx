'use client';

import { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Animation loop
    let animationId: number;
    let time = 0;

    const animate = () => {
      time += 0.016;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      // Clear with gradient
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, '#F9F9FB');
      gradient.addColorStop(0.5, '#F0F9F8');
      gradient.addColorStop(1, '#F9F9FB');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw floating desk
      const deskX = width / 2 - 60;
      const deskY = height / 2 - 40 + Math.sin(time) * 3;
      const deskHeight = 60 + (mousePos.x - width / 2) * 0.01;

      // Desk frame
      ctx.fillStyle = '#008080';
      ctx.fillRect(deskX, deskY, 120, 2);
      ctx.fillRect(deskX + 15, deskY + 2, 4, deskHeight);
      ctx.fillRect(deskX + 101, deskY + 2, 4, deskHeight);

      // Keyboard
      ctx.fillStyle = '#AAF0D1';
      ctx.fillRect(deskX + 20, deskY + deskHeight, 80, 8);

      // Monitor
      const monitorX = deskX + 25;
      const monitorY = deskY - 50 + Math.sin(time * 0.5) * 2;
      ctx.fillStyle = '#008080';
      ctx.strokeStyle = '#005566';
      ctx.lineWidth = 2;
      ctx.fillRect(monitorX, monitorY, 70, 50);
      ctx.strokeRect(monitorX, monitorY, 70, 50);

      // Screen content
      ctx.fillStyle = '#AAF0D1';
      ctx.fillRect(monitorX + 5, monitorY + 5, 60, 35);

      // Aura animation
      const auraRadius = 100 + Math.sin(time * 0.5) * 20;
      const gradient2 = ctx.createRadialGradient(
        width / 2,
        height / 2,
        30,
        width / 2,
        height / 2,
        auraRadius
      );
      gradient2.addColorStop(0, 'rgba(0, 128, 128, 0.1)');
      gradient2.addColorStop(1, 'rgba(0, 128, 128, 0)');
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, width, height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [mousePos]);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <div className="text-center max-w-3xl mx-auto">
          {/* Floating Glass Card */}
          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-8 animate-float">
            <h1 className="font-outfit text-4xl md:text-6xl font-bold mb-4 text-[#008080]">
              Master Your Space
            </h1>
            <h2 className="font-outfit text-2xl md:text-4xl font-light text-[#005566] mb-6">
              Perfect Your Pace
            </h2>
          </div>

          {/* Main Headline */}
          <h3 className="font-outfit text-3xl md:text-5xl font-bold text-[#008080] mb-4 text-balance">
            SmartMove: The Science of the Home Office
          </h3>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[#005566] mb-8 max-w-2xl mx-auto leading-relaxed">
            Curating the world's best ergonomic setups. From active seating to intelligent lighting—build a workspace that moves with you.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#008080] hover:bg-[#005566] text-white px-8 py-6 text-lg rounded-lg font-outfit">
              Explore Setups
            </Button>
            <Button className="bg-white hover:bg-[#F0F9F8] text-[#008080] border-2 border-[#008080] px-8 py-6 text-lg rounded-lg font-outfit">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements Decoration */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-[#AAF0D1] rounded-full opacity-10 blur-3xl animate-pulse-aura" />
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-[#008080] rounded-full opacity-5 blur-3xl animate-pulse-aura" />
    </section>
  );
}
