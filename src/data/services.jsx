import electrical from "../assets/whatWeDo/electrical.webp";
import mechanical from "../assets/whatWeDo/mechanical.webp";
import structural from "../assets/whatWeDo/structural.webp";
import { Settings, Zap, Building2 } from "lucide-react";

const services = [
  {
    title: "MECHANICAL ENGINEERING",
    icon: <Settings size={48} className="text-mainGold" />,
    desc: "Design and coordination of high-performance mechanical systems that support efficiency, comfort, and operational reliability.",
    tags: ["Climate Systems", "Fluid Networks", "Fire & Safety"],
    mechImg: mechanical,
  },
  {
    title: "ELECTRICAL ENGINEERING",
    icon: <Zap size={48} className="text-mainGold" />,
    desc: "Integrated electrical systems designed to deliver safe, resilient, and scalable power across complex environments.",
    tags: ["Power Distribution", "Lighting Control Systems", "Renewable Energy Systems"],
    mechImg: electrical,
  },
  {
    title: "STRUCTURAL ENGINEERING",
    icon: <Building2 size={48} className="text-mainGold" />,
    desc: "Clear, efficient structural systems engineered for strength, constructability, and long-term performance.",
    tags: ["Foundation Design", "Steel Structures", "Concrete Structures"],
    mechImg: structural,
  },
];
export default services;
