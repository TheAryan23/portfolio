import React from 'react'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoCss3, BiLogoTailwindCss, BiLogoReact, BiLogoMongodb } from 'react-icons/bi'
import themeHook from './ThemeContext';
function Skills() {
    const {theme}=themeHook()
    return (
        <div className={`w-[100%] max-md:px-4 md:px-[10%] py-10   ${theme === 'dark' ? 'text-white bg-[#121212]':'text-black bg-white'}  z-[-2]'  `} id='skills'>
            <div className='flex flex-col  justify-center items-center'>
                 
                    <h1 className='font-bold text-3xl '>Skills</h1>
                 
                <div className='py-10 grid grid-cols-6 max-md:grid-cols-2 max-[300px]:grid-cols-1 max-lg:grid-cols-3 gap-10 text-center'>
                     
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-orange-500 cursor-pointer ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <AiOutlineHtml5 size={60} />
                            <h2 className='text-xl font-bold '>Html</h2>
                        </div>
                     
                        
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-blue-600 cursor-pointer  ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <BiLogoCss3 size={60} />
                            <h2 className='text-xl font-bold '>Css</h2>
                        </div>
                     
                     
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#61DBFB] cursor-pointer  ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <BiLogoTailwindCss size={60} />
                            <h2 className='text-xl font-bold '>Tailwind</h2>
                        </div>
                     
                     
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#4DB33D] cursor-pointer  ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <BiLogoMongodb size={60} />
                            <h2 className='text-xl font-bold '>MongoDB</h2>
                        </div>
                     
                     
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-[#61DBFB] cursor-pointer  ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <BiLogoReact size={60} />
                            <h2 className='text-xl font-bold '>React js</h2>
                        </div>
                     
                     
                        <div className={`flex flex-col items-center rounded-md w-[100%] px-10 py-5 shadow-xl skill-div text-cyan-700 hover:text-green-800 cursor-pointer  ${theme === 'dark' ? ' bg-[#262525]':'bg-white'}`}>
                            <FaNodeJs size={60} />
                            <h2 className='text-xl font-bold '>Node js</h2>
                        </div>
                     
                </div>
            </div>
        </div>
    )
}

export default Skills
