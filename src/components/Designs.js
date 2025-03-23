import React, { useState } from 'react';
import { Element } from 'react-scroll';
import Slider from 'react-slick';
import Modal from 'react-modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Designs.css';
import img1 from '../images/invite1.jpg';
import img2 from '../images/invite2.jpg';
import img3 from '../images/invite3.jpg';
import img4 from '../images/invite4.jpg';
import logo1 from '../images/logo1.jpg';
import logo2 from '../images/logo2.jpg';
import logo3 from '../images/logo4.jpg';
import logo4 from '../images/logo5.jpg';
import logo5 from '../images/logo6.jpg';
import logo6 from '../images/logo7.jpg';
import logo7 from '../images/logo8.jpg';
import inv5 from '../images/invite5.jpg';
import inv6 from '../images/invite6.jpg';
import inv7 from '../images/invite7.jpg';
import int2 from '../images/int2.jpg';
import int4 from '../images/int4.jpg';
import img5 from '../images/int5.jpg';
import img6 from '../images/int6.jpg';
import img7 from '../images/int7.jpg';
import img8 from '../images/int8.jpg';
import img9 from '../images/int9.jpg';
import img10 from '../images/int10.jpg';
import img12 from '../images/int12.jpg';
import img13 from '../images/int13.jpg';
import img15 from '../images/int15.jpg';
import img16 from '../images/int16.jpg';
import img17 from '../images/int17.jpg';
import img18 from '../images/int18.jpg';
import img19 from '../images/int19.jpg';
import img21 from '../images/int21.jpg';
import img22 from '../images/ach22.jpg';
import business1 from '../images/business1.jpg';
import business2 from '../images/business2.jpg';
import business3 from '../images/business3.jpg';
import business4 from '../images/business4.jpg';
import business5 from '../images/business5.jpg';
import business6 from '../images/business6.jpg';
import business7 from '../images/business7.jpg';
import business8 from '../images/business8.jpg';
import business9 from '../images/business9.jpg';
import business10 from '../images/business10.jpg';

const Designs = () => {
  const [zoomed, setZoomed] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  React.useEffect(() => {
    Modal.setAppElement('#design'); 
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const sliderSettings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const sliderSettings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  const designs = [img1, img2, img3, img4, inv5, inv6, inv7];
  const logos = [logo4, logo5, logo1, logo2, logo3, logo6, logo7];
  const images = [
    img22, img15, img6, int4, img5, img17, int2, img7, img16, img8, img9, img18, img10, img19, img12, img13, img21,
  ];
  const businesscards=[business1, business2, business3, business4, business5, business6, business7, business8, business9, business10];

  return (
    <div className="designs" id="design">
      <div className="designs-header">Designs</div>
      <Element name="logo-design">
        <div className="designs-content">
          <div className="design-slider-container">
            <Slider {...sliderSettings}>
              {designs.map((design, index) => (
                <div className="design-card" key={index}>
                  <img
                    key={index}
                    src={design}
                    onClick={() => handleImageClick(design)}
                    alt="invite"
                    className={`design-image`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="designs-intro">
            <span>Invitation Design</span>
            <br />
            <br />
            Crafting invitations that radiate warmth and welcoming affection involves a thoughtful fusion
            of design elements.
            <br />
            As a designer, consider the event's theme, opting for warm color palettes like blush and gold,
            and employing friendly typography.
            <br />
            Symbolic touches, such as embracing symbols and wholesome imagery, add depth. Personalization
            with custom illustrations or monograms enhances the emotional connection.
          </div>
        </div>
        <div className="logo-content">
          <div className="logos-intro">
            <span>Logo Design</span>
            <br />
            <br />
            Crafting intricate and detailed logos with a spiritual touch demands a strategic fusion of design principles
            <br />
            Employ inviting typography and select symbols with nuanced spiritual meanings, embracing complexity while maintaining clarity.
            <br />
            These intricate details ensure logos carry a profound sense of spirituality, adding depth and richness to the overall design.
          </div>
          <div className="design-slider-container">
            <Slider {...sliderSettings1}>
              {logos.map((logo, index) => (
                <div className="logos-card" key={index}>
                  <img
                    key={index}
                    onClick={() => handleImageClick(logo)}
                    src={logo}
                    alt="logos"
                    className={`logos-image`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          
        </div>
        <div className="business-card-content">
          <div className="design-slider-container">
            <Slider {...sliderSettings2}>
              {businesscards.map((business, index) => (
                <div className="business-card" key={index}>
                  <img
                    key={index}
                    onClick={() => handleImageClick(business)}
                    src={business}
                    alt="business-cards"
                    className={`business-image`}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="business-card-intro">
          <span>Business Card Design</span>
<br />
<br />
Creating an impactful business card requires a harmonious blend of aesthetics and functionality.
<br />
Incorporate clean typography, well-balanced layouts, and subtle yet meaningful design elements that reflect your brand identity.
<br />
A thoughtfully designed business card not only conveys professionalism but also leaves a lasting impression, making every interaction more memorable.
          </div>
          
        </div>
      </Element>
      
      <Element name="interior-design">
        <div className="interior">
          <div className="interior-intro">Interior Designs and Floor Plans</div>
          <div className="interior-container">
            {images.map((image, index) => (
              <img key={index} className="image" alt="sliderImage" src={image} />
            ))}
          </div>
        </div>
      </Element>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal"
        overlayClassName="overlay"
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Selected Image"
            className="modal-image"
          />
        )}
      </Modal>
        <button className="modal-close" onClick={closeModal}>Close Modal</button>
        
    </div>

  );
};

export default Designs;
