// ContactPage.js
import React from 'react';
import './Contact.css';
import logo from '../images/logo3.png'
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const Contact = () => {
  const phoneNumber = '9313967608  ';
  const emailAddress = '5Dhi0Motif7@gmail.com';
  const address = '123 Main Street, Cityville, Country';

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${emailAddress}`;
  };

  return (
    <div className='contact'>
        <div className="contact-container">
        <div className='contact-details'>
        <h1>Contact Me</h1>
        <p>Phone: <span onClick={handlePhoneClick}>{phoneNumber}</span></p>
        <p>Email: <span onClick={handleEmailClick}>{emailAddress}</span></p>
       </div>
        <img className='byebye'src={logo}/>
        </div>
    </div>
  );
};

export default Contact;
