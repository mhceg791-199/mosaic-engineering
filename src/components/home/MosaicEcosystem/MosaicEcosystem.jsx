import { useRef } from "react";
import MosaicEcosystemView from "./components/MosaicEcosystemView";
import { useMosaicEcosystem } from "./components/useMosaicEcosystem";

const MosaicEcosystem = () => {
  const containerRef = useRef(null);
  const visualRef = useRef(null);
  const lineRef = useRef(null);

  useMosaicEcosystem({ containerRef, visualRef, lineRef });

  return (
    <MosaicEcosystemView
      containerRef={containerRef}
      visualRef={visualRef}
      lineRef={lineRef}
    />
  );
};

export default MosaicEcosystem;