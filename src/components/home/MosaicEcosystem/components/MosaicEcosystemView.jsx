import { Workflow, ShieldCheck, Zap } from "lucide-react";

const MosaicEcosystemView = ({ containerRef, visualRef, lineRef }) => {
  return (
    <section
      ref={containerRef}
      className="relative bg-white text-slate-900 overflow-hidden py-16 md:py-24"
    >
      {/* SVG LINE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
        <path
          ref={lineRef}
          d="M 0 500 Q 200 400 400 500 T 800 500 T 1200 300 T 1600 500"
          fill="none"
          stroke="#364BA0"
          strokeWidth="1"
        />
      </svg>

      {/* GRID */}
      <div className="absolute inset-0 blueprint-grid pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#364BA0 1px, transparent 1px), linear-gradient(90deg, #364BA0 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-24 items-center">
          {/* LEFT */}
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase">
              <span className="block">Positioned</span>
              <span className="block text-mainColor">Within Mosaic</span>
            </h2>

            <p className="stagger-item border-l-4 border-mainColor pl-6 text-slate-600">
              <strong>Mosaic Engineering</strong> is part of an integrated Mosaic
              ecosystem built to deliver end-to-end technical intelligence.
            </p>

            <div className="bg-slate-50 p-8 border shadow-sm">
              <p className="stagger-item text-2xl font-bold italic">
                <span className="text-mainGold">
                  We don’t just engineer projects.
                </span>
                <br />
                We strengthen the systems behind them.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex-1 h-px bg-slate-200" />
                <Zap size={18} className="text-mainGold" />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div ref={visualRef} className="lg:w-1/2 relative">
            <div className="relative w-[320px] h-[440px] mx-auto">
              <div className="mosaic-piece layer-floating absolute inset-0 bg-mainColor p-8 text-white shadow-2xl">
                <h3 className="text-4xl font-black italic">MOSAIC SYSTEM</h3>
              </div>

              <div className="mosaic-piece absolute -bottom-8 -left-10 bg-white p-6 md:pr-16 shadow-xl">
                <Workflow className="text-mainGold mb-2" />
                Collaboration
              </div>

              <div className="mosaic-piece absolute top-16 -right-8 bg-slate-900 p-6 text-white md:pr-16 shadow-xl">
                <ShieldCheck className="text-mainGold mb-2" />
                Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicEcosystemView;
