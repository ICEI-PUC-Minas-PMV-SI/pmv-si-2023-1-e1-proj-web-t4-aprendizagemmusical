// Script para processar os resultados do teste
const form = document.querySelector(".quiz-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obter as respostas selecionadas
  const genre = document.querySelector('input[name="genre"]:checked').value;
  const sound = document.querySelector('input[name="sound"]:checked').value;
  const patience = document.querySelector(
    'input[name="patience"]:checked'
  ).value;
  const size = document.querySelector('input[name="size"]:checked').value;
  const playStyle = document.querySelector(
    'input[name="play-style"]:checked'
  ).value;
  const brass = document.querySelector('input[name="brass"]:checked').value;
  const vocalRange = document.querySelector(
    'input[name="vocal-range"]:checked'
  ).value;
  const acousticElectronic = document.querySelector(
    'input[name="acoustic-electronic"]:checked'
  ).value;

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
  resultContainer.innerHTML = `
  <p>Com base nas suas respostas, o instrumento que combina mais com você é: <strong>${instrument}</strong>.</p>
  <img src="../assets/images/img-quizz/${instrument}.jpg" alt="${instrument}" />
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