import * as uiScalesController from './uiScalesController.js';
import * as uiScalesHelper from './uiScalesHelper.js';

//Elements
let guitarBtn = document.getElementById("guitarBtn");
let bassBtn = document.getElementById("bassBtn");
let pianoBtn = document.getElementById("pianoBtn");

//Listeners
guitarBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 6, 24, guitarBtn.value));
bassBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 4, 24, bassBtn.value));
pianoBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 1, 12, pianoBtn.value));

//Initialize UI
uiScalesController.loadDefaultDiagram();