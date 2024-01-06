import React, { useState } from 'react';
import './Publications.css';
import img1 from '../images/theperfectmelange.jpg'
import img2 from '../images/published works.jpg'
import img3 from '../images/dreamcatchers.webp'
import img4 from '../images/youmeandlove.jpg'
import img5 from '../images/consanos.jpg'
import img6 from '../images/loveyoutoinfinity.jpg'
import img7 from '../images/thespell.webp'
import img8 from '../images/Wizard.jpg'

const books = [
  { image: img4, title: 'You, Me and Love', relevance: 'My First Ever Anthalogy', description:'We all know the meaning of love but we rarely notice how empowering and beautiful that feeling is. This book is immensely filled with collection of thoughts coming straight from heart of the authors. The purpose of the book is to make you go through the heart- felt feelings and value the importance of love. The book presents vividly the shades of affection knitted with different perspective and experiences.' },
    { image: img1, title: 'The Perfect Melange', relevance: '', description: 'What is mélange?\n\n It\'s just a word for Mixture.\n\nThis book features a collection of writings of individuals belonging to diverse places in India. So, it is a blend of their understanding and outlook towards life.\n\nDifferent experiences and challenges shaped their perspective on various aspects of life. So dive deep into the emotions and thus the love through which each co-author has expressed it!' },
    { image: img2, title: 'Hey! Dearest Stranger', description: 'Some bonds lie beyond utterances. When a stranger squirms into being an integral part of life. While at times a loved one changes into an outsider. The desired gain and sometimes a startling loss. This is a toll that life gives rise to. Enabling us to discover and evolve through various shades of acquaintances, that is in store for us. It is through this anthology that many co-authors have tried to share such familiarities with the readers.' },
    { image: img3, title: 'Dreamcatchers', description: 'Do you doubt your potential? Yes, it\'s pretty common. Though we are good enough, we might feel worthless at times. That is when we need to boost our confidence. This book is such kind of confidence booster. Dream Catchers is an anthology that emphasize on the importance of self love, self esteem and self confidence. This anthology coveys the idea that insecurities can shatter us from inside but YOU as an individual is important.' },
    { image: img6, title: 'Love you to Infinity', description: 'Love You To Infinity is a book dedicated to Love. It portrays different kinds of love – selflove, romantic love, friends and family’s love. This book is a collection of beautiful write-ups of those writers who are passionate about writing. Each writer has a different way of expressing thoughts. Each writer is creative, talented and unique in their own way. Each writer shows their perspective on love.    ' },
        { image: img8, title: 'Verse Wizard', description: 'An anthalogy of great work done by many writers together. ' },
]

    const books1=[{ image: img7, title: 'The Spell in the Dusk', description: 'Hello readers, welcome in my world which I managed to somehow place in this small book in your hand or screen. This world consists of mysteries, horror, love, affection, sorrow, desire and also a world where non living things can speak. Its a mixture of my imagination and fiction. I was able to give a hint of few visions as images in this book which I had while writting in that particular topic. I hope you all enjoy this tour in my world.' },
    { image: img5, title: 'The Lorg for the Consano', description: 'A novel embracing the fantasies of a day dreamer. An amalgam of different species from different worlds spicing the chapters with family full of thriller, suspense, mystery, action and dreams' },
  
  ];

const Publications = () => {
    const [selectedBook, setSelectedBook] = useState(books1[0]);
      
    const handleBookClick = (book) => {
      setSelectedBook(book);
    };





  return (
    <div className='publications'>
        <div className='publications-header'>Publications</div>
    <div className="color-gallery-container">
      <div className="grid-container-a">
        <span>Anthalogies</span>
        {books.map((book, index) => (
          <img
            src={book.image}
            key={index}
            id={"grid-item"+index}
            className={`grid-item ${selectedBook === book ? 'selected' : ''}`}
            onClick={() => handleBookClick(book)}
            alt={book.title}
          />
        ))}
      </div>
      <div className="selected-color-info">
        {selectedBook && (
          <div className="info">
            <div className='selected-book'>
                <img
                className="selected-color-box"
                src={selectedBook.image}
                alt={selectedBook.title}
                />
            </div>
            <div className='infomatics'>
                <span>
              <h2>{selectedBook.title}</h2>

                </span>
              <span>

              <p>{selectedBook.description}</p>
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="grid-container-c">
      <span>Solo Works</span>
        {books1.map((book, index) => (
          <img
          src={book.image}
          key={index}
          id={"grid-item"+index}
          className={`grid-item ${selectedBook === book ? 'selected' : ''}`}
          onClick={() => handleBookClick(book)}
          alt={book.title}
          />
          ))}
      </div>
    <div className='click-me'>Click the Books for more Information!</div>
    </div>
    </div>
  );
};

export default Publications
