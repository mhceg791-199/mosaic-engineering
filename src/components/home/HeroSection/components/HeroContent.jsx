const HeroContent = ({ textRef }) => {
  return (
    <div className="relative z-20 max-w-6xl mx-auto px-6">
      <h1 className="flex flex-col mb-8">
        <div
          ref={(el) => (textRef.current[0] = el)}
          className="relative inline-block mb-4"
        >
          <span
            ref={(el) => (textRef.current[4] = el)}
            className="absolute top-5 left-0 h-[2px] bg-mainGold -z-10"
            style={{ width: "53.8%" }}
          />
          <span
            ref={(el) => (textRef.current[5] = el)}
            className="absolute bottom-5 left-0 h-[2px] bg-mainGold"
            style={{ width: "53.8%" }}
          />
          <span
            className="block text-3xl md:text-6xl font-black italic tracking-tighter uppercase leading-[0.85]"
            style={{
              color: "black",
              WebkitTextStroke: "1.2px #C5A363",
            }}
          >
            ENGINEERING THE
          </span>
        </div>

        <span
          ref={(el) => (textRef.current[1] = el)}
          className="block text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-[1]"
        >
          SYSTEMS THAT <br className="md:hidden" /> MAKE PROJECTS WORK.
        </span>
      </h1>

      <p
        ref={(el) => (textRef.current[3] = el)}
        className="max-w-2xl text-lg text-mainGold/80"
      >
        Integrated structural, mechanical, and electrical engineering for
        complex projects worldwide.
      </p>
    </div>
  );
};

export default HeroContent;
