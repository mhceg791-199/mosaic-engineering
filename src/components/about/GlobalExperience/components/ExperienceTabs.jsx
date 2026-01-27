const ExperienceTabs = ({
  content,
  activeTab,
  progress,
  onTabChange,
}) => {
  return (
    <div className="space-y-4 pt-10">
      {content.map((item, idx) => (
        <button
          key={idx}
          onClick={() => onTabChange(idx)}
          className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 
                      w-full text-left transition-all duration-300 ${
            activeTab === idx
              ? "opacity-100 translate-x-2 sm:translate-x-4"
              : "opacity-40 hover:opacity-70"
          }`}
        >
          <span className="text-xs font-mono text-slate-400">
            0{idx + 1}
          </span>

          <span className="text-base sm:text-xl font-black italic uppercase">
            {item.title}
          </span>

          {/* Progress */}
          {activeTab === idx && (
            <div className="flex-1 h-px bg-mainGold/20 overflow-hidden mt-1 sm:mt-0">
              <div
                className="h-full bg-mainGold transition-[width] duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ExperienceTabs;
