const EngineeringIcons = ({ icons, activeIndex }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex -space-x-5">
        {icons.map((img, index) => (
          <div
            key={index}
            className={`w-16 h-16 md:w-20 md:h-20 rounded-full 
              border-4 border-lightColor bg-black 
              flex items-center justify-center overflow-hidden 
              transition-all duration-500
              ${
                index === activeIndex
                  ? "scale-100 opacity-100 z-10"
                  : "scale-75 opacity-40"
              }`}
          >
            <img
              src={img}
              alt="Engineering discipline"
              className="w-10 h-10 md:w-14 md:h-14 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineeringIcons;
