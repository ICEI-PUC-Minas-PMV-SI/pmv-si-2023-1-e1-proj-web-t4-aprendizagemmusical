import * as diagramController  from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';
import * as scaleController from './scalesController.js';

export let playgroundDiv = document.querySelector("div.playground");
export let displayPlaygroundFreePlay = document.getElementById("displayPlaygroundFreePlay");
export let displayPlaygroundAdvanced = document.getElementById("displayPlaygroundAdvanced");
displayPlaygroundFreePlay.addEventListener("click", handleShowPlayground);
displayPlaygroundAdvanced.addEventListener("click", handleShowPlayground);

function handleShowPlayground(e) {
  let diagramDiv = diagramHelper.diagramDiv;
  if(e.target.value.toLowerCase().includes("freeplay")){
    diagramDiv.setAttribute("data-diagram-mode","freeplay");
    uiPlaygroundHelper.showFreePlayPlayground();
  }
  if(e.target.value.toLowerCase().includes("advanced")){
    diagramDiv.setAttribute("data-diagram-mode","advanced");
    uiPlaygroundHelper.showAdvancedPlayground();
  }
}


let initialNotePreviousValue;
function storeInitialNotePreviousValue(element) {
  initialNotePreviousValue = element.value;
}

export function handleAdvancedPlaygroundInitialNotes(e) {
  let sharpFlatBtnTag = document.querySelector("#sharpFlatBtn");
  let sharpFlatBtn = sharpFlatBtnTag.querySelector("button");

  if(e.type == "focus") {
    storeInitialNotePreviousValue(e.target);
  }
  if(e.type == "change") {
    let newValue = e.target.value;
    let isAscendent = uiPlaygroundHelper.isChosenInitialNoteAscendent(scaleController.flatNoteToSharp(initialNotePreviousValue), scaleController.flatNoteToSharp(newValue));
    diagramController.assignStringNotesFromInitialNote(e.target.parentElement.getAttribute("data-fretboard-string-number"), e.target.value);
    
    let stepsApart = scaleController.getHalfStepsApart(scaleController.flatNoteToSharp(initialNotePreviousValue), scaleController.flatNoteToSharp(newValue));
    uiPlaygroundHelper.forceSharpLayout((sharpFlatBtn.value == "b"));
    uiPlaygroundHelper.reallocateManuallyMarkedNoteStyles(e.target.parentElement.getAttribute("data-fretboard-string-number"), isAscendent, stepsApart);
    uiPlaygroundHelper.changeDiagramAccidentalNotes();
  }
  e.target.blur();
}

//should be in helper
export function assignNotesDefaultStyle() {
  
  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "freeplay"){
    let paramField0 = document.getElementById("root").value;
    let paramField1 = document.getElementById("scale").value;
    let paramField2 = document.getElementById("tunning").value;
    let paramField3 = document.getElementById("sharpFlatBtn").querySelector("button").value;
  
    let intervals = paramField1.split(","); //should be an function in helper
    diagramController.assignNotesFromTunningNotes(paramField2);
    diagramController.assignStyleToIntervals(scaleController.getScaleCustomIntervals(paramField0, intervals), paramField3);
  }

  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "advanced"){
    //todo, if needed
  }
}

console.log("uiPlayground.js LOADED");