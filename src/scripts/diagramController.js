import * as uiScalesHelper from './diagramHelper.js';
import * as scalesController from './scalesController.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';

export function generateFretboard(notesPerFret, frets, instrumentName) {
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  frets = uiScalesHelper.isScreenSmall(windowWidth) == true ? 12 : frets; //develop a handler

  uiScalesHelper.resetComponent(uiScalesHelper.diagramDiv);
  uiScalesHelper.adjustGridStyle(frets, notesPerFret);
  uiScalesHelper.generateFret(notesPerFret, frets);

  if (instrumentName.toLowerCase() == "guitar") {
    assignInitialNotes(uiScalesHelper.GUITAR_STANDARD_TUNNING_INITIAL_NOTES);
    assignSubSequentialNotes();
    return;
  }
  if (instrumentName.toLowerCase() == "bass") {
    assignInitialNotes(uiScalesHelper.BASS_STANDARD_TUNNING_INITIAL_NOTES);
    assignSubSequentialNotes();
    return;
  }
  if (instrumentName.toLowerCase() == "piano") {
    assignInitialNotes(uiScalesHelper.PIANO_INITIAL_NOTES);
    assignSubSequentialNotes();
    return;
  }
}

export function assignNotesFromTunningNotes(initialNotes) {
  //check if all notes are valid before assigning to the diagram
  //if are there flat notes (*b), convert it to sharp before assigning to the diagram
  if(!Array.isArray(initialNotes)){
    initialNotes = initialNotes.split(",").reverse();
  }
  assignInitialNotes(initialNotes);
  assignSubSequentialNotes();
  uiPlaygroundHelper.changeDiagramAccidentalNotes();
}

export function iterateThroughNotes() {
  let fretElement = document.getElementsByClassName("fret");

  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    
    Object.values(noteElement).forEach(note => {
      console.log(note);
    })
  });
}

export function assignStyleToIntervals(notes, sharpFlatValue, showMajor3rds, showMinor3rds, show5ths) {
  resetStyle();
  let fretElement = document.getElementsByClassName("fret");
  console.log(notes);

  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    let majorThirdFromRoot = scalesController.getMajor3rdFromScale(notes);
    let minorThirdFromRoot = scalesController.getMinor3rdFromScale(notes);
    let fifthFromRoot = scalesController.get5th(notes[0]);
    
    Object.values(noteElement).forEach(note => {
      
      //change textContent for value later
      if(sharpFlatValue.includes("#")) {
        if(notes.includes(note.textContent)){
          note.style.backgroundColor = "red";
        }
        if(notes[0] == note.textContent) {
          note.style.backgroundColor = "yellow";
        }
        if(showMajor3rds) {
          if(majorThirdFromRoot == note.textContent) {
            note.style.backgroundColor = "orange";
          }
        }
        if(showMinor3rds) {
          if(minorThirdFromRoot == note.textContent) {
            note.style.backgroundColor = "orange";
          }
        }
        if(show5ths) {
          if(fifthFromRoot == note.textContent) {
            note.style.backgroundColor = "blue";
          }
        }
      }

      if(sharpFlatValue.includes("b")) {
        let scaleFlatNotes = scalesController.getScaleFlatNotes(notes);
        
        if(scaleFlatNotes.includes(note.textContent)){
          note.style.backgroundColor = "red";
        }
        if(scaleFlatNotes[0] == note.textContent) {
          note.style.backgroundColor = "yellow";
        }

        if(show3rds) {
          if(scalesController.sharpNoteToFlat(majorThirdFromRoot) == note.textContent) {
            note.style.backgroundColor = "orange";
          }
        }
        if(show5ths) {
          if(scalesController.sharpNoteToFlat(fifthFromRoot) == note.textContent) {
            note.style.backgroundColor = "blue";
          }
        }
      }

    })
  });
}

function resetStyle() {
  let fretElement = document.getElementsByClassName("fret");

  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    
    Object.values(noteElement).forEach(note => {
      note.style.backgroundColor = "transparent";
    })
  });
}

function assignInitialNotes(initialNotes) {
  let firstFretDiv = document.getElementsByClassName("fret")[0];

  let noteArray = uiScalesHelper.getNoteElementsFromFret(firstFretDiv);
  for (let j = 0; j < noteArray.length; j++) {
    const noteElement = noteArray[j];
    noteElement.textContent = initialNotes[j];
  }
}

function assignSubSequentialNotes() {
  let fretElement = document.getElementsByClassName("fret");
  let diagramAssignedNotes = {};

  for (let i = 0; i < fretElement.length; i++) {
    const fret = fretElement[i];
    if (i == 0) { //first fret
      Object.values(uiScalesHelper.getNoteElementsFromFret(fret)).forEach(element => { //notes on first fret
        Object.defineProperty(diagramAssignedNotes, element.getAttribute("data-fretboard-string-number"), { value: scalesController.getOctaves(2, scalesController.getChromaticScale(element.textContent)), configurable: true })
      });
    } else { //sequential frets
      Object.values(uiScalesHelper.getNoteElementsFromFret(fret)).forEach(element => {
        if(element.getAttribute("data-fretboard-string-number") == 6){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
        if(element.getAttribute("data-fretboard-string-number") == 5){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
        if(element.getAttribute("data-fretboard-string-number") == 4){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
        if(element.getAttribute("data-fretboard-string-number") == 3){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
        if(element.getAttribute("data-fretboard-string-number") == 2){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
        if(element.getAttribute("data-fretboard-string-number") == 1){
          element.textContent = diagramAssignedNotes[element.getAttribute("data-fretboard-string-number")][i];
        }
      });
    }
  }
  
}

console.log("diagramController.js LOADED");