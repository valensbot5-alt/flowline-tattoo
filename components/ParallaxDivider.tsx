"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  height?: number;
  variant?: "ink" | "smoke" | "lines";
};

export function ParallaxDivider({ height = 200, variant = "ink" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin: "100px" }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const handleScroll = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const viewCenter = window.innerHeight / 2;
      setOffset((center - viewCenter) * 0.15);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div
      ref={ref}
      className="relative overflow-hidden"
      style={{ height }}
      aria-hidden="true"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />

      {/* Parallax layer */}
      <div
        className="absolute inset-[-40px_0] will-change-transform"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {variant === "ink" && <InkEffect />}
        {variant === "smoke" && <SmokeEffect />}
        {variant === "lines" && <LinesEffect />}
      </div>

      {/* Edge fades */}
      <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#0A0A0A] to-transparent z-10" />
      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0A0A0A] to-transparent z-10" />
    </div>
  );
}

function InkEffect() {
  return (
    <>
      {/* Ink splatter pattern via radial gradients */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 120px 80px at 20% 40%, #D4A853 0%, transparent 70%)",
            "radial-gradient(ellipse 80px 140px at 60% 30%, #D4A853 0%, transparent 60%)",
            "radial-gradient(ellipse 100px 60px at 80% 60%, #D4A853 0%, transparent 70%)",
            "radial-gradient(ellipse 60px 100px at 40% 70%, #D4A853 0%, transparent 65%)",
          ].join(", "),
        }}
      />
      {/* Fine noise texture */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle 1px at 10% 20%, #D4A853 50%, transparent 50%), radial-gradient(circle 1px at 30% 60%, #D4A853 50%, transparent 50%), radial-gradient(circle 1px at 50% 30%, #D4A853 50%, transparent 50%), radial-gradient(circle 1px at 70% 70%, #D4A853 50%, transparent 50%), radial-gradient(circle 1px at 90% 45%, #D4A853 50%, transparent 50%)",
        }}
      />
      {/* Center glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A853]/5 to-transparent" />
    </>
  );
}

function SmokeEffect() {
  return (
    <>
      {/* Layered smoke wisps */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: [
            "radial-gradient(ellipse 200px 60px at 15% 50%, #D4A853 0%, transparent 70%)",
            "radial-gradient(ellipse 250px 40px at 55% 40%, #D4A853 0%, transparent 60%)",
            "radial-gradient(ellipse 180px 50px at 85% 55%, #D4A853 0%, transparent 65%)",
          ].join(", "),
        }}
      />
      {/* Soft horizontal bands */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(0deg, transparent 0%, #D4A853 20%, transparent 40%, transparent 60%, #D4A853 80%, transparent 100%)",
        }}
      />
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4A853]/3 via-transparent to-[#D4A853]/3" />
    </>
  );
}

function LinesEffect() {
  return (
    <>
      {/* Diagonal lines */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 20px, #D4A853 20px, #D4A853 21px)",
        }}
      />
      {/* Counter diagonal */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 30px, #D4A853 30px, #D4A853 31px)",
        }}
      />
      {/* Center accent line */}
      <div className="absolute top-1/2 inset-x-0 h-[1px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
    </>
  );
}
