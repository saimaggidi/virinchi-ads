import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

function Counter({ end, suffix = "", label }: { end: number, suffix?: string, label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <div className="text-[48px] md:text-[64px] font-[800] text-white tracking-tighter">
        {count}{suffix}
      </div>
      <div className="text-[11px] uppercase tracking-[0.1em] text-text-dim mt-2 font-semibold">
        {label}
      </div>
    </div>
  );
}

export function Impact() {
  return (
    <section className="py-24 relative bg-virinchi-bg border-y border-[rgba(255,255,255,0.05)]">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.1)]">
          <Counter end={500} suffix="+" label="Campaign Reach" />
          <Counter end={120} suffix="+" label="Clients Served" />
          <Counter end={10} suffix="M+" label="Leads Generated" />
        </div>
      </div>
    </section>
  );
}
