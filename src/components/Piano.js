import * as Tone from "tone";

import logo from '../logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
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
} from "../tone.fn.js";

// window.addEventListener("keydown", playNote);

function Piano() {
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
    const player = new Tone.Player(require("../applause.mp3")).toDestination();
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
    <div className="pianoPage">
        <div className='d-flex align-items-center justify-content-center'>
        <button className='button' onClick={() => {setOctave(octave - 1)}}>{"<"}</button>
        <div className='ms-4 me-4'>
            <h1 className="mb-0">Piano</h1>
            <h6 className='mb-1'>{octave}</h6>
        </div>
        <button className='button' onClick={() => {setOctave(octave + 1)}}>{">"}</button>
        </div>
        <button className='mb-2 me-3 button' onClick={() => {setOctave(4)}}>Reset</button>
        <button className='mb-2 button' onClick={playApplause}>Applause</button>

        <div className="piano">
            <div className={!active.find(item => item  ===  'A') ? "white-key" : "white-key active"} onClick={() => {playNote(null, 'A')}}><span>A</span></div>
            <div className={!active.find(item => item  ===  'W') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'W')}}}><span>W</span></div>
            <div className={!active.find(item => item  ===  'S') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'S')}}}><span>S</span></div>
            <div className={!active.find(item => item  ===  'E') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'E')}}}><span>E</span></div>
            <div className={!active.find(item => item  ===  'D') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'D')}}}><span>D</span></div>
            <div className={!active.find(item => item  ===  'F') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'F')}}}><span>F</span></div>
            <div className={!active.find(item => item  ===  'T') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'T')}}}><span>T</span></div>
            <div className={!active.find(item => item  ===  'G') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'G')}}}><span>G</span></div>
            <div className={!active.find(item => item  ===  'Y') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'Y')}}}><span>Y</span></div>
            <div className={!active.find(item => item  ===  'H') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'H')}}}><span>H</span></div>
            <div className={!active.find(item => item  ===  'U') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'U')}}}><span>U</span></div>
            <div className={!active.find(item => item  ===  'J') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'J')}}}><span>J</span></div>
            <div className={!active.find(item => item  ===  'K') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'K')}}}><span>K</span></div>
            <div className={!active.find(item => item  ===  'O') ? "black-key" : "black-key active"} onClick={() => {{playNote(null, 'O')}}}><span>O</span></div>
            <div className={!active.find(item => item  ===  'L') ? "white-key" : "white-key active"} onClick={() => {{playNote(null, 'L')}}}><span>L</span></div>
        </div>
    </div>
  );
}

export default Piano;
