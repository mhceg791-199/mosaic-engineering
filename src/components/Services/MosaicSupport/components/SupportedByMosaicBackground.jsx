const SupportedByMosaicBackground = () => {
  return (
    <>
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <h4 className="text-[40vw] sm:text-[28vw] lg:text-[22vw] font-black italic text-black whitespace-nowrap">
          MOSAIC
        </h4>
      </div>

      {/* Decorative Shapes */}
      <div className="geo-shape hidden md:block absolute top-24 right-[8%] w-52 h-52 lg:w-72 lg:h-72 border border-mainGold/20 rounded-full" />
      <div className="geo-shape hidden md:block absolute bottom-24 left-[6%] w-36 h-36 lg:w-48 lg:h-48 border border-gray-200 rotate-12" />
    </>
  );
};

export default SupportedByMosaicBackground;
