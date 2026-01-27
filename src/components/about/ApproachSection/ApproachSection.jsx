import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import BackgroundGrid from "./components/BackgroundGrid";
import CoreMosaic from "./components/CoreMosaic";
import ApproachContent from "./components/ApproachContent";

const ApproachSection = () => {
  const containerRef = useRef(null);
  const coreRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current || !coreRef.current) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const tl = gsap.timeline({
              defaults: {
                ease: "power2.inOut",
              },
            });

            tl.to(coreRef.current, {
              scale: 3, 
              opacity: 0.08,
              duration: 2.5, 
            }).from(
              ".approach-step",
              {
                y: -60, 
                opacity: 0,
                duration: 2.8,
                ease: "power1.inOut",
                stagger: 0.8,
              },
              "-=1.2", 
            );

            obs.unobserve(containerRef.current);
          }
        });
      },
      {
        threshold: 0.25,
      },
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen sm:h-[90vh] flex items-center justify-center bg-slate-50 overflow-hidden"
    >
      <BackgroundGrid />
      <CoreMosaic ref={coreRef} />
      <ApproachContent />
    </section>
  );
};

export default ApproachSection;
