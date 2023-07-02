// Script para processar os resultados do teste
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obter as respostas selecionadas
  const genre = document.querySelector('input[name="genre"]:checked').value;
  const sound = document.querySelector('input[name="sound"]:checked').value;
  const patience = document.querySelector('input[name="patience"]:checked').value;
  const size = document.querySelector('input[name="size"]:checked').value;
  const playStyle = document.querySelector('input[name="play-style"]:checked').value;
  const brass = document.querySelector('input[name="brass"]:checked').value;
  const vocalRange = document.querySelector('input[name="vocal-range"]:checked').value;
  const acousticElectronic = document.querySelector('input[name="acoustic-electronic"]:checked').value;

  // Calcular o resultado
  let instrument = "";

  // Lógica para calcular o resultado com base nas respostas selecionadas
  if (genre === "rock") {
    if (sound === "powerful" && size === "large") {
      instrument = "Bateria";
    } else {
      instrument = "Guitarra";
    }
  } else if (genre === "pop") {
    if (sound === "melodious" && patience === "patient") {
      instrument = "Violão";
    } else if (sound === "expressive" && vocalRange === "soprano") {
      instrument = "Piano";
    } else {
      instrument = "Teclado";
    }
  } else if (genre === "classical") {
    if (sound === "melodious" && patience === "very-patient") {
      instrument = "Violino";
    } else if (sound === "expressive" && patience === "neutral") {
      instrument = "Violoncelo";
    } else {
      instrument = "Piano";
    }
  } else if (genre === "jazz") {
    if (sound === "improvised" && playStyle === "solo") {
      instrument = "Saxofone";
    } else if (sound === "expressive" && brass === "love") {
      instrument = "Trompete";
    } else {
      instrument = "Contrabaixo";
    }
  } else if (genre === "electronic") {
    if (sound === "experimental" && acousticElectronic === "electronic") {
      instrument = "Sintetizador";
    } else if (sound === "improvised" && playStyle === "experimental") {
      instrument = "Controlador MIDI";
    } else {
      instrument = "Sampler";
    }
  } else {
    instrument = "Instrumento de sua escolha";
  }

  // Antes de exibir o resultado, verifica se ele já foi exibido anteriormente
  const previousResult = form.querySelector(".result-container");
  if (previousResult) {
    form.removeChild(previousResult);
  }

// Exibir o resultado ao usuário
const resultContainer = document.createElement("div");
resultContainer.className = "result-container";

const language = localStorage.getItem("userPreferredLanguage");

let translatedInstrument = "";

if (language === "ptbr") {
  if (instrument === "Bateria") {
    translatedInstrument = "Bateria";
  } else if (instrument === "Guitarra") {
    translatedInstrument = "Guitarra";
  } else if (instrument === "Violão") {
    translatedInstrument = "Violão";
  } else if (instrument === "Piano") {
    translatedInstrument = "Piano";
  } else if (instrument === "Teclado") {
    translatedInstrument = "Teclado";
  } else if (instrument === "Violino") {
    translatedInstrument = "Violino";
  } else if (instrument === "Violoncelo") {
    translatedInstrument = "Violoncelo";
  } else if (instrument === "Saxofone") {
    translatedInstrument = "Saxofone";
  } else if (instrument === "Trompete") {
    translatedInstrument = "Trompete";
  } else if (instrument === "Contrabaixo") {
    translatedInstrument = "Contrabaixo";
  } else if (instrument === "Sintetizador") {
    translatedInstrument = "Sintetizador";
  } else if (instrument === "Controlador MIDI") {
    translatedInstrument = "Controlador MIDI";
  } else if (instrument === "Sampler") {
    translatedInstrument = "Sampler";
  } else {
    translatedInstrument = "Instrumento de sua escolha";
  }
} else {
  if (instrument === "Bateria") {
    translatedInstrument = "Drums";
  } else if (instrument === "Guitarra") {
    translatedInstrument = "Guitar";
  } else if (instrument === "Violão") {
    translatedInstrument = "Acoustic Guitar";
  } else if (instrument === "Piano") {
    translatedInstrument = "Piano";
  } else if (instrument === "Teclado") {
    translatedInstrument = "Keyboard";
  } else if (instrument === "Violino") {
    translatedInstrument = "Violin";
  } else if (instrument === "Violoncelo") {
    translatedInstrument = "Cello";
  } else if (instrument === "Saxofone") {
    translatedInstrument = "Saxophone";
  } else if (instrument === "Trompete") {
    translatedInstrument = "Trumpet";
  } else if (instrument === "Contrabaixo") {
    translatedInstrument = "Bass Guitar";
  } else if (instrument === "Sintetizador") {
    translatedInstrument = "Synthesizer";
  } else if (instrument === "Controlador MIDI") {
    translatedInstrument = "MIDI Controller";
  } else if (instrument === "Sampler") {
    translatedInstrument = "Sampler";
  } else {
    translatedInstrument = "Instrument of your choice";
  }
}


let resultText = "";

if (language === "ptbr") {
  resultText = "Com base nas suas respostas, o instrumento que combina mais com você é";
} else {
  resultText = "Based on your answers, the instrument that best suits you is";
}

resultContainer.innerHTML = `
  <p>${resultText} <strong>${translatedInstrument}</strong>.</p>
  <img src="../assets/images/img-quizz/${instrument}.jpg"" />
`;

form.appendChild(resultContainer);
});
const resetButton = document.querySelector('button[type="reset"]');
resetButton.addEventListener("click", function () {
  // Remover o resultado anterior, se existir
  const resultContainer = document.querySelector(".result-container");
  if (resultContainer) {
    form.removeChild(resultContainer);
  }

  // Remover a imagem anterior, se existir
  const imageContainer = document.querySelector(".image-container");
  if (imageContainer) {
    form.removeChild(imageContainer);
  }
});