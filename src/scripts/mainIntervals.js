import * as questionDisplay from './questionDisplay.js'

export let levelConfig = {
  easy: {
    maxInterval: 5,
  },
  medium: {
    maxInterval: 8,
  },
  hard: {
    maxInterval: 12,
  },
};




document.getElementById("submit").addEventListener("click", questionDisplay.checkAnswer);
document.getElementById("next").addEventListener("click", questionDisplay.nextExercise);
document.getElementById("level").addEventListener("change", questionDisplay.changeLevel);

// Iniciar o primeiro exercício
questionDisplay.displayQuestion();