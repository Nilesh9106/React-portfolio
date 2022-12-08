import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import SchoolIcon from '@mui/icons-material/School';

import { FaSchool } from 'react-icons/fa'
function TimeLine() {
    return (
        <>
            <section id="Timeline" className='p-2'>
                <h2 className='text-center text-4xl mt-5 text-white' >My Time Line</h2>
                <div className="w-36 mx-auto h-1 bg-gray-200 rounded mt-3 mb-4"></div>
                <VerticalTimeline className='my-5'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f0f0f0', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
                        date="2020 - 2021"
                        iconStyle={{ background: '#202020', color: '#f0f0f0' }}
                        icon={<FaSchool />}
                    >
                        <div style={{ color: '#202020' }}>
                            <h3 className="vertical-timeline-element-title">Sankalp School of Science</h3>
                            <h4 className="vertical-timeline-element-subtitle">11th and 12th</h4>
                            <p>
                                I Got 92% in 12th board and Learn many things
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f0f0f0', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
                        date="2021"
                        iconStyle={{ background: '#202020', color: '#f0f0f0' }}
                        icon={<SchoolIcon />}
                    >
                        <div style={{ color: '#202020' }}>
                            <h3 className="vertical-timeline-element-title">JEE EXAM</h3>
                            <h4 className="vertical-timeline-element-subtitle">12th</h4>
                            <p>
                                got 92 PR in JEE
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: '#f0f0f0', color: '#ffffff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #f0f0f0' }}
                        date="2021 - present"
                        iconStyle={{ background: '#202020', color: '#f0f0f0' }}
                        icon={<FaSchool />}
                    >
                        <div style={{ color: '#202020' }}>
                            <h3 className="vertical-timeline-element-title">Dharmsinh Desai University</h3>
                            <p>
                                Sem 1 : 8.84 cpi <br />
                                sem 2 : 9.44 cpi <br />
                                Now I am pursuing B.Tech in Computer Engineering .
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                        iconStyle={{ background: '#202020', color: '#fff' }}
                        icon={<AiFillStar />}
                    /> */}
                </VerticalTimeline>
            </section>
        </>
    )
}

export default TimeLine