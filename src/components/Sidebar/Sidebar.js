import React from 'react';
import './Sidebar.scss';
import { Link } from 'react-router-dom';

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
                <div>
                    <h3 className='sidebar__content'>Find me On</h3>
                    <i className="fab fa-medium fa-2x"></i>
                    <i className="fab fa-github fa-2x"></i>
                    <i className="fab fa-linkedin fa-2x"></i>
                </div>
               
            </div>
    </div>
    )
}

export default Sidebar;