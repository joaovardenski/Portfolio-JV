import { useState } from "react";
import { motion } from "framer-motion";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { skillsData, experiencesData } from "../data/skillsData";

const Skills = () => {
  const [skills] = useState(skillsData);
  const [experiences] = useState(experiencesData);

  return (
    <section id="skills" className="w-full py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Skills <span className="text-indigo-600">& Experiences</span>
      </h2>

      <div className="w-full flex flex-col md:flex-row gap-12 md:gap-20 justify-center">
        {/* SKILLS LIST */}
        <motion.div className="flex flex-wrap justify-center md:justify-start gap-6 flex-1">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.4 }}
              key={skill.name}
              className="flex flex-col items-center"
            >
              <div
                className="flex items-center justify-center rounded-full w-20 h-20 md:w-24 md:h-24 hover:shadow-xl transition"
                style={{ backgroundColor: skill.bgColor}}
              >
                <img src={skill.icon} alt={skill.name} className="w-1/2 h-1/2" />
              </div>

              <p className="text-sm font-medium mt-2">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* EXPERIENCES */}
        <div className="flex flex-col flex-1">
          {experiences.map((exp) => (
            <motion.div
              key={exp.year}
              className="flex gap-10 md:gap-14 items-start mb-6"
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg font-bold text-indigo-600">{exp.year}</p>

              <div className="flex flex-col gap-4 flex-1">
                {exp.works.map((work) => (
                  <div key={work.name}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      className="cursor-pointer"
                      data-tooltip-id={work.name}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="font-semibold text-gray-800">{work.name}</h4>
                      <p className="text-sm text-gray-500">{work.company}</p>
                    </motion.div>

                    {/* TOOLTIP NOVO */}
                    <Tooltip
                      id={work.name}
                      className="bg-white! text-gray-700! shadow-lg! rounded-lg! p-4! max-w-xs"
                      place="top"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
