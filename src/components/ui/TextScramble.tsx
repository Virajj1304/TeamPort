"use client";

import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export default function TextScramble({
  text,
  className = "",
  delay = 0,
}: TextScrambleProps) {
  const [display, setDisplay] = useState("");
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(text);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [text, started]);

  useEffect(() => {
    if (!started) return;

    const timeout = setTimeout(() => {
      let iteration = 0;
      const totalFrames = text.length * 2;

      const interval = setInterval(() => {
        setDisplay(
          text
            .split("")
            .map((char, i) => {
              if (char === " ") return " ";
              if (i < iteration / 2) return text[i];
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("")
        );

        iteration++;
        if (iteration > totalFrames) {
          setDisplay(text);
          clearInterval(interval);
        }
      }, 25);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [started, text, delay]);

  return (
    <span ref={ref} className={className}>
      {display || "\u00A0"}
    </span>
  );
}
