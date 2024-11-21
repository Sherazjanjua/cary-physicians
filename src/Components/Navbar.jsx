import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { RiTwitterXLine } from 'react-icons/ri';
import { FaLinkedinIn } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-transparent py-2 px-5 md:px-10 relative">
      {/* Top Section */}
      <div className="flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Cary Physicians Logo" className="h-16 w-auto" />
          <span className="font-bold text-white text-xl md:text-2xl">Cary Physicians</span>
          {/* Desktop Menu */}
        <ul className="hidden lg:flex ml-10 gap-10 text-white font-semibold">
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Home</li>
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">About</li>
          <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Pages</li>
        </ul>
        </div>

        

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-3xl focus:outline-none"
          >
            {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Social Links and CTA for Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-4">
            <FaFacebookF className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <RiTwitterXLine className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <AiFillInstagram className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            <FaLinkedinIn className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
          </div>
          <button className="bg-sky-600 hover:bg-sky-700 text-white flex items-center gap-2 px-4 py-2 rounded-full transition duration-300">
            <BsFillTelephoneFill />
            Book an Appointment
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* Menu Content */}
          <div className="fixed top-0 right-0 bg-gray-900 w-3/4 h-full z-20 p-6 shadow-lg flex flex-col gap-6 animate-slide-in">
            <ul className="text-white font-semibold space-y-6">
              <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Home</li>
              <li className="hover:text-sky-500 transition duration-300 cursor-pointer">About</li>
              <li className="hover:text-sky-500 transition duration-300 cursor-pointer">Pages</li>
            </ul>
            <div className="flex justify-center gap-6 mt-auto">
              <FaFacebookF className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <RiTwitterXLine className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <AiFillInstagram className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
              <FaLinkedinIn className="text-white hover:text-sky-500 transition duration-300 cursor-pointer" />
            </div>
            <button className="bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center gap-2 px-6 py-3 rounded-lg transition duration-300">
              <BsFillTelephoneFill />
              Book an Appointment
            </button>
          </div>
        </>
      )}
    </nav>
  );
}

export default Navbar;
