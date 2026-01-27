import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OurServices from "./OurServices";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      /* GRID BACKGROUND */
      gsap.to(".grid-bg", {
        backgroundPosition: "100px 100px",
        duration: 20,
        ease: "none",
        repeat: -1,
      });

      /* DESKTOP ENGINEERING TEXT */
      mm.add("(min-width: 768px)", () => {
        gsap.fromTo(
          ".eng-1",
          { xPercent: 30 },
          {
            xPercent: -30,
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".eng-2",
          { xPercent: -30 },
          {
            xPercent: 30,
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          ".eng-3",
          { xPercent: 30 },
          {
            xPercent: -30,
            scrollTrigger: {
              trigger: ".hero-section",
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          },
        );
      });

      /* MOBILE ENGINEERING TEXT */
      mm.add("(max-width: 767px)", () => {
        gsap.from(".eng-text", {
          opacity: 0,
          y: 40,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".hero-section",
            start: "top 85%",
          },
        });
      });

      /* HERO REVEAL */
      gsap.from(".reveal-text", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
        },
      });
    }, containerRef);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-lightColor">
      {/* GRID */}
      <div
        className="grid-bg fixed inset-0 pointer-events-none opacity-[0.1]"
        style={{
          backgroundImage:
            "linear-gradient(#364BA0 1px, transparent 1px), linear-gradient(90deg, #364BA0 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* HERO */}
      <section className="hero-section  min-h-[30vh] md:min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-24 relative overflow-hidden">
        <div className="engineering-bg absolute inset-0 pointer-events-none">
          <h4 className="eng-text eng-1">MECHANICAL ENGINEERING</h4>
          <h4 className="eng-text eng-2">ELECTRICAL ENGINEERING</h4>
          <h4 className="eng-text eng-3">STRUCTURAL ENGINEERING</h4>
        </div>

        <div className="max-w-4xl z-10">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-black mb-8 md:mb-12 reveal-text uppercase">
            WHAT WE <span className="text-mainColor">DO</span>
          </h2>

          <p className="text-gray-400 max-w-xl md:max-w-2xl reveal-text border-l-2 border-mainGold pl-4 md:pl-8 paragraph">
            We deliver coordinated engineering disciplines that work together as
            one system — ensuring performance, clarity, and long-term
            reliability across every project.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <OurServices horizontalRef={horizontalRef} />
    </div>
  );
};

export default WhatWeDo;
