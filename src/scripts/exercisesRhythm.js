var audioContext = new (window.AudioContext || window.webkitAudioContext)();
var rhythmInterval;
var rhythmIndex = 0;
var previousRhythmIndex = -1; // Índice do ritmo anterior
var rhythms = {
  basico: [
    [true, false, true, false],  // Exemplo de ritmo básico
    [false, true, false, true],
    [true, true, false, false]
  
  ],
  intermediario: [
    [true, false, false, false, true, false, false, false],  // Exemplo de ritmo intermediário
    [true, false, false, true, false, false, true, false],
    [true, true, true, false, false, false, false, false]

  ],
  avancado: [
    [true, false, false, false, false, true, false, false],  // Exemplo de ritmo avançado
    [true, false, true, false, true, false, true, false],
    [true, true, true, false, true, false, true, false]

  ]
};

var bpmRanges = {
  basico: { min: 60, max: 130 },
  intermediario: { min: 130, max: 180 },
  avancado: { min: 180, max: 250 }
};

var ball = document.getElementById("ball");


var isPlaying = false;
var isCorrect = false;
var isSpaceKeyPressed = false; 

function playTone() {
  var synth = new Tone.Synth().toDestination();
  synth.triggerAttackRelease("C4", "0.2"); // Tocar a nota C4 por 0.2 segundos
}

function generateRandomBPM(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomRhythm(difficulty) {
  var rhythmList = rhythms[difficulty];
  var rhythmLength = rhythmList.length;

  // Selecionar um índice de ritmo aleatório diferente do ritmo anterior
  var randomIndex = Math.floor(Math.random() * rhythmLength);
  while (randomIndex === previousRhythmIndex) {
    randomIndex = Math.floor(Math.random() * rhythmLength);
  }

  previousRhythmIndex = randomIndex;
  return rhythmList[randomIndex];
}

function playRhythm() {
  var difficulty = document.getElementById("nivelDificuldade").value;
  var rhythm = getRandomRhythm(difficulty);
  var index = 0;
  var bpmRange = bpmRanges[difficulty];
  var bpm = generateRandomBPM(bpmRange.min, bpmRange.max);
  var intervalTime = 60000 / bpm;  // Calcular o intervalo com base no BPM

  ball.style.backgroundColor = "transparent";  // Esconde a bola no início do ritmo

  rhythmInterval = setInterval(function() {
    ball.style.backgroundColor = "transparent";

    if (rhythm[index]) {
      playTone();  // Reproduz o som apenas quando a batida é correta
      isCorrect = true;
    } else {
      isCorrect = false;
    }

    index++;
    if (index >= rhythm.length) {
      index = 0;
    }
  }, intervalTime);  // Intervalo definido pelo BPM

  isPlaying = true;
}

function stopRhythm() {
  clearInterval(rhythmInterval);
  ball.style.backgroundColor = "transparent";  // Esconde a bola ao parar o ritmo
  isPlaying = false;
  isSpaceKeyPressed = false; // Reinicia a variável quando o ritmo é interrompido
}

function playNextRhythm() {
  stopRhythm();
  rhythmIndex = (rhythmIndex + 1) % rhythms.length;  // Avança para o próximo ritmo na lista circularmente

  ball.style.backgroundColor = "transparent";  // Esconde a bola no início do ritmo

  setTimeout(function() {
    playRhythm();
  }, 100);  // Adiciona um pequeno atraso antes de iniciar o próximo ritmo
}

document.getElementById("playButton").addEventListener("click", function() {
  if (!isPlaying) {
    playRhythm();
  }
});

document.getElementById("stopButton").addEventListener("click", stopRhythm);

document.getElementById("nextButton").addEventListener("click", playNextRhythm);

document.addEventListener("click", function() {
  if (isPlaying) {
    if (isCorrect) {
      ball.style.backgroundColor = "green"; // Muda a cor da bola para verde se o clique estiver correto
    } else {
      ball.style.backgroundColor = "red"; // Muda a cor da bola para vermelho se o clique estiver errado ou fora de tempo
    }
  }
});

document.addEventListener("touchstart", function() {
  if (isPlaying) {
    if (isCorrect) {
      ball.style.backgroundColor = "green"; // Muda a cor da bola para verde se o toque estiver correto
    } else {
      ball.style.backgroundColor = "red"; // Muda a cor da bola para vermelho se o toque estiver errado ou fora de tempo
    }
  }
});
  
