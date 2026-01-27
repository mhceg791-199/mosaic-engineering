const GridBackground = ({ gridRef }) => {
  return (
    <>
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
             linear-gradient(rgba(0,180,255,0.15) 1px, transparent 1px),
             linear-gradient(90deg, rgba(0,180,255,0.15) 1px, transparent 1px)
           `,
          backgroundSize: "80px 80px",
          transform: "perspective(800px) rotateX(55deg)",
          transformOrigin: "top center",
        }}
      />
    </>
  );
};

export default GridBackground;
