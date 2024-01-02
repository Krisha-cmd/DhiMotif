import React from 'react';
import Background from './components/Background.js';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js';
import Hobbies from './components/Hobbies.js';
import Testimonials from './components/Testimonials.js';
import Publications from './components/Publications.js';
import Scrolltotop from './components/Scrolltotop.js';
import { Element } from 'react-scroll';
import Designs from './components/Designs.js';

const App = () => {
  return (
    <div>
      <Scrolltotop/>
      <Navbar/>
      <Background/>
      <Home/>
      <Hobbies/>
      <Testimonials/>
      <Element name="publications">
      <Publications/>
      </Element>
      <Element name="designs">
      <Designs/>
      </Element>
    </div>
  );
};

export default App;
