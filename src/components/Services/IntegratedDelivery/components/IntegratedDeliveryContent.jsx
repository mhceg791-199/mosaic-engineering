const IntegratedDeliveryContent = () => {
  return (
    <div className="reveal-content max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
      <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
        <div className="h-[2px] w-10 bg-mainGold"></div>
        <h4 className="text-mainGold font-mono tracking-[0.3em] text-xs uppercase italic">
          Mosaic Engineering
        </h4>
      </div>

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
        INTEGRATED <br />
        <span className="text-mainColor">DELIVERY.</span>
      </h2>

      <div className="space-y-6">
        <p className="paragraph text-gray-200 leading-relaxed">
          What distinguishes <b>Mosaic Engineering</b> is not just the range of
          services we offer, but how those services are delivered.
        </p>

        <p className="text-gray-400 border-l-2 border-mainGold pl-5 italic bg-white/5 py-4 rounded-r-xl">
          Mechanical, electrical, and structural teams operate as a single
          coordinated unit — aligning decisions early and maintaining that
          alignment throughout the project lifecycle.
        </p>

        <p className="text-gray-400">
          This integrated approach reduces risk, improves efficiency, and ensures
          systems perform as intended.
        </p>
      </div>
    </div>
  );
};

export default IntegratedDeliveryContent;
