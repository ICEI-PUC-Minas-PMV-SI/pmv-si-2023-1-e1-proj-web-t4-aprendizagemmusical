import * as diagramController  from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';
import * as uiPlaygroundController from './uiPlaygroundController.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';
import * as uiTranslation from './uiTranslation.js';

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
console.log(playgroundDiv.children.length);

function handleShowPlayground() {

  if(playgroundDiv.children.length <= 2) {
    playgroundDiv.insertAdjacentHTML("afterbegin", `
    <div class="chooseInstrumentDiv">
    <button type="button" id="guitarBtn" value="guitar" data-text-node="playgroundViolao"></button>
    <button type="button" id="bassBtn" value="bass" data-text-node="playgroundBaixo"></button>
    <button type="button" id="pianoBtn" value="piano" data-text-node="playgroundPiano"></button>
    </div>`);
    playgroundDiv.insertAdjacentHTML("afterbegin", 
    `<div class="playgroundField" id="tunningBtn">
      <label for="tunning">Tunning</label>
      <select name="tunning" id="tunning"></select>
    </div>
    <div class="playgroundField" id="rootNoteBtn">
      <label for="rootNote">Root</label>
      <select name="rootNote" id="rootNote"></select>
    </div>
    <div class="playgroundField" id="scaleBtn">
      <label for="scale">Scale</label>
      <select name="scale" id="scale"></select>
    </div>
    <div class="playgroundField" id="sharpFlatBtn">
      <button value="#">Show b</button>
    </div>`);
  }

  guitarBtn = document.getElementById("guitarBtn");
  bassBtn = document.getElementById("bassBtn");
  pianoBtn = document.getElementById("pianoBtn");
  uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);

  guitarBtn.addEventListener("click", diagramHelper.handleFretboarGeneratorParams.bind(null, 6, 24, guitarBtn.value));
  bassBtn.addEventListener("click", diagramHelper.handleFretboarGeneratorParams.bind(null, 4, 24, bassBtn.value));
  pianoBtn.addEventListener("click", diagramHelper.handleFretboarGeneratorParams.bind(null, 1, 12, pianoBtn.value));
  guitarBtn.addEventListener("click", uiPlaygroundController.handleClick);
  bassBtn.addEventListener("click", uiPlaygroundController.handleClick);
  pianoBtn.addEventListener("click", uiPlaygroundController.handleClick);

  tunningSelect = document.getElementById("tunning");
  rootNoteSelect = document.getElementById("rootNote");
  scaleSelect = document.getElementById("scale");
  sharpFlatBtn = document.getElementById("sharpFlatBtn");

  tunningSelect.addEventListener("change", tunningSelectHandle);
  rootNoteSelect.addEventListener("change", rootNoteSelectHandle);
  scaleSelect.addEventListener("change", scaleSelectHandle);
  sharpFlatBtn.addEventListener("click", uiPlaygroundHelper.handleSharpFlatButtonValue);

  uiPlaygroundController.loadDefaultDiagram();
  uiPlaygroundController.updatePlaygroundUiOptions("guitar");
}

function tunningSelectHandle(e){
  diagramController.assignNotesFromTunningNotes(e.target.value);
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



console.log("uiPlayground.js LOADED");