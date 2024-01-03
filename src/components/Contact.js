// ContactPage.js
import React from 'react';
import './Contact.css';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


const Contact = () => {
  const phoneNumber = '+1234567890';
  const emailAddress = 'your-email@example.com';
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
        <p>Address: <a href={`https://www.google.com/maps/place/${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer">{address}</a></p>
        </div>
        <div className='byebye'>
        </div>
        </div>
    </div>
  );
};

export default Contact;
