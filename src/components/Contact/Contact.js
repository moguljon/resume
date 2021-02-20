import React from 'react';
import './Contact.scss';
import Sidebar from '../Sidebar/Sidebar'

const Contact = () => {
    return(
        <div className='container section-contact'>
            <Sidebar />
            <main className='main contact'>
               
                <form className='form'>
                    <div className='form__container'>
                    <h1 className='form__headerone header-1'>Send a Message</h1>
                        <div className='form__info'>
                            
                            <input type='name' className='form__input' placeholder='Name' required />
                        </div>
                        <div className='form__info'>
                            <input type='email' className='form__input' placeholder='Email' required />
                        </div>
                        <div className='form__info'>
                            <input type='text' className='form__input' placeholder='Budget' />
                        </div>
                        <div className='form__info'>
                            <textarea placeholder='Message' className='form__input' rows="4" cols="50"></textarea>
                        </div>
                        <div className='form__info'>
                            <button type='submit' className='btn btn-primary'>Send Message</button>
                        </div>
                    </div>
                    <div className='form__other-side'>
                        <h2 className='form__headertwo'>Contact Us</h2>
                        <div className='form__items'>
                            <h3 className='form__headerthree'>Phone</h3>
                            <p className='form__phone'>908937019</p>
                        </div>
                        <div className='form__items'>
                            <h3 className='form__headerthree'>Email</h3>
                            <p className='form__phone'>jonathanaguilarweb@gmail.com</p>
                        </div>
                        <div className='form__items'>
                            <h3 className='form__headerthree'>Address</h3>
                            <p className='form__phone'>Elizabeth, NJ</p>
                        </div>
                    </div>
                </form>
            </main>
        </div>
    )
}

export default Contact