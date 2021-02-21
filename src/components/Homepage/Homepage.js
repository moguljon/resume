import React from 'react';
import './Homepage.scss';
import img from '../../img/resized3.jpeg';
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header'
import Body from '../Body/Body';

const Homepage = () => {
    return(
        <div className='container'>
          <Sidebar />
            <main className='main'>
                <div className='person'>
                    <img src={img} alt='' className='person__img' />
                    <div className='person__container-all'>
                        <div>
                            <Header firstname='Jonathan' lastname='Aguilar'  />
                        </div>
                        <div>
                           <Body 
                            headertwo='Web Developer / Designer' 
                            paragraph='I am a Developer and Designer and I love to work on these skills every day. ' 
                            link1='Portfolio' 
                            link2='Resume' />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Homepage;