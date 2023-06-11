import * as uiScalesController from './uiScalesController.js';
import * as uiScalesHelper from './uiScalesHelper.js';
import * as uiPlayground from './uiPlayground.js';
//Elements
export let guitarBtn = document.getElementById("guitarBtn");
export let bassBtn = document.getElementById("bassBtn");
export let pianoBtn = document.getElementById("pianoBtn");

//Listeners
guitarBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 6, 24, guitarBtn.value));
bassBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 4, 24, bassBtn.value));
pianoBtn.addEventListener("click", uiScalesHelper.handleFretboarGeneratorParams.bind(null, 1, 12, pianoBtn.value));

guitarBtn.addEventListener("click", uiPlayground.handleClick);
bassBtn.addEventListener("click", uiPlayground.handleClick);
pianoBtn.addEventListener("click", uiPlayground.handleClick);

//Initialize UI
uiScalesController.loadDefaultDiagram();
uiPlayground.updatePlaygroundUiOptions("guitar");