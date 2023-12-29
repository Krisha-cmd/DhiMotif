import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import './Hobbies.css'
import { useSpring, animated, config } from 'react-spring';

const Hobbies = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { y: 25 },
        to: { y: -25 },
        config: config.molasses,
      });
    const styles1 = useSpring({
        loop: { reverse: true },
        from: { y: -15 },
        to: { y: 30 },
        config: config.molasses,
      });
      const styles2 = useSpring({
        loop: { reverse: true },
        from: { y: 30 },
        to: { y: -20 },
        config: config.molasses,
      });
      const styles3 = useSpring({
        loop: { reverse: true },
        from: { y: -20 },
        to: { y: 35 },
        config: config.molasses,
      });

  return (
    <div className='hobbies'>
        <div className='hobbies-header'>Hobbies</div>
        <div className='hobbies-content'>
            <animated.div style={{ ...styles }} className='hobbies-card' id='writing'/>
            <animated.div style={{ ...styles1 }} className='hobbies-card' id='logo-design'/>
            <animated.div style={{ ...styles2 }} className='hobbies-card' id='interior-design'/>
            <animated.div style={{ ...styles3 }} className='hobbies-card' id='dancing'/>
        </div>
    </div>
  )
}

export default Hobbies
