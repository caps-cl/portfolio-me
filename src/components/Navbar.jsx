import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] z-10 flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo" className="h-10" />
      </div>

      <ul className="hidden md:flex" i>
        <li>
          <span className="text-[#7dd3fc]">01.</span>{" "}
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li>
          <span className="text-[#7dd3fc]">02.</span>{" "}
          <Link to="about" smooth={true} duration={500}>
            Sobre Mi
          </Link>
        </li>
        <li>
          <span className="text-[#7dd3fc]">03.</span>{" "}
          <Link to="skills" smooth={true} duration={500}>
            Habilidades
          </Link>
        </li>
        <li>
          <span className="text-[#7dd3fc]">04.</span>{" "}
          <Link to="project" smooth={true} duration={500}>
            Proyectos
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <BiMenuAltRight className="text-2xl" /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center pl-5"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            <span className="text-lg text-[#7dd3fc] pr-1">01.</span> Inicio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            <span className="text-lg text-[#7dd3fc] pr-1">02.</span>Sobre Mi
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            <span className="text-lg text-[#7dd3fc] pr-1">03.</span>Habilidades
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="project" smooth={true} duration={500}>
            <span className="text-lg text-[#7dd3fc] pr-1">04.</span>Proyectos
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
