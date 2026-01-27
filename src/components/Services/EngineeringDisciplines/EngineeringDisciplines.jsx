import { useRef, useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import servicesEngineering from "../../../data/servicesEngineering";
import { useEngineeringAnimation } from "./components/useEngineeringAnimation";
import EngineeringBox from "./components/EngineeringBox";

const EngineeringDisciplines = () => {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);

  useEngineeringAnimation(containerRef, activeTab);

  const activeService = servicesEngineering[activeTab];

  return (
    <section
      ref={containerRef}
      className="relative bg-lightColor py-14 sm:py-16 lg:py-24 overflow-hidden px-4 sm:px-6 lg:px-20"
    >
      {/* Watermark */}
      <div className="hidden lg:block absolute top-10 left-10 text-[10rem] xl:text-[12rem] font-black text-mainColor/[0.02] select-none pointer-events-none italic uppercase">
        {activeService.title}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 lg:mb-14 gap-6">
          <SectionHeader firstWord="Our" secondWord="Engineering Disciplines" />

          <div className="hidden lg:block h-px flex-1 bg-mainColor/10 mx-10 mb-4" />

          <div className="flex gap-2">
            {servicesEngineering.map((_, i) => (
              <div
                key={i}
                className={`h-1 transition-all duration-500 ${
                  activeTab === i
                    ? "w-10 sm:w-12 bg-mainGold"
                    : "w-4 bg-slate-200"
                }`}
              />
            ))}
          </div>
        </div>

        <EngineeringBox
          services={servicesEngineering}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </section>
  );
};

export default EngineeringDisciplines;
