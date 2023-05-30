import React, { useEffect } from 'react'
import icon from './icon/icon-2.png'
import distributing_line from './distributing_line/distributing_line.png'
import './HomeCSS.scss'
import Typed from 'react-typed';
import SocialReviews from './home/SocialReview/SocialReviews';
import Faq from './home/FAQs/Faq';
import Footer from './Footer/Footer';


function Home() {

  const token = localStorage.getItem('token')

  let loginForm
  let signupForm
  let popupContainer

  const showSignup = () => {
    if (token) {
      alert('Already Logged In.')
      return;
    }
    popupContainer = document.querySelector(".popup-container");
    loginForm = document.querySelector(".login-form"); {/* not getting initialized in useEffect*/ }
    signupForm = document.querySelector(".signup-form");

    popupContainer.style.display = "flex"
    signupForm.style.display = "flex";
    loginForm.style.display = "none";
  }

  // logic on mouse hover change letter color effect
  useEffect(() => {
    // strArr, contains all the lines used in paragram
    let strArr = ['Forms World is form-service providing concept. It fills your form with 100% accuracy. Just Upload your document once & select available job forms and just click apply.',
      ' ',
      ' Step #1: Create Account by clicking on the login.',
      'Step #2: Provide us all the details with valid documents.',
      '<i className="muted">Now you\'re all set</i>',
      'Step #3: Now select the forms you want to apply for.',
      'Step #4: Check out for payment.',
      '<i className="muted">Now, grab tea & wait for mail.</i>'
    ]

    //element in which to add the paragram text
    let typedParagraph = document.querySelector('#typed-paragram-content')
    typedParagraph.innerText = ''

    // accessing each line
    strArr.forEach(element => {
      // if ' ' then <br>
      if (element === ' ') {
        let newLine = document.createElement('br')
        typedParagraph.append(newLine)
      }
      // for line starting with <i className='text-muted'>
      else if (element.charAt(0) === '<') {
        let newLine = document.createElement('i')
        newLine.classList.add('muted')
        newLine.innerText = element.substring(21, element.length - 4)
        typedParagraph.append(newLine)
      }
      // for converting line to <span>letter</span> 
      else {
        let charArr = element.split('')
        let newLine = document.createElement('div')

        charArr.forEach(e => {
          let newLetter = document.createElement('span')
          newLetter.classList.add('typed-letter')
          if (e !== ' ')
            newLetter.classList.add('zoom-on-hover')
          newLetter.innerHTML = e

          newLine.append(newLetter)
        })

        // adding the newLine to the end
        typedParagraph.append(newLine)
      }
    });

  }, [])


  return (
    <div id="home" >
      {/* --- First page ---*/}
      <div className='mt-5 d-flex align-items-center justify-content-center '>
        <img id="icon" className='ms-0' src={icon} alt="icon-here" />
        <img className="distributing_line" src={distributing_line} alt="" />

        <div className='right-details'>

          <h1 className="typed typed-heading" > Hi !</h1>
          <h1 className="typed typed-text">We <span className='typed-string'> <Typed strings={[" are Forms-World!", " provide form filling services!"]} typeSpeed={150} backSpeed={150} loop /> </span></h1>

          <p className='typed typed-paragraph'>
            <div id='typed-paragram-content'></div>   {/* All the logic id added to this paragraph */}

            {/* --- for direct content without hover effect comment above & uncomment below lines of code */}
            {/* <br />
        Forms World is form-service providing concept. It fills your form with 100% accuracy.
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
      <br /> */}

          </p>
        </div>
      </div>


      {/*  responsive paragraph */}
      <div className='mx-4 d-flex justify-content-center '>

      <p className='typed typed-paragraph-resp '>

        {/* --- for direct content without hover effect comment above & uncomment below lines of code */}
        <br />
        Forms World is form-service providing concept. It fills your form with 100% accuracy.
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

      </p>
      </div>

      {/* --- second page ---  */}
      <div className='second-page container mt-5 d-flex justify-content-between align-items-center' >
        <div>
          <h1 className='heading text-gradient' >Why Us ?</h1>
          <ul>
            <li className='my-1'>To save your valuable time.</li>
            <li className='my-1'>Let us take care of all the struggles for you.</li>
            <li className='my-1'>Let us give you higher form filling accuracy through experts.</li>
            <li className='my-1'>Better Satisfaction.</li>
            {/* <li>To reduce your form filling stress</li> */}
            <a >Tap to learn More....</a>
          </ul>

          <h6 className='mt-5 mb-4' style={{ color: '#adadad', fontWeight: 700 }}>Sign up now and access exclusive features!</h6>
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

export default Home