import React from 'react'
import ContactMap from './testComponnents/contactMap'
import ContactMsg from './testComponnents/contactMsg'

const ContactUs = () => (
    <section className="page-section" id="contact">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <form id="contactForm" name="sentMessage" noValidate="novalidate">
                <div className="row align-items-stretch mb-5">
                    <div className="col-md-5">
                        <ContactMsg />
                    </div>
                    <div className="col-md-7">
                        <ContactMap />
                    </div>
                </div>

            </form>
        </div>
    </section>
);

export default ContactUs;