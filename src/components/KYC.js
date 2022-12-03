import { set } from 'mongoose';
import React, {useState} from 'react'

const KYC = () => {
  
  let formData = new FormData();


  const [username, setUsername] = useState("")
  const [userAadhar, setUserAadhar] = useState()
  const [fathername, setFathername] = useState()
  const [mothername, setMothername] = useState()
  const [famliyId, setFamilyId] = useState()
  const [passportimage, setPassportimage] = useState()
  const [signatureImage, setSignatureImage] = useState()
  const [tenthMarksheet, setTenthMarksheet] = useState()
  const [twelfthMarksheet, setTwelfthhMarksheet] = useState()
  const [domicile, setDomicile] = useState()
  const [casteCertificate, setCasteCertificate] = useState()
  const [leftThumb, setLeftThumb] = useState()
  const [rightThumb, setRightThumb] = useState()
  
  const handleChange = (e) => {

    switch (e.targer.name) {
      case 'username':
        setUsername(e.target.value)
        
        break;

      case 'userAadhar':
        setUserAadhar(e.target.value)
          
        break;

      case 'fathername':
        setFathername(e.target.value)
            
        break;
      
      case 'mothername':
        setMothername(e.target.value)
        
        break;

      case 'familyId':
        setFamilyId(e.target.value)
        
      break;

      case 'passportImage':
        setPassportimage(e.target.files[0])
        
        break;
      
        case 'signatureImage':
          setSignatureImage(e.target.files[0])
          
          break;

        case 'tenthMarksheet':
          setTenthMarksheet(e.target.files[0])
          
          break;
        
        case 'twelfthMarksheet':
          setTwelfthhMarksheet(e.target.files[0])
        
        break;
      
        case 'domicileImage':
          setDomicile(e.target.files[0])
        
        break;
        case 'casteCertificate':
          setCasteCertificate(e.target.files[0])
        
        break;
        case 'leftThumb':
          setLeftThumb(e.target.files[0])
        
        break;
        case 'rightThumb':
          setRightThumb(e.target.files[0])
        
        break;
        
    
      default:
        console.log('please input right file')
        break;
    }

  }

  // let boundry_var = Math.random().toString().substr(2);

  const kycsubmit = async (e) =>{
    e.preventDefault();

    formData.append("username", username);
    formData.append("userAadhar", userAadhar);
    formData.append("fathername", fathername);
    formData.append("mothername", mothername);
    formData.append("famliyId", famliyId);
    formData.append("passportimage", passportimage);
    formData.append("signatureImage", signatureImage);
    formData.append("tenthMarksheet", tenthMarksheet);
    formData.append("twelfthMarksheet", twelfthMarksheet);
    formData.append("domicile", domicile);
    formData.append("casteCertificate", casteCertificate);
    formData.append("leftThumb", leftThumb);
    formData.append("rightThumb", rightThumb);
    

    console.log( formData)

    const response = await fetch('http://localhost:3001/kyc', {
			method: 'POST',                         
			headers: {},
      body: formData
      
			// body: JSON.stringify( formState )
		})

    const res = await response.json()

    console.log(res.message)
  }

  return (
    <div className='my-3 container'>
    <form onSubmit={kycsubmit} id='kycform' encType="multipart/form-data">

      <fieldset>
          <legend>KYC:</legend>

          <label>Full Name as per Aadhar: &nbsp; </label>
          <input type='text' name='username' onChange = {handleChange}></input>

          &emsp;
          &emsp;
          
          <label>Your Aadhar Card No.: &nbsp; </label>
          <input type='Number' name='userAadhar' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Father's Name as per Aadhar: &nbsp; </label>
          <input type='text' name='fathername' onChange = {handleChange}></input>

          &emsp;
          &emsp;

          <label>Mother's Name as per Aadhar: &nbsp; </label>
          <input type='text' name='mothername' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Enter Family Id: &nbsp; </label>
          <input type='Number' name='familyId' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Passport size Photo: &nbsp; </label>
          <input type='file' name='passportImage' onChange = {handleChange}></input>

          <label>Signature image: &nbsp; </label>
          <input type='file' name='signatureImage' onChange = {handleChange}></input>
          
          <br/>
          <br/>

          <label>10th Marksheet: &nbsp; </label>
          <input type='file' name='tenthMarksheet' onChange = {handleChange}></input>

          <label>12th Marksheet: &nbsp; </label>
          <input type='file' name='twelfthMarksheet' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label> Domicile: &nbsp; </label>
          <input type='file' name='domicileImage' onChange = {handleChange}></input>

          <label> Caste Certificate <i>&#40; if applicable &#41;</i>: &nbsp; </label>
          <input type='file' name='casteCertificate' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label> Candidate's Left Thumb Impression: &nbsp; </label>
          <input type='file' name='leftThumb' onChange = {handleChange}></input>

          <label> Candidate's Right Thumb Impression: &nbsp; </label>
          <input type='file' name='rightThumb' onChange = {handleChange}></input>

          <br/>
          <br/>
          <br/>

          <button type='submit' >Submit</button>
      </fieldset>
    </form>
    </div>
  )
}

export default KYC