import React from 'react'
import './style.css';

const ContactMap = () => (

    <div>
        <div id="map-container-google-11" className="z-depth-1-half map-container-6" style={{ height: "400px" }}>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6467.1590078729205!2d24.693904821639087!3d55.034700016901844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e776dcc428256b%3A0xd0976ca93993454e!2zScWhZXJpxaFraWFpIDE5MjAz!5e0!3m2!1slt!2slt!4v1613733845458!5m2!1slt!2slt"
          width="600" height="450" frameborder="0" style={{ border: "0" }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

            {/* <iframe src="https://maps.google.com/maps?q=new%20vilnius&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder="0" style={{ border: "0" }} allowFullScreen></iframe> */}
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