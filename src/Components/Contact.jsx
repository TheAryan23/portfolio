import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import img1 from "../assets/contact.png";
import { CgLogIn, CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import toast from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import themeHook from "./ThemeContext";
import axios from "axios";
function Contact() {
  const { theme } = themeHook();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const urlBackend = import.meta.env.VITE_BACKEND_API;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    const data = {
      name: name,
      email: email,
      message: msg,
    };

    try {
      const response = await axios.post(`${urlBackend}/api/contactUs`, {
        name: name,
        email: email,
        message: msg,
      });
      console.log(response, "data");
      if (response.data.status) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(`Error: ${error}`);
    }
    setName("");
    setEmail("");
    setMessage("");
    setLoader(false);
  };
  return (
    <div
      className={`w-[100%] px-4 md:px-[10%] pt-10  ${
        theme === "dark" ? "text-white bg-[#121212]" : "text-black bg-white"
      } flex flex-col justify-center items-center`}
      id="contact"
    >
      <h1 className="font-bold text-3xl text-center">Contact</h1>

      <div className="flex flex-row-reverse max-md:flex-col justify-center items-center max-md:w-[100%] md:w-[90%]">
        {/* <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[100%] py-10 max-md:mt-10"
        >
          <input
            type="text"
            value={name}
            className={`rounded-md p-2   border-2 border-cyan-600 ${
              theme === "dark"
                ? "text-white bg-[#121212]"
                : "text-black bg-white focus:bg-white focus:text-black"
            } `}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Your Name"
            required
          />
          <br />
          <input
            type="email"
            value={email}
            className={` sm:w-[100%] rounded-md p-2   border-2 border-cyan-600  ${
              theme === "dark"
                ? "  text-white bg-[#121212]"
                : "bg-white focus:bg-white focus:text-black"
            }`}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email Address"
            required
          />
          <br />
          <textarea
            rows={8}
            value={msg}
            className={` sm:w-[100%] rounded-md p-2   border-2 border-cyan-600 ${
              theme === "dark"
                ? "  text-white bg-[#121212]"
                : "bg-white focus:bg-white focus:text-black"
            }`}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            placeholder="Enter message here.."
            required
          ></textarea>
          <br />
          <button className=" flex flex-row justify-center items-center gap-x-2 w-max py-1 px-3 h-[40px] hover:bg-cyan-500 hover:text-white border-2 border-cyan-500 text-cyan-600 font-semibold rounded-md">
            Send Message
            {!loader ? "" : <ClipLoader color="#f8fafc" size={30} />}
          </button>
        </form> */}
        <div className="w-[100%]  max-md:mt-10 text-center flex flex-col max-md:justify-center max-md:items-center  text-cyan-600 max-md:hidden">
          {/* <img className='' src={img1} alt="" /> */}
          <div className="flex md:flex-col max-sm:flex-col max-md:flex-row max-md:items-center max-md:justify-between  w-[80%]">
            <div className="flex flex-col  justify-start cursor-pointer hover:text-red-500 w-max">
              <CgMail size={44} />
              <a
                href="mailto:aryanwarange23@gmail.com"
                target="_blank"
                className=" text-lg "
              >
                aryanwarange23@gmail.com
              </a>
            </div>
            <div className="flex flex-col  justify-start max-md:mt-0 mt-5   cursor-pointer hover:text-green-500 w-max ">
              <FiPhone size={36} />
              <h5
                href="mailto:aryanwarange23@gmail.com"
                target="_blank"
                className="  text-lg"
              >
                +91 7972437752
              </h5>
            </div>
          </div>
          <div className="flex md:flex-col max-sm:flex-col max-md:flex-row max-md:items-center max-md:justify-between max-sm:justify-start w-[80%] max-md:mt-2">
            {" "}
            <div className="flex flex-col  justify-start mt-5  max-md:mt-0 cursor-pointer hover:text-blue-500 w-max">
              <BsLinkedin size={36} />
              <a
                href="https://www.linkedin.com/in/aryan-warange-b3321125a/"
                target="_blank"
                className="  text-lg"
              >
                Aryan Warange
              </a>
            </div>
            <div className="flex flex-col  justify-start mt-5 max-md:mt-0 cursor-pointer hover:text-violet-900 w-max">
              <AiFillGithub size={36} />
              <a
                href="https://github.com/TheAryan23"
                target="_blank"
                className="  text-lg"
              >
                TheAryan23
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start items-center w-[100%] md:hidden gap-5 pb-5">
        <a
          href="mailto:aryanwarange23@gmail.com"
          target="_blank"
          className=" text-lg "
        >
          <CgMail size={44} />
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-warange-b3321125a"
          target="_blank"
          className="  text-lg"
        >
          <BsLinkedin size={32} />
        </a>
        <a
          href="https://github.com/TheAryan23"
          target="_blank"
          className="  text-lg"
        >
          <AiFillGithub size={36} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
