import * as scalesHelper from './scalesHelper.js';

const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const intervalHashtable = {
  1: "Perfect Unison",
  2: "Minor Second",
  3: "Major Second",
  4: "Minor Third",
  5: "Major Third",
  6: "Perfect Fourth",
  7: "Augmented Fourth / Diminished Fifth",
  8: "Perfect Fifth",
  9: "Minor Sixth",
  10: "Major Sixth",
  11: "Minor Seventh",
  12: "Major Seventh",
  13: "Perfect Octave",
  14: "Minor Ninth",
  15: "Major Ninth",
  16: "Minor Tenth",
  17: "Major Tenth",
  18: "Perfect Eleventh",
  19: "Augmented Eleventh / Diminished Twelfth",
  20: "Perfect Twelfth",
  21: "Minor Thirteenth",
  22: "Major Thirteenth",
  23: "Minor Fourteenth",
  24: "Major Fourteenth",
  25: "Double Octave"
};

export function getChromaticScale(rootNote) { //get the whole chromatic scales based on the root
  let outputArray = [];
  let rootNoteIndex = scalesHelper.getNoteIndex(rootNote);
  
  if(rootNoteIndex === null) {
    return null;
  }
  
  for(let i = rootNoteIndex; i < rootNoteIndex+12; i++) {
    if(i >= 12){
      outputArray.push(notes[i%12]);
    }else{
      outputArray.push(notes[i]);
    }
  }
  return outputArray;
}

export function getMajorScale(rootNote) { //get some intervals that creates a major scale, based on the root note
  let majorScaleArray = [];
  let acceptedIntervals = [0, 2, 4, 5, 7, 9, 11];
  
  let chromaticScale = getChromaticScale(rootNote);
  if(chromaticScale === null) {
    return null;
  }
  
  for(let i = 0; i < chromaticScale.length; i++) {
    if(scalesHelper.hasInterval(i, acceptedIntervals)){
      majorScaleArray.push(chromaticScale[i]);
    }
  }
  return majorScaleArray;
}

export function getScaleCustomIntervals(rootNote, intervalsArray) {
  let majorScaleArray = [];
  let acceptedIntervals = intervalsArray;

  let chromaticScale = getChromaticScale(rootNote);
  if(chromaticScale === null) {
    return null;
  }

  for(let i = 0; i < chromaticScale.length; i++) {
    if(scalesHelper.hasInterval(i, acceptedIntervals)){
      majorScaleArray.push(chromaticScale[i]);
    }
  }

  if(!majorScaleArray.length) {
    return null;
  }
  return majorScaleArray;
}

export function getOctaves(n, scale){
  let output;
  for (let i = 0; i < n; i++) {
    output = scale.concat(scale);
  }
  return output;
}

export function sharpNoteToFlat(sharpNote) { //if the note has a # sign, it converts it to a flat note
  if(!sharpNote.includes("#")){
    return null;
  }

  let chromaticScale = getChromaticScale(sharpNote);
  if(chromaticScale === null) {
    return null;
  }
  
  let noteIndex = scalesHelper.getNoteIndexCustomScale(sharpNote, chromaticScale);
  let note = scalesHelper.getNoteNameFromIndex(noteIndex+1, chromaticScale);
  return note + "b";
}

export function addSemitone(note){
  let chromaticScale = getChromaticScale(note);
  if(chromaticScale === null) {
    return null;
  }
  let noteIndex = scalesHelper.getNoteIndexCustomScale(note, chromaticScale);
  let semitoneUp = scalesHelper.getNoteNameFromIndex(noteIndex+1, chromaticScale);
  return semitoneUp;
}

export function subtractSemitone(note){
  let chromaticScale = getChromaticScale(note);
  if(chromaticScale === null) {
    return null;
  }
  let noteIndex = scalesHelper.getNoteIndexCustomScale(note, chromaticScale);
  let semitoneDown = scalesHelper.getNoteNameFromIndex((noteIndex-1)+12, chromaticScale);
  return semitoneDown;
}

export function addWholetone(note){
  let chromaticScale = getChromaticScale(note);
  if(chromaticScale === null) {
    return null;
  }
  let noteIndex = scalesHelper.getNoteIndexCustomScale(note, chromaticScale);
  let semitoneUp = scalesHelper.getNoteNameFromIndex(noteIndex+2, chromaticScale);
  return semitoneUp;
}

export function subtractWholetone(note){
  let chromaticScale = getChromaticScale(note);
  if(chromaticScale === null) {
    return null;
  }
  let noteIndex = scalesHelper.getNoteIndexCustomScale(note, chromaticScale);
  let semitoneDown = scalesHelper.getNoteNameFromIndex((noteIndex-2)+12, chromaticScale);
  return semitoneDown;
}