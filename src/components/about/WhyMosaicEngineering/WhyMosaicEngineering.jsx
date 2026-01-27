import { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

import EngineeringIntro from "./components/EngineeringIntro";
import EngineeringPoints from "./components/EngineeringPoints";

import mechanical from "../../../assets/whatWeDo/mechanical.webp";
import electrical from "../../../assets/whatWeDo/electrical.webp";
import structural from "../../../assets/whatWeDo/structural.webp";
import { whyMosaicPoints } from "../../../data/whyMosaicPoints";

const WhyMosaicEngineering = () => {
  const icons = [mechanical, electrical, structural];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % icons.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [icons.length]);

  return (
    <section className="bg-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="max-w-[88rem] mx-auto">
        {/* Header */}
        <div className="relative mb-20 text-center">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <h4 className="text-[8rem] md:text-[12rem] font-black text-white uppercase">
              Mosaic
            </h4>
          </div>

          <h2 className="heading text-lightColor relative z-10">
            <SectionHeader firstWord="Why Mosaic Engineering" />
          </h2>
        </div>

        {/* Main Grid */}
        <div
          className="grid lg:grid-cols-12 border border-white/10 
                        rounded-[2rem] overflow-hidden shadow-2xl"
        >
          <EngineeringIntro icons={icons} activeIndex={activeIndex} />

          <EngineeringPoints points={whyMosaicPoints} />
        </div>
      </div>
    </section>
  );
};

export default WhyMosaicEngineering;
