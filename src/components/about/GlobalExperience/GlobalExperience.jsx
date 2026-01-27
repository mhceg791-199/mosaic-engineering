import { useEffect, useState } from "react";
import { content } from "../../../data/globalExperience";
import {
  SLIDE_DURATION,
  PROGRESS_INTERVAL,
} from "../../../data/config/experienceConfig";

import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceTabs from "./components/ExperienceTabs";
import ExperiencePreview from "./components/ExperiencePreview";

const GlobalExperience = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  /* ===== AUTO SLIDE ===== */
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % content.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => clearTimeout(timer);
  }, [activeTab]);

  /* ===== PROGRESS ===== */
  useEffect(() => {
    const step = 100 / (SLIDE_DURATION / PROGRESS_INTERVAL);

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + step));
    }, PROGRESS_INTERVAL);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabChange = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-16 py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT */}
          <div className="lg:col-span-5 space-y-10">
            <ExperienceHeader isVisible={isVisible} />

            <ExperienceTabs
              content={content}
              activeTab={activeTab}
              progress={progress}
              onTabChange={handleTabChange}
            />
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <ExperiencePreview
              activeItem={content[activeTab]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalExperience;
