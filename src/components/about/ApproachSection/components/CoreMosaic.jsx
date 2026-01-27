import { forwardRef } from "react";

const CoreMosaic = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="absolute z-0">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="font-black italic leading-none text-slate-900/5
                     text-[4rem] sm:text-[6rem] md:text-[8rem] 
                     lg:text-[10rem] xl:text-[12rem]"
        >
          MOSAIC
        </div>
      </div>
    </div>
  );
});

export default CoreMosaic;
