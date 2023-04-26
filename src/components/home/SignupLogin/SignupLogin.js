import React, { useEffect, useState } from 'react'
import { FaFacebookF, FaGoogle, FaTwitter } from 'react-icons/fa'
import './SignupLogin.scss'

const SignupLogin = () => {

    // --- code for showing up popup and changing from signup to loginc and vice-versa
    let popupContainer
    let loginForm
    let signupForm
    let loginLink
    let signupLink

    // initializing teh variables
    useEffect(() => {
        popupContainer = document.querySelector(".popup-container");
        loginForm = document.querySelector(".login-form");
        signupForm = document.querySelector(".signup-form");
        loginLink = document.querySelector(".login-link");
        signupLink = document.querySelector(".signup-link");
    }, [])


    // for showing login Form
    const loginLinkHandler = () => {
        loginForm.style.display = "flex";
        signupForm.style.display = "none";
    }
    
    // for showing Signup Form
    const signupLinkHandler = () => {
        signupForm.style.display = "flex";
        loginForm.style.display = "none";
    }

    const popupContainerHandler = (e) => {
        if (e.target === popupContainer) {
            popupContainer.style.display = "none";
        }
    }


    // =================================== for login ==========================================
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')


    const loginHandler = async (event) => {

        document.getElementById('result').innerHTML = "loading..."
        event.preventDefault()

        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailLogin,
                password: passwordLogin
            }),
        })

        const data = await response.json()

        //!IMOPRTANT    don't know why no need to parse data

        if (data.status === 200) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.uid);
            document.getElementById('result').innerHTML = "User Signed In"
            console.log('local storage token: ' + localStorage.getItem('token'))
            console.log('local storage uid: ' + localStorage.getItem('uid'))
            window.location.reload()
        }
        else
            document.getElementById('result').innerHTML = "Enter_valid_creadentials! "
    }



    // ===================================================================================
    // =============================== for SignUp ========================================

    const [emailVerfied, setEmailVerfied] = useState(false)
    const [numberVerfied, setNumberVerfied] = useState(false)

    const [emailOtpSignup, setEmailOtpSignup] = useState()
    const [numberOtpSignup, setNumberOtpSignup] = useState()

    const [nameSignup, setNameSignup] = useState('')
    const [emailSignup, setEmailSignup] = useState('')
    const [passwordSignup, setPasswordSignup] = useState('')
    const [numberSignup, setNumberSignup] = useState('')


    const [confirmPassword, setConfirmPassword] = useState('');
    const [otp, setOtp] = useState('');


    
    const handleSignup = async (event) => {
        console.log('name' + nameSignup)
        document.getElementById('result').innerHTML = "loading..."
        event.preventDefault()

        const response = await fetch('http://localhost:3001/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: nameSignup,
                email: emailSignup,
                phone_no: numberSignup,
                password: passwordSignup
            }),
        })

        const data = await response.json()

        //!IMOPRTANT    don't know why no need to parse data

        console.log("data.status: " + data.status)
        console.log("data: " + JSON.stringify(data))
        console.log("data: " + data)

        if (data.status === 200) {
            document.getElementById('result').innerHTML = "User Successfully created"
        }
        else
            document.getElementById('result').innerHTML = "Enter valid Details"

    }


    const handleSendEmailOtp = async (e) => {
        e.preventDefault()

        console.log('inside sending Email otp')

        let response = await fetch('http://localhost:3001/otp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: emailSignup
            })
        })

        response = await response.json()
        console.log('otp response: ' + JSON.stringify(response))
    }


    // --- function is not working due the reason that fast2sms api need 100rs recharge
    const handleSendPhoneOtp = async (e) => {
        e.preventDefault()

        let response = await fetch('http://localhost:3001', {
            method: 'POST',
            body: JSON.stringify({
                phone: numberSignup
            })
        })

        response = await response.json()
        console.log('in sendPhoneOtp(): ')
        console.log(JSON.stringify(response))
    }



    return (
        <div class="popup-container text-white" onClick={popupContainerHandler}>
            <div class="popup">
                <h2 class="title">Welcome back!</h2>
                <form class="login-form">
                    <div class="form-field d-flex justify-content-between align-items-center mt-1">
                        <label >Email: &nbsp;</label>
                        <input type="email" className='form-control form-control-sm h-25' style={{ width: '64.5%' }} placeholder="name@example.com" required
                            onChange={(e) => { setEmailLogin(e.target.value) }} />
                    </div>
                    <div class="form-field d-flex justify-content-between align-items-center mt-1">
                        <label>Password: </label>
                        <input type="password" className='form-control form-control-sm h-25' style={{ width: '64.5%' }} placeholder="password" required
                            onChange={(e) => { setPasswordLogin(e.target.value) }} />
                    </div>
                    <button type="submit" class="btn login-btn bg-primary text-white mt-2" onClick={loginHandler}>Login</button>
                    <p class="switch-form">Don't have an account? <a href="#" onClick={signupLinkHandler} class="signup-link">Signup</a></p>
                </form>


                {/* --- Signup Form --- */}
                <form class="signup-form flex-column" onSubmit={handleSignup}>
                    <div className="form-group d-flex flex-row justify-content-between align-items-center">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" value={nameSignup} placeholder="" onChange={e => setNameSignup(e.target.value)} required
                            className='form-control form-control-sm h-25' style={{ width: '56%' }} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="email">Email</label>
                        <div className='d-flex justify-content-end'>
                            <input type="email" id="email" value={emailSignup} onChange={e => setEmailSignup(e.target.value)} required
                                className='form-control form-control-sm h-25' style={{ width: '53.5%' }} />
                            <button onClick={handleSendEmailOtp}>Send OTP</button>
                        </div>
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="otp">OTP</label>
                        <input type="text" id="otp" value={otp} onChange={e => setOtp(e.target.value)} required
                            className='form-control form-control-sm h-25' style={{ width: '56%' }} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="phone">Phone Number &nbsp;</label>
                        <div className='d-flex justify-content-end'>
                            <input type="tel" id="phone" value={numberSignup} onChange={e => setNumberSignup(e.target.value)} required
                                className='form-control form-control-sm h-25' style={{ width: '53.5%' }}
                            />
                            <button onClick={handleSendPhoneOtp}>Send OTP</button>
                        </div>
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="password">Password </label>
                        <input type="password" id="password" value={passwordSignup} onChange={e => setPasswordSignup(e.target.value)} required
                            className='form-control form-control-sm h-25' style={{ width: '56%' }} />
                    </div>

                    <div className="form-group d-flex flex-row justify-content-between">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required
                            className='form-control form-control-sm h-25' style={{ width: '56%' }} />
                    </div>

                    {/* <button type="submit">Submit</button> */}
                    <div><p id='result'></p></div>
                    <button type="submit" class="btn login-btn bg-primary text-white mt-2" >Signup</button>


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