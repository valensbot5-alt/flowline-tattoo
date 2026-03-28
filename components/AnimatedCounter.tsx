"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const STATS: Stat[] = [
  { value: 2, suffix: "+", label: "Godina iskustva" },
  { value: 500, suffix: "+", label: "Zadovoljnih klijenata" },
  { value: 1000, suffix: "+", label: "Gotovih radova" },
  { value: 100, suffix: "%", label: "Zadovoljstvo" },
];

function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return count;
}

function StatItem({ stat, isVisible }: { stat: Stat; isVisible: boolean }) {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div className="text-center">
      <p className="font-sans text-4xl font-bold text-secondary lg:text-5xl">
        {count}{stat.suffix}
      </p>
      <p className="mt-2 text-sm text-foreground/70">{stat.label}</p>
    </div>
  );
}

export function AnimatedCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {STATS.map((stat) => (
        <StatItem key={stat.label} stat={stat} isVisible={isVisible} />
      ))}
    </div>
  );
}
