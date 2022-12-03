import React, {useState} from 'react'

const Signup = () => {
    

    const closeNav = () => {
        document.getElementById("mySideNavSignUp").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }

    const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [number, setNumber] = useState('')
    
    const registerUser = async (event) => {
        
        console.log('name' + name )
        document.getElementById('result').innerHTML = "loading..." 
		event.preventDefault()

		const response = await fetch('http://localhost:3001/signup', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
                phone_no: number,
				password
			}),
		})

		const data = await response.json()

        //!IMOPRTANT    don't know why no need to parse data

        console.log("data.status: " + data.status)
        console.log("data: " + JSON.stringify(data))
        console.log("data: " + data)
        
        if(data.status == 200){
            document.getElementById('result').innerHTML = "User Successfully created" 
        }
        else
        document.getElementById('result').innerHTML = "Enter valid Details" 


	}

  return (
    <div>
        <div id="mySideNavSignUp" className="sidenav">
                <a className="closebtn formD" onClick={closeNav}>&times;</a>
                
                <form onSubmit={registerUser} className="formD flex-row">                
                    
                    <p className="sideNavSignup_form_text" >Name: </p>
                    <input className="sideNavSignup_form_text inputField" type="text" name='name'  onChange={(e) => {setName(e.target.value); console.log(e.target.value)}}/>

                    <p className="sideNavSignup_form_text" >eMail: </p>
                    <input className="sideNavSignup_form_text inputField" type="email" name='email' onChange={(e) => {setEmail(e.target.value); console.log(e.target.value)}}/>

                    <p className="sideNavSignup_form_text" >Phone_No.: </p>
                    <input className="sideNavSignup_form_text inputField" type="number" name='number' onChange={(e) => {setNumber(e.target.value); console.log(e.target.value)}}/>

                    <p className="sideNavSignup_form_text" >Password: </p>
                    <input className="sideNavSignup_form_text inputField" type="password" name='password' onChange={(e) => {setPassword(e.target.value); console.log(e.target.value)}}/>

                    {/* <input type="submit" className="signupSubmitBtn" value="Submit" /> */}
                    <button type="submit" className="signupSubmitBtn" onClick={registerUser}>Submit</button>

                <p id="result"></p>
                </form>

                {/* <p style="color:white">hello-world</p> */}
            </div>
    </div>
  )
}

export default Signup