import { Button } from '@mui/material'
import React from 'react'
import nilesh from './../img/my3.png'

const Hero = () => {
  return (
    <>
      <section id='Home' className="text-gray-100 lg:mx-36 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center">
          

          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded-full " alt="hero" src={nilesh} />
          </div>
          
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 lg:ml-10 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-gray-200">Hello I'm  
              <br className="hidden lg:inline-block" /> Nilesh Darji
            </h1>
            <p className="mb-8 leading-relaxed sm:text-3xl text-2xl">I am programmer</p>
            <div className="flex justify-center">
              <Button style={{background:'#202020',color:'#ffffff',margin:'2px 10px'}} href='#About' size='large' variant='contained'>About Me</Button>
              <Button style={{background:'#ffffff',color:'#202020',margin:'2px 10px'}} href='#Contact' size='large' variant='contained'>Contact Me</Button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero