import { images } from "../constants";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section
      id="home"
      className="
        w-full 
        md:min-h-screen 
        flex flex-col md:flex-row 
        px-8
        pt-24
        pb-6
        md:pb-24 
        bg-cover bg-center bg-no-repeat
        justify-center items-center
      "
      style={{
        backgroundImage: `url(${images.bgIMG})`,
      }}
    >

      {/* ======= LEFT INFO ======= */}
      <div className="flex-1 flex flex-col justify-start items-start gap-6 mr-8 animate-slide-left">
        <div className="flex flex-col items-end md:items-start gap-6">
          {/* Badge */}
          <div className="flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl">
            <span className="text-2xl md:text-6xl inline-block origin-[70%_70%]">
              👋
            </span>

            <div>
              <p className="text-gray-600">Hello, i am</p>
              <h1 className="bg-linear-to-r from-black to-gray-600 bg-clip-text text-transparent text-2xl md:text-4xl font-bold">João Victor</h1>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-col px-6 py-4 bg-white rounded-2xl shadow-xl text-right md:text-left">
            <p className="text-gray-600 tracking-wide">Web Developer</p>
            <div className="w-20 h-0.5 bg-gray-300 my-1 rounded-full"></div>
            <p className="text-gray-600 tracking-wide">Software Enginner Student</p>
          </div>


        </div>
      </div>

      {/* ======= PROFILE IMAGE ======= */}
      <div className="flex-1 relative flex justify-center items-center animate-fade-in">
        <img
          src={images.profile}
          alt="profile"
          className="w-full max-w-md z-10 object-contain"
        />

        <img
          src={images.circle}
          alt="circle-overlay"
          className="absolute bottom-0 w-full max-w-md h-[91%] object-contain z-0 animate-scale-in"
        />
      </div>

      {/* ======= SKILL CIRCLES ======= */}
        <div className="hidden md:flex flex-1 flex-col justify-evenly items-start gap-8 ml-4 md:ml-8 mt-12 md:mt-0">
          {[images.react, images.typescript, images.tailwind].map((circle, i) => {

            // Durations diferentes para cada bolha
            const durations = [4, 5, 6]; // normal, slow, fast

            return (
              <motion.div
                key={i}
                className={`
                  flex justify-center items-center rounded-full bg-white shadow-xl
                  hover:shadow-2xl hover:scale-105 transition-all duration-300
                  ${i === 0 ? "w-24 h-24" : ""}
                  ${i === 1 ? "w-40 h-40" : ""}
                  ${i === 2 ? "w-20 h-20" : ""}
                `}
                animate={{
                  y: [0, -30, -2, -22, 0],
                  rotate: [0, 2, -1, 1, 0],
                  scale: [1, 1.02, 0.98, 1.01, 1],
                }}
                transition={{
                  duration: durations[i],
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <img src={circle} alt="tech" className="w-3/5 h-3/5" />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
};

export default Header;
