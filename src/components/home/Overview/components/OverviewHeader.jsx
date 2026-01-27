const OverviewHeader = () => {
  return (
    <header className="mb-20">
      <span className="reveal-text block font-mono text-xs tracking-[0.4em] uppercase text-mainGold mb-4">
        MOSAIC HOLDING CORPORATION
      </span>

      <h2 className="reveal-text text-[10vw] md:text-[7vw] font-black 
                     leading-[0.9] tracking-tighter uppercase italic">
        MOSAIC <br />
        <span
          className="text-transparent"
          style={{ WebkitTextStroke: "1.5px #C5A363" }}
        >
          ENGINEERING
        </span>
      </h2>
    </header>
  );
};

export default OverviewHeader;
