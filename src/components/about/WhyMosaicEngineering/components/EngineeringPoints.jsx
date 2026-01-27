const EngineeringPoints = ({ points }) => {
  return (
    <div className="lg:col-span-7 bg-white grid md:grid-cols-2">
      {points.map((point) => (
        <div
          key={point.id}
          className="p-8 md:p-10 border-b border-r border-slate-100 
                     group hover:bg-slate-50 transition-all duration-300 relative overflow-hidden"
        >
          {/* Big index */}
          <span className="absolute top-4 right-6 text-5xl font-black 
                           text-slate-100 group-hover:text-mainGold/10">
            {point.id}
          </span>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-mainColor/10 rounded-lg 
                            flex items-center justify-center text-mainColor 
                            mb-6 group-hover:bg-mainColor group-hover:text-white 
                            transition-all">
              {point.icon}
            </div>

            <h5 className="text-lg font-bold text-slate-900 mb-3 uppercase">
              {point.title}
            </h5>

            <p className="text-sm text-slate-500 leading-relaxed">
              {point.text}
            </p>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-mainGold 
                          group-hover:w-full transition-all duration-500" />
        </div>
      ))}
    </div>
  );
};

export default EngineeringPoints;
