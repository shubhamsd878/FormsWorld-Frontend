import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';

const TableRow = (props) => {
    const BACKEND = process.env.REACT_APP_BACKEND
    const { _id, title, last_date, total_post, price, qualification, age } = props

    // -- The inputs values were not editable when using props in value attribute of input --



    // -------------------------------------------------------------------------------------


    // --------------------- For Form Editing Modal -----------------------
    // modal to show add form
    const [editFormModal, setEditFormModal] = useState(false)

    // ------------------ add form -------------------
    const [editForm, setEditForm] = useState({
        id: _id,
        title: title,
        date: last_date,
        // date: new Date(last_date).toLocaleString(),
        total_post: total_post,
        age: age,
        qualification: qualification,
        price: price
    })

    const handleChange = async (e) => {
        const { name, value } = e.target;
        if (name === "date") {
            const formattedDate = new Date(value).toISOString();
            setEditForm(prevValues => ({ ...prevValues, [name]: formattedDate }));
          } else {
            setEditForm(prevValues => ({ ...prevValues, [name]: value }));
          }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // need to edit
        let response = await fetch(`${BACKEND}/forms`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(editForm)
        })
        response = await response.json()
        console.log('response: ' + JSON.stringify(response))
        if (response.status === 200) {
            alert('Form Updated Successfully, Refresh to see updates.')
        }
        else {
            alert('Something went wrong, Database not updated.')
        }
    }
    // ----------------------------------------------------------------------------


    return (
        <>
            <tr>
                <td>{props.title}</td>
                <td>{last_date}</td>
                <td>{total_post}</td>
                <td>{age}</td>
                <td>{qualification}</td>
                <td>{price}</td>
                <td ><span onClick={() => { setEditFormModal(true) }}> <FiEdit /> </span> </td>
                {/* <td onClick={''}>y</td> */}
            </tr>

            {/* -------------------- Form Edit Modal --------------------- */}
            {editFormModal &&

                <div class="modal-dialog" style={{ position: 'fixed', width: '70vh', left: '50%', transform: 'translateX(-50%)' }}>
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Edit Form</h5>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                            <button type="button" onClick={() => { setEditFormModal(!editFormModal) }} class="btn-close" ></button>
                        </div>

                        <div class="modal-body">
                            <form onSubmit={handleSubmit}>

                                <div className='d-flex justify-content-between my-1'>
                                    Title:
                                    <input type={'text'} name='title' onChange={handleChange} value={editForm.title} />
                                </div>
                                {/* <br /> */}
                                <div className='d-flex justify-content-between my-1'>
                                    Date:
                                    {/* <input type={'datetime-local'} name='date' onChange={handleChange} value={editForm.date} style={{ width: '66.5%' }} /> */}
                                    <input type={'datetime-local'} name='date' onChange={handleChange} value={editForm.date.slice(0, -1)} style={{ width: '66.5%' }} />

                                </div>
                                {/* <br /> */}
                                <div className='d-flex justify-content-between my-1'>
                                    Total Posts:
                                    <input type={'number'} name='total_post' onChange={handleChange} value={editForm.total_post} />
                                </div>
                                {/* <br /> */}
                                <div className='d-flex justify-content-between my-1'>
                                    Age:
                                    <input type={'text'} name='age' onChange={handleChange} value={editForm.age} />
                                </div>
                                {/* <br /> */}
                                <div className='d-flex justify-content-between my-1'>
                                    Qualification:
                                    <input type={'text'} name='qualification' onChange={handleChange} value={editForm.qualification} />
                                </div>
                                {/* <br /> */}
                                <div className='d-flex justify-content-between my-1'>
                                    price:
                                    <input type={'number'} name='price' onChange={handleChange} value={editForm.price} />
                                </div>
                                {/* <br /> */}
                            </form>
                        </div>

                        <div class="modal-footer">
                            {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                            <button type="button" class="btn btn-secondary" onClick={() => { setEditFormModal(!editFormModal) }} >Close</button>
                            <button type="button" class="btn btn-primary" onClick={handleSubmit}>Update Form</button>
                        </div>
                    </div>


                </div>
            }
            {/* ----------------------------------------------------------------------------- */}
        </>
    )
}
export default TableRow