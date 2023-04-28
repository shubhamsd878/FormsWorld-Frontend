// City, State, Category, Highest Qualification, UG, PG
import React, { useState } from 'react'
import './KYC.scss'
import Footer from './home/Footer/Footer'
import * as imageConversion from 'image-conversion';


const KYC = () => {

    let formData = new FormData();


    const [full_name, setFull_name] = useState("")
    const [aadhar_no, setAadhar_no] = useState()
    const [fathers_name, Fathers_name] = useState()
    const [mothers_name, setMothers_name] = useState()
    const [gender, setGender] = useState()
    const [dob, setDob] = useState()
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

            case 'gender':
                setGender(e.target.value)

                break;

            case 'dob':
                setDob(e.target.value)

                break;

            case 'familyId':
                setFamily_id(e.target.value)

                break;

            // image files
            case 'passportImage': {

                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setPassport_image(res)
                })

                break;
            }

            case 'signature_image': {

                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setSignature_image(res)
                })

                break;
            }

            case 'marksheet_10th': {

                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setMarksheet_10th(res)
                })

                break;
            }
            // setMarksheet_10th(e.target.files[0])

            // break;

            case 'marksheet_12th': {

                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setMarksheet_12th(res)
                })

                break;
            }


            case 'domicileImage': {
                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setDomicile_image(res)
                })

                break;
            }

            case 'caste_certificate': {
                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setCaste_certificate(res)
                })

                break;
            }


            case 'left_thumb': {
                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
                    //The res in the promise is a compressed Blob type (which can be treated as a File type) file;
                    // converting blob to file
                    res = new File([res], "file_name");

                    setLeft_thumb(res)
                })

                break;
            }

            case 'right_thumb': {
                let file = e.target.files[0]

                imageConversion.compressAccurately(file, 250).then(res => {
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

    const kycsubmit = async (e) => {
        e.preventDefault();

        formData.append("full_name", full_name);
        formData.append("aadhar_no", aadhar_no);
        formData.append("fathers_name", fathers_name);
        formData.append("mothers_name", mothers_name);
        formData.append("gender", gender);
        formData.append("dob", dob);
        formData.append("family_id", family_id);
        formData.append("passport_image", passport_image);
        formData.append("signature_image", signature_image);
        formData.append("marksheet_10th", marksheet_10th);
        formData.append("marksheet_12th", marksheet_12th);
        formData.append("domicile_image", domicile_image);
        formData.append("caste_certificate", caste_certificate);
        formData.append("left_thumb", left_thumb);
        formData.append("right_thumb", right_thumb);


        console.log(formData)

        const response = await fetch('http://localhost:3001/kyc', {
            method: 'POST',
            headers: { token: localStorage.getItem('token') },
            body: formData

            // body: JSON.stringify( formState )
        })

        const res = await response.json()

        console.log(res.message)
    }

    return (
        <div className='KYC'>
            <h1 className='top-heading mt-3'>KYC</h1>
            <form method="post" enctype="multipart/form-data" onSubmit={kycsubmit} style={{ color: 'rgb(173, 181, 189)' }} >
                <div className='row' >
                    <div class="form-group col">
                        <label for="full-name">Full Name:</label>
                        <input className='form-control' type="text" id="full-name" name="full_name" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="aadhar-no">Aadhar Card No:</label>
                        <input className='form-control' type="text" pattern="\d{16}" title="Please enter a 16-digit number" id="aadhar-no" name="aadhar_no" onChange={handleChange} required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="father-name">Father's Name:</label>
                        <input className='form-control' type="text" id="father-name" name="fathers_name" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="mother-name">Mother's Name:</label>
                        <input className='form-control' type="text" id="mother-name" name="mothers_name" onChange={handleChange} required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="Gender">Gender: </label>
                        <div className='d-flex'>
                            <input className='form-control' className='form-check-input me-2' type="radio" id="g-male" name="gender" value='male' onChange={handleChange} required /> Male &nbsp; &nbsp;
                            <input className='form-control' className='form-check-input ms-3 me-2' type="radio" id="f-male" name="gender" value='female' onChange={handleChange} required /> Female
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="dob">Date of Birth:</label>
                        <input className='form-control' type="date" id="dob" name="dob" accept="*" onChange={handleChange} required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="family-id">Family ID:</label>
                        <input className='form-control' type="text" id="family-id" name="familyId" onChange={handleChange} required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="passport-image">Passport Image:</label>
                        <input className='form-control' type="file" id="passport-image" name="passportImage" accept="image/*" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="signature-image">Signature Image:</label>
                        <input className='form-control' type="file" id="signature-image" name="signature_image" accept="image/*" onChange={handleChange} required />
                    </div>
                </div>


                <div className='row' >
                    <div class="form-group col">
                        <label for="10th-marksheet">10th Marksheet:</label>
                        <input className='form-control' type="file" id="10th-marksheet" name="marksheet_10th" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="12th-marksheet">12th Marksheet:</label>
                        <input className='form-control' type="file" id="12th-marksheet" name="marksheet_12th" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                </div>


                <div className='row' >
                    <div class="form-group col">
                        <label for="domicile">Domicile:</label>
                        <input className='form-control' type="file" id="domicile" name="domicileImage" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="caste-certificate">Caste Certificate:</label>
                        <input className='form-control' type="file" id="caste-certificate" name="caste_certificate" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="left-thumb-impression">Left Thumb Impression:</label>
                        <input className='form-control' type="file" id="left-thumb-impression" name="left_thumb" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                    <div class="form-group col">
                        <label for="right-thumb-impression">Right Thumb Impression:</label>
                        <input className='form-control' type="file" id="right-thumb-impression" name="right_thumb" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} required />
                    </div>
                </div>
                <button className="mb-5" type="submit">Submit</button>
            </form>

            <Footer />
        </div>
    )
}

export default KYC