import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import themeHook from './ThemeContext';
function EducationCard({ year, collegeName, educationDetails }) {
    const {theme} = themeHook()
  return (
    // <div className="flex flex-col justify-between  bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className={`flex flex-col justify-between shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105  ${
        theme === "dark" ? "bg-[#262525]  text-white" : "bg-white border text-black"
      }`}>
      {/* Top Section with Year */}
      <div className="flex items-center justify-between p-6 ">
        <FaGraduationCap size={30} className="text-cyan-500" />
        <span className="text-lg font-semibold">{year}</span>
      </div>

      {/* Middle Section with College Name */}
      <div className="px-6 py-4 flex-grow">
        <h2 className="text-3xl font-bold">{collegeName}</h2>
      </div>

      {/* Bottom Section with Education Details */}
      <div className=" px-6 py-4">
        <p className="text-md">{educationDetails}</p>
      </div>
    </div>
  );
}

export default EducationCard;
