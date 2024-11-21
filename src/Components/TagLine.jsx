import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { PiFirstAidBold } from "react-icons/pi";


function TagLine() {
  return (
    <div className="flex flex-col justify-center items-center md:mt-6 text-white text-center tracking-wide md:tracking-widest">
      <h1 className="text-sm font-bold">Welcome to Cary Physician</h1>
      <h1 className='text-2xl  md:text-5xl font-bold mt-1 leading-20'>Holistic Wellness <br /> for Optimal Living</h1>
      <div className='flex gap-6 mt-8 md:mt-10 tracking-normal'>
      <button className="bg-sky-600 hover:bg-sky-700 text-white flex items-center justify-center gap-2 px-3 py-2 rounded-full transition duration-300">
              <BsFillTelephoneFill />
              Book an Appointment
            </button>
            <button className="border text-white flex items-center justify-center gap-2 px-2 py-1 rounded-full transition duration-300">
            <PiFirstAidBold />
              Our Specialities
            </button>
      </div>

    </div>
  )
}

export default TagLine