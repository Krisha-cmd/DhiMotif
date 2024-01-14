import React, {useState} from 'react'
import './Achievements.css'
import img1 from '../images/ach1.jpg'
import img2 from '../images/ach2.jpg'
import img3 from '../images/ach3.jpg'
import img4 from '../images/ach4.jpg'
import img5 from '../images/ach5.png'
import img5_1 from '../images/ach5-1.jpg'
import img6 from '../images/ach6.png'
import img7 from '../images/ach7.png'
import img7_1 from '../images/ach7-1.png'
import img8 from '../images/ach8.png'
import img8_1 from '../images/ach8-1.png'
import img9 from '../images/ach9.png'
import img9_1 from '../images/ach9-1.png'
import img10 from '../images/ach10.png'
import img11 from '../images/ach11.png'
import img11_1 from '../images/ach11-1.png'
import img12 from '../images/ach12.png'
import img13 from '../images/ach13.png'
import img13_1 from '../images/ach13-1.png'
import img14 from '../images/ach14.jpg'
import img15 from '../images/ach15.png'
import img16 from '../images/ach16.png'
import img17 from '../images/ach17.jpg'
import img1_1 from '../images/chess.jpg'
import img2_1 from '../images/dance.jpg'
import img4_1 from '../images/spectrum.jpeg'


const achievements = [
  { image: img14, image1:img14, title: 'First Book Publication in 2022',  },
  { image: img11, image1:img11_1, title: 'Sahitya Mahotsav 2022 ',  },
  { image: img12, image1:img12, title: 'World Book Day Award 2022',  },
  { image: img13, image1:img13_1, title: 'Litfest 2022 Nominations',  },
  { image: img4_1, image1:img4, title: 'Spectrum Budding Writer Award',  },
  { image: img8_1, image1:img8, title: 'Best Author Award', },
  { image: img9_1, image1:img9, title: 'Tagor Commemorative Award', },
  { image: img10, image1:img10, title: 'Litfest Author of the Year 2023',  },
  { image: img16, image1:img16, title: 'Content Writing Internship',  },
  { image: img1_1, image1:img1, title: 'Chess Competition Winner!',  },
  { image: img2, image1:img2_1, title: 'International Folk Dancing',  },
    { image: img3, image1:img3, title: 'National Patriotic Competition',  },
    { image: img5_1, image1:img5, title: '2nd In Karate Championship',  },
    { image: img6, image1:img6, title: 'Immortal Letter Award',  },
    { image: img7_1, image1:img7, title: 'Degree In Reiki Healing',  },
    { image: img15, image1:img15, title: 'Bharatnatyam Certificate',  },
    { image: img17, image1:img17, title: 'Your QuoteApp Certificate',  }
  

  ];


  const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(achievements[0]);
  
    const handleAchievementClick = (achievement) => {
      setSelectedAchievement(achievement);
    };
  
    return (
      <div className="achievements">
        <div className="achievements-header">Achievements</div>
        <div className="color-gallery-container">
          <div className="grid-container-b">
            {achievements.map((achievement, index) => (
              <div
                className={`grid-items ${selectedAchievement === achievement ? 'selected' : ''}`}
                key={index}
              >
                <img
                className='grid-items-img'
                  src={achievement.image}
                  alt={achievement.title}
                  onClick={() => handleAchievementClick(achievement)}
                />
                <div className="overlaya" onClick={() => handleAchievementClick(achievement)}>
                  {achievement.title}<br/> <p className='click'>Click for More Info</p>
                </div>
              </div>
            ))}
          </div>
          <div className="selected-achievement-info">
            {selectedAchievement && (
              <div className="achievement-info">
                <img
                  className="selected-achievement"
                  src={selectedAchievement.image1}
                  alt={selectedAchievement.title}
                />
                <div className="information">
                  <h2>{selectedAchievement.title}</h2>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default Achievements;