import * as intervalGenerator from './intervalGenerator.js'
import * as mainIntervals from './mainIntervals.js'

// modules/questionDisplay.js

 let currentExercise = {};

export function displayQuestion() {
  const level = document.getElementById("level").value;
  let intervalData = intervalGenerator.generateRandomInterval(level);
  document.getElementById("question").textContent =
    "Qual é o intervalo em semitons entre " +
    intervalData.note1 +
    " e " +
    intervalData.note2 +
    "?";
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").focus();
  
  console.log(Object.isFrozen(intervalData));
  console.log(intervalData);

  currentExercise = intervalData;


   
  // Desabilitar o botão "Próximo Exercício" após exibir a pergunta
  document.getElementById("next").disabled = true;
}

export function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = currentExercise.interval;



  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Resposta correta!";
  } else {
    document.getElementById("feedback").textContent =
      "Resposta incorreta! O intervalo correto é " +
      correctAnswer +
      " semitons (" +
      intervalGenerator.getIntervalName(correctAnswer) +
      ")";
  }
  

  // Habilitar o botão "Próximo Exercício"
  document.getElementById("next").disabled = false;
}

export function nextExercise() {
  displayQuestion();
  // Desabilitar o botão "Próximo Exercício" após exibir a próxima pergunta
  document.getElementById("next").disabled = true;
}

export function changeLevel() {
  const level = document.getElementById("level").value;
  mainIntervals.levelConfig[level];
  displayQuestion();
}
