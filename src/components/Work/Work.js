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
                            <h2>Going There</h2>
                            <p>It is what it is</p>
                        </div>
                        <div className='work__items'>
                            <a href='https://moguljon.com/' target='_blank' rel='noreferrer'>
                                <img src={Mogul}  className='work__img' alt='Moguljon E-Commerce Website'/>
                            </a>
                        </div>
                        <div className='work__items'>
                            <a href='https://omnifood.jonathanaguilar.live/' target='_blank' rel='noreferrer'>
                                <img src={Omnifood}  className='work__img two' alt='Omnifood Website'/>
                            </a>
                        </div>
                        <div className='work__items'>
                            <a href='https://newsmedia.jonathanaguilar.live/' target='_blank' rel='noreferrer'>
                                <img src={Newsgrid}  className='work__img two' alt='Newsgrid Website'/>
                            </a>
                        </div>
                    </div>
                </main>
        </div>
    )
}

export default Work;