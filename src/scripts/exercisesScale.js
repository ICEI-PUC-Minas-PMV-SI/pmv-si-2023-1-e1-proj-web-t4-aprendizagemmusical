const notes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
let scale = [];

function getRandomNote() {
  const randomIndex = Math.floor(Math.random() * notes.length);
  return notes[randomIndex];
}

function generateRandomScale(numMissingNotes) {
    const rootNote = getRandomNote();
    const intervals = [0, 2, 4, 5, 7, 9, 11]; // Major scale intervals
    const generatedScale = [];
  
    const rootNoteIndex = notes.indexOf(rootNote);
    if (rootNoteIndex === -1) {
      return null;
    }
  
    for (let i = 0; i < intervals.length; i++) {
      const noteIndex = (rootNoteIndex + intervals[i]) % notes.length;
      generatedScale.push(notes[noteIndex]);
    }
  
    // Remove algumas notas aleatoriamente para criar uma escala incompleta
    const missingNotes = [];
    while (missingNotes.length < numMissingNotes) {
      const randomNote = generatedScale.splice(Math.floor(Math.random() * generatedScale.length), 1)[0];
      missingNotes.push(randomNote);
    }
  
    scale = generatedScale;
    return missingNotes;
  }

  function gerarEscala() {
    const level = document.getElementById("nivelDificuldade").value;
    let numMissingNotes;
  
    switch (level) {
      case "basico":
        numMissingNotes = 2;
        break;
      case "intermediario":
        numMissingNotes = 4;
        break;
      case "avancado":
        numMissingNotes = 6;
        break;
      default:
        return;
    }
  
    const missingNotes = generateRandomScale(numMissingNotes);
  
    if (scale === null) {
      document.getElementById("escalaIncompleta").innerHTML = "Escala não pôde ser gerada.";
    } else {
      document.getElementById("escalaIncompleta").innerHTML = "Escala Incompleta: " + scale.join(", ");
    }
  
    document.getElementById("respostaEscala").disabled = false;
    document.getElementById("respostaEscala").disabled = false;
    document.getElementById("resultadoEscala").innerHTML = "";
    document.getElementById("resultadoEscala").style.display = "none";
    document.getElementById("respostaEscala").value = "";
  
    const respostaEscalaLabel = document.getElementById("respostaEscalaLabel");
    respostaEscalaLabel.innerHTML = "Digite as " + numMissingNotes + " notas que faltam na escala:";
    respostaEscalaLabel.style.display = "block";
  }

function generateMissingNotes() {
    const missingNotes = [];
  
    for (let i = 0; i < notes.length; i++) {
      if (!scale.includes(notes[i])) {
        missingNotes.push(notes[i]);
      }
    }
  
    return missingNotes;
  }
  
  function checkAnswer(userAnswer, missingNotes) {
    const userNotes = userAnswer.split(",").map(note => note.trim());
  
    if (userNotes.length !== missingNotes.length) {
      return false;
    }
  
    for (let i = 0; i < userNotes.length; i++) {
      if (!missingNotes.includes(userNotes[i])) {
        return false;
      }
    }
  
    return true;
  }
  
  function verificarRespostaEscala() {
    const respostaUsuario = document.getElementById("respostaEscala").value;
    const missingNotes = generateMissingNotes();
  
    if (missingNotes.length === 0) {
      document.getElementById("resultadoEscala").innerHTML = "Escala completa. Não há notas faltando.";
    } else {
      if (checkAnswer(respostaUsuario, missingNotes)) {
        document.getElementById("resultadoEscala").innerHTML = "Resposta: Correta!";
      } else {
        document.getElementById("resultadoEscala").innerHTML = "Resposta: Incorreta. As notas que faltam são: " + missingNotes.join(", ");
      }
    }
  
    document.getElementById("resultadoEscala").style.display = "block";
  }
