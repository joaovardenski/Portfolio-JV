// src/container/Works.jsx
import { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { worksData } from "../data/worksData";

const FILTERS = ["Machine Learning", "Python", "Web App", "UI/UX", "React JS", "All"];

const Works = () => {
  const works = worksData;
  const [filterWork, setFilterWork] = useState(worksData);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [activeOverlay, setActiveOverlay] = useState<number | null>(null);

  const handleWorkFilter = (item: string) => {
    if (item === activeFilter) return;
    setActiveFilter(item);

    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 400);
  };

  return (
    <section id="works" className="w-full py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-bold text-center leading-tight">
        My Creative <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-600">Portfolio Section</span> 
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {FILTERS.map((item) => (
          <button
            key={item}
            onClick={() => handleWorkFilter(item)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300
              ${activeFilter === item
                ? "bg-indigo-600 text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"}
            `}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Portfolio grid */}
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.45, ease: "easeInOut" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start mt-10"
      >
        {filterWork.map((work) => (
          <article
            key={work.id}
            className="relative bg-white rounded-lg shadow-md overflow-hidden"
            onClick={() => setActiveOverlay(activeOverlay === work.id ? null : work.id)}
          >
            {/* IMAGE WRAPPER */}
            <div className="relative w-full h-52 md:h-64">
              <img
                src={work.imgUrl}
                alt={work.title}
                className="w-full h-full object-cover"
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: activeOverlay === work.id ? 1 : 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
                className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4 opacity-0"
              >
                {work.projectLink && (
                  <a href={work.projectLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition">
                    <motion.div whileHover={{ scale: 0.95 }} className="text-white text-xl">
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}

                {work.codeLink && (
                  <a href={work.codeLink} target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition">
                    <motion.div whileHover={{ scale: 0.95 }} className="text-white text-xl">
                      <AiFillGithub />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{work.description}</p>

              <div className="mt-4">
                <span className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                  {work.tags[0]}
                </span>
              </div>
            </div>
          </article>
        ))}
      </motion.div>
    </section>
  );
};

export default Works;
