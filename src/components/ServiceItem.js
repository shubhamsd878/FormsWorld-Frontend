import React, { useState } from 'react'
import axios from 'axios'

const ServiceItem = (props) => {
    //State for payment success or failure
    const [paymentSuccess, setPaymentSuccess] = useState()

    // constants for razorpay payment gateway
    const payment_name = "Shubham Dahiya"
    const payment_email = "shubham.sd878@gmail.com"
    const payment_phone = "9896813679"
    const payment_description = "Tutorial of RazorPay"
    const payment_userImage = "https://lh3.googleusercontent.com/ogw/AAEL6si15ugsimDU5DRKOx5fIuN-OBB5fe1y7DNKqm7PNA"

    // for backdrop unique id
    const staticBackdrop = 'backdrop_' + props._id              // useId() was not importing, hence used my algorithm


    // ---------------- applying for the form --------------------
    const apply = async () => {
        console.log('applying for formId: ' + props._id)

        let uid = localStorage.getItem('uid')
        if (!uid) return alert('Sorry! First Sign in to perform the action')

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


    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://localhost:3001/payment/getkey")

        const { data: { order } } = await axios.post("http://localhost:3001/payment/checkout", {
            amount
        })

        const options = {
            key,
            amount,
            currency: "INR",
            name: payment_name,
            description: payment_description,
            image: payment_userImage,
            order_id: order.id,

            // -- handler contains code for successful payment
            handler: function (response) {
                setPaymentSuccess(true)
                apply() // calling function to save to db

                alert('payment is successful ');
                alert('razorpay_payment_id: ' + response.razorpay_payment_id);
                alert('razorpay_order_id: ' + response.razorpay_order_id);
                alert('razorpay_signature: ' + response.razorpay_signature)
            },
            // callback_url: "http://localhost:3001/payment/paymentverification",
            prefill: {
                name: payment_name,
                email: payment_email,
                contact: payment_phone
            },
            notes: {
                "address": "Forms World Corporate Office"
            },
            theme: {
                // "color": "#121212"
                // "color": "#ffae00"
                // "color": "#ab7d1b"
                // "color": "#3d3d3d"
                "color": "#292929"
            }
        };

        const razor = new window.Razorpay(options);
        // contains code for payment failure
        razor.on('payment.failed', function (response) {
            setPaymentSuccess(false)
            alert('code: ' + response.error.code);
            alert('description: ' + response.error.description);
            alert('source: ' + response.error.source);
            alert('step: ' + response.error.step);
            alert('reason: ' + response.error.reason);
            alert('order_id: ' + response.error.metadata.order_id);
            alert('payment_id: ' + response.error.metadata.payment_id);
        });

        razor.open();
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
                        <button type="button" className="btn btn-service-know-more" data-bs-toggle="modal" data-bs-target={`#${staticBackdrop}`}>
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>


            {/* <!-- Modal --> */}
            {/* <div className="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable custom-display" id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">     */}
            <div className="modal fade custom-display" id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">    
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel"><b>{props.title}</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <b>TotalPosts:</b> {props.totalPosts}
                            <br></br>
                            <b>Age:</b> {props.age}
                            <br></br>
                            <b>Last Date to Apply:</b> {props.lastDate}

                        </div>

                        <div className="modal-footer my-2">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Close</button>
                            {/* <button type="button" className="btn btn-primary" onClick={apply}>Pay Rs.{props.price}</button> */}
                            {!paymentSuccess &&
                                <button type="button" className="btn btn-primary" onClick={() => checkoutHandler(props.price)} >Pay Rs.{props.price}</button>
                            }
                            {paymentSuccess &&
                                <button type="button" className="btn btn-primary" onClick={() => checkoutHandler(props.price)} disabled>Applied</button>

                            }
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ServiceItem