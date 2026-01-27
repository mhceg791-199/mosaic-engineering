import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SupportedByMosaicBackground from "./components/SupportedByMosaicBackground";
import SupportedByMosaicContent from "./components/SupportedByMosaicContent";

gsap.registerPlugin(ScrollTrigger);

const SupportedByMosaic = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const isMobile = window.innerWidth < 768;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      if (!isMobile) {
        tl.from(".vertical-line", {
          height: 0,
          duration: 1.5,
          ease: "power4.inOut",
        });
      }

      tl.from(
        ".reveal-text",
        {
          y: isMobile ? 40 : 80,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
        },
        "-=1",
      ).from(
        ".geo-shape",
        {
          scale: 0.9,
          opacity: 0,
          duration: 2,
          ease: "power2.out",
        },
        0,
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[65vh] md:min-h-screen bg-lightColor text-black flex items-center overflow-hidden py-10 sm:py-20 lg:py-24"
    >
      <SupportedByMosaicBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <SupportedByMosaicContent />
      </div>
    </section>
  );
};

export default SupportedByMosaic;
