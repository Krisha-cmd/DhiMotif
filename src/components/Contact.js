// ContactPage.js
import React from 'react';
import './Contact.css';
import logo from '../images/dhim.png'


const Contact = () => {
  const phoneNumber = '+91 9737105653  ';
  const emailAddress = '5Dhi0Motif7@gmail.com';
//check
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
        <p>My <a href="https://www.canva.com/design/DAF8G_T7D_E/TWsHL7DzUldf6NXuVGgf-g/view?utm_content=DAF8G_T7D_E&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb25a54272 " target="_blank" rel="noopener noreferrer">portfolio</a></p>
       </div>
        <img className='byebye'src={logo}/>
        </div>
    </div>
  );
};

export default Contact;
