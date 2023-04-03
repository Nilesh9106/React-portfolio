import React from 'react'
import { FaReact,FaJava } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {SiPhp,SiDjango,SiPython,SiSpring} from 'react-icons/si'
import cpp from './../img/cpp.png'

const skills = [
    {
        icon:<FaReact/>,
        title:"React JS",
        color:"#61dafb",
    },
    {
        icon:<FaJava/>,
        title:"Java",
        color:"#0088c7",
    },
    {
        icon:<IoLogoJavascript/>,
        title:"JavaScript",
        color:"#ead41c",
    },
    {
        icon:<img src={cpp}  className='h-12' alt="c++" />,
        title:"C++",
        color:"#005697",
    },
    {
        icon:<SiPhp/>,
        title:"PHP",
        color:"#005697",
    },
    {
        icon:<SiDjango/>,
        title:"Django",
        color:"#092e20",
    },
    {
        icon:<SiPython/>,
        title:"Python",
        color:"#3877ad",
    },
    {
        icon:<SiSpring/>,
        title:"Spring",
        color:"#67aa3c",
    },
]

function Skill() {
    return (
        <>
            <section id="Skills">
                <h2 className='text-center  text-4xl mt-5 text-white' >Skills</h2>
                <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-10"></div>
                <div className=' px-5 mb-8'>
                    <div className="flex flex-wrap -m-4 text-center">
                        {skills.map((data,index)=>{

                            return(
                                <div className={"p-4 md:w-1/4 sm:w-1/2 hover:scale-105 duration-300 w-full"}>
                                    <div className={`border-2 text-white hover:bg-[${data.color}] duration-500 border-gray-800 px-4 py-6 rounded-lg`}>
                                        <span className='text-5xl m-3 flex justify-center'>
                                            {data.icon}
                                        </span>
                                        <h2 className="title-font font-medium text-3xl text-white">{data.title}</h2>
                                    </div>
                                </div>
                            )
                        })}
                        

                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skill