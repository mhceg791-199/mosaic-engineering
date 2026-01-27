import ProgressBorder from "./ProgressBorder";

const ConvictionCard = ({
  title,
  desc,
  icon,
  active,
  progress,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-[2px] rounded-2xl cursor-pointer overflow-hidden transition-all duration-500
        ${
          active
            ? "scale-[1.02] shadow-xl"
            : "opacity-70 hover:opacity-100"
        }`}
    >
      {active && <ProgressBorder progress={progress} />}

      <div
        className={`relative z-10 p-8 bg-white rounded-2xl border transition-all
          ${active ? "border-transparent" : "border-slate-200"}`}
      >
        <div className="flex items-start gap-6">
          <div
            className={`p-3 rounded-xl transition-all duration-500
              ${
                active
                  ? "bg-mainColor text-white scale-110 shadow-lg shadow-mainColor/20"
                  : "bg-slate-50 text-mainColor"
              }`}
          >
            {icon}
          </div>

          <div>
            <h4
              className={`text-lg font-bold transition-colors duration-500
                ${active ? "text-mainColor" : "text-slate-900"}`}
            >
              {title}
            </h4>

            <p
              className={`text-sm mt-1 leading-relaxed transition-colors duration-500
                ${
                  active
                    ? "text-slate-700 font-medium"
                    : "text-slate-500 font-light"
                }`}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvictionCard;
