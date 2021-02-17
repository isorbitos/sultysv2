import React from 'react'
import './style.css';

const ContactMap = () => (

    <div>
        <div id="map-container-google-11" className="z-depth-1-half map-container-6" style={{ height: "400px" }}>
            <iframe src="https://maps.google.com/maps?q=new%20delphi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe>
        </div>

        <br />

        <div className="row text-center">
            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><i className="fas fa-map-marker-alt"></i></a>
                <p>San Francisco, CA 94126</p>
                <p>United States</p>
            </div>

            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><i className="fas fa-phone"></i></a>
                <p>+ 01 234 567 89</p>
                <p>Mon - Fri, 8:00-22:00</p>
            </div>

            <div className="col-md-4">
                <a className="btn-floating blue accent-1"><i className="fas fa-envelope"></i></a>
                <p>info@gmail.com</p>
                <p>sale@gmail.com</p>
            </div>
        </div>
    </div>

);

export default ContactMap;