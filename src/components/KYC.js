import React, {useState} from 'react'
import * as imageConversion from 'image-conversion';

const KYC = () => {
  
  let formData = new FormData();


  const [full_name, setFull_name] = useState("")
  const [aadhar_no, setAadhar_no] = useState()
  const [fathers_name, Fathers_name] = useState()
  const [mothers_name, setMothers_name] = useState()
  const [family_id, setFamily_id] = useState()
  const [passport_image, setPassport_image] = useState()
  const [signature_image, setSignature_image] = useState()
  const [marksheet_10th, setMarksheet_10th] = useState()
  const [marksheet_12th, setMarksheet_12th] = useState()
  const [domicile_image, setDomicile_image] = useState()
  const [caste_certificate, setCaste_certificate] = useState()
  const [left_thumb, setLeft_thumb] = useState()
  const [right_thumb, setRight_thumb] = useState()
  
  const handleChange = (e) => {

    switch (e.target.name) {
      case 'full_name':
        setFull_name(e.target.value)
        
        break;

      case 'aadhar_no':
        setAadhar_no(e.target.value)
          
        break;

      case 'fathers_name':
        Fathers_name(e.target.value)
            
        break;
      
      case 'mothers_name':
        setMothers_name(e.target.value)
        
        break;

      case 'familyId':
        setFamily_id(e.target.value)
        
      break;

      // image files
      case 'passportImage':{

        let file = e.target.files[0]
        
        imageConversion.compressAccurately(file,250).then(res=>{
          //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
          // converting blob to file
          res = new File([res], "file_name");
          
          setPassport_image(res)
        })
        
        break;
      }
        
        case 'signature_image':{

          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setSignature_image(res)
          })
          
          break;
        }

        case 'marksheet_10th':{

          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setMarksheet_10th(res)
          })
          
          break;
        }
          // setMarksheet_10th(e.target.files[0])
          
          // break;
        
        case 'marksheet_12th':{

          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setMarksheet_10th(res)
          })
          
          break;
        }
        
      
        case 'domicileImage':{
          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setDomicile_image(res)
          })
          
          break;
        }
        
        case 'caste_certificate':{
          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setCaste_certificate(res)
          })
          
          break;
        }


        case 'left_thumb':{
          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setLeft_thumb(res)
          })
          
          break;
        }

        case 'right_thumb':{
          let file = e.target.files[0]
          
          imageConversion.compressAccurately(file,250).then(res=>{
            //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
            // converting blob to file
            res = new File([res], "file_name");
            
            setRight_thumb(res)
          })
          
          break;
        }
        
    
      default:
        console.log('please input right file')
        break;
    }

  }

  // let boundry_var = Math.random().toString().substr(2);

  const kycsubmit = async (e) =>{
    e.preventDefault();

    formData.append("full_name", full_name);
    formData.append("aadhar_no", aadhar_no);
    formData.append("fathers_name", fathers_name);
    formData.append("mothers_name", mothers_name);
    formData.append("family_id", family_id);
    formData.append("passport_image", passport_image);
    formData.append("signature_image", signature_image);
    formData.append("marksheet_10th", marksheet_10th);
    formData.append("marksheet_12th", marksheet_12th);
    formData.append("domicile_image", domicile_image);
    formData.append("caste_certificate", caste_certificate);
    formData.append("left_thumb", left_thumb);
    formData.append("right_thumb", right_thumb);
    

    console.log( formData)

    const response = await fetch('http://localhost:3001/kyc', {
			method: 'POST',                         
			headers: {token: localStorage.getItem('token')},
      body: formData
      
			// body: JSON.stringify( formState )
		})

    const res = await response.json()

    console.log(res.message)
  }

  return (
    <div className='my-3 container text-white'>
    <form onSubmit={kycsubmit} id='kycform' encType="multipart/form-data">

      <fieldset >
      {/* <fieldset className='d-flex flex-column'> */}
          <legend>KYC:</legend>

          <label>Full Name as per Aadhar: &nbsp; </label>
          <input type='text' name='full_name' onChange = {handleChange}></input>

          &emsp;
          &emsp;
          
          <label>Your Aadhar Card No.: &nbsp; </label>
          <input type='Number' name='aadhar_no' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Father's Name as per Aadhar: &nbsp; </label>
          <input type='text' name='fathers_name' onChange = {handleChange}></input>

          &emsp;
          &emsp;

          <label>Mother's Name as per Aadhar: &nbsp; </label>
          <input type='text' name='mothers_name' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Enter Family Id: &nbsp; </label>
          <input type='text' name='familyId' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label>Passport size Photo: &nbsp; </label>
          <input type='file' name='passportImage' onChange = {handleChange}></input>

          <label>Signature image: &nbsp; </label>
          <input type='file' name='signature_image' onChange = {handleChange}></input>
          
          <br/>
          <br/>

          <label>10th Marksheet: &nbsp; </label>
          <input type='file' name='marksheet_10th' onChange = {handleChange}></input>

          <label>12th Marksheet: &nbsp; </label>
          <input type='file' name='marksheet_12th' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label> Domicile: &nbsp; </label>
          <input type='file' name='domicileImage' onChange = {handleChange}></input>

          <label> Caste Certificate <i>&#40; if applicable &#41;</i>: &nbsp; </label>
          <input type='file' name='caste_certificate' onChange = {handleChange}></input>

          <br/>
          <br/>

          <label> Candidate's Left Thumb Impression: &nbsp; </label>
          <input type='file' name='left_thumb' onChange = {handleChange}></input>

          <label> Candidate's Right Thumb Impression: &nbsp; </label>
          <input type='file' name='right_thumb' onChange = {handleChange}></input>

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