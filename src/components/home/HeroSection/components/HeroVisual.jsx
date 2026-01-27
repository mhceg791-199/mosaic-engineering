import { forwardRef } from "react";

/* ===== Tech Line ===== */
const TechLine = ({ width = "100px", rotate = "0deg" }) => (
  <div
    className="absolute flex items-center"
    style={{ width, transform: `rotate(${rotate})`, zIndex: 15 }}
  >
    <div className="w-1.5 h-1.5 rounded-full bg-mainGold shadow-[0_0_8px_#00f2ff]" />
    <div className="flex-grow h-[1px] bg-mainGold/60 shadow-[0_0_4px_#00f2ff]/30" />
    <div className="w-1.5 h-1.5 rounded-full bg-mainGold shadow-[0_0_8px_#00f2ff]" />
  </div>
);

/* ===== Hero Visual ===== */
const HeroVisual = forwardRef(({ imageRef, techLinesRef }, _) => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
      <div className="relative">
        <img
          ref={imageRef}
          src="/home/hero.png"
          alt="Hero"
          className="w-[600px] md:w-[800px] lg:w-[900px] opacity-90"
        />

        {[
          { top: "31%", left: "49%", width: "120px", rotate: "-30deg" },
          { top: "48%", left: "34%", width: "150px", rotate: "34deg" },
          { top: "49%", left: "66%", width: "100px", rotate: "90deg" },
          { top: "34%", left: "22%", width: "80px", rotate: "90deg" },
          { top: "59%", left: "48%", width: "130px", rotate: "-35deg" },
          { top: "59%", left: "22%", width: "140px", rotate: "35deg" },
        ].map((line, i) => (
          <div
            key={i}
            ref={(el) => (techLinesRef.current[i] = el)}
            className="absolute w-full h-full"
            style={{ top: line.top, left: line.left }}
          >
            <TechLine width={line.width} rotate={line.rotate} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default HeroVisual;
