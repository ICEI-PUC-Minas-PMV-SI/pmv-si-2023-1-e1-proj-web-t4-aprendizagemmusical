import * as uiScalesHelper from './uiScalesHelper.js';

export function generateFretboard(notesPerFret, frets, instrumentName){
  uiScalesHelper.resetComponent(uiScalesHelper.diagramDiv);
  uiScalesHelper.adjustGridStyle(frets, notesPerFret);
  uiScalesHelper.generateFret(notesPerFret, frets);

  if(instrumentName.toLowerCase() == "guitar") {
    assignInitialNotes(uiScalesHelper.GUITAR_STANDARD_TUNNING_INITIAL_NOTES);
    return;
  }
  if(instrumentName.toLowerCase() == "bass") {
    assignInitialNotes(uiScalesHelper.BASS_STANDARD_TUNNING_INITIAL_NOTES);
    return;
  }
  if(instrumentName.toLowerCase() == "piano") {
    assignInitialNotes(uiScalesHelper.PIANO_INITIAL_NOTES);
    return;
  }
  // for(let j = 0; j < frets; j++){ //horizontal
  //   for(let i = 0; i < notesPerFret+1; i++){ //vertical
      
  //     if(i == 0) {
  //       let html = `<div class="note" data-fretboard-number=${j+1}>1st</div>`;
  //       diagramDiv.insertAdjacentHTML("beforeend", html);
  //       continue;
  //     }

  //     let html = `<div class="note" data-fret-number=${j+1} data-fretboard-string-number=${(notesPerFret-i)+1}>${j+1}</div>`;
  //     diagramDiv.insertAdjacentHTML("beforeend", html);
  //   }
  // }
}

export function assignInitialNotes(initialNotes){
  console.log(initialNotes);
  let fretDiv = document.getElementsByClassName("fret")[0];
  let noteArray = [];
  
  for(let i = 0; i < fretDiv.children.length; i++) { //get only note elements
    const noteElement = fretDiv.children[i];
    if(noteElement.hasAttribute("data-fretboard-string-number")){
      noteArray.push(noteElement);
    }
  }

  for(let j = 0; j < noteArray.length; j++) { //itarate through them
    const noteElement = noteArray[j];
    noteElement.textContent = initialNotes[j];
  }
}

export function loadDefaultDiagram(){
  let notesPerFret = 6;
  let frets = 24;
  uiScalesHelper.generateFret(notesPerFret, frets);
  uiScalesHelper.adjustGridStyle(frets, notesPerFret);
  assignInitialNotes(uiScalesHelper.GUITAR_STANDARD_TUNNING_INITIAL_NOTES);
}