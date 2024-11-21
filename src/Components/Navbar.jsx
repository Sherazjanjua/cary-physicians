import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-transparent py-1 px-5 md:px-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Cary Physicians Logo" className="h-24 w-auto" />
          <span className="font-bold text-white text-xl md:text-2xl ml-[-20px]">
            Cary Physicians
          </span>
          <ul className="hidden lg:flex gap-10 text-white font-semibold ml-8">
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Pages</li>
        </ul>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

       

        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4">
            <FaFacebookF className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <RiTwitterXLine className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <AiFillInstagram className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
          </div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white text-center justify-center flex items-center gap-2 px-4 py-2 rounded-full transition duration-300">
            <BsFillTelephoneFill />
            Book an Appointment
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <ul className="text-white font-semibold">
            <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Home</li>
            <li className="hover:text-sky-500 transition duration-300 cursor-pointer">About</li>
            <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Pages</li>
          </ul>
          <div className="flex flex-col gap-4">
            <div className="flex justify-center gap-4">
              <FaFacebookF className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <RiTwitterXLine className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <AiFillInstagram className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <FaLinkedinIn className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            </div>
            <button className="bg-sky-600 text-center hover:bg-sky-700 text-white flex items-center justify-center gap-2 px-4 py-2 rounded-full transition duration-300">
              <BsFillTelephoneFill />
              Book an Appointment
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
