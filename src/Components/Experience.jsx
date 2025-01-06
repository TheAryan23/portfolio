import React from "react";
import themeHook from "./ThemeContext";
function Experience() {
  const { theme } = themeHook();
  return (
    <div
      className={`w-[100%] max-md:px-4 md:px-[10%]  py-10   ${
        theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
      } `}
      id="experience"
    >
        <h1 className="font-bold text-3xl text-center">Experience</h1>
      <div className={`mt-8 px-4 pb-4  ${
        theme === "dark" ? "text-white bg-[#181818] rounded-md" : "text-black bg-white border rounded-md"
      } `}
      >
        
        <div className="md:w-[80%] py-2 pt-4">
          <div>
            <h2 className="font-bold text-2xl">SDE - Intern</h2>
            <p className="flex flex-col">
              <span className={`text-sm ${
        theme === "dark" ? "text-gray-500" : "text-gray-500"
      }  `}>December 2023 - August 2024</span>
              <span>Helper4U Services LLP</span>
            </p>
          </div>
          <ul className={`  mt-2 ${
        theme === "dark" ? "text-gray-200" : "text-black"
      }  `} >
            <li>
              • Developed frontend and backend of websites using Next.js and
              Express.js.
            </li>
            <li>• Created 150+ REST APIs. </li>
            <li>
              {" "}
              • Enhanced code performance through optimization techniques.{" "}
            </li>
            <li>
              {" "}
              • Implemented responsive web design principles to guarantee
              seamless user experiences across various devices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
