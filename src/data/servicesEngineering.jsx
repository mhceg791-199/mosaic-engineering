import { Settings, Zap, Building2 } from "lucide-react";

const servicesEngineering = [
    {
      title: "Mechanical",
      mainTitle : "MECHANICAL ENGINEERING",
      icon: <Settings size={24} />,
      tagline:
        "We design and coordinate mechanical systems that support comfort, safety, and operational continuity while remaining fully aligned with architectural and structural requirements.",
      desc:
        "Our mechanical engineering services focus on creating systems that perform efficiently, reliably, and consistently over time.",
      features: [
        "HVAC system design and coordination",
        "Plumbing and drainage systems",
        "Fire protection systems",
        "Energy-efficient mechanical solutions",
        "Integrated system coordination across disciplines"
      ],
      stat: "Lifecycle Driven",
      end: "Every mechanical solution is developed with performance, maintainability, and lifecycle efficiency in mind."
    },
    {
      title: "Electrical",
      mainTitle : "ELECTRICAL ENGINEERING",
      icon: <Zap size={24} />,
      tagline: "We focus on clarity, compliance, and scalability — ensuring electrical systems meet current demands while allowing for future growth and operational flexibility.",
      desc:
        "Our electrical engineering services are designed to deliver safe, resilient, and adaptable power systems for complex environments.",
      features: [
        "Power distribution systems",
        "Lighting design and control systems",
        "Low-current and special systems",
        "Backup power and resilience planning",
        "Code compliance and performance optimization"
      ],
      stat: "Future Ready",
      end: "Electrical systems are fully coordinated with mechanical and structural disciplines to ensure seamless integration."
    },
    {
      title: "Structural",
      mainTitle : "STRUCTURAL ENGINEERING",
      icon: <Building2 size={24} />,
      tagline: "We work closely with project teams to develop structures that respond to both technical requirements and practical execution considerations.",
      desc:
        "Our structural engineering services provide clear, efficient structural systems that balance strength, constructability, and long-term performance.",
      features: [
        "Structural analysis and design",
        "Concrete, steel, and hybrid structural systems",
        "Structural optimization",
        "Load assessments and coordination",
        "Design support throughout construction"
      ],
      stat: "Built to Last",
      end: "Our approach prioritizes clarity, coordination, and reliability at every stage."

    }
  ];

export default servicesEngineering;
