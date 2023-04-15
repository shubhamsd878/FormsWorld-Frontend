import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import './SignupLogin.scss'

const SignupLogin = () => {
    let popupContainer
    let loginForm
    let signupForm
    let loginLink
    let signupLink

    useEffect(() => {
        popupContainer = document.querySelector(".popup-container");
        loginForm = document.querySelector(".login-form");
        signupForm = document.querySelector(".signup-form");
        loginLink = document.querySelector(".login-link");
        signupLink = document.querySelector(".signup-link");
    }, [])


    const loginLinkHandler = () => {
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
    }

    const signupLinkHandler = () => {
        signupForm.style.display = "flex";
        loginForm.style.display = "none";
    }

    const popupContainerHandler = (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    }



    // ============== from Auth Signup
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');

    const handleSignup = (e) => {
        e.preventDefault();
        // axios.post('/api/signup', { name, email, phone, password, otp })
        //   .then(res => {
        //     console.log(res.data);
        //     // redirect to dashboard or home page
        //   })
        //   .catch(err => {
        //     console.error(err);
        //     // show error message
        //   });
    };

    const handleSendOtp = (e) => {
        e.preventDefault();
        // axios.post('/api/send-otp', { email, phone })
        //   .then(res => {
        //     console.log(res.data);
        //     // show success message
        //   })
        //   .catch(err => {
        //     console.error(err);
        //     // show error message
        //   });
    };

    return (

        <div class="popup-container text-white" onClick={popupContainerHandler}>
            <div class="popup">
                <h2 class="title">Welcome back!</h2>
                <form class="login-form">
                    <div class="form-field d-flex justify-content-between align-items-center mt-1">
                        <label >Email: &nbsp;</label>
                        <input type="email" className='form-control form-control-sm h-25' style={{ width: '64.5%' }} placeholder="name@example.com" required />
                    </div>
                    <div class="form-field d-flex justify-content-between align-items-center mt-1">
                        <label>Password: </label>
                        <input type="password" className='form-control form-control-sm h-25' style={{ width: '64.5%' }} placeholder="password" required />
                    </div>
                    <button type="submit" class="btn login-btn bg-primary text-white mt-2">Login</button>
                    <p class="switch-form">Don't have an account? <a href="#" onClick={signupLinkHandler} class="signup-link">Signup</a></p>
                </form>


                <form class="signup-form flex-column" onSubmit={handleSignup}>
                    <div className="form-group d-flex flex-row justify-content-between align-items-center">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={name} placeholder="" onChange={e => setName(e.target.value)} required
                            className='form-control form-control-sm h-25' style={{ width: '56%' }} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="email">Email</label>
                        <div className='d-flex justify-content-end'>
                            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required
                                className='form-control form-control-sm h-25' style={{ width: '53.5%' }} />
                            <button onClick={handleSendOtp}>Send OTP</button>
                        </div>
                    </div>
                    
                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="otp">OTP</label>
                        <input type="text" id="otp" value={otp} onChange={e => setOtp(e.target.value)} required 
                        className='form-control form-control-sm h-25' style={{width:'56%'}} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="phone">Phone Number &nbsp;</label>
                        <div className='d-flex justify-content-end'>
                            <input type="tel" id="phone" value={phone} onChange={e => setPhone(e.target.value)} required 
                            className='form-control form-control-sm h-25' style={{width:'53.5%'}} 
                            />
                            <button onClick={handleSendOtp}>Send OTP</button>
                        </div>
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} required 
                        className='form-control form-control-sm h-25' style={{width:'56%'}} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required 
                        className='form-control form-control-sm h-25' style={{width:'56%'}} />
                    </div>

                    {/* <button type="submit">Submit</button> */}
                    <button type="submit" class="btn login-btn bg-primary text-white mt-2">Signup</button>


                    <p class="switch-form">Already have an account? <a href="#" onClick={loginLinkHandler} class="login-link">Login</a></p>

                </form>

                <div class="social-login">
                    <h3>Or login with:</h3>
                    <ul>
                        <li><a href="#"><FaGoogle /></a></li>
                        <li><a href="#"><FaFacebookF /></a></li>
                        <li><a href="#"><FaTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default SignupLogin