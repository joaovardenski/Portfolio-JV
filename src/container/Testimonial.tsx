import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { testimonialsData, brandsData } from "../data/testimonialsData";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = testimonialsData;
  const brands = brandsData;

  const prev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section
      id="testimonial"
      className="w-full flex flex-col items-center py-16 px-4"
    >
      {/* CARD */}
      {testimonials.length > 0 && (
        <>
          <div
            className="
            flex flex-col sm:flex-row w-full sm:w-3/5 bg-white shadow-xl 
            rounded-xl p-6 min-h-80 transition-all duration-300
          "
          >
            {/* IMAGE */}
            <img
              src={testimonials[currentIndex].imgurl}
              alt={testimonials[currentIndex].name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto sm:mx-0"
            />

            {/* CONTENT */}
            <div className="flex flex-col flex-1 px-0 sm:px-6 mt-4 sm:mt-0">
              <p className="text-lg leading-7 text-gray-900">
                {testimonials[currentIndex].feedback}
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-semibold text-indigo-600">
                  {testimonials[currentIndex].name}
                </h4>
                <h5 className="text-gray-500 text-sm mt-1">
                  {testimonials[currentIndex].company}
                </h5>
              </div>
            </div>
          </div>

          {/* SETAS */}
          <div className="flex flex-row mt-4 gap-5">
            <button
              onClick={prev}
              className="
                w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
                hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300
              "
            >
              <HiChevronLeft className="w-6 h-6 text-indigo-600" />
            </button>

            <button
              onClick={next}
              className="
                w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center
                hover:bg-indigo-600 hover:text-white cursor-pointer transition-all duration-300
              "
            >
              <HiChevronRight className="w-6 h-6 text-indigo-600" />
            </button>
          </div>
        </>
      )}

      {/* BRANDS */}
      <div
        className="
          w-4/5 flex flex-wrap justify-center items-center mt-10 gap-6
        "
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="w-32 sm:w-40 hover:grayscale-0 lg:grayscale transition-all duration-300"
          >
            <img
              src={brand.imgUrl}
              alt={brand.name}
              className="w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
