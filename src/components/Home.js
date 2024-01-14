import React from 'react'
import './Home.css'
import { useSpring, animated, config } from 'react-spring';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import logo from '../images/logo3.png'

const Home = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { y: -25 },
        to: { y: 25 },
        config: config.molasses,
      });

      
  const phoneNumber = '9313967608  ';
  const emailAddress = '5Dhi0Motif7@gmail.com';

      const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
      };
    
      const handleEmailClick = () => {
        window.location.href = `mailto:${emailAddress}`;
      };

  return (
    <div className='home'>
      {/* <div className='dhimotif'/> */}
      <div className='home-header'></div>
       <div className='home-content'>
        <div className='home-message'>
            <div className='introduction'><span>Dhi Motif</span><img src={logo} className='annoyed'/><br/>
            Hello! "Dhi" Amantes </div>
            <TypeAnimation className='about-me'
            sequence={[
            'Witness the site of, fictional reality and colourful visuals',
            500,
            'Where words come to life and design breathes the inspiration',
            500
            ]}
            speed={60}
            repeat={Infinity}
            />
            <div className="social-media-strip">
                <a href="https://www.instagram.com/lunavatjahnvi/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="https://www.yourquote.in/jahnvi-shah-cv8x8/quotes" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faQuoteLeft} /></a>
                <a  onClick={handlePhoneClick} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faPhone} /></a>
                <a  onClick={handleEmailClick} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </div>
        <animated.div  className='home-image'/>
      </div> 
    </div>
  )
}

export default Home
