import { Inbox } from '@mui/icons-material'
import { ListItemIcon, ListItemButton, ListItem, ListItemText, List } from '@mui/material'
import React from 'react'
import nilesh from './../img/nilesh.png'
import { SiCodechef, SiLinkedin } from 'react-icons/si'
import { FaGithub } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineFundProjectionScreen } from 'react-icons/ai'

const About = () => {

    return (
        <>
            <section id='About' className="text-gray-400  body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <h2 className='text-center text-4xl text-white' >About Me</h2>
                    <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-4"></div>
                    <div className="lg:w-4/6 mx-auto">
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 md:mr-20 text-center sm:pr-8 sm:py-8">
                                <div className="w-36 h-36 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <img src={nilesh} className='rounded-full' alt="nilesh" />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white md:text-2xl text-lg">Nilesh Darji</h2>
                                    <div className="w-12 h-1 bg-gray-200 rounded mt-2 mb-4"></div>
                                    <nav aria-label="main mailbox folders">
                                        <List >
                                            <ListItem className='hover:bg-[#77777726]' disablePadding>
                                                <ListItemButton  target={'_blank'} href='https://www.codechef.com/users/nilesh2003'>
                                                    <ListItemIcon>
                                                        <SiCodechef style={{ color: 'white', fontSize: '20px' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="CodeChef" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem className='hover:bg-[#77777726]' disablePadding>
                                                <ListItemButton target={'_blank'} href='https://github.com/Nilesh9106'>
                                                    <ListItemIcon>
                                                        <FaGithub style={{ color: 'white', fontSize: '20px' }} />
                                                    </ListItemIcon>
                                                    <ListItemText primary="GitHub" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem className='hover:bg-[#77777726]' disablePadding>
                                                <ListItemButton target={'_blank'} href='mailto:nileshdarji282003@gmail.com'>
                                                    <ListItemIcon>
                                                        <Inbox style={{ color: 'white', fontSize: '20px' }} />

                                                    </ListItemIcon>
                                                    <ListItemText primary="Mail Me" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </nav>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8  sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">hey ,My name is Nilesh and i'm web developer and competitive programmer. I know many language like php, c++,c , html, css, javascript etc. I join every contest in codechef , hackerrank, codeforces etc. I had created e-commerce website using php, mysql and javascript as project.I Pass out my 12th with 92% and I get 111.5 marks in GUJCET .now i am studying at Dharmsinh Desai University in Computer engineering.</p>
                                <nav aria-label="main mailbox folders" className='md:mt-12'>
                                    <List>
                                        <ListItem className='hover:bg-[#77777726]' disablePadding>
                                            <ListItemButton target={'_blank'} href='https://www.linkedin.com/in/nileshdarji2003/'>
                                                <ListItemIcon>
                                                    <SiLinkedin style={{ color: 'white', fontSize: '20px' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Linkedin" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem className='hover:bg-[#77777726]' disablePadding>
                                            <ListItemButton target={'_blank'} href='https://www.instagram.com/thisisnilesh_3/'>
                                                <ListItemIcon>
                                                    <BsInstagram style={{ color: 'white', fontSize: '20px' }} />
                                                </ListItemIcon>
                                                <ListItemText primary="Instagram" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem className='hover:bg-[#77777726]' disablePadding>
                                            <ListItemButton href='#Project'>
                                                <ListItemIcon>
                                                    <AiOutlineFundProjectionScreen style={{ color: 'white', fontSize: '20px' }} />

                                                </ListItemIcon>
                                                <ListItemText primary="Projects" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About