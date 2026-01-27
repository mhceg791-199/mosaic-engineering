import EngineeringDisciplines from "../../components/Services/EngineeringDisciplines/EngineeringDisciplines";
import IntegratedDelivery from "../../components/Services/IntegratedDelivery/IntegratedDelivery";
import MosaicSupport from "../../components/Services/MosaicSupport/MosaicSupport";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  const paragraphs = [
    "Mosaic Engineering delivers integrated mechanical, electrical, and structural engineering services designed to work as one coordinated system.",
    "Our services support complex projects across diverse sectors, ensuring technical clarity, operational efficiency, and long-term performance from concept through execution."
    ];

  return (
    <>
      <FirstSectionByVideo title="Services" />
      <DescriptionAbout
        id="services-mosaic-engineering"
        firstWord="Engineering "
        secondWord="Services"
        paragraphs={paragraphs}
        particleColors={["#364BA0", "#364BA0"]}
        height="h-[50vh] md:h-[55vh]"
      />
      <EngineeringDisciplines />
      <IntegratedDelivery />
      <MosaicSupport/>
    </>
  );
}
