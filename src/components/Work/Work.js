import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Work.scss';
import Web from '../../img/ws.png';
import Mogul from '../../img/mogul.jpg';
import Omnifood from '../../img/omnifood.jpg';
import Newsgrid from '../../img/newsgrid.jpg';

const Work = () => {
    return(
        <div className='container'>
            <Sidebar />
                <main className='main work-container'>
                    <h1 className='header-1 work__header header-animated'>Latest Works</h1>
                    <div className='work'>
                        <div className='work__items' >
                            <a href='https://webstudios.io/' target='_blank' rel='noreferrer'>
                                <img src={Web}  className='work__img' alt='Web Studios Hotel'/>
                            </a>
                            <h2 className='work__headertwo'>Web Studios - Web Design Services</h2>
                            {/* <p className='work__paragraph'>This creative platform leverages technology to create brands from inception to production. 
                                We understand that it is much easier to have a guiding hand that understands technology and uses it to develop solutions.
                                 Whether you are looking to start or start over; we got you covered.
                            </p> */}
                        </div>
                        <div className='work__items'>
                            <a href='https://moguljon.com/' target='_blank' rel='noreferrer'>
                                <img src={Mogul}  className='work__img' alt='Moguljon E-Commerce Website'/>
                            </a>
                            <h2 className='work__headertwo'>MogulJon - E-Commerce Website</h2>
                            {/* <p className='work__paragraph'>E-Commerce Platform
                            </p> */}
                        </div>
                        <div className='work__items'>
                            <a href='https://omnifood.jonathanaguilar.live/' target='_blank' rel='noreferrer'>
                                <img src={Omnifood}  className='work__img two' alt='Omnifood Website'/>
                            </a>
                            <h2 className='work__headertwo'>Omnifood - Food Website</h2>
                            {/* <p className='work__paragraph'>This creative platform leverages technology to create brands from inception to production. 
                                We understand that it is much easier to have a guiding hand that understands technology and uses it to develop solutions.
                                 Whether you are looking to start or start over; we got you covered.
                            </p> */}
                        </div>
                        <div className='work__items'>
                            <a href='https://newsmedia.jonathanaguilar.live/' target='_blank' rel='noreferrer'>
                                <img src={Newsgrid}  className='work__img two' alt='Newsgrid Website'/>
                            </a>
                            <h2 className='work__headertwo'>Newsgrid - Article Website</h2>
                            {/* <p className='work__paragraph'>This creative platform leverages technology to create brands from inception to production. 
                                We understand that it is much easier to have a guiding hand that understands technology and uses it to develop solutions.
                                 Whether you are looking to start or start over; we got you covered.
                            </p> */}
                        </div>
                    </div>
                </main>
        </div>
    )
}

export default Work;