import SectionHeader from "../../../shared/SectionHeaders/SectionHeader";

const ExperienceHeader = ({ isVisible }) => {
  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-mainColor font-bold tracking-widest heading mb-6 flex items-center gap-3">
        <SectionHeader firstWord="Global Experience" />
      </h2>

      <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black italic leading-tight">
        ENGINEERING <br />
        THAT <br />
        <span className="text-mainColor border-b-4 border-mainColor/30">
          HOLDS UP.
        </span>
      </h3>
    </div>
  );
};

export default ExperienceHeader;
