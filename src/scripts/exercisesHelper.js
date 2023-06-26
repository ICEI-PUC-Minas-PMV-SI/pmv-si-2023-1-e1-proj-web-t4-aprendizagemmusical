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
exercisesPercepcaoMusicalBtn.addEventListener("click", redirectToNewPage);
exercisesPercepcaoRitmicaBtn.addEventListener("click", redirectToNewPage);
exercisesCompleteEscalaBtn.addEventListener("click", redirectToNewPage);


function redirectToNewPage() {
    window.location.href = 'exercisesChooseMode.html';
  }

//export {redirectToNewPage, chooseExerciseDificulty, showDifficultyOptions}
export { redirectToNewPage };
console.log("exercisesHelper.js LOADED");