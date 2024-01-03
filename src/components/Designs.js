import React, {useRef} from 'react'
import './Designs.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from '../images/invite1.jpg'
import img2 from '../images/invite2.jpg'
import img3 from '../images/invite3.jpg'
import img4 from '../images/invite4.jpg'
import logo1 from '../images/logo1.jpg'
import logo2 from '../images/logo2.jpg'
import logo3 from '../images/logo3.png'
import int1 from '../images/int1.jpg'
import int2 from '../images/int2.jpg'
import int3 from '../images/int3.jpg'
import int4 from '../images/int4.jpg'
import img5 from '../images/int5.jpg'
import img6 from '../images/int6.jpg'
import img7 from '../images/int7.jpg'
import img8 from '../images/int8.jpg'
import img9 from '../images/int9.jpg'
import img10 from '../images/int10.jpg'
import img11 from '../images/int11.jpg'
import img12 from '../images/int12.jpg'
import img13 from '../images/int13.jpg'
import img14 from '../images/int14.jpg'
import img15 from '../images/int15.jpg'
import img16 from '../images/int16.jpg'
import img17 from '../images/int17.jpg'
import img18 from '../images/int18.jpg'
import img19 from '../images/int19.jpg'
import img20 from '../images/int20.jpg'
import img21 from '../images/int21.jpg'



const Designs = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Display three images at a time
        slidesToScroll: 1,
        
      };

    const sliderSettings1 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2, // Display three images at a time
        slidesToScroll: 1,
      };
    
      const designs=[
        img1, img2, img3, img4
      ];
      const logos=[
        logo1, logo2, logo3, 
      ];

      const images = [
        int1,  int2, int3, int4, img5, img6, img7, img8, img9, img10, img11,  img12, img13, img14, img15, img16, img17, img18, img19, img20, img21
      ];

      const sliderRef = useRef(null);


  return (
    <div className='designs'>
        <div className='designs-header'>Designs</div>
        <div className='designs-content'>
            <div className="design-slider-container">
            <Slider {...sliderSettings}>
                {designs.map((design) => (
                    <div className="design-card">
                        <img src={design} alt={"invite"} className='design-image'/>
                        </div>
                ))}
            </Slider>
            </div>
            <div className='designs-intro'>
            <span>Invitation Design</span><br/><br/>
            Crafting invitations that radiate warmth and welcoming affection involves a thoughtful fusion of design elements. 
            <br/>As a designer, consider the event's theme, opting for warm color palettes like blush and gold, and employing friendly typography.
            <br/> Symbolic touches, such as embracing symbols and wholesome imagery, add depth. Personalization with custom illustrations or monograms enhances the emotional connection. 
            <br/>Experiment with textures like embossing for a tactile experience. 
            <br/>In essence, your invitations should transcend paper, becoming tokens that not only inform but envelop recipients in the anticipated warmth and joy of the occasion.
            </div>
        </div>
        <div className='logo-content'>
            <div className='logos-intro'>
            <span>Logo Design</span><br/><br/>
            Creating logos that resonate with warmth and approachability demands a strategic blend of design principles. 
            <br/>Begin by understanding the brand's identity and values, selecting a color palette that exudes friendliness. 
            <br/>Employ inviting typography and choose symbols that convey unity and connection, steering clear of overly complex elements. 
            <br/>Personalize the logo by integrating subtle, meaningful details that reflect the brand's essence. 
            <br/>Experiment with various design styles, ensuring versatility across platforms. 
            <br/>In the realm of logo design, simplicity often speaks volumes, and a well-crafted logo can serve as a visual ambassador, radiating the brand's warmth and welcoming spirit.
            </div>
            <div className="design-slider-container">
            <Slider {...sliderSettings1}>
                {logos.map((logo) => (
                    <div className="logos-card">
                        <img src={logo} alt={"logos"} className='logos-image'/>
                        </div>
                ))}
            </Slider>
            </div>
        </div>
        
        <div className='interior'>
            <div className='interior-intro'>
           Interior Designs</div>
            <div className="interior-container" ref={sliderRef}>
                {images.map((image) => {
                return (
                    <img
                    className="image"
                    alt="sliderImage"
                    src={image}
                    />
                );
                })}
            </div>
        </div>

    </div>
  )
}

export default Designs
