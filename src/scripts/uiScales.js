let diagramDiv = document.getElementsByClassName("diagram")[0];
let guitarBtn = document.getElementById("guitarBtn");
let bassBtn = document.getElementById("bassBtn");
let pianoBtn = document.getElementById("pianoBtn");

guitarBtn.addEventListener("click", handleFretboarGeneratorParams.bind(null, 6, 24));
bassBtn.addEventListener("click", handleFretboarGeneratorParams.bind(null, 4, 24));
pianoBtn.addEventListener("click", handleFretboarGeneratorParams.bind(null, 1, 12));

export function generateFretboard(notesPerFret, frets){
  resetComponent(diagramDiv);
  diagramDiv.style.gridTemplateColumns = `repeat(${frets}, 1fr)`;
  diagramDiv.style.gridTemplateRows = `25px repeat(${notesPerFret}, 1fr)`;
  generateFret(notesPerFret, frets);
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
export function loadDefaultDiagram(){
  let notesPerFret = 6;
  let frets = 24;
  diagramDiv.style.gridTemplateColumns = `repeat(${frets}, 1fr)`;
  diagramDiv.style.gridTemplateRows = `25px repeat(${notesPerFret}, 1fr)`;
  generateFret(notesPerFret, frets);
}

//helpers
function generateFret(notesPerFret, frets) {
  for(let i = 0; i < frets; i++){ //horizontal
    generateFretNote(notesPerFret, i);
  }
}

function generateFretNote(notesPerFret, currentFret) {
  for(let i = 0; i < getFretNoteIdentifier(notesPerFret); i++){ //horizontal
    if(i == 0) {
      let html = `<div class="note" data-fretboard-number=${i+1}>${getCurrentFret(currentFret)}</div>`;
      diagramDiv.insertAdjacentHTML("beforeend", html);
      continue;
    }
    let html = `<div class="note" data-fret-number=${i+1} data-fretboard-string-number=${(notesPerFret-i)+1}></div>`;
    diagramDiv.insertAdjacentHTML("beforeend", html);
  }
}

function getFretNoteIdentifier(notesPerFret) {
  return notesPerFret+1;
}

function getCurrentFret(currentFret) {
  return currentFret+1;
}

function handleFretboarGeneratorParams(notesPerFret, frets){
  generateFretboard(notesPerFret, frets);
}

function resetComponent(component){
  if(component.innerHTML == "") {
    return;
  }
  component.innerHTML = "";
}