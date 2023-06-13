import * as uiPlaygroundHelper from './uiPlaygroundHelper.js'
import * as diagramController from './diagramController.js';
import * as diagramHelper from './diagramHelper.js';

export function handleClick(e){
  updatePlaygroundUiOptions(e.target.value);
}

export function updatePlaygroundUiOptions(instrument) {
  uiPlaygroundHelper.showAvailableTunnings(instrument);
  uiPlaygroundHelper.showAvailableScales(instrument);
  uiPlaygroundHelper.showAvailableRootNotes();
  uiPlaygroundHelper.changeDiagramAccidentalNotes();
}

export function loadDefaultDiagram() {
  diagramHelper.diagramDiv.innerHTML = "";
  let windowWidth = window.innerWidth || document.documentElement.clientWidth;
  
  let notesPerFret = 6;
  let frets = diagramHelper.isScreenSmall(windowWidth) == true ? 12 : 24; //develop a handler
  diagramHelper.generateFret(notesPerFret, frets);
  diagramHelper.adjustGridStyle(frets, notesPerFret);
  diagramController.assignNotesFromTunningNotes(diagramHelper.GUITAR_STANDARD_TUNNING_INITIAL_NOTES);
}