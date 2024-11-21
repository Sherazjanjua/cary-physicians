import React from 'react';
import globe from '../assets/globe.avif';
import contact from '../assets/Contact.avif';

function Contact() {
  return (
    <div className="mx-8 bg-sky-50 rounded-2xl p-6 md:p-12">
      <div className="flex flex-col md:flex-row justify-center items-start md:items-center p-6 gap-8 md:gap-32">
        {/* Booking Information */}
        <div className="flex flex-col gap-4 md:max-w-sm">
          <h3 className="text-blue-500 font-semibold">BOOKING</h3>
          <h1 className="font-bold text-2xl md:text-3xl leading-tight">
            Let us take care <br /> of your health
          </h1>
          <p className="text-gray-500 leading-relaxed">
            "Your health, our priority – compassionate <br /> care for a healthier you."
          </p>
        </div>

        {/* Globe Icon Section */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src={globe}
            alt="Globe Icon"
            className="rounded-full h-16 w-16"
          />
          <h2 className="font-bold mt-2 text-xl md:text-2xl">Visit us on</h2>
          <p className="text-base md:text-lg">Street-2, opp Cary, NC</p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Open Google Maps
          </a>
          <hr className="border-t border-gray-300 w-48 mt-3" />
          <p className="text-gray-600 text-sm md:text-base">
            Mon to Fri : 9:00 AM - 5:00 PM
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <img
            src={contact}
            alt="Contact Icon"
            className="rounded-full h-16 w-16"
          />
          <h2 className="font-bold mt-2 text-xl md:text-2xl">Contact us</h2>
          <p className="text-gray-500 text-lg">Phone Number</p>
          <p className="font-bold text-lg">(918) - 76 76 8743</p>
          <hr className="border-t border-gray-300 w-48 mt-3" />
          <p className="text-gray-500 text-base md:text-lg">Email Address</p>
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
