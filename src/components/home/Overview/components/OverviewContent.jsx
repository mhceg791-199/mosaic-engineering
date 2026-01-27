import Watermark from "./Watermark";
import OverviewHeader from "./OverviewHeader";
import { Link } from "react-router-dom";

const OverviewContent = () => {
  return (
    <div className="parallax-content">
      <OverviewHeader />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* LEFT */}
        <div className="lg:col-span-7 space-y-10">
          <p className="reveal-text text-lg leading-relaxed text-black/80">
            Mosaic Engineering is a multidisciplinary engineering firm delivering
            integrated mechanical, electrical, and structural engineering
            solutions across complex projects and diverse sectors.
          </p>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="info-card bg-mainColor/[0.09] p-8 border-l-2 border-mainGold">
            <p className="text-sm leading-relaxed text-gray-800">
              We focus on the systems behind the structure: the forces, flows,
              and frameworks that allow projects to stand, operate, and endure.
            </p>
          </div>

          <div className="info-card bg-black text-lightColor p-6 relative overflow-hidden">
            <p className="text-sm text-lightColor/80 leading-relaxed">
              As a subsidiary of <Link to="https://mosaicholding.com/" target="_blank" className="font-bold text-base">Mosaic Holding Corporation</Link>, Mosaic Engineering
              operates within a broader ecosystem of engineering, design, and
              development expertise — enabling coordinated, performance-driven
              delivery.
            </p>

            <Watermark />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContent;
