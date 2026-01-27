import { Hexagon } from "lucide-react";
import EngineeringIcons from "./EngineeringIcons";

const EngineeringIntro = ({
  icons,
  activeIndex,
}) => {
  return (
    <div className="lg:col-span-5 bg-mainColor p-8 md:p-12 relative flex flex-col justify-center">
      {/* Decorative Icon */}
      <div className="absolute top-0 right-0 p-8 opacity-10">
        <Hexagon size={160} className="text-white" />
      </div>

      <h4 className="text-2xl md:text-3xl font-bold text-white mb-6 leading-tight relative z-10">
        Not a single specialty, <br />
        <span className="text-mainGold">but a coordinated system.</span>
      </h4>

      <p className="text-white/80 text-base md:text-lg mb-10 relative z-10">
        What distinguishes Mosaic Engineering is not a single discipline,
        but the way our teams operate as one integrated unit.
      </p>

      <EngineeringIcons icons={icons} activeIndex={activeIndex} />
    </div>
  );
};

export default EngineeringIntro;
