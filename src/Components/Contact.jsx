import React from 'react';
import globe from '../assets/globe.avif';
import contact from '../assets/Contact.avif';

function Contact() {
  return (
    <div className="mx-8 bg-sky-50 rounded-2xl p-2">
      <div className="flex flex-col md:flex-row justify-center p-8 px-16 gap-10 md:gap-36">
        {/* Booking Information */}
        <div className=" flex flex-col gap-3" > 
          <h3 className="text-blue-500 font-semibold">BOOKING</h3>
          <h1 className="font-bold text-2xl">
            Let us take care <br /> of your health
          </h1>
          <p className="text-gray-500">
            "Your health, our priority – compassionate <br /> care for a healthier you."
          </p>
        </div>

        {/* Globe Icon */}
        <div className="flex flex-col ">
            <img src={globe} alt="Globe Icon" className="rounded-full h-16 w-16 " />
          <h2 className='font-bold p-1 mt-2 md:text-2xl'>Visit us on</h2>
          <p className='p-1 text-base md:text-lg' >Street-2, opp Cary, NC</p>
          <a href="maps.google.com" className='text-blue-500  '>Open Google Maps </a>
         
          <hr  className='text-gray-300 w-48 mt-3' />

          <p className='' >Mon to Fri : * 9:00 AM - 5:00 PM</p>
          
        </div>

        {/* Additional Section */}
        <div className=''>

  <img src={contact} alt="Globe Icon" className="rounded-full h-16 w-16 " />

  <h2 className='font-bold p-1 mt-2 md:text-2xl'>Contact us</h2>
  <p className='p-1 text-gray-500 text-lg'>Phone Number</p>
  <p className='font-bold'>(918) - 76 76 8743</p>

  <hr className='text-gray-300 w-48 mt-3' />

  <p className='p-1 text-gray-500 text-base md:text-lg'>Email Address</p>
  <a
    href="mailto:carryphysicians@gmail.com"
    className="text-blue-500 font-semibold tracking-wide underline"
  >
    carryphysicians@gmail.com
  </a>
</div>

      </div>
    </div>
  );
}

export default Contact;
