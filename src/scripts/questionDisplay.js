import * as intervalGenerator from './intervalGenerator.js'
import * as mainIntervals from './mainIntervals.js'

// modules/questionDisplay.js

 let currentExercise = {};

export function displayQuestion() {
  const level = document.getElementById("level").value;
  let intervalData = intervalGenerator.generateRandomInterval(level);
  const language = localStorage.getItem("userPreferredLanguage");
  let questionText = "";

  if (language === "ptbr") {
    questionText = "Qual é o intervalo em semitons entre " + intervalData.note1 + " e " + intervalData.note2 + "?";
  } else {
    questionText = "What is the interval in semitones between " + intervalData.note1 + " and " + intervalData.note2 + "?";
  }

  document.getElementById("question").textContent = questionText;
  document.getElementById("answer").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("answer").focus();
  


  currentExercise = intervalData;


   
  // Desabilitar o botão "Próximo Exercício" após exibir a pergunta
  document.getElementById("next").disabled = true;
}

export function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  const correctAnswer = currentExercise.interval;



  const language = localStorage.getItem("userPreferredLanguage");
  let resultText = "";

  if (language === "ptbr") {
    resultText = "Resposta incorreta! O intervalo correto é";
  } else {
    resultText = "Incorrect answer! The correct interval is";
  }

  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Resposta correta!";
  } else {
    const intervalName = intervalGenerator.getIntervalName(correctAnswer);
    document.getElementById("feedback").textContent = `${resultText} ${correctAnswer} semitons.`;
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
