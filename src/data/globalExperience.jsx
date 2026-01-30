import { Globe2, Users, ShieldCheck } from "lucide-react";
import global from "../assets/globalExperience/global.webp";
import expertise from "../assets/globalExperience/expertise.webp";
import approach from "../assets/globalExperience/approach.webp";

export const content = [
  {
    title: "GLOBAL SCALE",
    subtitle: "People, Projects & Reach",
    desc: "With a team of 100+ engineers and technical professionals, Mosaic Engineering has contributed to 4,000+ projects across more than 20 countries, spanning North America, Europe, and the Middle East.",
    icon: <Users className="w-8 h-8" />,
    image: global,
  },
  {
    title: "MULTI-STANDARD EXPERTISE",
    subtitle: "Regulations & Environments",
    desc: "This experience allows us to move comfortably between different standards, regulations, and project environments — while maintaining a consistent level of technical rigor and coordination.",
    icon: <ShieldCheck className="w-8 h-8" />,
    image: expertise,
  },
  {
    title: "PROVEN DELIVERY MODEL",
    subtitle: "Engineering That Holds Up",
    desc: "No matter the location, our approach remains the same: clear systems, disciplined delivery, and engineering that holds up.",
    icon: <Globe2 className="w-8 h-8" />,
    image: approach,
  },
];
