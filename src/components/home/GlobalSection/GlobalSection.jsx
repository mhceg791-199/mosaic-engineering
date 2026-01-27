import { useRef } from "react";
import NumbersSection from "../../shared/NumbersSection/NumbersSection";
import { globalNumbers } from "../../../data/globalNumbers";
import { useGlobalGlobe } from "./components/useGlobalGlobe";

const GlobalSection = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useGlobalGlobe(canvasRef, containerRef);

  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 px-6 lg:px-32 py-24">
        {/* TEXT */}
        <div className="w-full lg:w-1/2 space-y-10">
          <h2 className="text-4xl sm:text-5xl font-black uppercase">
            Global Presence <br />
            <span className="text-mainGold">& Scale</span>
          </h2>

          <p className="text-slate-400 max-w-xl leading-relaxed">
            Our position within the group allows seamless collaboration across
            engineering, development, and related disciplines.
          </p>

          <NumbersSection
            items={globalNumbers}
            columns="grid-cols-2 sm:grid-cols-3"
          />
        </div>

        {/* CANVAS */}
        <div ref={containerRef} className="w-full lg:w-1/2 h-[600px]">
          <canvas ref={canvasRef} className="w-full h-full cursor-grab" />
        </div>
      </div>
    </section>
  );
};

export default GlobalSection;
