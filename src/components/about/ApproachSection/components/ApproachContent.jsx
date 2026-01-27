import logo from "../../../../assets/whatWeDo/logo.webp";
import SectionHeader from "../../../shared/SectionHeaders/SectionHeader";

const ApproachContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 text-center max-w-4xl approach-step">
      <SectionHeader firstWord="Our Approach" />

      <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-8">
        We begin every project by understanding the full picture — technical,
        operational, and contextual.
      </p>

      <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-6">
        By prioritizing early coordination, clear documentation, and continuous
        alignment, we reduce risk, improve performance, and create clarity for
        everyone involved.
      </p>

      <p className="text-base sm:text-lg md:text-xl text-slate-600 mt-6">
        It’s a disciplined way of working — and one our clients rely on.
      </p>

      {/* Brand Signature */}
      <div className="mt-14 flex justify-center">
        <div className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity duration-500">
          <img
            src={logo}
            alt="Mosaic Engineering Logo"
            className="w-10 sm:w-14 md:w-16 lg:w-20"
          />
        </div>
      </div>
    </div>
  );
};

export default ApproachContent;
