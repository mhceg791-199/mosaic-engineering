import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import IntegratedDeliveryVisual from "./components/IntegratedDeliveryVisual";
import IntegratedDeliveryContent from "./components/IntegratedDeliveryContent";

gsap.registerPlugin(ScrollTrigger);

const IntegratedDelivery = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      let syncLoop; 

      /* ================= ENTER ANIMATION ================= */
      const enterTL = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          once: true,
          onEnter: () => {
            if (syncLoop) syncLoop.play();
          },
        },
      });

      enterTL
        .from(".path-line", {
          strokeDashoffset: 1000,
          duration: 0.8,
          ease: "power2.inOut",
        })
        .from(
          ".discipline-img-wrapper",
          {
            y: isMobile ? 80 : (i) => (i === 1 ? -120 : 120),
            x: isMobile ? 0 : (i) => (i === 0 ? -120 : i === 2 ? 120 : 0),
            opacity: 0,
            scale: 0.6,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .from(".reveal-content", {
          opacity: 0,
          y: 50,
          duration: 0.6,
          ease: "power3.out",
        })
        .to(".logo-center", {
          scale: 1.1,
          boxShadow: "0 0 50px rgba(197,163,99,0.5)",
          duration: 0.6,
        });

      /* ================= SYNCED LOOP ================= */
      if (!isMobile) {
        const images = gsap.utils.toArray(".discipline-img-wrapper .relative");
        const imgs = images.map((el) => el.querySelector("img"));

        syncLoop = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.2,
          paused: true, 
        });

        syncLoop
          /* ===== PULSE ===== */
          .fromTo(
            ".pulse-ring",
            { scale: 1, opacity: 0.6 },
            {
              scale: 1.6,
              opacity: 0,
              duration: 1,
              ease: "power2.out",
            },
          )

          /* ===== IMAGES SCALE ===== */
          .to(
            images,
            {
              scale: 1.08,
              duration: 0.6,
              ease: "power2.out",
            },
            "<",
          )

          /* ===== COLOR ===== */
          .to(
            imgs,
            {
              filter: "grayscale(0%)",
              duration: 0.4,
            },
            "<",
          )

          /* ===== RESET ===== */
          .to(
            images,
            {
              scale: 1,
              duration: 0.6,
              ease: "power2.inOut",
            },
            ">-0.1",
          )
          .to(
            imgs,
            {
              filter: "grayscale(100%)",
              duration: 0.4,
            },
            "<",
          );
      }
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-[#020205] text-white overflow-hidden py-16 sm:py-20"
    >
      {/* Glow */}
      <div className="absolute w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-mainColor/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
        <IntegratedDeliveryVisual />
        <IntegratedDeliveryContent />
      </div>
    </section>
  );
};

export default IntegratedDelivery;
