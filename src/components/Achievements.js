import React, {useState} from 'react'
import './Achievements.css'
import img1 from '../images/ach1.jpg'
import img2 from '../images/ach2.jpg'
import img3 from '../images/ach3.jpg'
import img4 from '../images/ach4.jpg'
import chess from '../images/chess.jpg'
import dance from '../images/dance.jpg'
import spectrum from '../images/spectrum.jpeg'

const achievements = [
  { image: img2, image1:dance, title: 'International Folk Dancing', description: 'Guess what? I love dancing! I am a bharatnatyam dancer and had the opportunity to represent India in kavala Greece and TKB Poland!' },
  { image: chess, image1:img1, title: 'Chess Competition Winner!', description: 'Yes! Along with writing I am also a big chess enthusiast! I have also played and won in chess competitions!' },
    { image: img3, image1:img3, title: 'National Patriotic Competition', description: 'Ding Ding! Guess who was a runner up in a national level patriotic competition? Me! Why not use my writing skills for patriotism?' },
    { image: spectrum, image1:img4, title: 'Spectrum Budding Writer Award', description: 'I was given this award for my contributions as a writer in 2021. I am really grateful for the opportunity and the recognition provided with it!' }
  
  ];

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(achievements[3]);
      
    const handleAchievementClick = (achievement) => {
      setSelectedAchievement(achievement);
    };
  return (
    <div className='achievements'>
      <div className='achievements-header'>Achievements</div>
    <div className="color-gallery-container">
      <div className="grid-container-b">
        {achievements.map((achievement, index) => (
          <img
            src={achievement.image}
            key={index}
            className="grid-items"
            onClick={() => handleAchievementClick(achievement)}
            alt={achievement.title}
          />
        ))}
      </div>
      <div className="selected-color-info">
        {selectedAchievement && (
          <div className="info">
            <div className='selected-achievement'>
                <img
                className="selected-color-box"
                src={selectedAchievement.image1}
                alt={selectedAchievement.title}
                />
            </div>
            <div className='infomatics'>
                <span>
              <h2>{selectedAchievement.title}</h2>

                </span>
              <span>

              <p>{selectedAchievement.description}</p>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  )
}

export default Achievements
