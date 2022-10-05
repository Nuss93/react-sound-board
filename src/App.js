import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
  const [octave, setOctave] = useState(4)
  useEffect(() => {
    window.addEventListener("keydown", playNote);
    // window.currentOctave = octave;
    return () => {
      window.removeEventListener("keydown", playNote);
    };
  }, [octave])
  
  const playNote = (event) => {
    let OCTAVE = octave

    if (event.keyCode === 37) {
      setOctave(OCTAVE - 1)
    }
    if (event.keyCode === 39) {
      setOctave(OCTAVE + 1)
    }

    if (event.keyCode === 65) {
        playC(OCTAVE);
    }
    if (event.keyCode === 87) {
        playDb(OCTAVE);
    }
    if (event.keyCode === 83) {
        playD(OCTAVE);
    }
    if (event.keyCode === 69) {
        playEb(OCTAVE);
    }
    if (event.keyCode === 68) {
        playE(OCTAVE);
    }
    if (event.keyCode === 70) {
        playF(OCTAVE);
    }
    if (event.keyCode === 84) {
        playGb(OCTAVE);
    }
    if (event.keyCode === 71) {
        playG(OCTAVE);
    }
    if (event.keyCode === 89) {
        playAb(OCTAVE);
    }
    if (event.keyCode === 72) {
        playA(OCTAVE);
    }
    if (event.keyCode === 85) {
        playBb(OCTAVE);
    }
    if (event.keyCode === 74) {
        playB(OCTAVE);
    }
    if (event.keyCode === 75) {
        playC(OCTAVE + 1);
    }
    if (event.keyCode === 76) {
        playD(OCTAVE + 1);
    }
    if (event.keyCode === 79) {
        playDb(OCTAVE + 1);
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToneJS Project
        </p>
        <div className="pianoPage">
          <div className='d-flex align-items-center justify-content-center'>
            <button className='button' onClick={() => {setOctave(octave - 1)}}>{"<"}</button>
            <div className='ms-4 me-4'>
              <h1 className="mb-0">Piano</h1>
              <h6 className='mb-1'>{octave}</h6>
            </div>
            <button className='button' onClick={() => {setOctave(octave + 1)}}>{">"}</button>
          </div>
          <button className='mb-2 button' onClick={() => {setOctave(4)}}>Reset</button>

          <div className="piano">
            <div className="white-key" onClick={() => {playC(octave)}}><span>A</span></div>
            <div className="black-key" onClick={() => {playDb(octave)}}><span>W</span></div>
            <div className="white-key" onClick={() => {playD(octave)}}><span>S</span></div>
            <div className="black-key" onClick={() => {playEb(octave)}}><span>E</span></div>
            <div className="white-key" onClick={() => {playE(octave)}}><span>D</span></div>
            <div className="white-key" onClick={() => {playF(octave)}}><span>F</span></div>
            <div className="black-key" onClick={() => {playGb(octave)}}><span>T</span></div>
            <div className="white-key" onClick={() => {playG(octave)}}><span>G</span></div>
            <div className="black-key" onClick={() => {playAb(octave)}}><span>Y</span></div>
            <div className="white-key" onClick={() => {playA(octave)}}><span>H</span></div>
            <div className="black-key" onClick={() => {playBb(octave)}}><span>U</span></div>
            <div className="white-key" onClick={() => {playB(octave)}}><span>J</span></div>
            <div className="white-key" onClick={() => {playC(octave + 1)}}><span>K</span></div>
            <div className="black-key" onClick={() => {playDb(octave + 1)}}><span>O</span></div>
            <div className="white-key" onClick={() => {playD(octave + 1)}}><span>L</span></div>
          </div>
        </div>
        <small className='pt-2'>By Nasreen @REKA</small>
      </header>
    </div>
  );
}

export default App;
