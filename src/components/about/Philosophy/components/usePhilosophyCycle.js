import { useState, useEffect } from "react";

const INTERVAL = 50;

export const usePhilosophyCycle = (length, duration = 5000) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const step = (INTERVAL / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((i) => (i + 1) % length);
          return 0;
        }
        return prev + step;
      });
    }, INTERVAL);

    return () => clearInterval(timer);
  }, [activeIndex, length, duration]);

  const activate = (index) => {
    setActiveIndex(index);
    setProgress(0);
  };

  return {
    activeIndex,
    progress,
    activate,
  };
};
