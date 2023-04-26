// Gender, DOB, Category
import React from 'react'
import './KYC_1.scss'

const KYC_1 = () => {
    return (
        <div>
            <h1 className='top-heading mt-3'>KYC</h1>
            <form action="#" method="post" enctype="multipart/form-data" style={{ color: 'rgb(173, 181, 189)' }}>

                <div className='row' >
                    <div class="form-group col">
                        <label for="full-name">Full Name:</label>
                        <input type="text" id="full-name" name="full-name" required />
                    </div>
                    <div class="form-group col">
                        <label for="aadhar-no">Aadhar Card No:</label>
                        <input type="number" id="aadhar-no" name="aadhar-no" required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="father-name">Father's Name:</label>
                        <input type="text" id="father-name" name="father-name" required />
                    </div>
                    <div class="form-group col">
                        <label for="mother-name">Mother's Name:</label>
                        <input type="text" id="mother-name" name="mother-name" required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="Gender">Gender: </label>
                        <div className='d-flex'>
                            <input className='form-check-input me-2' type="radio" id="g-male" name="gender" value='male' required /> Male &nbsp; &nbsp;
                            <input className='form-check-input ms-3 me-2' type="radio" id="f-male" name="gender" value='female' required /> Female
                        </div>
                    </div>
                    <div class="form-group col">
                        <label for="dob">Date of Birth:</label>
                        <input type="date" id="dob" name="dob" accept="*" required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="family-id">Family ID:</label>
                        <input type="text" id="family-id" name="family-id" required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="passport-image">Passport Image:</label>
                        <input type="file" id="passport-image" name="passport-image" accept="image/*" required />
                    </div>
                    <div class="form-group col">
                        <label for="signature-image">Signature Image:</label>
                        <input type="file" id="signature-image" name="signature-image" accept="image/*" required />
                    </div>
                </div>


                <div className='row' >
                    <div class="form-group col">
                        <label for="10th-marksheet">10th Marksheet:</label>
                        <input type="file" id="10th-marksheet" name="10th-marksheet" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div class="form-group col">
                        <label for="12th-marksheet">12th Marksheet:</label>
                        <input type="file" id="12th-marksheet" name="12th-marksheet" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                </div>


                <div className='row' >
                    <div class="form-group col">
                        <label for="domicile">Domicile:</label>
                        <input type="file" id="domicile" name="domicile" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div class="form-group col">
                        <label for="caste-certificate">Caste Certificate:</label>
                        <input type="file" id="caste-certificate" name="caste-certificate" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                </div>

                <div className='row' >
                    <div class="form-group col">
                        <label for="left-thumb-impression">Left Thumb Impression:</label>
                        <input type="file" id="left-thumb-impression" name="left-thumb-impression" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                    <div class="form-group col">
                        <label for="right-thumb-impression">Right Thumb Impression:</label>
                        <input type="file" id="right-thumb-impression" name="right-thumb-impression" accept=".pdf,.jpg,.jpeg,.png" required />
                    </div>
                </div>
                <button className="mb-5" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default KYC_1