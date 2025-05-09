import React from 'react'
import './Hobbies.css'
import icon1 from '../images/ic1.png'
import icon2 from '../images/ic2.png'
import icon3 from '../images/ic3.png'
import icon4 from '../images/ic4.png'
import icon5 from '../images/ic5.png'
import icon7 from '../images/ic7.png'
import icon8 from '../images/ic8.png'
import icon9 from '../images/ic9.png'

const Hobbies = () => {

  const icons=[icon1, icon2,icon3,icon4,icon5,icon7,icon8,icon9]

  return (
    <div className='hobbies'>
        <div className='hobbies-header'>About Me</div>
        <div className='hobbies-content'>
        <div className='about-me-card'>
          <div className='about-me-info'>
          <h1>Who Am I?</h1>
          <p>Blessed in the moonlight I first opened my eyes on 15th April. As the years passed I was encouraged to thrown many skills thanks to that I now know my hobbies, I became a bharatnatyam dancer, a karate kid and gained state level recognition in chess competitions at a very early age while I also represented our nation in European Countries in the Cosmopolitan Festival. I also graced my writings with calligraphy.</p>
<br/>
<p>Maturing into another phase of life, BBA was just the degree to earn while I raised my knowledge through enrichment courses in Psychology and UI/UX designing from well-known colleges and companies. Fantasy narrations or daydreaming helped me become an author and designer. I feel grateful as the nation recognized it and awarded my works. Along the way, I found joy in playing drums, and started beading my words with/ in the melodies of my beats. I am thrilled to say that's not all—I became spiritually enlightened and am now a Reiki healer and a tarot reader.</p>

        </div>
        <div className='about-me-icons'>
        {icons.map((icon, index) => (
          <img
            src={icon}
            key={index}
            className="about-me-icon"
          />
        ))}
        </div>
        </div>

        </div>
    </div>
  )
}

export default Hobbies
