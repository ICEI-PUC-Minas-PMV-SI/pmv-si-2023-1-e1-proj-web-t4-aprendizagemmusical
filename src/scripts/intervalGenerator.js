import * as scalesHelper from './scalesHelper.js';
import * as scalesController from './scalesController.js';
import * as mainIntervals from './mainIntervals.js'

export function getInterval(note1, note2) { //função retorna um numero de semitons de distancia  de intervalo
  let chromaticScale = scalesController.getChromaticScale(note1);
  if (chromaticScale === null) {
    return null;
  }
  let note1Index = scalesHelper.getNoteIndexCustomScale(note1, chromaticScale);
  let note2Index = scalesHelper.getNoteIndexCustomScale(note2, chromaticScale);

  let interval = Math.abs(note2Index - note1Index);
  if (interval > 12) {
    interval = 12 - (interval % 12);
  }
  return interval;
}

export function getIntervalName(interval) { // retorna o nome do intervalo
  return scalesHelper.intervalHashtable[interval+1]; // +1 pq a hashtable começa em 1=unissono, para nao ocorrer erro entre a distancia em semitons e o nome é somado mais +1.
}

export function generateRandomInterval(level) {
  const config = mainIntervals.levelConfig[level];
  const maxInterval = config.maxInterval;

  const note1 = getRandomNote();
  const note2 = addSemitones(note1, getRandomInterval(maxInterval));

  const interval = getInterval(note1, note2);
  const intervalName = getIntervalName(interval);

  return {
    note1: note1,
    note2: note2,
    interval: interval,
    intervalName: intervalName
  };
  
  
}

export function getRandomNote() {
  return scalesHelper.notes[Math.floor(Math.random() * scalesHelper.notes.length)];
}

function getRandomInterval(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function addSemitones(note, semitones) {
  let chromaticScale = scalesController.getChromaticScale(note);
  if (chromaticScale === null) {
    return null;
  }
  let noteIndex = scalesHelper.getNoteIndexCustomScale(note, chromaticScale);
  let targetNoteIndex = (noteIndex + semitones) % 12;
  let targetNote = chromaticScale[targetNoteIndex];
  return targetNote;
}