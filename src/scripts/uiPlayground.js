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
//displayPlaygroundAdvanced.addEventListener("click", handleShowPlayground);

export let guitarBtn = null;
export let bassBtn = null;
export let pianoBtn = null;
export let tunningSelect = null;
export let rootNoteSelect = null;
export let scaleSelect = null;
export let sharpFlatBtn = null;

function generateInstrumentButtons() {
  let instrumentHtmlElements = '';
  Object.keys(instrumentsObject).forEach(instrument => {
    instrumentHtmlElements += `<button type="button" id="${instrument}Btn" value="${instrument}" data-text-node="${instrument}Playground"></button>`
  })
  playgroundDiv.insertAdjacentHTML("afterbegin", `<div class="chooseInstrumentDiv">${instrumentHtmlElements}</div>`);
}

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

function handleShowPlayground() {
  //field0Label field0Value 
  if(playgroundDiv.children.length <= 2) {
    generateInstrumentButtons();
    generatePlaygroundOptionsButtons();
  }
  
  //needs abstraction
    guitarBtn = document.getElementById("guitarBtn");
    bassBtn = document.getElementById("bassBtn");
    pianoBtn = document.getElementById("pianoBtn");
    uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);
    
    guitarBtn.addEventListener("click", showInstrumentDiagram);
    bassBtn.addEventListener("click", showInstrumentDiagram);
    pianoBtn.addEventListener("click", showInstrumentDiagram);

    tunningSelect = document.getElementById("tunning");
    rootNoteSelect = document.getElementById("root");
    scaleSelect = document.getElementById("scale");
    sharpFlatBtn = document.getElementById("sharpFlatBtn");

    tunningSelect.addEventListener("change", assignNotesStyle);
    rootNoteSelect.addEventListener("change", assignNotesStyle);
    scaleSelect.addEventListener("change", assignNotesStyle);
    sharpFlatBtn.addEventListener("click", uiPlaygroundHelper.handleSharpFlatButtonValue);
  //
  uiPlaygroundController.loadDefaultDiagram();
  uiPlaygroundController.updatePlaygroundUiOptions("guitar");
  assignNotesDefaultStyle();
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
  let intervals = scaleSelect.value.split(",");
  diagramController.assignNotesFromTunningNotes(tunningSelect.value);
  diagramController.assignStyleToIntervals(scaleController.getScaleCustomIntervals(rootNoteSelect.value, intervals), sharpFlatBtn.getElementsByTagName("button")[0].value);
}

//should be in helper
export function assignNotesDefaultStyle() {
  let intervals = scaleSelect.value.split(",");
  diagramController.assignNotesFromTunningNotes(tunningSelect.value);
  diagramController.assignStyleToIntervals(scaleController.getScaleCustomIntervals(rootNoteSelect.value, intervals), sharpFlatBtn.getElementsByTagName("button")[0].value);
}
console.log("uiPlayground.js LOADED");