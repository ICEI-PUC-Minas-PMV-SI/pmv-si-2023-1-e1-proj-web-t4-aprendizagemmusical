import * as diagramController  from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js';
import * as scaleController from './scalesController.js';
import * as uiTranslation from './uiTranslation.js';

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
    showTutorial();
  }
  if(e.target.value.toLowerCase().includes("advanced")){
    diagramDiv.setAttribute("data-diagram-mode","advanced");
    uiPlaygroundHelper.showAdvancedPlayground();
    showTutorial();
  }
}
export function showTutorial() {
  
  if(document.querySelector("div.tutorial")) {
    document.querySelector("div.tutorial").remove();
  }
  let tutorial = `<div class="tutorial">${handleTutorialContent()}</div>`;
  let body = document.querySelector("body");
  
  body.insertAdjacentHTML("beforeend", tutorial);
  uiTranslation.translateElementsRecursively(document.querySelector("div.tutorial"));
}

function handleTutorialContent() {
  let diagram = document.querySelector("div.diagram");
  let tutorialContent = '';
  console.log(diagram.getAttribute("data-diagram-mode"));
  if(diagram.getAttribute("data-diagram-mode").includes("freeplay")) {
    tutorialContent = createFreePlayTutorial();
  }
  if(diagram.getAttribute("data-diagram-mode").includes("advanced")) {
    tutorialContent = createAdvancedTutorial();
  }
  return tutorialContent;
}

function createFreePlayTutorial() {
  return `
  <h1 data-text-node="tutorialFreeplayTitle">Tutorial: Freeplay playground</h1>
  <h2 data-text-node="tutorialFreeplaySubTitle">This mode should be used for beginners or students that wants to learn musical scales such as major and minor scales, as well as pentatonics.</h2>
  <hr>
  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionTunningselect"></p>
    <p data-text-node="tutorialAnswerTunningselect"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionRoot"></p>
    <p data-text-node="tutorialAnswerRoot"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionScale"></p>
    <p data-text-node="tutorialAnswerScale"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionShowbShow"></p>
    <p data-text-node="tutorialAnswerShowbShow"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionShow3ms"></p>
    <p data-text-node="tutorialAnswerShow3ms"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionShow3Ms"></p>
    <p data-text-node="tutorialAnswerShow3Ms"></p>
  </div>

  <div class="tutorialQuestion">
    <p data-text-node="tutorialQuestionShow5ths"></p>
    <p data-text-node="tutorialAnswerShow5ths"></p>
  </div> 
  `
}

function createAdvancedTutorial() {
  return `
  <h1 data-text-node="tutorialAdvancedTitle"></h1>
  <h2 data-text-node="tutorialAdvancedSubTitle"></h2>
  <hr>
    <div class="tutorialQuestion">
      <p data-text-node="tutorialAdvancedQuestionLMB"></p>
      <p data-text-node="tutorialAdvancedAnswerLMB"></p>
    </div>
    <div class="tutorialQuestion">
      <p data-text-node="tutorialAdvancedQuestionRMB"></p>
      <p data-text-node="tutorialAdvancedAnswerRMB"></p>
    </div>
    <div class="tutorialQuestion">
      <p data-text-node="tutorialAdvancedQuestionDropdownMenus"></p>
      <p data-text-node="tutorialAdvancedAnswerDropdownMenus"></p>
    </div>
  `
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