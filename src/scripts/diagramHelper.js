import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import * as diagramController from './diagramController.js';

//TODO
  //CHANGE FROM THIS OT THE JSON DATA
  //REVERSE IS NEEDED BECUASE OF HOW ITS DISPLAYED TO THE USER
export const GUITAR_STANDARD_TUNNING_INITIAL_NOTES = instrumentsObject.guitar.tunnings[0].notes.split(",").reverse();
export const BASS_STANDARD_TUNNING_INITIAL_NOTES = instrumentsObject.bass.tunnings[0].notes.split(",").reverse();
export const PIANO_INITIAL_NOTES = instrumentsObject.piano.tunnings[0].notes.split(",").reverse();

export let diagramDiv = document.querySelector("div.diagram");

export function generateFret(notesPerFret, frets) {
  for(let i = 0; i < frets; i++){
    let fret = `<div class="fret" data-fret-number=${getCurrentFret(i)}>${generateFretNote(notesPerFret, i)}</div>`;
    diagramDiv.insertAdjacentHTML("beforeend", fret);

    let fretDiv = document.getElementsByClassName("fret")[i];
    fretDiv.style.gridTemplateRows = `25px repeat(${notesPerFret}, 1fr)`;
  }
}

export function generateFretNote(notesPerFret, currentFret) {
  let fretNoteHtmlStructure = "";
  for(let i = 0; i < getFretNoteIdentifier(notesPerFret); i++){
    if(i == 0) {
      let html = `<div class="fretCount">${getCurrentFret(currentFret)}</div>`;
      fretNoteHtmlStructure += html;
      continue;
    }
    let html = `<div class="note" data-fretboard-string-number=${(notesPerFret-i)+1}></div>`;
    fretNoteHtmlStructure += html;
  }
  return fretNoteHtmlStructure;
}

function getFretNoteIdentifier(notesPerFret) {
  return notesPerFret+1;
}

function getCurrentFret(currentFret) {
  return currentFret;
}

export function handleFretboarGeneratorParams(notesPerFret, frets, instrumentName){
  diagramController.generateFretboard(notesPerFret, frets, instrumentName);
}

export function adjustGridStyle(frets, notesPerFret) {
  diagramDiv.style.gridTemplateColumns = `repeat(${frets}, 1fr)`;
  diagramDiv.style.gridTemplateRows = `25px repeat(${notesPerFret}, 1fr)`;
}

export function getNoteElementsFromFret(fretElement) {
  let noteArray = [];
  for(let i = 0; i < fretElement.children.length; i++) { //get only note elements
    const noteElement = fretElement.children[i];
    if(noteElement.hasAttribute("data-fretboard-string-number")){
      noteArray.push(noteElement);
    }
  }
  return noteArray;
}

export function resetComponent(component){
  if(component.innerHTML == "") {
    return;
  }
  component.innerHTML = "";
}

export function isScreenSmall(screenWidth) {
  if (screenWidth <= 800) {
    return true;
  }
  return false;
}
console.log("uiScalesHelper.js LOADED");