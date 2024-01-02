import React from 'react'
import './Home.css'
import { useSpring, animated, config } from 'react-spring';
import { TypeAnimation } from 'react-type-animation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faWattpad, faTwitter } from '@fortawesome/free-brands-svg-icons';


const Home = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { y: -25 },
        to: { y: 25 },
        config: config.molasses,
      });

  return (
    <div className='home'>
      <div className='home-header'>Jahnvi Shah</div>
      <div className='home-content'>
        <div className='home-message'>
            <div className='introduction'>Jai Jinendra! <br/>
            Hello "Dhi" Amantes </div>
            <TypeAnimation className='about-me'
            sequence={[
            'Witness the site of, fictional reality and colourful visuals',
            1000,
            'Where words come to life and design breathes the inspiration',
            1000
            ]}
            speed={40}
            repeat={Infinity}
            />
            <div className="social-media-strip">
                <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                <a href="#" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
        </div>
        <animated.div  className='home-image'/>
      </div>
    </div>
  )
}

export default Home
