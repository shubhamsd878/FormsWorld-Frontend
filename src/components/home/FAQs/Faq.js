import React from 'react'

const Faq = () => {
    return (
        <div class="accordion" id="accordionExample">
            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" >
                        Question #1: What kinds of forms do you offer assistance with?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    We can provide form filling services for a wide range of forms, including but not limited to: tax forms, job applications, insurance paperwork, visa applications, and legal documents.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Question #2: How much do your services cost?
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark" style={{color:'#adb5bd'}}>
                    Our pricing varies depending on the type and complexity of the forms you need assistance with. Please fill out our contact form or schedule a consultation to receive a customized quote.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Question #3: How long does the form filling process take?
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    The time required to complete forms can vary depending on the complexity of the form and the information required. However, we strive to complete all forms in a timely and efficient manner, and will communicate with you regularly throughout the process to ensure that everything is on track.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Question #4: Can I trust you with my personal information?
                    </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    Absolutely. We take privacy and confidentiality very seriously and will never share your information with third parties without your consent. All data is stored securely and in compliance with relevant laws and regulations.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading5">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse5" aria-expanded="false" aria-controls="collapse5">
                        Question #5: What if there are errors or issues with the completed forms?
                    </button>
                </h2>
                <div id="collapse5" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    We take great care to ensure that all forms are filled out accurately and correctly. However, if there are any errors or issues with the completed forms, we will work with you to resolve them as quickly as possible.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading6">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                        Question #6: Do you offer rush services for urgent forms?
                    </button>
                </h2>
                <div id="collapse6" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    Yes, we understand that some forms may have tight deadlines or urgent requirements. Please let us know as soon as possible if you need rush services, and we will do our best to accommodate your needs.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading7">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse7" aria-expanded="false" aria-controls="collapse7">
                        Question #7: How do I get started with your services?
                    </button>
                </h2>
                <div id="collapse7" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    Simply fill out our contact form or schedule a consultation, and we will be in touch shortly to discuss your needs and provide more information about our services.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading8">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse8" aria-expanded="false" aria-controls="collapse8">
                        Question #8: What if I have additional questions or concerns during the form filling process?
                    </button>
                </h2>
                <div id="collapse8" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    We understand that navigating complex forms can be stressful and overwhelming, which is why we are committed to providing excellent customer support throughout the process. You can reach out to us at any time with questions or concerns, and we will work with you to address them promptly and professionally.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading9">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse9" aria-expanded="false" aria-controls="collapse9">
                        Question #9: What if I need to make changes or updates to the completed forms?
                    </button>
                </h2>
                <div id="collapse9" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    If you need to make changes or updates to the completed forms, simply reach out to us and we will work with you to make the necessary revisions. We strive to provide excellent customer service and will do everything we can to ensure that you are completely satisfied with our services.
                    </div>
                </div>
            </div>

            <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="heading10">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapse10" aria-expanded="false" aria-controls="collapse10">
                        Question #10: Are there any forms that you cannot provide assistance with?
                    </button>
                </h2>
                <div id="collapse10" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                    While we can provide assistance with a wide range of forms, there may be some forms that we are unable to assist with due to legal or regulatory restrictions. If we are unable to assist with a particular form, we will let you know upfront and provide recommendations for alternative solutions.
                    </div>
                </div>
            </div>


            {/* <div class="accordion-item bg-secondary">
                <h2 class="accordion-header" id="headingSeven">
                    <button class="accordion-button collapsed bg-dark text-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Question #6: Do you provide Services offline also.
                    </button>
                </h2>
                <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body bg-dark " style={{color:'#adb5bd'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.
                    </div>
                </div>
            </div> */}

        </div>

    )
}

export default Faq