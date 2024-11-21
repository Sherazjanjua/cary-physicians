import React from 'react';
import Navbar from './Components/Navbar';
import TagLine from './Components/TagLine';

function Header() {
  return (
    <>
      <div className="w-screen h-[60vh] md:h-[70vh] relative">
        <div
          className="absolute inset-0 bg-[url('./assets/headerimg.jpg')] h-full bg-cover rounded-b-3xl md:bg-cover md:bg-center bg-no-repeat "
        ></div>
        <div className="absolute inset-0 rounded-b-3xl bg-black opacity-40"></div>

        <div className="relative z-10">
          <Navbar />
          <TagLine />
        </div>
      </div>
    </>
  );
}

export default Header;
