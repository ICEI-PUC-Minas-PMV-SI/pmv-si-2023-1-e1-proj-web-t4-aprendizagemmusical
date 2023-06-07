import * as scalesController from './scalesController.js';
import * as scalesHelper from './scalesHelper.js';

//here goes the beautiful code

console.log(scalesHelper.getNoteIndex("c"));
console.log(scalesHelper.getNoteIndex("d"));
console.log(scalesHelper.getNoteIndex("f#"));
console.log(scalesHelper.getNoteIndex("j#")); //return null | Not a valid note

console.log(scalesController.getChromaticScale("b"));
console.log(scalesHelper.getNoteIndex("j#")); //return null | Not a valid note

console.log(scalesController.getMajorScale("g#"));
console.log(scalesController.getMajorScale("k#")); //return null | Not a valid note

console.log(scalesController.sharpNoteToFlat("D#"));
console.log(scalesController.sharpNoteToFlat("D")); //return null | Not a sharp note

console.log(scalesController.addSemitone("C#"));
console.log(scalesController.addSemitone("K#")); //return null | Not a valid note

console.log(scalesController.subtractSemitone("e"));
console.log(scalesController.subtractSemitone("j#")); //return null | Not a valid note