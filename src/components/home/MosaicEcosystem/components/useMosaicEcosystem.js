import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useMosaicEcosystem = ({
  containerRef,
  visualRef,
  lineRef,
}) => {
  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          once: true,
        },
      });

      tl.from(".blueprint-grid", { opacity: 0, duration: 1.5 })
        .from(
          lineRef.current,
          {
            strokeDasharray: 2000,
            strokeDashoffset: 2000,
            duration: 2,
          },
          "-=1",
        )
        .from(
          ".stagger-item",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            stagger: 0.2,
          },
          "-=1",
        );

      /* ===== DESKTOP ===== */
      mm.add("(min-width: 1024px)", () => {
        tl.from(
          visualRef.current,
          {
            scale: 0.85,
            rotate: -8,
            opacity: 0,
            duration: 1.2,
          },
          "-=0.8",
        );

        gsap.to(".layer-floating", {
          y: -20,
          x: 10,
          rotationX: 5,
          rotationY: 5,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.from(".mosaic-piece", {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1.2,
          },
          x: (i) => (i % 2 === 0 ? -150 : 150),
          opacity: 0,
          scale: 0.6,
          rotate: (i) => (i % 2 === 0 ? -25 : 25),
        });
      });

      /* ===== MOBILE ===== */
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".mosaic-piece", {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          scrollTrigger: {
            trigger: visualRef.current,
            start: "top 80%",
          },
        });
      });
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);
};
