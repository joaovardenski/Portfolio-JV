import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import jvicon from '../../assets/jvlogo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const menuItems = ['home', 'about', 'works', 'skills', 'contact'];

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
        <img src={jvicon} alt="" className='w-12'/>
        <p className="bg-linear-to-r from-black to-gray-500 bg-clip-text text-transparent text-4xl font-bold">
          João Victor
        </p>
      </div>


      {/* LINKS DESKTOP */}
      <ul
        className="
          hidden md:flex 
          justify-center items-center gap-8 list-none
        "
      >
        {menuItems.map((item) => (
          <li key={item} className="flex flex-col items-center cursor-pointer">
            {/* bolinha */}
            <div className="w-[5px] h-[5px] rounded-full bg-transparent mb-1 transition-all group-hover:bg-blue-500" />

            <a
              href={`#${item}`}
              className="
                text-gray-600 uppercase font-medium 
                transition-all hover:text-blue-500
              "
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

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
        transition={{ duration: 0.85, ease: 'easeOut' }}
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

        <ul className="flex flex-col gap-2 w-full"> 
          {menuItems.map((item) => (
            <li key={item} className="w-full py-3">
              <a
                href={`#${item}`}
                onClick={() => setToggle(false)}
                className="
                  text-gray-600 uppercase  text-xl 
                  hover:text-blue-600 transition-all block w-full
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    )}
  </div>
    </nav>
  );
};

export default Navbar;
