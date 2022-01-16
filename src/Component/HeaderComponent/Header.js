/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import {} from './img/logo.png'
import './Header.scss'
import {
    NavLink,
} from "react-router-dom";
import { useState } from 'react';


function Header() {
    const [menu, setMenu] = useState(false);
    // const [close, setclose] = useState(false);
    const HandleClick = () => {
        setMenu(!menu);
    }
    const HandleClose = () => {
        setMenu(false);

    }
    var addclass = menu ? 'show-menu' : ' ';
    return (
        <>
            <header className='header'>
                <div className='header__logo'><a href='#'><img src='/img/logo.png' /></a></div>
                <ul className='header-list '>
                    <li className='header-item'><NavLink to="/">Home</NavLink></li>
                    <li className='header-item'><NavLink to="/course">Course</NavLink></li>
                    <li className='header-item'><NavLink to="/about">About Us</NavLink></li>
                    <li className='header-item'><NavLink to="/blog">Blog</NavLink></li>
                    <li className='header-item'><NavLink to="/shop">Shop</NavLink></li>
                    <li className='header-item'><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                <div className='header__btn'>
                    <div onClick={HandleClick}><img src='/img/Group5.png' /></div>
                </div>
            </header>

            <div className={'menumobile ' + addclass}>            
            <ul className='header-list '>
                <li className='header-item'><NavLink to="/" onClick={HandleClose}>Home</NavLink></li>
                <li className='header-item'><NavLink to="/course"  onClick={HandleClose}>Course</NavLink></li>
                <li className='header-item'><NavLink to="#" onClick={HandleClose}>Pages</NavLink></li>
                <li className='header-item'><NavLink to="#" onClick={HandleClose}>Blog</NavLink></li>
                <li className='header-item'><NavLink to="#" onClick={HandleClose}>Shop</NavLink></li>
                <li className='header-item'><NavLink to="#" onClick={HandleClose}>Contact</NavLink></li>
            </ul></div>
        </>
    )
}

export default Header;