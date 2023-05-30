import React, { useEffect } from 'react';
import './NavbarCSS.css'
import logo from './logo/logo.png';
import { Outlet, Link } from "react-router-dom";
import { FiLock, FiUserCheck, FiLogOut } from 'react-icons/fi';
import defaultUserIcon from './Navbar/defaultUserIcon.jpg'
import { GrHomeRounded } from 'react-icons/gr'
import { FiShoppingCart } from 'react-icons/fi'
import { BsInfoCircle } from 'react-icons/bs'

export default function Navbar() {
    const token = localStorage.getItem('token')


    // for popup sign in
    let popupContainer
    let loginForm
    let signupForm

    // initializing popup signup, signin dom elements
    useEffect(() => {
        popupContainer = document.querySelector(".popup-container");
        loginForm = document.querySelector(".login-form");
        signupForm = document.querySelector(".signup-form");
    }, [])


    // popup Signup 
    const popupSignup = () => {
        popupContainer.style.display = "flex"
        loginForm.style.display = "none";
        signupForm.style.display = "flex";
    }

    // popup Signin 
    const popupSignin = () => {
        popupContainer.style.display = "flex"
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
    }


    // --- for updating password ---
    const changePassword = (e) => {
        e.preventDefault()
        // Prompt user for new password input
        const newPassword = prompt('Please enter your new password:', '');

        if (!newPassword) {
            alert('Bad Request! Password cannot be null')
            return
        }
        // Send fetch request to backend with new password as payload
        fetch('http://localhost:3001/updatePassword', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authtoken': token
            },
            body: JSON.stringify({ newPassword })
        })
            .then(response => {
                if (response.ok) {
                    // Password was updated successfully, do something here
                    alert('Successfull! Password Updated Successfully')
                } else {
                    // Password update failed, handle error here
                    alert('Error! Password not Changed')
                }
            })
            .catch(error => {
                alert('Error! Something went Wrong.')
            });
    }


    return (
        <div className='Navbar-main'>
            <header className='header'>
                <a className="logo" href="/"><img className='logo-image' src={logo} alt="logo" /></a>

                <nav>
                    <ul className="nav__links">

                        <li><Link to="/"><b style={{ fontSize: "1.15vw", marginTop: "2px" }}>Home</b></Link></li>
                        <li className='text-muted'> | </li>
                        <li><Link to="services"><b style={{ fontSize: "1.15vw" }}>Services</b></Link></li>
                        <li className='text-muted'> | </li>
                        <li><Link to="about"><b style={{ fontSize: "1.15vw" }}>About Us</b></Link></li>

                    </ul>
                </nav>


                {!token &&
                    (
                        <div className="nav-auth">
                            <a className="nav-auth-link" onClick={() => { popupSignup() }} >Sign Up!</a>
                            &nbsp;/
                            <a className="nav-auth-link" onClick={() => { popupSignin() }}>Sign In!</a>
                        </div>
                    )}


                {/* dropdown if login */}
                {token && (
                    <>
                        <div className='dropdown'>

                            <img className="default-user-image " src={defaultUserIcon} alt='default_user_image' data-bs-toggle="dropdown" aria-expanded="false" />

                            <ul class="dropdown-content dropdown-menu dropdown-menu-dark">
                                <li><Link to="kyc"> <FiUserCheck /> KYC</Link></li>
                                <li><a href="" onClick={changePassword}><FiLock /> Password</a></li>
                                <li><a href="" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('uid'); window.location.reload() }}><FiLogOut /> Sign Out</a></li>
                            </ul>
                        </div>

                    </>
                )}

            </header>

            {/* *********** bottom navBar for responsiveness************ */}
            <nav
                className="resp-1 resp-1-bottom-nav"
                style={{}}
            >
                <Link
                    className="me-4 py-2 text-decoration-none top-nav-link"
                    to="/"
                    style={{ cursor: 'pointer', color: 'white !important' }}
                >
                    <GrHomeRounded color={'#cccccc'} size={27} />
                </Link>
                <Link
                    className="me-4 py-2 text-decoration-none top-nav-link"
                    to='/services'
                    style={{ cursor: 'pointer' }}
                >
                    <FiShoppingCart size={27} color={'#cccccc'} />
                </Link>

                <Link
                    className="py-2 text-decoration-none top-nav-link"
                    to='/about'
                    style={{ cursor: 'pointer' }}
                >
                    {/* <img className='nav_icon' src={''} /> */}
                    <BsInfoCircle size={27} color={'#cccccc'} />
                </Link>

            </nav>
            <Outlet />
        </div>
    )

    // );
}