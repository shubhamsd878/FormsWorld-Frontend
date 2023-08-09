import React, { useState } from 'react'
import './Auth.css'

const Auth = () => {
    const BACKEND = process.env.REACT_APP_BACKEND

    let loginState = false;
    let formData = new FormData();

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleChange = (e) => {
        if (e.target.name = 'username') {
            setUsername(e.target.value)
        }
        else if (e.target.name = 'username') {
            setPassword(e.target.value)
        }

        console.log(e.target.value)
    }

    const submit = async (e) => {
        e.preventDefault();

        formData.append("username", username);
        formData.append("password", password);

        console.log(formData)

        const response = await fetch(`${BACKEND}/admin`, {
            method: 'POST',
            headers: {},
            body: formData
        })

        const res = await response.json()

        console.log(JSON.stringify(res))

        if (res.status == 200) {
            // loginState = true;
            window.location.reload()
            sessionStorage.setItem('adminAuth', 'Alert! trojan virun')
        }


        console.log('condition: ', res.status == 200)

    }

    return (
        <div className='Admin-auth-body'>
            {/* ************************************************  ADMIN Authentication *********************** */}
            {!loginState && (
                <section className='login' id='login'>
                    <div className='head'>
                        <h1 className='company'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FormsWorld&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
                    </div>
                    <p className='msg'>Welcome back</p>

                    <div className='form'>
                        <form onSubmit={submit}>
                            <input type="text" placeholder='Username' className='text' id='username' required onChange={handleChange} /><br />
                            <input type="password" placeholder='••••••••••••••' className='password' required onChange={handleChange} /><br />
                            <button type='submit' className='btn-login' id='do-login'> Login</button>
                        </form>
                    </div>

                </section>
            )}

            {loginState && (
                <h1> Login Successful</h1>
            )}


        </div>
    )
}

export default Auth