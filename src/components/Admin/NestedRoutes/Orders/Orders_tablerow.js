import React, { useId, useState } from 'react'
import './modal.css'


const Orders_tablerow = (props) => {
    const BACKEND = process.env.REACT_APP_BACKEND
    const { _id, uid, dateTime, payment_done, name, email, form_id, form_title } = props


    // for fetching userDetails on Click of showModal
    const [userDetails, setUserDetails] = useState({})

    const fetchUserDetails = async () => {

        let response = await fetch(`${BACKEND}/kyc`, {
            headers: { uid }
        })

        response = await response.json()
        console.log(response)
        setUserDetails(response.result)

        if(response.result == null){
            setUserDetails(false)
        }
    }


    //-------------- for fetching FormDetails on Click of showModal
    const [formDetails, setFormDetails] = useState()
    const fetchFormDetails = async () => {
        let response = await fetch(`${BACKEND}/forms/_id`, {
            headers: { fid: form_id }
        })

        response = await response.json()
        console.log(response)

        setFormDetails(response.result)
    }




    // ---------------------  Code for the UserModal  ---------------------
    const userModalId = "u" + _id               //useId hook didn't work
    var usermodal

    function showUserModal() {
        initUserModal()

        usermodal.style.display = "block";
        fetchUserDetails()
    }

    function initUserModal() {
        // Get the modal
        usermodal = document.getElementById(userModalId);

    }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    function hideUserModal() {
        initUserModal()
        usermodal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == usermodal) {
            usermodal.style.display = "none";
        }
    }

    // ----------------------------------------------------------------------------

    // ---------------------  Code for the FormModal  ---------------------
    const formModalId = "f" + _id               // useId not working
    var formModal

    function showFormModal() {
        initFormModal()
        fetchFormDetails()
        formModal.style.display = "block";
    }

    function initFormModal() {
        // Get the modal
        formModal = document.getElementById(formModalId);

    }

    // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    function hideFormModal() {
        initFormModal()
        formModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == formModal) {
            formModal.style.display = "none";
        }
    }

    // ----------------------------------------------------------------------------




    return (
        <tr>
            {/* <td><a href='http://www.google.com' target='_blank'>{uid}</a></td> */}
            <td><a href='#' onClick={showUserModal}>{name}</a></td>
            <td><a href='#' onClick={showUserModal}>{email}</a></td>
            <td><a href='#' onClick={showFormModal}>{form_title}</a></td>
            <td>{dateTime}</td>
            <td>{payment_done ? 'true' : 'false'}</td>



            {/* ------------------ User Details Modal ------------------ */}
            <div id={userModalId} class="custom_modal">

                {/* <!-- Modal content --> */}
                <div class="custom_modal-content">
                    <div class="custom_modal-header d-flex justify-content-between">
                        <h2><b>{name}</b></h2>
                        <span onClick={hideUserModal} class="close">&times;</span>
                    </div>

                    <div class="custom_modal-body">
                        {userDetails === null && (<p>Loading . . .</p>)}
                        {userDetails === false && (<p>No KYC</p>)}
                        {userDetails &&
                            <table>
                                <thead>
                                    <tr>
                                        <th>Field</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Full Name</td>
                                        <td>{userDetails.full_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{email}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone_no.</td>
                                        <td><i><b>Phone_no</b></i></td>
                                    </tr>
                                    <tr>
                                        <td>Aadhar No.</td>
                                        <td> {userDetails.aadhar_no} </td>
                                    </tr>
                                    <tr>
                                        <td>Father's Name</td>
                                        <td> {userDetails.fathers_name && userDetails.fathers_name}</td>
                                    </tr>
                                    <tr>
                                        <td>Mother's Name</td>
                                        <td>{userDetails.mothers_name && userDetails.mothers_name} </td>
                                    </tr>
                                    <tr>
                                        <td>Family Id</td>
                                        <td>{userDetails.family_id && userDetails.family_id} </td>
                                    </tr>
                                    <tr>
                                        <td>Passport Image</td>
                                        <td>{userDetails.passport_image &&
                                            <a download={`${email}_passportimage.jpg`} href={`data:image/png;base64,${userDetails.passport_image}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Signature Image</td>
                                        <td>{userDetails.signature_image &&
                                            <a download={`${email}_signatureimage.jpg`} href={`data:image/png;base64,${userDetails.signature_image}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Marksheet_10th</td>
                                        <td>{userDetails.marksheet_10th &&
                                            <a download={`${email}_marksheet_10th.jpg`} href={`data:image/png;base64,${userDetails.marksheet_10th}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Marksheet 12th</td>
                                        <td>{userDetails.marksheet_12th &&
                                            <a download={`${email}_marksheet_12th.jpg`} href={`data:image/png;base64,${userDetails.marksheet_12th}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Domicile Image</td>
                                        <td>{userDetails.domicile_image &&
                                            <a download={`${email}_domicile_image.jpg`} href={`data:image/png;base64,${userDetails.domicile_image}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Caste Certificate</td>
                                        <td>{userDetails.caste_certificate &&
                                            <a download={`${email}_caste_certificate.jpg`} href={`data:image/png;base64,${userDetails.caste_certificate}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Left Thumb</td>
                                        <td>{userDetails.left_thumb &&
                                            <a download={`${email}_left_thumb.jpg`} href={`data:image/png;base64,${userDetails.left_thumb}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Right Thumb</td>
                                        <td>{userDetails.right_thumb &&
                                            <a download={`${email}_right_thumb.jpg`} href={`data:image/png;base64,${userDetails.right_thumb}`}>Download</a>
                                        }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        }


                    </div>

                    <div class="custom_modal-footer">
                        {/* <h3>Modal Footer</h3> */}
                    </div>
                </div>

            </div>
            {/* --------------------------------------------------- */}



            {/* ------------------ Form Details Modal ------------------ */}
            <div id={formModalId} class="custom_modal">

                {/* <!-- Modal content --> */}
                <div class="custom_modal-content">
                    <div class="modal-header d-flex justify-content-between">
                        <h2><b>{form_title}</b></h2>
                        <span onClick={hideFormModal} class="close">&times;</span>
                    </div>

                    <div class="custom_modal-body">
                        {formDetails &&
                            <table>
                                <tr>
                                    <th>Field</th>
                                    <th>Values</th>
                                </tr>
                                <tr>
                                    <td>Title</td>
                                    <td>{formDetails.title}</td>
                                </tr>
                                <tr>
                                    <td>_id:</td>
                                    <td>{formDetails._id}</td>
                                </tr>
                                <tr>
                                    <td>Age:</td>
                                    <td>{formDetails.age}</td>
                                </tr>
                                <tr>
                                    <td>Last date:</td>
                                    <td>{formDetails.last_date}</td>
                                </tr>
                                <tr>
                                    <td>Price:</td>
                                    <td>{formDetails.price}</td>
                                </tr>
                                <tr>
                                    <td>Qualification:</td>
                                    <td>{formDetails.qualification}</td>
                                </tr>
                                <tr>
                                    <td>Total Post:</td>
                                    <td>{formDetails.total_post}</td>
                                </tr>
                            </table>
                        }

                    </div>

                    <div class="custom_modal-footer">
                        {/* <h3>Modal Footer</h3> */}
                    </div>
                </div>

            </div>
            {/* --------------------------------------------------- */}
        </tr>

    )
}

export default Orders_tablerow