import HeroSection from "../../components/home/HeroSection/HeroSection";
import Overview from "../../components/home/Overview/Overview";
import WhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";
import MosaicEcosystem from "../../components/home/MosaicEcosystem/MosaicEcosystem";
import GlobalSection from "../../components/home/GlobalSection/GlobalSection";

export default function home() {
  return (
    <>
      <HeroSection />
      <Overview />
      <WhatWeDo />
      <MosaicEcosystem />
      <GlobalSection />
    </>
  );
}
