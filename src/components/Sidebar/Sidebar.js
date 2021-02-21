import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';

const Sidebar = () => {
    return(
        <div className='sidebar'>
            <div className='sidebar__logo-container'>
                <Link to='/' className='sidebar__link'>
                    <p className='sidebar__logo'>Jonathan Aguilar</p>
                </Link>
            </div>
            <div className='sidebar__content-container'>
                <div className='sidebar__first'>   
                    <h3 className='sidebar__content'>Email</h3>
                    <p className='sidebar__description'>jonathanaguilarweb@gmail.com</p>
                </div>
                <div className='sidebar__second'>   
                    <h3 className='sidebar__content'>Name</h3>
                    <p className='sidebar__description'>Jonathan Aguilar</p>
                </div>
                <div className='sidebar__third'>   
                    <h3 className='sidebar__content'>Number</h3>
                    <p className='sidebar__description'>908-937-0191</p>
                </div>
                <h3 className='sidebar__content'>Find me On</h3>
                <div className='sidebar__social'>
                    <Social />
                </div>
            </div>
    </div>
    )
}

export default Sidebar;