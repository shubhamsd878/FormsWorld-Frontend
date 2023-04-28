import React from 'react'
import icon from './icon/icon-2.png'
import distributing_line from './distributing_line/distributing_line.png'
import './HomeCSS.scss'
import Typed from 'react-typed';

import { ContextCreator } from '../context-api/ContextCreator'
import { useContext } from 'react/cjs/react.production.min';
import SocialReviews from './home/SocialReview/SocialReviews';
import Faq from './home/FAQs/Faq';
import Footer from './home/Footer/Footer';
import SignupLogin from './home/SignupLogin/SignupLogin';


function home() {

  const token = localStorage.getItem('token')

  let loginForm
  let signupForm
  let popupContainer

  const showSignup = () => {
      if( token ){
        alert('Already Logged In.')
        return;
      }
      popupContainer = document.querySelector(".popup-container");
      loginForm = document.querySelector(".login-form");          {/* not getting initialized in useEffect*/}
      signupForm = document.querySelector(".signup-form");

      popupContainer.style.display = "flex"
      signupForm.style.display = "flex";
      loginForm.style.display = "none";
  }


  return (
    <div id="home" >

      <img id="icon" src={icon} alt="icon-here" />
      <span className="auto-input" > </span>
      {/* why src in image not working */}
      {/* <img src="/distributing_line/distributing_line.png" alt="" /> */}
      <img className="distributing_line" src={distributing_line} alt="" />

      <h1 className="typed typed-heading" > Hi !</h1>
      <h1 className="typed typed-text">We <span className='typed-string'> <Typed strings={[" are Forms-World!", " provide form filling services!"]} typeSpeed={150} backSpeed={150} loop /> </span></h1>

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


      {/* --- second page ---  */}
      <div className='second-page container d-flex justify-content-between align-items-center' >
        <div>
          <h1 className='text-gradient' style={{fontSize:'4vw', fontWeight:700}}>Why Us ?</h1>
          <ul>
            <li className='my-1'>To save your valuable time.</li>
            <li className='my-1'>Let us take care of all the struggles for you.</li>
            <li className='my-1'>Let us give you higher form filling accuracy through experts.</li>
            <li className='my-1'>Better Satisfaction.</li>
            {/* <li>To reduce your form filling stress</li> */}
          <a >Tap to learn More....</a>
          </ul>

          <h6 className='mt-5 mb-4' style={{color:'#adadad', fontWeight:700}}>Sign up now and access exclusive features!</h6>
          {/* <button className='page-2-signup-button'>Sign Up >></button> */}
          <a className='page-2-signup-button monsterrat' onClick={showSignup} href='#'>Sign Up >></a>
        </div>
        <img src='Images/Forms.svg' className='forms-image' alt='form'></img>
      </div>


      {/* --- Third Page --- */}
      <div className='third-page container'>
        <h1 className='social-review-heading monsterrat'><span className='mustard-text'>S</span>ocial <span className='mustard-text'>R</span>eviews</h1>
        <SocialReviews />
      </div>


      {/* Fourth page */}
      <div className='fourth-page container mt-4'>
        {/* <h1 className='faq-heading monsterrat'><span className='mustard-text'>FAQ</span>s - Frequently Asked Questions</h1> */}
        <h1 className='faq-heading monsterrat'><span className='mustard-text'>F</span>requently <span className='mustard-text'>A</span>sked <span className='mustard-text'>Q</span>uestions - FAQs</h1>
        <Faq />
      </div>


      {/* Footer */}
      <Footer />

    </div>

  )
}

export default home