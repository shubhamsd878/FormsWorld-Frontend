import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
    return (
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <h4>Contact Us</h4>
                        <ul class="list-unstyled">
                            <li>Phone: +91-930-625-5317</li>
                            <li>Email: formsworldcare@gmail.com</li>
                            <li>Address: 123 Sonipat, Sonipat - 131001, Haryana - Zip</li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Navigation</h4>
                        <ul class="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h4>Follow Us</h4>
                        <ul class="list-inline">
                            <li className='me-4'><a href="#"> <FaFacebook size={25}/> </a></li>
                            <li className='me-4'><a href="#"> <FaTwitter size={25}/> </a></li>
                            <li className='me-4'><a href="#"> <FaInstagram size={25}/> </a></li>
                            <li className='me-4'><a href="#"> <FaLinkedin size={25}/> </a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                    <div class="row">
                        <div class="col-md-6">
                            <p>&copy; 2023 Forms World Pvt. Ltd. All Rights Reserved.</p>
                        </div>
                        <div class="col-md-6">
                            <ul class="list-inline">
                                <li><a href="/privacy">Privacy Policy</a></li>
                                <li><a href="/terms">Terms of Use</a></li>
                                <li><a href="/sitemap">Site Map</a></li>
                                <li><a href="/faq">FAQ</a></li>
                                <li><a href="/testimonials">Testimonials</a></li>
                            </ul>
                        </div>
                    </div>
            </div>
        </footer>
    )
}

export default Footer