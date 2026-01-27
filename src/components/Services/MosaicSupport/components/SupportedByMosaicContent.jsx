import { Link } from "react-router-dom";

const SupportedByMosaicContent = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
      {/* Vertical Line */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="vertical-line w-[1.5px] bg-gradient-to-b from-transparent via-mainGold to-transparent h-full" />
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-8 sm:space-y-10">
        <div className="overflow-hidden">
          <h4 className="reveal-text text-mainGold font-mono tracking-[0.35em] text-[10px] sm:text-xs uppercase font-black italic text-center lg:text-left">
            Mosaic Engineering
          </h4>
        </div>

        <div className="overflow-hidden">
          <h2 className="reveal-text text-4xl sm:text-5xl lg:text-[90px] font-black leading-[0.95] tracking-tighter uppercase italic text-[#0A0A0A] text-center lg:text-left">
            SUPPORTED <br />
            <span className="text-mainColor">BY MOSAIC</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 pt-4">
          <div className="overflow-hidden">
            <p className="reveal-text text-gray-600 leading-relaxed text-base sm:text-lg">
              As part of{" "}
              <Link
                to="https://mosaicholding.com/"
                target="_blank"
                className="text-black font-semibold"
              >
                Mosaic Holding Corporation
              </Link>
              , Mosaic Engineering benefits from a wider platform of engineering,
              development, and technical expertise.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="reveal-text bg-gray-50 p-6 sm:p-8 lg:p-10 border-l border-b border-gray-100 shadow-sm relative group">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-mainGold transform group-hover:translate-x-full transition-transform duration-500" />

              <p className="text-gray-500 leading-relaxed italic text-sm sm:text-base">
                "This structure allows us to support projects of varying scale
                and complexity while maintaining consistent quality,
                accountability, and technical discipline."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportedByMosaicContent;
