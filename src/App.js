import React from 'react';
import Background from './components/Background.js';
import Home from './components/Home.js'
import Navbar from './components/Navbar.js';
import Hobbies from './components/Hobbies.js';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Background/>
      <Home/>
      <Hobbies/>
    </div>
  );
};

export default App;
