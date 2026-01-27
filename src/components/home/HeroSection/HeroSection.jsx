import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroVisual from "./components/HeroVisual";
import HeroContent from "./components/HeroContent";
import GridBackground from "./components/GridBackground";

const HeroSection = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const techLinesRef = useRef([]);
  const textRef = useRef([]);
  const gridRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Grid background
      tl.fromTo(
        gridRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2 },
      );

      tl.fromTo(
        [imageRef.current, ...techLinesRef.current],
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.05 },
      );

      tl.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.15 },
        "-=0.6",
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-black overflow-hidden text-white flex items-center"
    >
      <GridBackground gridRef={gridRef} />
      <HeroVisual imageRef={imageRef} techLinesRef={techLinesRef} />
      <HeroContent textRef={textRef} />
    </section>
  );
};

export default HeroSection;
