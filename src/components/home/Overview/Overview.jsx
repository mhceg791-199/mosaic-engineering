import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import GridBackground from "./components/GridBackground";
import StructuralLines from "./components/StructuralLines";
import OverviewContent from "./components/OverviewContent";

gsap.registerPlugin(ScrollTrigger);

const OverviewSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      gsap.fromTo(
        ".mosaic-watermark",
        { x: 120, opacity: 0.1 },
        {
          x: -120,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      tl.fromTo(
        ".structural-line",
        { width: 0, opacity: 0 },
        { width: "100%", opacity: 1, duration: 1.5, stagger: 0.2 }
      )
        .fromTo(
          ".reveal-text",
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.12 },
          "-=1"
        )
        .fromTo(
          ".info-card",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 },
          "-=0.6"
        );

      const mouseMove = (e) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20;
        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".parallax-content", {
          x,
          y,
          duration: 1.5,
          ease: "power2.out",
        });
      };

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom top",
        onEnter: () => window.addEventListener("mousemove", mouseMove),
        onLeave: () => window.removeEventListener("mousemove", mouseMove),
        onLeaveBack: () => window.removeEventListener("mousemove", mouseMove),
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-lightColor 
                 text-mainColor overflow-hidden font-sans"
    >
      <GridBackground />
      <StructuralLines />

      <div className="relative z-10 max-w-7xl mx-auto min-h-screen 
                      flex flex-col justify-center px-6 pt-24">
        <OverviewContent />
      </div>
    </section>
  );
};

export default OverviewSection;
