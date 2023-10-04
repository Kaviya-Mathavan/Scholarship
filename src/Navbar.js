import * as React from 'react';
import './Navbar.css';
import logo from './Image/logoimg.jfif';

function Navbar() {
    return (

        <nav className='navbar' >
            <img src={logo} className='logocls' alt="logo" />
            <h1 id="head">பாண்டித்யம்</h1>
            <ul className='nav-lists'>

                <li>
                    <a href="/" className='home'> HOME </a>

                </li>
                <li>
                    <a href="/About" className='About'> ABOUT US </a>
                </li>

                <li>
                    <a href="/RatingReview" className='ratings & review'>RATINGS & REVIEW </a>
                </li>

                <li>
                    {/* <a href="/Login" className='login'> <Link to="/SignIn">LOGIN</Link></a> */}
                    <a href="/SignIn" className='login'> LOGIN</a>
                    </li>
                <li>
                    {/* <a href="/signup" className='signup'><Link to="/Register">SIGNUP</Link></a> */}
                    <a href="/Register" className='signup'>SIGNUP</a>

                </li>
               </ul>
           </nav>
        )
    }
export default Navbar;