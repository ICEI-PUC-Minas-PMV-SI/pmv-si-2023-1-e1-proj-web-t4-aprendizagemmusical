import * as uiPlayground from './uiPlayground.js'
import * as uiPlaygroundHelper from './uiPlaygroundHelper.js'
import * as diagramController from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';

export function handleClick(e){
    updatePlaygroundUiOptions(e.target.value);
    uiPlayground.assignNotesDefaultStyle();
}

export function updatePlaygroundUiOptions(instrument) {
  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "freeplay"){
    uiPlaygroundHelper.showAvailableTunnings(instrument);
    uiPlaygroundHelper.showAvailableScales(instrument);
    uiPlaygroundHelper.showAvailableRootNotes();
  }
  
  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "advanced"){
    diagramController.assignAdvancedPlaygroundInitialNotes();
    uiPlaygroundHelper.assignEventListenersToAdvancedModeInitialNotes();
    diagramController.assignAdvancedModeSubSequentialNotes();
  }
  uiPlaygroundHelper.changeDiagramAccidentalNotes();
}

export function loadDiagram() {
  diagramHelper.diagramDiv.innerHTML = "";
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  let notesPerFret = 6;
  let frets = diagramHelper.isScreenSmall(windowWidth) == true ? 12 : 24; //develop a handler
  diagramHelper.generateFret(notesPerFret, frets);
  diagramHelper.adjustGridStyle(frets, notesPerFret);
}

export function loadDefaultDiagram() {
  loadDiagram();
  diagramController.assignNotesFromTunningNotes(diagramHelper.GUITAR_STANDARD_TUNNING_INITIAL_NOTES);
}

export function loadDefaultAdvancedDiagram() {
  loadDiagram();
  diagramController.assignAdvancedPlaygroundInitialNotes();
}
console.log("uiPlaygroundController.js LOADED");