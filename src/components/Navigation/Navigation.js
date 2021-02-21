import React from 'react';
import './Navigation.scss';
import '../Social/Social';
import Social from '../Social/Social';

const Navigation = () => {
    return(
        <section className='navigation'>
            <input type='checkbox' className='navigation__checkbox' id='navi-toggle'></input>
                <label htmlFor='navi-toggle' className='navigation__button'>
                <span className='navigation__icon'>
                    &nbsp;
                </span>
                </label>
            <div className='navigation__background'>&nbsp;</div>
            <nav className='navigation__nav'>
                <ul className='navigation__list'>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='/work'>Work</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='/resume'>Resume</a>
                    </li>
                    <li className='navigation__item'>
                        <a className='navigation__link' href='/contact'>Contact</a>
                    </li>
                    <div className='navigation__social'>
                        <Social />
                    </div>
                </ul>
            </nav>
        </section>
    )
}

export default Navigation;