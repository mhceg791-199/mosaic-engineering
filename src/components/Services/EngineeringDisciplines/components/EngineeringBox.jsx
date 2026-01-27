import { useRef, useLayoutEffect } from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";

const EngineeringBox = ({ services, activeTab, setActiveTab }) => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".border-ring").forEach((el) => {
        gsap.to(el, {
          rotate: 360,
          duration: 2,
          repeat: -1,
          ease: "linear",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [activeTab]);

  const activeService = services[activeTab];

  return (
    <div ref={containerRef} className="grid lg:grid-cols-12 gap-6">
      {/* Sidebar */}
      <div className="lg:col-span-1 flex lg:flex-col justify-center gap-3 sm:gap-4 relative">
        {services.map((service, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
              activeTab === idx
                ? "bg-mainColor text-white shadow-xl scale-105"
                : "bg-white text-slate-400 border border-slate-100 hover:scale-105"
            }`}
          >
            {activeTab !== idx && (
              <div className="border-ring absolute inset-0 rounded-xl pointer-events-none border-2 border-mainColor/50" />
            )}
            {service.icon}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="lg:col-span-11 grid lg:grid-cols-2 bg-white rounded-3xl lg:rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-30px_rgba(54,75,160,0.08)] overflow-hidden">
        {/* Left */}
        <div className="relative p-6 sm:p-8 lg:p-12 bg-mainColor flex flex-col gap-10 text-white overflow-hidden">
          <div className="floating-geo absolute top-6 right-6 w-20 h-20 border border-white/10 rounded-full hidden sm:block" />
          <div className="floating-geo absolute bottom-12 left-6 w-14 h-14 border border-mainGold/20 rotate-45 hidden sm:block" />

          <div className="layer-content">
            <span className="text-mainGold font-mono text-[10px] tracking-[0.4em] uppercase block mb-3">
              {activeService.mainTitle}
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-6xl font-black italic uppercase tracking-tighter mb-4">
              {activeService.title}
              <span className="text-mainGold">.</span>
            </h3>

            <p className="text-white/70 text-sm sm:text-base leading-relaxed">
              {activeService.tagline}
            </p>
          </div>

          <div className="layer-content lg:mt-24">
            <div className="text-2xl sm:text-3xl font-black italic text-mainGold">
              {activeService.stat}
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mt-2">
              Engineering Excellence // Integrated Design
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center layer-content">
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
            {activeService.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {activeService.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-mainGold/10 flex items-center justify-center">
                  <Plus size={12} className="text-mainGold" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-mainColor uppercase">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mt-8">
            {activeService.end}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EngineeringBox;
