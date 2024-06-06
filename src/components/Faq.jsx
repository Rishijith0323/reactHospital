import React from 'react'
import Navbar from './Navbar'

const Faq = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="text-center"><h1>Frequently Asked Questions (FAQ) </h1></div>
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">1. What are your hospital's visiting hours?</div>
                                    Our visiting hours are from [Insert Time] to [Insert Time]. However, please note that visiting hours may vary depending on the ward or unit. For specific visiting hours, please contact our reception desk.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">2. How do I schedule an appointment?</div>
                                    You can schedule an appointment by calling our appointment desk at [Insert Phone Number] or by using our online appointment booking system on our website.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">3. What should I bring for my appointment?</div>
                                    Please bring your insurance card, any relevant medical records, a list of current medications, and a form of identification. If you have been referred by another healthcare provider, please bring the referral slip.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">4. Do you accept walk-in patients?</div>
                                    Yes, we do accept walk-in patients for certain services. However, it's always advisable to call ahead or check our website for availability, especially for urgent care needs.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">5. How can I pay my hospital bill</div>
                                    We accept various forms of payment, including cash, credit/debit cards, and insurance. You can pay your bill at our billing desk during operating hours or online through our secure payment portal on our website.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">6. What insurance plans do you accept?</div>
                                    We accept most major insurance plans. Please contact our billing department or check our website for a list of accepted insurance providers.
                                </div>
                            </li>
                            <li class="list-group-item d-flex justify-content-between align-items-start">
                                <div class="ms-2 me-auto">
                                    <div class="fw-bold">7. Can I request my medical records?</div>
                                    Yes, you can request your medical records by filling out a medical records request form available at our medical records department. There may be a nominal fee associated with this service.
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Faq
