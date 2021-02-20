import React from 'react';

const Header = ({firstname, lastname}) => {
    return(
        <h1 className='person__header-one'>
            <span className='person__halfone'>{firstname}</span>
            <span className='person__halftwo'>{lastname}</span>
        </h1>
    )
}

export default Header;