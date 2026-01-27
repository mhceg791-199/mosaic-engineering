const ExperiencePreview = ({ activeItem }) => {
  return (
    <div className="relative">
      <div className="aspect-[16/10] md:aspect-[4/3] bg-white rounded-2xl 
                      overflow-hidden shadow-2xl border border-slate-200 relative">
        {/* Background image */}
        <img
          key={activeItem.title}
          src={activeItem.image}
          alt={activeItem.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25 
                     transition-opacity duration-700"
        />

        {/* Content */}
        <div className="absolute inset-0 p-6 md:p-10 
                        flex flex-col justify-end
                        bg-gradient-to-t from-white via-white/80 to-transparent">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-mainColor text-white rounded-lg">
              {activeItem.icon}
            </div>

            <div>
              <p className="text-xs font-bold text-mainColor uppercase tracking-widest">
                {activeItem.subtitle}
              </p>
              <h3 className="text-lg sm:text-2xl font-black italic">
                {activeItem.title}
              </h3>
            </div>
          </div>

          <p className="text-slate-600 paragraph leading-relaxed max-w-md font-light">
            {activeItem.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePreview;
