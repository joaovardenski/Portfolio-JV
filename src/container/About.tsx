import { motion } from "framer-motion";
import { aboutsData } from "../data/aboutsData";

const About = () => {
  const abouts = aboutsData;

  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-20 px-6"
    >
      {/* ===== TITLE ===== */}
      <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
        I Know that{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-600">
          Good Design
        </span>
        <br />
        means{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-600">
          Good Business
        </span>
      </h2>

      {/* ===== PROFILES GRID ===== */}
      <div className="flex flex-wrap justify-center items-start mt-12 gap-8">
        {abouts.map((about, index) => (
          <motion.div
            key={about.title + index}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, type: "tween" }}
            className="w-44 md:w-56 flex flex-col items-start bg-white rounded-xl shadow-lg p-4"
          >
            <img
              src={about.imgUrl}
              alt={about.title}
              className="w-full h-40 md:h-56 object-cover rounded-lg"
            />

            <h3 className="mt-4 text-lg font-semibold">{about.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{about.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
