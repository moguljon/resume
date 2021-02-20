import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Resume.scss';

const Resume = () => {
    return(
        <div className='container'>
            <Sidebar />
                <main className='main resume-container'>
                    <h1 className='header-1'>Education</h1>
                        <div className='resume'>
                            <div className='resume__education'>
                                <h2 className='resume__headertwo'>Bachelors of Arts in Information Systems</h2>
                                <p className='resume__paragraph1'>Rutgers University</p>
                                <p className='resume__paragraph2'>Session: 2016-2019</p>
                            </div>
                            <div className='resume__education'>
                                <h2 className='resume__headertwo'>Assocites of Arts in Business</h2>
                                <p className='resume__paragraph1'>Union County College</p>
                                <p className='resume__paragraph2'>Session: 2012-2015</p>
                            </div>
                        </div>
                    <h1 className='header-1 other'>Work Experience</h1>
                        <div className='resume'>
                            <div className='resume__education'>
                                <h2 className='resume__headertwo'>Freelance Web Designer</h2>
                                <p className='resume__paragraph1'>Web Studios</p>
                                <p className='resume__paragraph2'>Session: 2020 - Current</p>
                            </div>
                            <div className='resume__education'>
                                <h2 className='resume__headertwo'>Document Specialist</h2>
                                <p className='resume__paragraph1'>Paperless Solutions</p>
                                <p className='resume__paragraph2'>Session: 2019 - Current</p>
                            </div>
                            <div className='resume__education'>
                                <h2 className='resume__headertwo'>Designer</h2>
                                <p className='resume__paragraph1'>YAI</p>
                                <p className='resume__paragraph2'>Session: 2018-2018</p>
                            </div>
                        </div>
                    </main>
        
        </div>
        
    )
}
export default Resume;