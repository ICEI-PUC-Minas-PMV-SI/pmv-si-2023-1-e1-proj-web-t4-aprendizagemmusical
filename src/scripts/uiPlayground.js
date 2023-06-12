import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import * as scalesController from'./scalesController.js';
import { notes } from './scalesHelper.js';
import { diagramDiv } from './uiScalesHelper.js';
import * as uiScalesController  from './uiScalesController.js';

let tunningSelect = document.getElementById("tunning");
let rootNoteSelect = document.getElementById("rootNote");
let scaleSelect = document.getElementById("scale");
let sharpFlatBtn = document.getElementById("sharpFlatBtn");

tunningSelect.addEventListener("change", tunningSelectHandle);
rootNoteSelect.addEventListener("change", rootNoteSelectHandle);
scaleSelect.addEventListener("change", scaleSelectHandle);
sharpFlatBtn.addEventListener("click", handleSharpFlatButtonValue);

function tunningSelectHandle(e){
  uiScalesController.assignNotesFromTunningNotes(e.target.value);
  //call highlight methods
  //check for the flags
  //convert to flat if needed
}

function rootNoteSelectHandle(e){
  console.log(e.target.value);
  //call highlight methods
  //check for the flags
  //convert to flat if needed
}

function scaleSelectHandle(e){
  console.log(e.target.value);
  //call highlight methods
  //check for the flags
  //convert to flat if needed
}

//controllers
export function handleClick(e){
  updatePlaygroundUiOptions(e.target.value);
}

export function updatePlaygroundUiOptions(instrument) {
  showAvailableTunnings(instrument);
  showAvailableScales(instrument);
  showAvailableRootNotes();
  changeDiagramAccidentalNotes();
}

//helpers
function showAvailableTunnings(instrument) {
  tunningSelect.innerHTML = "";
  const availableTunnings = instrumentsObject[instrument].tunnings;
  for(let i = 0; i < availableTunnings.length; i++) {
    tunningSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunnings[i].notes}">${availableTunnings[i].label}</option>`)
  }
}

function showAvailableRootNotes() {
  rootNoteSelect.innerHTML = "";
  for(let i = 0; i < notes.length; i++) {
    rootNoteSelect.insertAdjacentHTML("beforeend", `<option value="${notes[i]}">${notes[i]}</option>`)
  }
}

function showAvailableScales(instrument) {
  scaleSelect.innerHTML = "";
  const availableTunningsScales = instrumentsObject[instrument].scales;
  for(let i = 0; i < availableTunningsScales.length; i++) {
    scaleSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunningsScales[i].intervals}">${availableTunningsScales[i].label}</option>`)
  }
}

function handleSharpFlatButtonValue() {
  let sharpFlatBtnTag = sharpFlatBtn.querySelector("button");
  sharpFlatBtnTag.value = sharpFlatBtnTag.value == "#" ? "b" : "#";
  sharpFlatBtnTag.textContent = sharpFlatBtnTag.textContent == "Show #" ? "Show b" : "Show #";
  changeDiagramAccidentalNotes();
}

function changeDiagramAccidentalNotes() {
  let sharpFlatBtnTag = sharpFlatBtn.querySelector("button");
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

function convertSharpToFlat(note){
  return scalesController.sharpNoteToFlat(note);
}

function convertFlatToSharp(note){
  return scalesController.flatNoteToSharp(note);
}
console.log("uiPlayground.js LOADED");