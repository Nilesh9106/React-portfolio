import { IconButton } from '@mui/material'
import NearMeIcon from '@mui/icons-material/NearMe';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from 'react'
import p1 from './../img/p1.png'
import p2 from './../img/p2.png'
import p3 from './../img/p3.png'


import { AnimationOnScroll } from 'react-animation-on-scroll';
const Comp = (props) => {
    return (
        <>
            <div className="lg:w-3/5  mb-10 md:px-4">
                <AnimationOnScroll animateOnce={true} duration={0.7} offset='160' animateIn='animate__fadeInUp'>
                    <div className="hover:scale-105 transition-all duration-300 rounded-lg lg:h-96 md:h-80 sm:h-64 overflow-hidden">
                        <a href={props.live}>
                        <img alt="content" className="object-cover object-center h-full w-full" src={props.src} />
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
const Project = () => {
    return (
        <>
            <section id='Project' className="text-gray-100 body-font px-10">
                <h2 className='text-center text-4xl text-white' >Projects</h2>
                <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-4"></div>

                <div className="container md:px-5 py-16 mx-auto">
                    <div className="flex flex-wrap justify-center -mx-4 -mb-10 text-center">
                        <Comp src={p1} title='Shopyy : Ecommerce store' description='An E-Commerce Website made with php,bootstrap css and javascript' github='https://github.com/Nilesh9106/e-commerce' live='http://shopyy.epizy.com/' />
                        <Comp src={p2} title='Resume Builder' description='Resume Builder made with html, javascript' github='https://github.com/Nilesh9106/Resume-builder' live='http://resume-builder.lovestoblog.com/' />
                        <Comp src={p3} title='Music Player' description='responsive Music player made with html,css,javascript' github='https://github.com/Nilesh9106/music-player' live='https://nilesh9106.github.io/music-player/' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Project  