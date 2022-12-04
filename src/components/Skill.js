import React from 'react'
import { FaReact } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {SiPhp} from 'react-icons/si'
import cpp from './../img/cpp.png'


function Skill() {
    return (
        <>
            <section id="Skills">
                <h2 className='text-center  text-4xl mt-5 text-white' >Skills</h2>
                <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-10"></div>
                <div className=' px-5 mb-8'>
                    <div className="flex flex-wrap -m-4 text-center">
                        <div className={"p-4 md:w-1/4 sm:w-1/2 hover:scale-105 duration-300 w-full"}>
                            <div className={"border-2 text-white hover:bg-[#61dafb] duration-500 border-gray-800 px-4 py-6 rounded-lg"}>
                                <span className='text-5xl m-3 flex justify-center'>
                                    <FaReact />
                                </span>
                                <h2 className="title-font font-medium text-3xl text-white">React JS</h2>
                                
                            </div>
                        </div>

                        <div className={"p-4 md:w-1/4 sm:w-1/2 hover:scale-105 duration-300 w-full"}>
                            <div className={"border-2 text-white hover:bg-[#ead41c] duration-500 border-gray-800 px-4 py-6 rounded-lg"}>
                                <span className='text-5xl m-3 flex justify-center'>
                                    <IoLogoJavascript />
                                </span>
                                <h2 className="title-font font-medium text-3xl text-white">Java Script</h2>
                                
                            </div>
                        </div>
                        <div className={"p-4 md:w-1/4 sm:w-1/2 hover:scale-105 duration-300 w-full"}>
                            <div className={"border-2 text-white hover:bg-[#005697] duration-500 border-gray-800 px-4 py-6 rounded-lg"}>
                                <span className='text-5xl m-3 flex justify-center'>
                                    <img src={cpp}  className='h-12' alt="c++" />
                                </span>
                                <h2 className="title-font font-medium text-3xl text-white">C++</h2>
                                
                            </div>
                        </div>
                        <div className={"p-4 md:w-1/4 sm:w-1/2 hover:scale-105 duration-300 w-full"}>
                            <div className={"border-2 text-white hover:bg-[#005697] duration-500 border-gray-800 px-4 py-6 rounded-lg"}>
                                <span className='text-5xl m-3 flex justify-center'>
                                    <SiPhp/>
                                </span>
                                <h2 className="title-font font-medium text-3xl text-white">PHP</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill