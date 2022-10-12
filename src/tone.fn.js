import * as Tone from "tone";

export function playC(octave) {
    const OCTAVE = "C" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    // console.log('now playing', OCTAVE)
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playDb(octave) {
    const OCTAVE = "Db" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playD(octave) {
    const OCTAVE = "D" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playEb(octave) {
    const OCTAVE = "Eb" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playE(octave) {
    const OCTAVE = "E" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playF(octave) {
    const OCTAVE = "F" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playGb(octave) {
    const OCTAVE = "Gb" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playG(octave) {
    const OCTAVE = "G" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playAb(octave) {
    const OCTAVE = "Ab" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playA(octave) {
    const OCTAVE = "A" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playBb(octave) {
    const OCTAVE = "Bb" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}
export function playB(octave) {
    const OCTAVE = "B" + octave.toString();
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(OCTAVE, "8n");
}

export function playNote(event) {
    console.log(event.keyCode)
    console.log(event)
    // if (event.keyCode === 65) {
    //     playC4();
    // }
    // if (event.keyCode === 87) {
    //     playDb4();
    // }
    // if (event.keyCode === 83) {
    //     playD4();
    // }
    // if (event.keyCode === 69) {
    //     playEb4();
    // }
    // if (event.keyCode === 68) {
    //     playE4();
    // }
    // if (event.keyCode === 70) {
    //     playF4();
    // }
    // if (event.keyCode === 84) {
    //     playGb4();
    // }
    // if (event.keyCode === 71) {
    //     playG4();
    // }
    // if (event.keyCode === 89) {
    //     playAb4();
    // }
    // if (event.keyCode === 72) {
    //     playA4();
    // }
    // if (event.keyCode === 85) {
    //     playBb4();
    // }
    // if (event.keyCode === 74) {
    //     playB4();
    // }
    // if (event.keyCode === 75) {
    //     playC5();
    // }
    // if (event.keyCode === 76) {
    //     playD5();
    // }
    // if (event.keyCode === 79) {
    //     playDb5();
    // }
}