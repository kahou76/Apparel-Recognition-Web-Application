import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ParticlesBg from 'particles-bg'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';


function App() {
  return (
    <div className="App">
      <ParticlesBg type="fountain" bg={true} />

      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <Facerecognitaion /> */}
    </div>
  );  
}

export default App;
