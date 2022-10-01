import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import {
  playC4,
  playDb4,
  playD4,
  playEb4,
  playE4,
  playF4,
  playGb4,
  playG4,
  playAb4,
  playA4,
  playBb4,
  playB4,
  playC5,
  playDb5,
  playD5,
  playNote,
} from "./tone.fn.js";

window.addEventListener("keydown", playNote);

function App() {
  const [octave, setOctave] = useState(4)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToneJS Project
        </p>
        <div className="pianoPage">
          <h1 className="mb-2">Piano</h1>
          <div className="piano">
            <div className="white-key" onClick={playC4}><span>A</span></div>
            <div className="black-key" onClick={playDb4}><span>W</span></div>
            <div className="white-key" onClick={playD4}><span>S</span></div>
            <div className="black-key" onClick={playEb4}><span>E</span></div>
            <div className="white-key" onClick={playE4}><span>D</span></div>
            <div className="white-key" onClick={playF4}><span>F</span></div>
            <div className="black-key" onClick={playGb4}><span>T</span></div>
            <div className="white-key" onClick={playG4}><span>G</span></div>
            <div className="black-key" onClick={playAb4}><span>Y</span></div>
            <div className="white-key" onClick={playA4}><span>H</span></div>
            <div className="black-key" onClick={playBb4}><span>U</span></div>
            <div className="white-key" onClick={playB4}><span>J</span></div>
            <div className="white-key" onClick={playC5}><span>K</span></div>
            <div className="black-key" onClick={playDb5}><span>O</span></div>
            <div className="white-key" onClick={playD5}><span>L</span></div>
          </div>
        </div>
        <small className='pt-2'>By Nasreen @REKA</small>
      </header>
    </div>
  );
}

export default App;
