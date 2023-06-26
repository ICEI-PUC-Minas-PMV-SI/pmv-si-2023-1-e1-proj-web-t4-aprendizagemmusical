import * as uiScalesHelper from './diagramHelper.js';
import * as scalesController from './scalesController.js';
import * as scalesHelper from './scalesHelper.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';
import * as diagramHelper from './diagramHelper.js';

export function generateFretboard(notesPerFret, frets, instrumentName) {
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  frets = uiScalesHelper.isScreenSmall(windowWidth) == true ? 12 : frets; //develop a handler

  uiScalesHelper.resetComponent(uiScalesHelper.diagramDiv);
  uiScalesHelper.adjustGridStyle(frets, notesPerFret);
  uiScalesHelper.generateFret(notesPerFret, frets);
  
  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "freeplay"){
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

  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "advanced"){
    console.log('generateFretboard advanced mode');
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

export function iterateThroughNotesAdvancedMode() {
  let fretElement = Array.from(document.getElementsByClassName("fret"));
  fretElement.shift();
  
  fretElement.forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    Object.values(noteElement).forEach(note => {
      note.addEventListener("click", manualHighlightAdvancedMode)
    })
  })

}
function manualHighlightAdvancedMode(e) {
  //when a user changes the initial note, the program needs to check if the change is ascendent or descendent
  //if ascendent > search the nearest ABOVE note div that contains the same textContent
  //if descendent > search the nearest BELOW note div that contains the same textContent
  //but first, the program should gather the all notes manually added by the user, before making a destructive change to the UI.
  //console.log(e.target);
  e.target.style.backgroundColor = "red";
  e.target.setAttribute("data-manually-marked", true);
}

export function assignStyleToIntervals(notes, sharpFlatValue, showMajor3rds, showMinor3rds, show5ths) {
  resetStyle();
  let fretElement = document.getElementsByClassName("fret");
  let selectedTheme = localStorage.getItem("theme") == undefined ? "dark" : localStorage.getItem("theme");
  
  let styleScaleNotes = `var(--${selectedTheme}-highlight-scale-note)`;
  let styleScaleRootNote = `var(--${selectedTheme}-highlight-root-note)`;
  let styleScale3rdMajorNote = `var(--${selectedTheme}-highlight-3rdMajor-note)`;
  let styleScale3rdMinorNote = `var(--${selectedTheme}-highlight-3rdMinor-note)`;
  let styleScale5thNote = `var(--${selectedTheme}-highlight-5th-note)`;


  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    let majorThirdFromRoot = scalesController.getMajor3rdFromScale(notes);
    let minorThirdFromRoot = scalesController.getMinor3rdFromScale(notes);
    let fifthFromRoot = scalesController.get5th(notes[0]);
    
    Object.values(noteElement).forEach(note => {
      
      //change textContent for value later
      if(sharpFlatValue.includes("#")) {
        if(notes.includes(note.textContent)){
          note.style.backgroundColor = styleScaleNotes;
        }
        if(notes[0] == note.textContent) {
          note.style.backgroundColor = styleScaleRootNote;
        }
        if(showMajor3rds) {
          if(majorThirdFromRoot == note.textContent) {
            note.style.backgroundColor = styleScale3rdMajorNote;
          }
        }
        if(showMinor3rds) {
          if(minorThirdFromRoot == note.textContent) {
            note.style.backgroundColor = styleScale3rdMinorNote;
          }
        }
        if(show5ths) {
          if(fifthFromRoot == note.textContent) {
            note.style.backgroundColor = styleScale5thNote;
          }
        }
      }

      if(sharpFlatValue.includes("b")) {
        let scaleFlatNotes = scalesController.getScaleFlatNotes(notes);
        
        if(scaleFlatNotes.includes(note.textContent)){
          note.style.backgroundColor = styleScaleNotes;
        }
        if(scaleFlatNotes[0] == note.textContent) {
          note.style.backgroundColor = styleScaleRootNote;
        }

        if(showMajor3rds) {
          if(scalesController.sharpNoteToFlat(majorThirdFromRoot) == note.textContent) {
            note.style.backgroundColor = styleScale3rdMajorNote;
          }
        }
        if(showMinor3rds) {
          if(scalesController.sharpNoteToFlat(minorThirdFromRoot) == note.textContent) {
            note.style.backgroundColor = styleScale3rdMinorNote;
          }
        }
        if(show5ths) {
          if(scalesController.sharpNoteToFlat(fifthFromRoot) == note.textContent) {
            note.style.backgroundColor = styleScale5thNote;
          }
        }
      }

    })
  });
}

export function assignAdvancedPlaygroundInitialNotes() {
  let fret = diagramHelper.getFret(0);
  let fretNotes = Array.from(fret.querySelectorAll("div.note"));
  fretNotes.forEach(note => {
    note.insertAdjacentHTML("afterbegin", advancedPlaygroundInitialNotesOptions());
  })
}

function advancedPlaygroundInitialNotesOptions() {
  //needs to knows the sharpflatbutton value later
  let options = '';
  scalesHelper.notes.forEach(note => {
    options += `<option value="${note}">${note}</option>`;
  });
  return `<select>${options}</select>`
}

function resetStyle() {
  //needs to knows the sharpflatbutton value later
  let fretElement = document.getElementsByClassName("fret");

  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    
    Object.values(noteElement).forEach(note => {
      note.style.backgroundColor = "transparent";
    })
  });
}

export function assignInitialNotes(initialNotes) {
  let firstFretDiv = document.getElementsByClassName("fret")[0];

  let noteArray = uiScalesHelper.getNoteElementsFromFret(firstFretDiv);
  for (let j = 0; j < noteArray.length; j++) {
    const noteElement = noteArray[j];
    noteElement.textContent = initialNotes[j];
  }
}

export function assignSubSequentialNotes() {
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

export function assignAdvancedModeSubSequentialNotes() {
  let fretElement = document.getElementsByClassName("fret");
  let diagramAssignedNotes = {};
  console.log();
  for (let i = 0; i < fretElement.length; i++) {
    const fret = fretElement[i];
    if (i == 0) { //first fret
      Object.values(uiScalesHelper.getNoteElementsFromFret(fret)).forEach(element => { //notes on first fret
        Object.defineProperty(diagramAssignedNotes, element.getAttribute("data-fretboard-string-number"), { value: scalesController.getOctaves(2, scalesController.getChromaticScale(element.querySelector("select").value)), configurable: true })
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

export function assignStringNotesFromInitialNote(stringNumber, value) {
  let stringNotes = Array.from(diagramHelper.diagramDiv.querySelectorAll(`div.note[data-fretboard-string-number="${stringNumber}"]`));
  stringNotes.shift();
  let scaleToServe = scalesController.getOctaves(2, scalesController.getChromaticScale(scalesController.flatNoteToSharp(value)));
  scaleToServe.shift();
  for (let i = 0; i < stringNotes.length; i++) {
    const note = stringNotes[i];
    note.textContent = scaleToServe[i];
  }
}

console.log("diagramController.js LOADED");