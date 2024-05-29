import React, { useEffect, useState } from 'react';
import '../Navbar/Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { IoBagOutline, IoPersonOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

const Navbar = (props) => {
    const [menu, setMenu] = useState(false);
    const [scroll, setScroll] = useState(false);
    const { pathname } = useLocation();
    console.log(pathname)
    useEffect(() => {
        const handleScroll = () => {
         
            setScroll(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`navbar flex-box ${scroll ? 'scrolled' : ''}`}>
            <div className="logo">
                <h5>ProManner</h5>
            </div>
            <div className={`menus flex-box ${menu ? 'onmenu' : ''}`}>
                <div className='menu flex-box'>
                    <h3 className='menu-off-btn' onClick={() => setMenu(false)}>X</h3>
                    <ul>
                        <li>
                            <Link to={"/"}>HOME</Link>
                        </li>
                        <li>
                            <Link to={"/shop"}>SHOP</Link>
                        </li>
                        {/* <li>
                            <Link to={"/blog"}>BLOG</Link>
                        </li> */}
                        <li>
                            <Link to={"/about"}>ABOUT</Link>
                        </li>
                        <li>
                            <Link to={"/contact"}>CONTACT</Link>
                        </li>
                    </ul>
                </div>
                <div className="user-info flex-box">
                    <Link to={"/auth"}>
                        {/* <IoPersonOutline /> */}
                    </Link>
                    <Link to={"/cart"}>
                        <div className="cart-box">
                            <IoBagOutline />
                        </div>
                    </Link>
                </div>
            </div>
            <FaBars className='menu-on-btn' onClick={() => setMenu(true)} />
        </header>
    );
}

export default Navbar;
