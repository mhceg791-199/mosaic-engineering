import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import WhyMosaicEngineering from "../../components/about/WhyMosaicEngineering/WhyMosaicEngineering";
import GlobalExperience from "../../components/about/GlobalExperience/GlobalExperience";
import ApproachSection from "../../components/about/ApproachSection/ApproachSection";
import PhilosophySectionn from "../../components/about/Philosophy/PhilosophySection";
import { Link } from "react-router-dom";

function About() {
  const paragraphs = [
  "Mosaic Engineering started with a simple observation: engineering works best when it works together.",

  "Too often, mechanical, electrical, and structural systems are designed in isolation — coordinated late, adjusted under pressure, and forced to fit. Mosaic Engineering was created to challenge that approach.",

  <>
    Built as part of{" "}
    <Link to="https://mosaicholding.com/" target="_blank" className="font-bold text-base hover:underline">Mosaic Holding Corporation</Link>
    , Mosaic Engineering was formed to support projects that require more than
    technical delivery — projects that demand clarity, alignment, and
    accountability from the very beginning.
  </>,

  "From its early days, the firm was shaped around one idea: engineering is not a set of parallel tasks, but a single system with many parts. Every decision affects another. Every system relies on the next.",

  "Today, Mosaic Engineering brings together multidisciplinary teams, global experience, and a systems-driven mindset to deliver engineering that is precise, coordinated, and built to last.",
];


  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-mosaic-engineering"
        firstWord="Our "
        secondWord="Story"
        paragraphs={paragraphs}
        particleColors={["#364BA0", "#364BA0"]}
        height="h-[70vh] md:h-[55vh]"
      />
      <PhilosophySectionn/>
      <WhyMosaicEngineering/>
      <GlobalExperience/>
      <ApproachSection/>
    </>
  );
}

export default About;