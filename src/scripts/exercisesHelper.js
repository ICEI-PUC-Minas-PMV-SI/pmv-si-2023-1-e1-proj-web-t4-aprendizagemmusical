import exercisesObject from "../assets/json/exercises.json" assert { type: 'json' };

let exercisesPercepcaoMusicalBtn = document.getElementById('exercisesPercepcaoMusical');
let exercisesPercepcaoRitmicaBtn = document.getElementById('exercisesPercepcaoRitmica');
let exercisesCompleteEscalaBtn = document.getElementById('exercisesCompleteEscala');
//let difficultyOptions = document.getElementById('difficultyOptions');
//let difficultySelect = document.getElementById('difficultySelect');
//let contentTextExercises = document.getElementById('contentTextExercises');



//event listeners
//exercisesPercepcaoMusicalBtn.addEventListener("click", chooseExercise);
//exercisesPercepcaoRitmicaBtn.addEventListener("click", chooseExercise);
//exercisesCompleteEscalaBtn.addEventListener("click", chooseExercise);
//difficultySelect.addEventListener("change", chooseExerciseDificulty);
exercisesPercepcaoMusicalBtn.addEventListener("click", redirectToPercepcaoMusical);
exercisesPercepcaoRitmicaBtn.addEventListener("click", redirectToPercepcaoRitmica);
exercisesCompleteEscalaBtn.addEventListener("click", redirectToCompleteEscala);


function redirectToPercepcaoMusical() {
    window.location.href = 'exercisesIntervals.html';
  }

function redirectToPercepcaoRitmica() {
    window.location.href = 'exercisesRhythm.html';
  }

function redirectToCompleteEscala() {
    window.location.href = 'exercisesScale.html';
  }

//export {redirectToNewPage, chooseExerciseDificulty, showDifficultyOptions}
export { redirectToPercepcaoMusical, redirectToPercepcaoRitmica, redirectToCompleteEscala };
console.log("exercisesHelper.js LOADED");