import React, { useEffect, useState } from "react";
import img1 from "../assets/coding_gif.gif";
import img2 from "../assets/Coding-Image.png";
import { AiFillGithub } from "react-icons/ai";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { Zoom } from "react-awesome-reveal";
import themeHook from "./ThemeContext";
import "../App.css";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [text, setText] = useState("Developer");
  const [index, setIndex] = useState(0);
  const { theme, changeTheme } = themeHook();

  const scrollToProjects = () => {
    const aboutSection = document.getElementById("project");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, 100); // Adjust the speed here
      return () => clearTimeout(timeoutId);
    } else {
      const resetTimeoutId = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 2000); // Pause before restarting
      return () => clearTimeout(resetTimeoutId);
    }
  }, [index, text, displayedText]);

  return (
    <div
      className={`w-[100%] max-md:px-4 md:px-[10%] ${
        theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
      } z-[-2] max-md:pt-10`}
    >
      <div
        className={`flex flex-row max-md:flex-col justify-center items-center ${
          theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
        } md:py-10`}
      >
        <div className="w-[100%] flex flex-col justify-start items-start transition-all duration-300 ease-in">
          <h1 className="font-semibold text-lg">Hey There!</h1>
          <h1 className="font-bold text-4xl">I'm Aryan Santosh Warange</h1>
          <h1 className="web-dev text-2xl font-semibold">
            Web <span className="text-cyan-600 ">{displayedText}</span>
          </h1>
          <p>
            a passionate web developer skilled in React, Tailwind CSS, Node.js
            and MongoDB. I specialize in creating user-friendly applications
            that deliver seamless experiences
          </p>
          <div className="flex flex-row justify-center items-center gap-4 mt-5 md:mt-10">
            <a
              href="https://www.linkedin.com/in/aryan-warange-b3321125a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin
                className="cursor-pointer hover:text-blue-600 text-cyan-600"
                size={26}
              />
            </a>
            <a
              href="https://github.com/TheAryan23"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub
                className="cursor-pointer hover:text-blue-600 text-cyan-600"
                size={26}
              />
            </a>
            <a
              href="https://www.instagram.com/aryann._w?igsh=MW91OTR1dTMxYXBjZg=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram
                className="cursor-pointer hover:text-blue-600 text-cyan-600"
                size={26}
              />
            </a>
          </div>
          <div className="text-sm mt-5 flex flex-row gap-4">
            
            <button className="py-1 px-3 hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md">
              <a
                href="mailto:aryanwarange23@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
            </button>
          </div>
        </div>

        <div
          className={`w-[100%] ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <img className="w-[100%]" src={img2} alt="Coding" />
        </div>
      </div>
    </div>
  );
}

export default Home;
