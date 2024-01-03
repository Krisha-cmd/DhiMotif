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
    { image: img2, image1:dance, title: 'Hey! Dearest Stranger', description: 'Another book about...' },
    { image: chess, image1:img1, title: 'The Perfect Melange', description: 'A book about...' },
    { image: img3, image1:img3, title: 'Dreamcatchers', description: 'Yet another book about...' },
    { image: spectrum, image1:img4, title: 'You, Me and Love', description: 'Yet another book about...' }
  
  ];

const Achievements = () => {
    const [selectedAchievement, setSelectedAchievement] = useState(achievements[0]);
      
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
