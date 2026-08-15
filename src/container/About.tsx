import { profilesData } from "../data/profilesData";
import { Card } from "../components";
import { fadeIn } from "../utils/motionVariants";

const About = () => {
  return (
    <section
      id="about"
      className="w-full flex flex-col items-center justify-center py-20 px-6"
    >
      {/* ===== TITLE ===== */}
      <h2 className="text-3xl md:text-5xl font-bold text-center leading-tight">
  Building{" "}
  <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-600">
    Reliable Software
  </span>
  <br />
  for{" "}
  <span className="text-transparent bg-clip-text bg-linear-to-r from-black to-gray-600">
    Better Experiences
  </span>
</h2>

      {/* ===== PROFILES GRID ===== */}
      <div className="flex flex-wrap justify-center items-start mt-12 gap-10">
        {profilesData.map((profile, index) => (
          <Card
            key={profile.title + index}
            {...fadeIn}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, type: "tween" }}
            className="
              w-[85%] max-w-80 md:w-62
              flex flex-col items-start
              rounded-xl shadow-lg
              p-5
            "
          >
            <img
              src={profile.imgUrl}
              alt={profile.title}
              className="w-full h-48 md:h-56 object-cover rounded-lg"
            />

            <h3 className="mt-4 text-lg font-semibold">{profile.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{profile.description}</p>
          </Card>
        ))}
      </div>

    </section>
  );
};

export default About;
