import React, { useEffect, useState } from 'react'
import './ActiveForms.scss'
import TableRow from './ActiveForms/TableRow'
import './table.css'

const ActiveForms = () => {
  const BACKEND = process.env.REACT_APP_BACKEND

  // modal to show add form
  const [addFormModal, setAddFormModal] = useState(false)

  // ------------------ add form -------------------
  const [addForm, setAddForm] = useState({})

  const handleChange = async (e) => {
    setAddForm(prevValues => ({ ...prevValues, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let response = await fetch(`${BACKEND}/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(addForm)
    })
    response = await response.json()

    alert(response.message)
  }


  // --------------- fetching all forms --------------------
  const [fetchForms, setFetchForms] = useState([])
  useEffect(() => {
    async function fetc() {
      let response = await fetch(`${BACKEND}/forms`)

      response = await response.json()

      setFetchForms(response.results)

    }

    fetc()

  }, [])



  return (
    <div className='active-forms'>
      <div className="text display-6" style={{ fontWeight: 'bolder' }}>Active Forms</div>

      <br></br>


      {/* *********************** Modal for crating new form *********************** */}

      <button className='btn btn-secondary mx-3 mt-3' onClick={() => { setAddFormModal(!addFormModal) }}> Add Form </button>
      {addFormModal &&

        <div class="modal-dialog" style={{ position: 'fixed', width: '70vh', left: '50%', transform: 'translateX(-50%)' }}>
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Add Form</h5>
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              <button type="button" onClick={() => { setAddFormModal(!addFormModal) }} class="btn-close" ></button>
            </div>

            <div class="modal-body">
              <form onSubmit={handleSubmit}>

                <div className='d-flex justify-content-between my-1'>
                  Title:
                  <input type={'text'} name='title' onChange={handleChange} />
                </div>
                {/* <br /> */}
                <div className='d-flex justify-content-between my-1'>
                  Date:
                  <input type={'datetime-local'} name='date' onChange={handleChange} style={{ width: '66.5%' }} />
                </div>
                {/* <br /> */}
                <div className='d-flex justify-content-between my-1'>
                  Total Posts:
                  <input type={'number'} name='total_post' onChange={handleChange} />
                </div>
                {/* <br /> */}
                <div className='d-flex justify-content-between my-1'>
                  Age:
                  <input type={'text'} name='age' onChange={handleChange} />
                </div>
                {/* <br /> */}
                <div className='d-flex justify-content-between my-1'>
                  Qualification:
                  <input type={'text'} name='qualification' onChange={handleChange} />
                </div>
                {/* <br /> */}
                <div className='d-flex justify-content-between my-1'>
                  price:
                  <input type={'number'} name='price' onChange={handleChange} />
                </div>
                {/* <br /> */}
              </form>
            </div>

            <div class="modal-footer">
              {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" class="btn btn-secondary" onClick={() => { setAddFormModal(!addFormModal) }} >Close</button>
              <button type="button" class="btn btn-primary" onClick={handleSubmit}>Publish Form</button>
            </div>
          </div>


        </div>
      }

      {/* ***************************************************************************** */}
      {/* ---------------- table to show existing forms --------------------- */}
      <table className='table table-hover .table-bordered'>
        <thead>

          <tr className=''>
            <th> Title </th>
            <th> Last Date </th>
            <th> Total Posts </th>
            <th> Age </th>
            <th> Qualification </th>
            <th> Price </th>
            <th> Edit </th>
            {/* <th style={{marginLeft:'1em'}}> End </th> */}
          </tr>
        </thead>
        <tbody className='table-group-divider'>
          {!fetchForms && <h6>No Data in Database</h6>}

          {fetchForms && fetchForms.map(element =>
            <TableRow key={element._id} _id={element._id} title={element.title} last_date={element.last_date} total_post={element.total_post} age={element.age} qualification={element.qualification} price={element.price} />
          )}

        </tbody>
      </table>

    </div>
  )
}

export default ActiveForms