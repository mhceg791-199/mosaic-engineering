import SectionHeader from "../../../shared/SectionHeaders/SectionHeader";

const ExperienceHeader = ({ isVisible }) => {
  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <h2 className="text-mainColor font-bold tracking-widest heading mb-6 flex items-center gap-3">
        <SectionHeader firstWord="Global Experience" />
      </h2>

      <h3 className="text-3xl sm:text-2xl md:text-4xl lg:text-5xl font-black italic leading-tight md:mt-14">
        ENGINEERING, <br />
        <span className="text-mainColor border-b-4 border-mainColor/30">
          ORCHESTRATED.
        </span>
      </h3>
    </div>
  );
};

export default ExperienceHeader;
