import React from 'react'

const ContactMsg = () => (

    
        <div className="card">
            <div className="card-body">
                <div className="form-header blue accent-1">
                    <h3><i className="fas fa-envelope"></i> Write to us:</h3>
                </div>
                <p>We'll write rarely, but with only the best content.</p>
                <br />
                <div className="md-form">
                    <i className="fas fa-user prefix grey-text"></i>
                    <input type="text" id="form-name" className="form-control" />
                    <label htmlFor="form-name">Your name</label>
                </div>
                <div className="md-form">
                    <i className="fas fa-envelope prefix grey-text"></i>
                    <input type="text" id="form-email" className="form-control" />
                    <label htmlFor="form-email">Your email</label>
                </div>
                <div className="md-form">
                    <i className="fas fa-tag prefix grey-text"></i>
                    <input type="text" id="form-Subject" className="form-control" />
                    <label htmlFor="form-Subject">Subject</label>
                </div>
                <div className="md-form">
                    <i className="fas fa-pencil-alt prefix grey-text"></i>
                    <textarea id="form-text" className="form-control md-textarea" rows="3"></textarea>
                    <label htmlFor="form-text">Icon Prefix</label>
                </div>
                <div className="text-center mt-4">
                    <button className="btn btn-light-blue">Submit</button>
                </div>
            </div>
        </div>
  

)

export default ContactMsg;