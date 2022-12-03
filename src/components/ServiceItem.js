import React from 'react'

const ServiceItem = (props) => {

    // ---------------- applying for the form --------------------
    const apply = async () => {
        let uid = localStorage.getItem('uid')
        if(!uid) return alert('Sorry! First Sign in to perform the action')
        
        let response = await fetch('http://localhost:3001/order', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                form_id: props._id,
                uid: localStorage.getItem('uid'),
                payment: true
            })
        })

        response = await response.json()

        console.log('apply response: ' + JSON.stringify(response))
        
    }


    return (
        <>
            <div className="grid-item">
                <div className="card">
                    <div className="container">
                        <h4><b>{props.title}</b></h4>
                        <h6 className='lastDate'>last Date: {props.lastDate}</h6>
                        <p>Total Posts: {props.totalPosts}</p>
                        <p>Age : {props.age} Years.</p>
                           
                        <p></p>
                        <button type="button" className="btn btn-service-know-more" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>

            {/* ------------------- Bootstrap Modal -------------------- */}
            {/* <!-- Button trigger modal --> */}
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button> */}

            {/* <!-- Modal --> */}
            <div className="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable custom-display" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"><b>{props.title}</b></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            {/* <b> */}
                            ...
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. t consectetur, adipisicing elit. Sit, molestiae?
                            {/* </b> */}
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            <button type="button" class="btn btn-primary" onClick={apply}>Pay Rs.{props.price}</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceItem