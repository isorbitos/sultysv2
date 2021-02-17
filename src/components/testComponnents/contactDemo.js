import React from 'react'
import ContactMap from './contactMap';
import ContactMsg from './contactMsg';
import './style.css';


const ContactDemo = () => (
  <section className="section pb-5">
    <h2 className="section-heading h1 pt-4">Contact us</h2>
    <p className="section-description pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
    amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a
    pariatur accusamus veniam.</p>
    <div className="row">
      <div className="col-lg-5 mb-4">
        <ContactMsg />
      </div>
      <div className="col-lg-7">
      <ContactMap />
      </div>
    </div>
  </section>

);

export default ContactDemo;