import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { testimonialsData } from "../data/testimonialsData";
import { brandsData } from "../data/brandsData";
import { CarouselButton, Card } from "../components";
import { fadeInKeyframes } from "../utils/motionVariants";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonialsData.length - 1 : currentIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex(
      currentIndex === testimonialsData.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <section
      id="testimonial"
      className="w-full flex flex-col items-center py-16 px-4"
    >
      {/* CARD */}
      {testimonialsData.length > 0 && (
        <>
          <Card
            className="
            flex flex-col sm:flex-row w-full sm:w-3/5 shadow-xl
            rounded-xl p-6 min-h-80 transition-all duration-300
          "
          >
            {/* IMAGE */}
            <img
              src={testimonialsData[currentIndex].imgurl}
              alt={testimonialsData[currentIndex].name}
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover mx-auto sm:mx-0"
            />

            {/* CONTENT */}
            <div className="flex flex-col flex-1 px-0 sm:px-6 mt-4 sm:mt-0">
              <p className="text-lg leading-7 text-gray-900">
                {testimonialsData[currentIndex].feedback}
              </p>

              <div className="mt-4">
                <h4 className="text-xl font-semibold text-indigo-600">
                  {testimonialsData[currentIndex].name}
                </h4>
                <h5 className="text-gray-500 text-sm mt-1">
                  {testimonialsData[currentIndex].company}
                </h5>
              </div>
            </div>
          </Card>

          {/* SETAS */}
          <div className="flex flex-row mt-4 gap-5">
            <CarouselButton
              icon={<HiChevronLeft className="w-6 h-6 text-indigo-600" />}
              onClick={prev}
              label="Previous testimonial"
            />

            <CarouselButton
              icon={<HiChevronRight className="w-6 h-6 text-indigo-600" />}
              onClick={next}
              label="Next testimonial"
            />
          </div>
        </>
      )}

      {/* BRANDS */}
      <div
        className="
          w-4/5 flex flex-wrap justify-center items-center mt-10 gap-6
        "
      >
        {brandsData.map((brand) => (
          <motion.div
            key={brand.name}
            {...fadeInKeyframes}
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
