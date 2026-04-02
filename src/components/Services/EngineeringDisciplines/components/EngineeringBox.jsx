import { useRef, useLayoutEffect, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import gsap from "gsap";

const EngineeringBox = ({ services, activeTab, setActiveTab }) => {
  const containerRef = useRef(null);
  const autoLoopRef = useRef(null);        // للـ setInterval
  const timeoutRef = useRef(null);         // لإعادة تشغيل الـ loop بعد التفاعل اليدوي

  const AUTO_INTERVAL = 5000;   // 5 ثواني (غيرها حسب رغبتك)
  const PAUSE_AFTER_INTERACTION = 5000; // 8 ثواني بعد التفاعل اليدوي

  // دالة التنقل للأمام
  const goToNext = useCallback(() => {
    setActiveTab((prev) => (prev === services.length - 1 ? 0 : prev + 1));
    resetAutoLoop();
  }, [services.length]);

  // دالة التنقل للخلف
  const goToPrevious = useCallback(() => {
    setActiveTab((prev) => (prev === 0 ? services.length - 1 : prev - 1));
    resetAutoLoop();
  }, [services.length]);

  // إعادة تشغيل الـ Auto Loop بعد تفاعل يدوي
  const resetAutoLoop = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (autoLoopRef.current) clearInterval(autoLoopRef.current);

    timeoutRef.current = setTimeout(() => {
      startAutoLoop();
    }, PAUSE_AFTER_INTERACTION);
  };

  // بدء الـ Auto Loop
  const startAutoLoop = () => {
    if (autoLoopRef.current) clearInterval(autoLoopRef.current);

    autoLoopRef.current = setInterval(() => {
      goToNext();
    }, AUTO_INTERVAL);
  };

  // تشغيل الـ Auto Loop عند أول تحميل
  useEffect(() => {
    startAutoLoop();

    return () => {
      if (autoLoopRef.current) clearInterval(autoLoopRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  // Animation بتاع GSAP
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
      {/* Sidebar - Navigation Arrows فقط */}
      <div className="lg:col-span-1 flex lg:flex-col justify-center items-center gap-6 relative">
        {/* سهم لأعلى - Previous */}
        <button
          onClick={goToPrevious}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border border-slate-200 hover:border-mainColor hover:bg-white hover:shadow-md active:scale-95"
        >
          <ChevronUp
            size={32}
            className="text-slate-400 hover:text-mainColor transition-colors"
          />
        </button>

        {/* مؤشر رقمي (اختياري للتوضيح) */}
        <div className="hidden lg:flex flex-col items-center gap-1 text-xs font-mono text-slate-400">
          <span>{String(activeTab + 1).padStart(2, "0")}</span>
          {/* <span className="text-[10px]">/ {services.length}</span> */}
        </div>

        {/* سهم لأسفل - Next */}
        <button
          onClick={goToNext}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-500 border border-slate-200 hover:border-mainColor hover:bg-white hover:shadow-md active:scale-95"
        >
          <ChevronDown
            size={32}
            className="text-slate-400 hover:text-mainColor transition-colors"
          />
        </button>
      </div>

      {/* Content Area */}
      <div className="lg:col-span-11 grid lg:grid-cols-2 bg-white rounded-3xl lg:rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-30px_rgba(54,75,160,0.08)] overflow-hidden">
        {/* Left Side */}
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

        {/* Right Side */}
        <div className="p-6 sm:p-8 lg:p-16 flex flex-col justify-center layer-content">
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed mb-8">
            {activeService.desc}
          </p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {activeService.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="mt-1 w-5 h-5 rounded bg-mainGold/10 flex items-center justify-center">
                  <span className="text-mainGold text-lg leading-none">+</span>
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