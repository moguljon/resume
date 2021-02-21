import React from 'react';
import './Social.scss';

const Social = () => {
    return(
        <div className='social'>
            <a href='https://medium.com/web-studios'>
                <i className="fab fa-medium fa-2x"></i>
            </a>
            <a href='https://github.com/moguljon'>
                <i className="fab fa-github fa-2x"></i>
            </a>
            <a href='https://www.linkedin.com/in/jonathan-aguilar-047130ba/'>
                <i className="fab fa-linkedin fa-2x"></i>
            </a>    
        </div>
    )
}

export default Social;