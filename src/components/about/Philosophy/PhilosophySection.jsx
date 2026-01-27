import { useEffect, useState } from "react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import convictions from "../../../data/convictions";
import ConvictionCard from "./components/ConvictionCard";
import { usePhilosophyCycle } from "./components/usePhilosophyCycle";

const PhilosophySectionn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const { activeIndex, progress, activate } = usePhilosophyCycle(
    convictions.length,
  );

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 px-6">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-slate-50" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LEFT */}
          <div
            className={`lg:col-span-7 transition-all duration-1000
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
          >
            <div className="text-mainColor mb-8">
              <SectionHeader firstWord="Our Philosophy" />
            </div>

            <h2 className="heading font-light text-slate-900 leading-[1.2] mb-8">
              At Mosaic Engineering, we don’t believe engineering needs to be{" "}
              <span className="font-serif italic text-mainGold">loud</span> to
              be effective.
            </h2>

            <p className="paragraph font-light leading-relaxed max-w-2xl">
              We believe the best engineering is felt in how a project performs
              — how smoothly it operates, how efficiently it runs, and how well
              it endures over time.
            </p>

            <div
              className={`mt-8 p-6 border-l-4 border-mainColor bg-mainColor/5 rounded-r-xl transition-all duration-1000
                ${isVisible ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "1200ms" }}
            >
              <p className="text-sm italic text-slate-600">
                This philosophy allows us to deliver engineering solutions that
                are grounded, reliable, and resilient — without unnecessary
                complication or compromise.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="paragraph mb-6 px-2">
              Our work is guided by a few simple convictions:
            </h3>

            {convictions.map((item, idx) => (
              <ConvictionCard
                key={idx}
                {...item}
                active={activeIndex === idx}
                progress={progress}
                onClick={() => activate(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Shape */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default PhilosophySectionn;
