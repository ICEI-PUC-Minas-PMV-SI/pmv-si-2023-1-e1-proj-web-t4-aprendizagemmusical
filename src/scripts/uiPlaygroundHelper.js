import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import { notes, getNoteIndex } from './scalesHelper.js';
import * as scalesHelper from './scalesHelper.js';
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
    let selectElement = note.querySelector("select");
    selectElement.addEventListener("focus", uiPlayground.handleAdvancedPlaygroundInitialNotes);
    selectElement.addEventListener("change", uiPlayground.handleAdvancedPlaygroundInitialNotes);
  });
  let selectFieldValue = Array.from(fret.querySelectorAll("div.note select"));

  let defaultNoteArray = [];
  selectFieldValue.forEach(select => {
    defaultNoteArray.push(select.value);
  });
}

export function isChosenInitialNoteAscendent(oldValue, newValue) {
  return scalesHelper.getNoteIndex(newValue) > scalesHelper.getNoteIndex(oldValue) == true ? true : false; 
}

export function reallocateManuallyMarkedNoteStyles(stringNumber, isAscendent, stepsApart) {
  let sharpFlatBtnTag = document.querySelector("#sharpFlatBtn");
  let sharpFlatBtn = sharpFlatBtnTag.querySelector("button");
  //TODO
    //ARRANGE FOR WHEN THE USER AT SHOW Flat option
      //Do the logic using the sharp, than convert it all
  if(isAscendent) {
    let stringNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-fretboard-string-number="${stringNumber}"]`));
    let stringMarkedNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-manually-marked="true"][data-fretboard-string-number="${stringNumber}"]`));
    let markedNoteData = [];
    
    stringMarkedNotesArray.forEach(note => {
      let obj = {};
      obj["position"] = note.getAttribute("data-fretboard-fret-number");
      obj["chosenColor"] = note.getAttribute("data-manually-chosen-color");
      markedNoteData.push(obj);

      note.style.backgroundColor = "";
      note.removeAttribute("data-manually-marked");
      note.removeAttribute("data-manually-chosen-color");
    });
    
    markedNoteData.forEach(markedNote => markedNote.position = markedNote.position-stepsApart)
    stringNotesArray.map(note => {
      let foundNote = markedNoteData.find(markedObject => markedObject.position == note.getAttribute("data-fretboard-fret-number"));
      if(foundNote) {
        note.setAttribute("data-manually-marked", true);
        note.setAttribute("data-manually-chosen-color", foundNote.chosenColor);
        note.style.backgroundColor = foundNote.chosenColor;
      }
    })

  } else {
    let stringNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-fretboard-string-number="${stringNumber}"]`));
    let stringMarkedNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-manually-marked="true"][data-fretboard-string-number="${stringNumber}"]`));
    let markedNoteData = [];

    stringMarkedNotesArray.forEach(note => {
      let obj = {};
      obj["position"] = parseInt(note.getAttribute("data-fretboard-fret-number"));
      obj["chosenColor"] = note.getAttribute("data-manually-chosen-color");
      markedNoteData.push(obj);

      note.style.backgroundColor = "";
      note.removeAttribute("data-manually-marked");
      note.removeAttribute("data-manually-chosen-color");
    });
    markedNoteData.forEach(markedNote => markedNote.position = parseInt(markedNote.position) + 12 - stepsApart + (stepsApart >= 12 ? 12 : 0));
    stringNotesArray.map(note => {
      let foundNote = markedNoteData.find(markedObject => markedObject.position == note.getAttribute("data-fretboard-fret-number"));
      if(foundNote) {
        note.setAttribute("data-manually-marked", true);
        note.setAttribute("data-manually-chosen-color", foundNote.chosenColor);
        note.style.backgroundColor = foundNote.chosenColor;
      }
    })
  }
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

export function forceSharpLayout(sharp) {
  if(sharp) {
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

export function convertSharpToFlat(note){
  return scalesController.sharpNoteToFlat(note);
}

export function convertFlatToSharp(note){
  return scalesController.flatNoteToSharp(note);
}

console.log("uiPlaygroundHelper.js LOADED");