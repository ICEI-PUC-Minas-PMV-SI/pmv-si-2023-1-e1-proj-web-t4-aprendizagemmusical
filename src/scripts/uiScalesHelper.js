import * as uiScalesController from './uiScalesController.js';

export const GUITAR_STANDARD_TUNNING_INITIAL_NOTES = ["E","A","D","G","B","E"];
export const BASS_STANDARD_TUNNING_INITIAL_NOTES = ["E","A","D","G"];
export const PIANO_INITIAL_NOTES = ["C"];

export let diagramDiv = document.getElementsByClassName("diagram")[0];

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
  return currentFret+1;
}

export function handleFretboarGeneratorParams(notesPerFret, frets, instrumentName){
  uiScalesController.generateFretboard(notesPerFret, frets, instrumentName);
}

export function adjustGridStyle(frets, notesPerFret) {
  diagramDiv.style.gridTemplateColumns = `repeat(${frets}, 1fr)`;
  diagramDiv.style.gridTemplateRows = `25px repeat(${notesPerFret}, 1fr)`;
}

export function resetComponent(component){
  if(component.innerHTML == "") {
    return;
  }
  component.innerHTML = "";
}