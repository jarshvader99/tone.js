// Tone.Synth is a basic synthesizer with a single oscillator
const synth = new Tone.Synth();
// Set the tone to sine
synth.oscillator.type = "sine";
// connect it to the master output (your speakers)
synth.toMaster();

const piano = document.getElementById("piano");

piano.addEventListener("mousedown", e => {
    // fires off a note continously until trigger is released
    synth.triggerAttack(e.target.dataset.note);
});

piano.addEventListener("mouseup", e => {
    // stops the trigger
    synth.triggerRelease();
});

// handles keyboard events
document.addEventListener("keydown", e => {
    // e object has the key property to tell which key was pressed
    switch (e.which) {
        case 81:
            return synth.triggerAttack("C4");
        case 50:
            return synth.triggerAttack("C#4");
        case 87:
            return synth.triggerAttack("D4");
        case 51:
            return synth.triggerAttack("D#4");
        case 69:
            return synth.triggerAttack("E4");
        case 82:
            return synth.triggerAttack("F4");
        case 53:
            return synth.triggerAttack("F#4");
        case 84:
            return synth.triggerAttack("G4");
        case 54:
            return synth.triggerAttack("G#4");
        case 89:
            return synth.triggerAttack("A4");
        case 55:
            return synth.triggerAttack("A#4");
        case 85:
            return synth.triggerAttack("B4");


        case 66:
            return synth.triggerAttack("C5");
        case 72:
            return synth.triggerAttack("C#5");
        case 78:
            return synth.triggerAttack("D5");
        case 74:
            return synth.triggerAttack("D#5");
        case 77:
            return synth.triggerAttack("E5");
        case 188:
            return synth.triggerAttack("F5");
        case 76:
            return synth.triggerAttack("F#5");
        case 190:
            return synth.triggerAttack("G5");
        case 186:
            return synth.triggerAttack("G#5");
        case 191:
            return synth.triggerAttack("A5");
        case 222:
            return synth.triggerAttack("A#5");
        case 16:
            return synth.triggerAttack("B5");
        default:
            return;
    }
});
// when the key is released, audio is released as well
document.addEventListener("keyup", e => {
    switch (e.which) {
        case 81:
        case 50:
        case 87:
        case 51:
        case 69:
        case 82:
        case 53:
        case 84:
        case 54:
        case 89:
        case 55:
        case 85:
        case 66:
        case 72:
        case 78:
        case 74:
        case 77:
        case 188:
        case 76:
        case 190:
        case 186:
        case 191:
        case 222:
        case 16:
            synth.triggerRelease();
    }
});