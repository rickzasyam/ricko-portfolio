import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  SiGooglesheets,
  SiGoogleappsscript,
  SiLooker,
  SiTableau,
  SiPython,
  SiJavascript,
  SiGithub,
} from "react-icons/si";
import { BiLogoVisualStudio, BiData } from "react-icons/bi";

const skills = [
  // Business & Data Tools
  {
    name: "Google Sheet",
    icon: <SiGooglesheets size={40} />,
    category: "Business & Data Tools",
  },
  {
    name: "Looker Studio",
    icon: <SiLooker size={40} />,
    category: "Business & Data Tools",
  },
  {
    name: "Tableau",
    icon: <SiTableau size={40} />,
    category: "Business & Data Tools",
  },
  {
    name: "SQL",
    icon: <BiData size={40} />,
    category: "Business & Data Tools",
  },

  // Programming & Scripting
  {
    name: "Python",
    icon: <SiPython size={40} />,
    category: "Programming & Scripting",
  },
  {
    name: "JavaScript (basic)",
    icon: <SiJavascript size={40} />,
    category: "Programming & Scripting",
  },
  {
    name: "Google Apps Script",
    icon: <SiGoogleappsscript size={40} />,
    category: "Programming & Scripting",
  },

  // Tools
  {
    name: "VSCode",
    icon: <BiLogoVisualStudio size={40} />,
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: <SiGithub size={40} />,
    category: "Tools",
  },
];

const categories = ["all", "Business & Data Tools", "Programming & Scripting", "Tools"];

export const SkillSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  // perkiraan tinggi
  const defaultItemHeight = 180;
  const minVisibleRows = 2;
  const minHeight = `${defaultItemHeight * minVisibleRows}px`;

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skill Cards */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ minHeight }}
        >
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center gap-3 text-center"
            >
              <div className="text-primary">{skill.icon}</div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
