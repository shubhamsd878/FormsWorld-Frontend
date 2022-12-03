import React, {useState} from 'react'
import { useContext } from 'react'
import { ContextCreator } from '../../context-api/ContextCreator'

const Login = () => {

    const closeNav = () => {
        document.getElementById("mySideNavSignIn").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
    
    const loginUser = async (event) => {
        
        document.getElementById('result').innerHTML = "loading..." 
		event.preventDefault()

		const response = await fetch('http://localhost:3001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password
			}),
		})

		const data = await response.json()



        //!IMOPRTANT    don't know why no need to parse data

        console.log("data.status: " + data.status)
        console.log("data: " + JSON.stringify(data))
        
        if(data.status === 200){
        // if(result.status == 200){    
            localStorage.setItem('token', data.token);
            localStorage.setItem('uid', data.uid);
            document.getElementById('result').innerHTML = "User Signed In" 
            console.log( 'local storage token: ' + localStorage.getItem('token'))
            console.log( 'local storage uid: ' + localStorage.getItem('uid'))
            window.location.reload()
        }
        else
        document.getElementById('result').innerHTML = "Enter_valid_creadentials! " 

	}

  return (
    <div>
        <div id="mySideNavSignIn" className="sidenav">
                <a className="closebtn formD" onClick={closeNav}>&times;</a>
                
                <form onSubmit={loginUser} className="formD flex-row">                
                    
                    <p className="sideNavSignup_form_text" >eMail: </p>
                    <input className="sideNavSignup_form_text inputField" type="email" name='email' onChange={(e) => {setEmail(e.target.value); console.log(e.target.value)}}/>

                    <p className="sideNavSignup_form_text" >Password: </p>
                    <input className="sideNavSignup_form_text inputField" type="password" name='password' onChange={(e) => {setPassword(e.target.value); console.log(e.target.value)}}/>

                    <button type="submit" className="signupSubmitBtn" onClick={loginUser}>Submit</button>

                <p id="result"></p>
                </form>

            </div>
    </div>
  )
}

export default Login