import React from 'react';
import './Header.scss';

const Header = ({firstname, lastname}) => {
    return(
        <h1 className='header__header-one'>
            <span className='header__halfone'>{firstname}</span>
            <span className='header__halftwo'>{lastname}</span>
        </h1>
    )
}

export default Header;