/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
// import {} from './img/logo.png'
import './Header.scss'
import {
    NavLink,
} from "react-router-dom";
import { useState } from 'react';

function Header() {
    document.title = "Skola"
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
                <div className='header__logo'><NavLink to="/home"><img src='/img/logo.png' /></NavLink></div>
                <ul className='header-list '>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/home">
                        Home
                        </NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/course">
                        Course
                        </NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/about">
                        About Us
                        </NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/blog">
                        Blog
                        </NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/shop">
                        Shop
                        </NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/contact">
                        Contact Us
                        </NavLink></li>
                </ul>
                <div className='header__btn'>
                    <div onClick={HandleClick}><img src='/img/Group5.png' /></div>
                </div>
            </header>

            <div className={'menumobile ' + addclass}>
                <ul className='header-list '>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/home" onClick={HandleClose}>Home</NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/course" onClick={HandleClose}>Course</NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/about" onClick={HandleClose}>About Us</NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/blog" onClick={HandleClose}>Blog</NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/shop" onClick={HandleClose}>Shop</NavLink></li>
                    <li className='header-item'><NavLink style={isActive => ({
                        color: isActive ? "#2F2D51" : "#77838F"
                    })} to="/contact" onClick={HandleClose}>Contact</NavLink></li>
                </ul></div>
        </>
    )
}

export default Header;