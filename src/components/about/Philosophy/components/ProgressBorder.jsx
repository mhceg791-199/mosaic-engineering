const ProgressBorder = ({ progress }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="none"
        stroke="#003366"
        strokeWidth="4"
        strokeDasharray="1000"
        strokeDashoffset={1000 - progress * 10}
        rx="16"
        className="transition-all duration-75 ease-linear"
      />
    </svg>
  );
};

export default ProgressBorder;
