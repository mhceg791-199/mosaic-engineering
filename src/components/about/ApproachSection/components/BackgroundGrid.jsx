const BackgroundGrid = () => {
  return (
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage:
          "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
        backgroundSize: "100px 100px",
      }}
    />
  );
};

export default BackgroundGrid;
