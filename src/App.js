import * as Tone from "tone";

import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Piano from './components/Piano'
import { useState, useEffect } from 'react';
import {
  playC,
  playDb,
  playD,
  playEb,
  playE,
  playF,
  playGb,
  playG,
  playAb,
  playA,
  playBb,
  playB,
  // playNote,
} from "./tone.fn.js";

// window.addEventListener("keydown", playNote);

function App() {
  
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToneJS Project
        </p>
        <Piano />
        <small className='pt-2'>By Nasreen @REKA | V 3</small>
    
    </div>
  );
}

export default App;
