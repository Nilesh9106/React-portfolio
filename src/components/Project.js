import { IconButton } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import p1 from './../img/p1.png'
import p2 from './../img/p2.png'
import p3 from './../img/p3.png'
import p4 from './../img/p4.png'
import p5 from './../img/p5.png'


import { AnimationOnScroll } from 'react-animation-on-scroll';
const Comp = (props) => {
    return (
        <>
            <div className="xl:w-1/2 lg:w-4/5 md:w-full  mb-10 md:px-4">
                <AnimationOnScroll animateOnce={true} duration={0.7} offset='160' animateIn='animate__fadeInUp'>
                    <div className="hover:scale-105 transition-all duration-300 rounded-lg lg:h-96 md:h-80 sm:h-64 overflow-hidden">
                        <a href={props.live}>
                        <img alt="content" className="object-cover object-top h-full w-full" src={props.src} />
                        </a>
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-100 mt-6 mb-3">{props.title}</h2>
                    <p className="leading-relaxed text-gray-200 text-base">{props.description}</p>
                    <IconButton target={'_blank'} style={{ margin: '15px 10px', color: 'white', background: '#202020' }} href={props.github} variant='contained'><GitHubIcon /></IconButton>
                    <IconButton target={'_blank'} style={{ margin: '15px 10px', background: 'white', color: '#202020' }} href={props.live} variant='contained'><NearMeIcon /></IconButton>
                </AnimationOnScroll>
            </div>
        </>

    )
}

const projects = [
    {
        src:p5,
        title:'Be a Blogger : blog application',
        description:'A Blog application made with django where user can write and read blog with full functionalities.',
        github:'https://github.com/Nilesh9106/django-blog',
        live:'https://beablogger.pythonanywhere.com/'
    },
    {
        src:p1,
        title:'Shopyy : Ecommerce store',
        description:'An E-Commerce Website made with php,bootstrap css and javascript',
        github:'https://github.com/Nilesh9106/e-commerce',
        live:'http://shopyy.epizy.com/'
    },
    {
        src:p2,
        title:'Resume Builder',
        description:'Resume Builder made with html, javascript in DUhacks 1.0',
        github:'https://github.com/Nilesh9106/Resume-builder',
        live:'http://resume-build.epizy.com/',
    },
    {
        src:p3,
        title:'Music Player',
        description:'responsive Music player made with html,css,javascript',
        github:'https://github.com/Nilesh9106/music-player',
        live:'https://nilesh9106.github.io/music-player/',
    },
    {
        src:p4,
        title:'DDU Notes',
        description:'Notes Sharing Website for ddu student only : made in DUHacks 2.0',
        github:'https://github.com/Nilesh9106/ddu-notes',
        live:'http://dhrumilpatel1.pythonanywhere.com/'
    }
]

const Project = () => {
    return (
        <>
            <section id='Project' className="text-gray-100 body-font px-10">
                <h2 className='text-center text-4xl text-white' >Projects</h2>
                <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-4"></div>

                <div className="container md:px-5 py-16 mx-auto">
                    <div className="flex  flex-wrap justify-center -mx-4 -mb-10 text-center">
                        {projects.map((data,index)=>{
                            return(
                                <Comp key={index} {...data}  />
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project  