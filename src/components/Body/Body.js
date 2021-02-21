import React from 'react';
import { Link } from 'react-router-dom';
import './Body.scss';

const Body = ({headertwo, paragraph, link1, link2}) => {
    return(
        <div className='ani body'>
             <h2 className='body__headertwo'>{headertwo}</h2>
             <p className='body__paragraph'>{paragraph}</p>
             <Link to='/work' className='btn btn-primary btn-animated'>{link1}</Link>
             <Link to='/resume'className='btn btn-ghost btn-animated'>{link2}</Link>
        </div>
    )
}
export default Body;