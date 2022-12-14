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
  const [octave, setOctave] = useState(4)
  const [active, setActive] = useState([])
  // const [active, setActive] = useState(null)
  useEffect(() => {
    window.addEventListener("keydown", playNote);
    window.addEventListener("keyup", bindActive)    // window.currentOctave = octave;
    return () => {
      window.removeEventListener("keydown", playNote);
      window.removeEventListener("keyup", bindActive);
    };
  }, [octave])
  const bindActive = (event,click) => {
    // console.log(!event, !click)
    let ACTIVE = active
    let index = click ? ACTIVE.findIndex(item => item === click) : ACTIVE.findIndex(item => item === event.key.toUpperCase())
    ACTIVE.splice(index, 1)
    setActive([...ACTIVE])
  }
  const playApplause = () => {
    const player = new Tone.Player(require("./applause.mp3")).toDestination();
    Tone.loaded().then(() => {
      player.start();
    });
  }
  const playNote = (event, click) => {
    let OCTAVE = octave
    let ACTIVE = active
    // console.log(click)
    

    if(event){
      if(event.key.toUpperCase() !== 'ARROWLEFT' || event.key.toUpperCase() !== 'ARROWRIGHT') {
        ACTIVE.push(event.key.toUpperCase())
        setActive([...ACTIVE])
        // console.log(ACTIVE)
      }

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
    } else {
      ACTIVE.push(click)
      setActive([...ACTIVE])
      setTimeout(() => {
        bindActive(null, click)
      }, 50);

      if (click === 'A') {
        playC(OCTAVE);
      }
      if (click === 'W') {
          playDb(OCTAVE);
      }
      if (click === 'S') {
          playD(OCTAVE);
      }
      if (click === 'E') {
          playEb(OCTAVE);
      }
      if (click === 'D') {
          playE(OCTAVE);
      }
      if (click === 'F') {
          playF(OCTAVE);
      }
      if (click === 'T') {
          playGb(OCTAVE);
      }
      if (click === 'G') {
          playG(OCTAVE);
      }
      if (click === 'Y') {
          playAb(OCTAVE);
      }
      if (click === 'H') {
          playA(OCTAVE);
      }
      if (click === 'U') {
          playBb(OCTAVE);
      }
      if (click === 'J') {
          playB(OCTAVE);
      }
      if (click === 'K') {
          playC(OCTAVE + 1);
      }
      if (click === 'O') {
          playD(OCTAVE + 1);
      }
      if (click === 'L') {
          playDb(OCTAVE + 1);
      }
    }
  }
  
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
