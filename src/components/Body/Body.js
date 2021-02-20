import React from 'react';
import { Link } from 'react-router-dom';

const Body = ({headertwo, paragraph, link1, link2}) => {
    return(
        <div>
             <h2 className='person__headertwo'>{headertwo}</h2>
             <p className='person__paragraph'>{paragraph}</p>
             <Link to='/work' className='btn btn-primary'>{link1}</Link>
             <Link to='/resume'className='btn btn-ghost'>{link2}</Link>
        </div>
    )
}
export default Body;