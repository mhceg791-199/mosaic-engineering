import electrical from "../../../../assets/whatWeDo/electrical.webp";
import mechanical from "../../../../assets/whatWeDo/mechanical.webp";
import structural from "../../../../assets/whatWeDo/structural.webp";
import logo from "../../../../assets/whatWeDo/logo.webp";

const IntegratedDeliveryVisual = () => {
  return (
    <div className="relative flex items-center justify-center h-[360px] sm:h-[420px] lg:h-[520px]">
      <svg className="absolute w-full h-full opacity-20" viewBox="0 0 400 400">
        <path
          className="path-line stroke-mainGold fill-none stroke-[0.5]"
          strokeDasharray="1000"
          d="M70,70 L200,200 L330,70 M200,200 L200,330"
        />
      </svg>

      {/* Mechanical */}
      <div className="absolute top-0 left-0 discipline-img-wrapper">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-xl">
          <img src={mechanical} className="w-full h-full object-cover grayscale" />
        </div>
        <span className="hidden sm:block text-[9px] font-mono mt-2 text-mainColor">
          01_MECHANICAL
        </span>
      </div>

      {/* Electrical */}
      <div className="absolute top-0 right-0 discipline-img-wrapper">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-xl">
          <img src={electrical} className="w-full h-full object-cover grayscale" />
        </div>
        <span className="hidden sm:block text-[9px] font-mono mt-2 text-mainGold text-right">
          02_ELECTRICAL
        </span>
      </div>

      {/* Structural */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 discipline-img-wrapper">
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 overflow-hidden rounded-lg shadow-xl">
          <img src={structural} className="w-full h-full object-cover grayscale" />
        </div>
        <span className="hidden sm:block text-[9px] font-mono mt-2 text-center">
          03_STRUCTURAL
        </span>
      </div>

      {/* Logo */}
      <div className="logo-center relative z-20 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 p-3 sm:p-4 rounded-full flex items-center justify-center border-4 border-mainColor/20 shadow-2xl bg-[#020205]">
        <img src={logo} className="w-full h-full object-contain z-10" />
        <div className="pulse-ring absolute inset-0 rounded-full border-2 border-mainGold opacity-50" />
      </div>
    </div>
  );
};

export default IntegratedDeliveryVisual;
