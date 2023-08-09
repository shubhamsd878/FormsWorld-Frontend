import React, { useState } from 'react'
import axios from 'axios'

const ServiceItem = (props) => {
    const BACKEND = process.env.REACT_APP_BACKEND
    const token = localStorage.getItem('token')

    //State for payment success or failure
    const [paymentSuccess, setPaymentSuccess] = useState()

    //for paymentid when successful
    // const [paymentId, setPaymentId] = useState()

    // constants for razorpay payment gateway
    const payment_name = "Shubham Dahiya"
    const payment_email = "shubham.sd878@gmail.com"
    const payment_phone = "9896813679"
    const payment_description = "Tutorial of RazorPay"
    const payment_userImage = "https://lh3.googleusercontent.com/ogw/AAEL6si15ugsimDU5DRKOx5fIuN-OBB5fe1y7DNKqm7PNA"

    // for backdrop unique id
    const staticBackdrop = 'backdrop_' + props._id              // useId() was not importing, hence used my algorithm


    // ---------------- applying for the form --------------------
    const apply = async (paymentId) => {
        console.log('applying for formId: ' + props._id)

        let uid = localStorage.getItem('uid')
        if (!uid) return alert('Sorry! First Sign in to perform the action')

        let response = await fetch(`${BACKEND}/order`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                form_id: props._id,
                uid: localStorage.getItem('uid'),
                payment_done: true,
                payment_id: paymentId
            })
        })

        response = await response.json()

        console.log('apply response: ' + JSON.stringify(response))

    }


    const checkoutHandler = async (amount) => {

        if (!token) {
            alert("Please Signup to Continue.")
            return
        }

        const { data: { key } } = await axios.get(`${BACKEND}/payment/getkey`)

        const { data: { order } } = await axios.post(`${BACKEND}/payment/checkout`, {
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
            handler: async function (response) {
                setPaymentSuccess(true)
                const { data } = await axios.post(`${BACKEND}/payment/paymentverification`, {    //saving payment details to payment db
                    amount,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_signature: response.razorpay_signature
                });
                // setPaymentId(data.data._id)
                console.log(data);
                console.log('payment_id: ' + data.data._id);

                apply( data.data._id ) // calling function to save to orders db  &  data.data._id is nothing but _id from payments db

                alert('Success! payment is successful' +
                    '\nrazorpay_payment_id: ' + response.razorpay_payment_id +
                    '\nrazorpay_order_id: ' + response.razorpay_order_id +
                    '\nrazorpay_signature: ' + response.razorpay_signatur);

                console.log('--- payment Successful ---')
                console.log('razorpay_payment_id: ' + response.razorpay_payment_id);
                console.log('razorpay_order_id: ' + response.razorpay_order_id);
                console.log('razorpay_signature: ' + response.razorpay_signature)
            },
            // callback_url: `${BACKEND}/payment/paymentverification`,
            prefill: {
                name: payment_name,
                email: payment_email,
                contact: payment_phone
            },
            notes: {
                "address": "Forms World Corporate Office"
            },
            theme: {
                "color": "#292929"
            }
        };

        const razor = new window.Razorpay(options);
        // contains code for payment failure
        razor.on('payment.failed', function (response) {
            setPaymentSuccess(false)
            alert('Failure! Payment Failed' +
                '\n code: ' + response.error.code +
                '\n description: ' + response.error.description +
                '\n source: ' + response.error.source +
                '\n step: ' + response.error.step +
                '\n reason: ' + response.error.reason +
                '\n order_id: ' + response.error.metadata.order_id +
                '\n payment_id: ' + response.error.metadata.payment_id)

            console.log('--- payment Failed ---')
            console.log('code: ' + response.error.code);
            console.log('description: ' + response.error.description);
            console.log('source: ' + response.error.source);
            console.log('step: ' + response.error.step);
            console.log('reason: ' + response.error.reason);
            console.log('order_id: ' + response.error.metadata.order_id);
            console.log('payment_id: ' + response.error.metadata.payment_id);
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
            <div className="modal fade custom-display text-dark target-modal-vipul" id={staticBackdrop} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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