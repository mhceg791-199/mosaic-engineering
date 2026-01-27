const GridBackground = () => {
  return (
    <div
      className="absolute inset-0 z-0 opacity-[0.35]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(54,75,160,0.15) 1px, transparent 1px),
          linear-gradient(90deg, rgba(54,75,160,0.15) 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    />
  );
};

export default GridBackground;
