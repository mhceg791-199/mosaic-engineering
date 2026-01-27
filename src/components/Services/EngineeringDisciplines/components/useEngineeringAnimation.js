import { useLayoutEffect } from "react";
import gsap from "gsap";

export const useEngineeringAnimation = (containerRef, activeTab) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      /* CONTENT ENTER */
      gsap.fromTo(
        ".layer-content",
        {
          x: 40,
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          x: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.08,
        }
      );

      /* FLOATING GEOMETRY */
      gsap.to(".floating-geo", {
        y: "random(-15, 15)",
        x: "random(-15, 15)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);
};
