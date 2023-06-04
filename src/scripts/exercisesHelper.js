import exercisesObject from "../assets/json/exercises.json" assert { type: 'json' };

let exercisesPercepcaoMusicalBtn = document.getElementById('exercisesPercepcaoMusical');
let exercisesPercepcaoRitmicaBtn = document.getElementById('exercisesPercepcaoRitmica');
let exercisesCompleteEscalaBtn = document.getElementById('exercisesCompleteEscala');
let difficultyOptions = document.getElementById('difficultyOptions');
let difficultySelect = document.getElementById('difficultySelect');
let contentTextExercises = document.getElementById('contentTextExercises');


//event listeners
exercisesPercepcaoMusicalBtn.addEventListener("click", chooseExercise);
exercisesPercepcaoRitmicaBtn.addEventListener("click", chooseExercise);
exercisesCompleteEscalaBtn.addEventListener("click", chooseExercise);
difficultySelect.addEventListener("change", chooseExerciseDificulty);

function chooseExercise () {
    exercisesPercepcaoMusicalBtn.style.display = "none";
    exercisesPercepcaoRitmicaBtn.style.display = "none";
    exercisesCompleteEscalaBtn.style.display = "none";
    difficultyOptions.style.display = "block";
    chooseExerciseDificulty();
}

function chooseExerciseDificulty() {

    if (difficultySelect.value == null || difficultySelect.value == undefined) {
        difficultySelect.value = "intermediate"
    }
    contentTextExercises.textContent = exercisesObject[difficultySelect.value];
}

export {chooseExercise, chooseExerciseDificulty}