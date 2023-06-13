export const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
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

export function getNoteIndex(rootNote){
  rootNote = rootNote.toUpperCase();
  if(!notes.includes(rootNote)) {
    return null;
  }
  return notes.indexOf(rootNote);
}

export function getNoteIndexCustomScale(rootNote, scale){
  rootNote = rootNote.toUpperCase();
  if(!scale.includes(rootNote)) {
    return null;
  }
  return scale.indexOf(rootNote);
}

export function hasInterval(i, acceptedIntervals){
  let foundInterval = acceptedIntervals.find(x => x == i);
  if(foundInterval != undefined) {
    return true;
  }
  return false;
}

export function getNoteNameFromIndex(noteIndex, scale) {
  return scale[noteIndex];
}
console.log("scalesHelper.js LOADED");