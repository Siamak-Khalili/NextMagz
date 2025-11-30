"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { toPersianDigits } from "@/utils/numberFormatter";

export default function StatsCounter({ end, duration, suffix, className }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <CountUp
          end={end}
          duration={duration}
          suffix={suffix}
          className={className}
          formattingFn={(value) => toPersianDigits(Math.floor(value))}
        />
      )}
    </div>
  );
}
