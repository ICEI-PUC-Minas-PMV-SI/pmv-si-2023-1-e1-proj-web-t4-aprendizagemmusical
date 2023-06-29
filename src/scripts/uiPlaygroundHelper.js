import instrumentsObject from '../assets/json/instruments.json' assert { type: 'json' };
import { notes, getNoteIndex } from './scalesHelper.js';
import * as scalesHelper from './scalesHelper.js';
import * as scalesController from'./scalesController.js';
import { diagramDiv }  from './diagramHelper.js';
import * as diagramHelper  from './diagramHelper.js';
import * as uiPlayground  from './uiPlayground.js';
import playgroundFreePlayButtons from '../assets/json/playgroundFreePlayButtons.json' assert { type: 'json' };
import * as uiTranslation from './uiTranslation.js';
import * as uiPlaygroundController from './uiPlaygroundController.js';
import * as diagramController  from './diagramController.js';
import * as scaleController from './scalesController.js';

let playgroundDiv = document.querySelector("div.playground");

export function showAvailableTunnings(instrument) {
  let tunningSelect = document.getElementById("tunning");
  tunningSelect.innerHTML = "";
  const availableTunnings = instrumentsObject[instrument].tunnings;
  for(let i = 0; i < availableTunnings.length; i++) {
    tunningSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunnings[i].notes}">${availableTunnings[i].label}</option>`)
  }
}

export function showAvailableRootNotes() {
  let rootNoteSelect = document.getElementById("root");
  rootNoteSelect.innerHTML = "";
  for(let i = 0; i < notes.length; i++) {
    rootNoteSelect.insertAdjacentHTML("beforeend", `<option value="${notes[i]}">${notes[i]}</option>`)
  }
}

export function showAvailableScales(instrument) {
  let scaleSelect = document.getElementById("scale");
  scaleSelect.innerHTML = "";
  const availableTunningsScales = instrumentsObject[instrument].scales;
  for(let i = 0; i < availableTunningsScales.length; i++) {
    scaleSelect.insertAdjacentHTML("beforeend", `<option value="${availableTunningsScales[i].intervals}">${availableTunningsScales[i].label}</option>`)
  }
}

export function handleSharpFlatButtonValue() {
  let sharpFlatBtnTag = sharpFlatBtn.querySelector("button");
  sharpFlatBtnTag.value = sharpFlatBtnTag.value == "#" ? "b" : "#";
  sharpFlatBtnTag.textContent = sharpFlatBtnTag.textContent == "Show #" ? "Show b" : "Show #";
  changeDiagramAccidentalNotes();
}

export function assignEventListenersToAdvancedModeInitialNotes() {
  let fret = diagramHelper.getFret(0);
  let fretNotes = Array.from(fret.querySelectorAll("div.note"));
  fretNotes.forEach(note => {
    let selectElement = note.querySelector("select");
    selectElement.addEventListener("focus", uiPlayground.handleAdvancedPlaygroundInitialNotes);
    selectElement.addEventListener("change", uiPlayground.handleAdvancedPlaygroundInitialNotes);
  });
  let selectFieldValue = Array.from(fret.querySelectorAll("div.note select"));

  let defaultNoteArray = [];
  selectFieldValue.forEach(select => {
    defaultNoteArray.push(select.value);
  });
}

export function isChosenInitialNoteAscendent(oldValue, newValue) {
  return scalesHelper.getNoteIndex(newValue) > scalesHelper.getNoteIndex(oldValue) == true ? true : false; 
}

export function showDefaultAdvancedFreeplayPlayground() {
  let diagramDiv = diagramHelper.diagramDiv;
  diagramDiv.setAttribute("data-diagram-mode","freeplay");
  showFreePlayPlayground();
  uiPlayground.showTutorial();
}

export function showFreePlayPlayground(){
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
  let tunningSelect = document.getElementById("tunning");
  let rootNoteSelect = document.getElementById("root");
  let scaleSelect = document.getElementById("scale");
  let sharpFlatBtn = document.getElementById("sharpFlatBtn");
  
  sharpFlatBtn.addEventListener("click", handleSharpFlatButtonValue);
  uiPlaygroundController.loadDefaultDiagram();
  uiPlaygroundController.updatePlaygroundUiOptions("guitar");
  uiPlayground.assignNotesDefaultStyle();
}

export function showAdvancedPlayground(){
  
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
  
  let sharpFlatBtnTag = document.querySelector("#sharpFlatBtn");
  let sharpFlatBtn = sharpFlatBtnTag.querySelector("button");
  sharpFlatBtn.addEventListener("click", handleSharpFlatButtonValue);

  let guitarBtn = document.getElementById("guitarBtn");
  let bassBtn = document.getElementById("bassBtn");
  let pianoBtn = document.getElementById("pianoBtn");
  uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);
  
  guitarBtn.addEventListener("click", showInstrumentDiagram);
  bassBtn.addEventListener("click", showInstrumentDiagram);
  pianoBtn.addEventListener("click", showInstrumentDiagram);

  uiPlaygroundController.loadDefaultAdvancedDiagram();
  assignEventListenersToAdvancedModeInitialNotes();
  diagramController.assignAdvancedModeSubSequentialNotes();
  diagramController.assignEventListenersToNotesAdvancedMode();
}

//should be in helper
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
  let guitarBtn = document.getElementById("guitarBtn");
  let bassBtn = document.getElementById("bassBtn");
  let pianoBtn = document.getElementById("pianoBtn");

  uiTranslation.translateElements([guitarBtn, bassBtn, pianoBtn]);
  
  guitarBtn.addEventListener("click", showInstrumentDiagram);
  bassBtn.addEventListener("click", showInstrumentDiagram);
  pianoBtn.addEventListener("click", showInstrumentDiagram);
}

export function reallocateManuallyMarkedNoteStyles(stringNumber, isAscendent, stepsApart) {
  let sharpFlatBtnTag = document.querySelector("#sharpFlatBtn");
  let sharpFlatBtn = sharpFlatBtnTag.querySelector("button");
  //TODO
    //ARRANGE FOR WHEN THE USER AT SHOW Flat option
      //Do the logic using the sharp, than convert it all
  if(isAscendent) {
    let stringNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-fretboard-string-number="${stringNumber}"]`));
    let stringMarkedNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-manually-marked="true"][data-fretboard-string-number="${stringNumber}"]`));
    let markedNoteData = [];
    
    stringMarkedNotesArray.forEach(note => {
      let obj = {};
      obj["position"] = note.getAttribute("data-fretboard-fret-number");
      obj["chosenColor"] = note.getAttribute("data-manually-chosen-color");
      markedNoteData.push(obj);

      note.style.backgroundColor = "";
      note.removeAttribute("data-manually-marked");
      note.removeAttribute("data-manually-chosen-color");
    });
    
    markedNoteData.forEach(markedNote => markedNote.position = markedNote.position-stepsApart)
    stringNotesArray.map(note => {
      let foundNote = markedNoteData.find(markedObject => markedObject.position == note.getAttribute("data-fretboard-fret-number"));
      if(foundNote) {
        note.setAttribute("data-manually-marked", true);
        note.setAttribute("data-manually-chosen-color", foundNote.chosenColor);
        note.style.backgroundColor = foundNote.chosenColor;
      }
    })

  } else {
    let stringNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-fretboard-string-number="${stringNumber}"]`));
    let stringMarkedNotesArray = Array.from(diagramDiv.querySelectorAll(`div.note[data-manually-marked="true"][data-fretboard-string-number="${stringNumber}"]`));
    let markedNoteData = [];

    stringMarkedNotesArray.forEach(note => {
      let obj = {};
      obj["position"] = parseInt(note.getAttribute("data-fretboard-fret-number"));
      obj["chosenColor"] = note.getAttribute("data-manually-chosen-color");
      markedNoteData.push(obj);

      note.style.backgroundColor = "";
      note.removeAttribute("data-manually-marked");
      note.removeAttribute("data-manually-chosen-color");
    });
    markedNoteData.forEach(markedNote => markedNote.position = parseInt(markedNote.position) + 12 - stepsApart + (stepsApart >= 12 ? 12 : 0));
    stringNotesArray.map(note => {
      let foundNote = markedNoteData.find(markedObject => markedObject.position == note.getAttribute("data-fretboard-fret-number"));
      if(foundNote) {
        note.setAttribute("data-manually-marked", true);
        note.setAttribute("data-manually-chosen-color", foundNote.chosenColor);
        note.style.backgroundColor = foundNote.chosenColor;
      }
    })
  }
}

export function changeDiagramAccidentalNotes() {
  
  let sharpFlatBtnTag = document.getElementById("sharpFlatBtn").querySelector("button");
  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "freeplay"){
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

  if(diagramHelper.diagramDiv.getAttribute("data-diagram-mode") == "advanced"){
    
    if(sharpFlatBtnTag.value == "b") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic

        if(fret.getAttribute("data-fret-number") == 0) {
          Array.from(fret.querySelectorAll("select")).forEach(select => {
            Array.from(fret.querySelectorAll("option")).forEach(option => {
              option.text = convertSharpToFlat(option.text);
              option.value = convertSharpToFlat(option.value);
            });
          });
        } else {
          const notesArray = fret.getElementsByClassName("note");
          Object.values(notesArray).forEach(note => { //each note
            if(note.textContent.includes("#")){
              note.textContent = scalesController.sharpNoteToFlat(note.textContent);
            }
          });
        }

      });
      return;
    }

    if(sharpFlatBtnTag.value == "#") {
      let fretArray = diagramDiv.getElementsByClassName("fret");
      Object.values(fretArray).forEach(fret => { //each fret logic
        if(fret.getAttribute("data-fret-number") == 0) {
          Array.from(fret.querySelectorAll("select")).forEach(select => {
            Array.from(fret.querySelectorAll("option")).forEach(option => {
              option.text = convertFlatToSharp(option.text);
              option.value = convertFlatToSharp(option.value);
            });
          });
        } else {
          const notesArray = fret.getElementsByClassName("note");
          Object.values(notesArray).forEach(note => { //each note
            if(note.textContent.includes("b")){
              note.textContent = scalesController.flatNoteToSharp(note.textContent);
            }
          })
        }

      });
      return;
    }
  }
}

export function forceSharpLayout(sharp) {
  if(sharp) {
    let fretArray = diagramDiv.getElementsByClassName("fret");
    Object.values(fretArray).forEach(fret => { //each fret logic
      if(fret.getAttribute("data-fret-number") == 0) {
        Array.from(fret.querySelectorAll("select")).forEach(select => {
          Array.from(fret.querySelectorAll("option")).forEach(option => {
            option.text = convertFlatToSharp(option.text);
            option.value = convertFlatToSharp(option.value);
          });
        });
      } else {
        const notesArray = fret.getElementsByClassName("note");
        Object.values(notesArray).forEach(note => { //each note
          if(note.textContent.includes("b")){
            note.textContent = scalesController.flatNoteToSharp(note.textContent);
          }
        })
      }

    });
    return;
  }
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

export function convertSharpToFlat(note){
  return scalesController.sharpNoteToFlat(note);
}

export function convertFlatToSharp(note){
  return scalesController.flatNoteToSharp(note);
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

export function resetComponent(component){
  if(component.innerHTML == "") {
    return;
  }
  component.innerHTML = "";
}
console.log("uiPlaygroundHelper.js LOADED");