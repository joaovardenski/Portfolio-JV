import { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import jvicon from "../../assets/jvlogo.png";
import MenuLinks from "./MenuLinks";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuItems = ["home", "about", "works", "skills", "contact"];

  return (
    <nav
      className="
        w-full flex justify-between items-center
        px-8 py-4
        bg-[rgba(255,255,255,0.25)]
        backdrop-blur-sm
        border border-[rgba(255,255,255,0.18)]
        fixed top-0 left-0 z-20
      "
    >
      {/* LOGO */}
      <div className="flex justify-start items-center gap-3">
        <img src={jvicon} alt="Logo JV" className="w-12"/>
        <p className="bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent text-4xl font-bold">
          João Victor
        </p>
      </div>


      {/* LINKS DESKTOP */}
      <MenuLinks items={menuItems} variant="desktop" />

      <div
    className="
      w-[35px] h-[35px] rounded-full bg-blue-500 
      flex justify-center items-center md:hidden
    "
  >
    <HiMenuAlt4
      className="w-5 h-5 text-white"
      onClick={() => setToggle(true)}
    />

    {toggle && (
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="
          fixed top-0 bottom-0 right-0 z-50
          w-[85%] h-screen
          p-6
          bg-white
          flex flex-col justify-start items-start
          shadow-2xl
        "
      >
        <HiX
          className="w-8 h-8 text-blue-600 mb-6 self-end cursor-pointer"
          onClick={() => setToggle(false)}
        />
        
        <p className="bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent text-3xl font-bold mb-8">
            João Victor
        </p>

        <MenuLinks items={menuItems} variant="mobile" onItemClick={() => setToggle(false)} />
      </motion.div>
    )}
  </div>
    </nav>
  );
};

export default Navbar;
