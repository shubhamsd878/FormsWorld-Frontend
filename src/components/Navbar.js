import React, { useContext, useState, useEffect } from 'react';
import './NavbarCSS.css'
import logo from './logo/logo.png';
import { Outlet, Link } from "react-router-dom";
import { FiLock, FiUserCheck, FiLogOut } from 'react-icons/fi';
import defaultUserIcon from './Navbar/defaultUserIcon.jpg'

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
      
        if(!newPassword){
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
                <a className="logo" href="/"><img src={logo} alt="logo" width="40%" /></a>
                
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
                        <div className="cta">
                            <a className="cta-link" onClick={() => { popupSignup() }} >Sign Up!</a>
                            &nbsp;/
                            <a className="cta-link" onClick={() => { popupSignin() }}>Sign In!</a>
                        </div>
                    )}

                {/* dropdown if login */}

                {token && (
                    <>
                        <div className="dropdown">
                            <img className="default-user-image " src={defaultUserIcon} alt='default_user_image' />
                            <div className="dropdown-content">
                                <Link to="kyc"> <FiUserCheck /> KYC</Link>
                                <a href="" onClick={changePassword}><FiLock /> Password</a>
                                <a href="" onClick={() => { localStorage.removeItem('token'); localStorage.removeItem('uid'); window.location.reload() }}><FiLogOut /> Sign Out</a>
                            </div>
                        </div>

                    </>
                )}


                <p className="menu cta">Menu</p>
            </header>

            <div className="overlay">
                <a className="close">&times;</a>
                <div className="overlay__content">
                    <a href="https://www.google.com">Services</a>
                    <a href="https://www.google.com">Projects</a>
                    <a href="https://www.google.com">About</a>
                </div>
            </div>

            <Outlet />
        </div>
    )

    // );
}