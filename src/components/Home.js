import React from 'react'
import icon from './icon/icon-2.png'
import distributing_line from './distributing_line/distributing_line.png'
import './HomeCSS.css'
import Typed from 'react-typed';
// import './Typedd.js'

import {ContextCreator} from '../context-api/ContextCreator'
import { useContext } from 'react/cjs/react.production.min';

function home() {

  // const token = useContext(ContextCreator)
    // useContext
    return ( 
    <div id = "home" >

      <img id = "icon" src = { icon } alt = "icon-here" / >
      <span className = "auto-input" > </span>
      {/* why src in image not working */}
      {/* <img src="/distributing_line/distributing_line.png" alt="" /> */}
      <img className="distributing_line" src={distributing_line} alt="" />

      <h1 className="typed typed-heading" > Hi !</h1>
      <h1 className="typed typed-text">We <span className='typed-string'> <Typed strings={[" are Forms-World!", " provide form filling services!"]} typeSpeed={150} backSpeed= {150} loop/> </span></h1>

      <h6 className='typed typed-paragraph'>
        <br />Forms World is form-service providing concept. It fills your form with 100% accuracy. 
        {/* It helps to connect you to specialised person to fill forms easily. */}
        &nbsp; Just Upload your document once &amp; select available job forms and just click apply.
        <br />
        <br />
        Step #1: Create Account by clicking on the login.  
        <br />
        Step #2: Provide us all the details with valid documents.
        <br />

        <i className="muted">Now you're all set</i>
        <br />
        Step #3: Now select the forms you want to appy for.
        <br />
        Step #4: Check out for payment.
        <br />
        <i className="muted">Now, grab tea &amp; wait for mail.</i>
        <br />

      </h6>
      
      </div>

    ) 
}

export default home