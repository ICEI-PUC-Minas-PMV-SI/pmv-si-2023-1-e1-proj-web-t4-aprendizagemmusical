import * as diagramController  from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';
import * as uiPlaygroundController from './uiPlaygroundController.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';
import * as uiTranslation from './uiTranslation.js';
import * as scaleController from './scalesController.js';
import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import playgroundFreePlayButtons from '../assets/json/playgroundFreePlayButtons.json' assert { type: 'json' };

export let playgroundDiv = document.getElementsByClassName("playground")[0];
export let displayPlaygroundFreePlay = document.getElementById("displayPlaygroundFreePlay");
export let displayPlaygroundAdvanced = document.getElementById("displayPlaygroundAdvanced");
displayPlaygroundFreePlay.addEventListener("click", handleShowPlayground);
displayPlaygroundAdvanced.addEventListener("click", handleShowPlayground);

export let guitarBtn = null;
export let bassBtn = null;
export let pianoBtn = null;
export let tunningSelect = null;
export let rootNoteSelect = null;
export let scaleSelect = null;
export let sharpFlatBtn = null;

//should be in helper
function generateInstrumentButtons() {
  let instrumentHtmlElements = '';
  Object.keys(instrumentsObject).forEach(instrument => {
    instrumentHtmlElements += `<button type="button" id="${instrument}Btn" value="${instrument}" data-text-node="${instrument}Playground"></button>`
  })
  playgroundDiv.insertAdjacentHTML("afterbegin", `<div class="chooseInstrumentDiv">${instrumentHtmlElements}</div>`);
}

//should be in helper
function generatePlaygroundOptionsButtons() {
  let playgroundFreePlayButtonsHtmlElements = '';
  Object.values(playgroundFreePlayButtons).forEach(button => {
    if(button.type == "select") {
      
      playgroundFreePlayButtonsHtmlElements += 
      `<div class="playgroundField" id="${button.id}">
        <label for="${button.label.toLowerCase()}">${button.label}</label>
        <select name="${button.label.toLowerCase()}" id="${button.label.toLowerCase()}"></select>
      </div>`
    } 
    if(button.type == "button") {
      playgroundFreePlayButtonsHtmlElements += 
      `<div class="playgroundField" id="${button.id}">
        <button value="${button.value}">${button.label}</button>
       </div>
      `
    }
    if(button.type == "checkbox") {
      playgroundFreePlayButtonsHtmlElements += 
      `<div class="playgroundField" id="${button.id}">
        <label for="${button.label.toLowerCase()}">${button.label}</label>
        <input type="${button.type}">
       </div>
      `
    }
  })
  playgroundDiv.insertAdjacentHTML("afterbegin", `<div class="playgroundFreeplayFields">${playgroundFreePlayButtonsHtmlElements}</div>`);
}

function assignPlaygroundOptionsButtonsEventListeners() {
  let playgroundFieldsDiv = document.querySelector("div.playgroundFreeplayFields");
  Array.from(playgroundFieldsDiv.children).forEach(e => {
    Array.from(e.children).find(x => { //needs a better verification: whether needs external handle
      if(x.tagName != "LABEL") {
        if(x.tagName == "SELECT") {
          x.addEventListener("change", assignNotesStyle);
        }
        if(x.tagName == "INPUT") {
          x.addEventListener("change", assignNotesStyle);
        }
      }
    });
  
  })
}

function assignPlaygroundInstrumentButtonsEventListeners() {
  guitarBtn = document.getElementById("guitarBtn");
  bassBtn = document.getElementById("bassBtn");
  pianoBtn = document.getElementById("pianoBtn");

  uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);
  
  guitarBtn.addEventListener("click", showInstrumentDiagram);
  bassBtn.addEventListener("click", showInstrumentDiagram);
  pianoBtn.addEventListener("click", showInstrumentDiagram);
}

function handleShowPlayground(e) {
  let diagramDiv = diagramHelper.diagramDiv;
  if(e.target.value.toLowerCase().includes("freeplay")){
    diagramDiv.setAttribute("data-diagram-mode","freeplay");
    showFreePlayPlayground();
  }
  if(e.target.value.toLowerCase().includes("advanced")){
    diagramDiv.setAttribute("data-diagram-mode","advanced");
    showAdvancedPlayground();
  }
}

function showFreePlayPlayground(){
  Array.from(document.querySelector("div.playground").children).forEach(element => {
    if(element.className.includes("choosePlaygroundDiv") || element.className.includes("diagram")){ 
    } else {
      element.remove();
    }
  });

  if(playgroundDiv.children.length <= 2) {
    generateInstrumentButtons();
    generatePlaygroundOptionsButtons();
    assignPlaygroundOptionsButtonsEventListeners();
  }
  assignPlaygroundInstrumentButtonsEventListeners();
  tunningSelect = document.getElementById("tunning");
  rootNoteSelect = document.getElementById("root");
  scaleSelect = document.getElementById("scale");
  sharpFlatBtn = document.getElementById("sharpFlatBtn");
  sharpFlatBtn.addEventListener("click", uiPlaygroundHelper.handleSharpFlatButtonValue);
  uiPlaygroundController.loadDefaultDiagram();
  uiPlaygroundController.updatePlaygroundUiOptions("guitar");
  assignNotesDefaultStyle();
}

function showAdvancedPlayground(){
  
  Array.from(document.querySelector("div.playground").children).forEach(element => {
    if(element.className.includes("choosePlaygroundDiv") || element.className.includes("diagram")){ 
    } else {
      element.remove();
    }
  });

  if(playgroundDiv.children.length <= 2) {
    generateInstrumentButtons();
  }
  
  let playgroundFreePlayButtonsHtmlElements = '';
  playgroundFreePlayButtonsHtmlElements += 
  `<div class="playgroundField" id="${playgroundFreePlayButtons.sharpFlat.id}">
    <button value="${playgroundFreePlayButtons.sharpFlat.value}">${playgroundFreePlayButtons.sharpFlat.label}</button>
   </div>
  `
  playgroundDiv.insertAdjacentHTML("afterbegin", `<div class="playgroundFreeplayFields">${playgroundFreePlayButtonsHtmlElements}</div>`);
  sharpFlatBtn = document.getElementById("sharpFlatBtn");
  sharpFlatBtn.addEventListener("click", uiPlaygroundHelper.handleSharpFlatButtonValue);

  guitarBtn = document.getElementById("guitarBtn");
  bassBtn = document.getElementById("bassBtn");
  pianoBtn = document.getElementById("pianoBtn");
  uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);
  
  guitarBtn.addEventListener("click", showInstrumentDiagram);
  bassBtn.addEventListener("click", showInstrumentDiagram);
  pianoBtn.addEventListener("click", showInstrumentDiagram);

  uiPlaygroundController.loadDefaultAdvancedDiagram();
  uiPlaygroundHelper.assignEventListenersToAdvancedModeInitialNotes();
  diagramController.assignAdvancedModeSubSequentialNotes();
  diagramController.iterateThroughNotesAdvancedMode();
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
    let isAscendent = uiPlaygroundHelper.isChosenInitialNoteAscendent(initialNotePreviousValue, newValue);
    diagramController.assignStringNotesFromInitialNote(e.target.parentElement.getAttribute("data-fretboard-string-number"), e.target.value);
    
    let stepsApart = scaleController.getHalfStepsApart(initialNotePreviousValue, newValue);
    //uiPlaygroundHelper.forceSharpLayout();
    uiPlaygroundHelper.reallocateManuallyMarkedNoteStyles(e.target.parentElement.getAttribute("data-fretboard-string-number"), isAscendent, stepsApart);

    // if(sharpFlatBtn.value == "b") {
    //   uiPlaygroundHelper.changeDiagramAccidentalNotes();
    // }
  }
  e.target.blur();
}

function showInstrumentDiagram(e) {
  let instrument = e.target.value;
  if(instrument == "guitar") {
    diagramHelper.handleFretboarGeneratorParams(6, 24, e.target.value);
  }
  if(instrument == "bass") {
    diagramHelper.handleFretboarGeneratorParams(4, 24, e.target.value);
  }
  if(instrument == "piano") {
    diagramHelper.handleFretboarGeneratorParams(1, 12, e.target.value);
  }
  uiPlaygroundController.handleClick(e);
}

function assignNotesStyle() {
  let paramField0 = document.getElementById("root").value;
  let paramField1 = document.getElementById("scale").value;
  let paramField2 = document.getElementById("tunning").value;
  let paramField3 = document.getElementById("sharpFlatBtn").querySelector("button").value;
  let paramField4 = document.getElementById("showMajor3rdBtn").querySelector("input").checked;
  let paramField5 = document.getElementById("showMinor3rdBtn").querySelector("input").checked;
  let paramField6 = document.getElementById("show5thBtn").querySelector("input").checked;

  let intervals = paramField1.split(","); //should be an function in helper
  diagramController.assignNotesFromTunningNotes(paramField2);
  diagramController.assignStyleToIntervals(scaleController.getScaleCustomIntervals(paramField0, intervals), paramField3, paramField4, paramField5, paramField6);
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