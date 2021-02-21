import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({headertwo, paragraph, link1, link2}) => {
    return(
        <div className='ani'>
             <h1 className='person__big'>{headertwo}</h1>
             <p className='person__paragraph'>{paragraph}</p>
             <Link to='/work' className='btn btn-primary btn-animated'>{link1}</Link>
             <Link to='/resume'className='btn btn-ghost btn-animated'>{link2}</Link>
        </div>
    )
}
export default Body;