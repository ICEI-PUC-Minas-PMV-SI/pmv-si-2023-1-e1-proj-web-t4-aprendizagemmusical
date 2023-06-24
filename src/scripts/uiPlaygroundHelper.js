import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import { notes } from './scalesHelper.js';
import {tunningSelect, rootNoteSelect, scaleSelect, sharpFlatBtn} from './uiPlayground.js';
import * as scalesController from'./scalesController.js';
import { diagramDiv }  from './diagramHelper.js';
import * as diagramHelper  from './diagramHelper.js';
import * as uiPlayground  from './uiPlayground.js';


export function showAvailableTunnings(instrument) {
  tunningSelect.innerHTML = "";
  const availableTunnings = instrumentsObject[instrument].tunnings;
  for(let i = 0; i < availableTunnings.length; i++) {
    tunningSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunnings[i].notes}">${availableTunnings[i].label}</option>`)
  }
}

export function showAvailableRootNotes() {
  rootNoteSelect.innerHTML = "";
  for(let i = 0; i < notes.length; i++) {
    rootNoteSelect.insertAdjacentHTML("beforeend", `<option value="${notes[i]}">${notes[i]}</option>`)
  }
}

export function showAvailableScales(instrument) {
  scaleSelect.innerHTML = "";
  const availableTunningsScales = instrumentsObject[instrument].scales;
  for(let i = 0; i < availableTunningsScales.length; i++) {
    scaleSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunningsScales[i].intervals}">${availableTunningsScales[i].label}</option>`)
  }
}

export function handleSharpFlatButtonValue() {
  let sharpFlatBtnTag = sharpFlatBtn.querySelector("button");
  sharpFlatBtnTag.value = sharpFlatBtnTag.value == "#" ? "b" : "#";
  sharpFlatBtnTag.textContent = sharpFlatBtnTag.textContent == "Show #" ? "Show b" : "Show #";
  changeDiagramAccidentalNotes();
}

export function assignEventListenersToAdvancedModeInitialNotes() {
  let fret = diagramHelper.getFret(0);
  let fretNotes = Array.from(fret.querySelectorAll("div.note"));
  fretNotes.forEach(note => {
    note.addEventListener("change", uiPlayground.handleAdvancedPlaygroundInitialNotes);
  });
  let selectFieldValue = Array.from(fret.querySelectorAll("div.note select"));

  let defaultNoteArray = [];
  selectFieldValue.forEach(select => {
    defaultNoteArray.push(select.value);
  });
}

export function changeDiagramAccidentalNotes() {
  let sharpFlatBtnTag = sharpFlatBtn.querySelector("button");

  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "freeplay"){
    if(sharpFlatBtnTag.value == "b") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic
        const notesArray = fret.getElementsByClassName("note");
        Object.values(notesArray).forEach(note => { //each note
          if(note.textContent.includes("#")){
            note.textContent = convertSharpToFlat(note.textContent);
          }
        })
      });
      return;
    }

    if(sharpFlatBtnTag.value == "#") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic
        const notesArray = fret.getElementsByClassName("note");
        Object.values(notesArray).forEach(note => { //each note
          if(note.textContent.includes("b")){
            note.textContent = convertFlatToSharp(note.textContent);
          }
        })
      });
      return;
    }
  }

  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "advanced"){
    if(sharpFlatBtnTag.value == "b") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic
        
        if(fret.getAttribute("data-fret-number") == 0) {
          Array.from(fret.querySelectorAll("select")).forEach(select => {
            Array.from(fret.querySelectorAll("option")).forEach(option => {
              option.text = convertSharpToFlat(option.text);
              option.value = convertSharpToFlat(option.value);
            });
          });
        } else {
          const notesArray = fret.getElementsByClassName("note");
          Object.values(notesArray).forEach(note => { //each note
            if(note.textContent.includes("#")){
              note.textContent = scalesController.sharpNoteToFlat(note.textContent);
            }
          });
        }

      });
      return;
    }

    if(sharpFlatBtnTag.value == "#") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic
        if(fret.getAttribute("data-fret-number") == 0) {
          Array.from(fret.querySelectorAll("select")).forEach(select => {
            Array.from(fret.querySelectorAll("option")).forEach(option => {
              option.text = convertFlatToSharp(option.text);
              option.value = convertFlatToSharp(option.value);
            });
          });
        } else {
          const notesArray = fret.getElementsByClassName("note");
          Object.values(notesArray).forEach(note => { //each note
            if(note.textContent.includes("b")){
              note.textContent = scalesController.flatNoteToSharp(note.textContent);
            }
          })
        }

      });
      return;
    }
  }
}

export function convertSharpToFlat(note){
  return scalesController.sharpNoteToFlat(note);
}

export function convertFlatToSharp(note){
  return scalesController.flatNoteToSharp(note);
}

console.log("uiPlaygroundHelper.js LOADED");