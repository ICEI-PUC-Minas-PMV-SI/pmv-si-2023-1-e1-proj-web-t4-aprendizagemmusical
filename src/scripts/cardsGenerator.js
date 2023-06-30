const divAlter = document.querySelector("#elemento-dinamico");
console.log(divAlter)
const urlImagens = [
  { image: "music_sheet.jpg", textH2: "title-course-1", textP: "courseLessonsAndTime-1", textAlt: "Photo of music sheets", refLink:" /src/views/theory/historyOfMpb.html" },
  { image: "music_history.jpeg", textH2: "title-course-2", textP: "courseLessonsAndTime-2", textAlt: "Photo of an Egyptian mural with a drawing of people with ancient instruments",refLink:" /src/views/theory/historyOfMusic.html" },
  { image: 'drum_percussion.jpg', textH2: "title-course-3", textP: "courseLessonsAndTime-3", textAlt: "Photo of a drum", refLink:" /src/views/theory/drums.html"},
  { image: "jazz.jpeg", textH2: "title-course-4", textP: "courseLessonsAndTime-4", textAlt: "Photo of jazz band", refLink:" /src/views/theory/historyOfJazz.html" },
  { image: 'violin.jpg', textH2: "title-course-5", textP: "courseLessonsAndTime-5", textAlt: "Photo of a violin", refLink:"/src/views/theory/violin.html" },
  { image: 'trumpet.jpg', textH2: "title-course-6", textP: "courseLessonsAndTime-6", textAlt: "Photo of trumpet player", refLink:" /src/views/theory/saxophone.html" },
  { image: "keys.jpg", textH2: "title-course-7", textP: "courseLessonsAndTime-7", textAlt: "Photo of music sheets", refLink:" /src/views/theory/piano.html" },
  { image: "guitar.jpg", textH2: "title-course-8", textP: "courseLessonsAndTime-8", textAlt: "Photo of acoustic guitar player", refLink:" /src/views/theory/guitar.html" },
];

console.log(urlImagens)
function cardsCourse(cardRef) {
  const linhaDiv = `
  <a href=${cardRef.refLink}>
    <div class="course-info-box transition-time">
      <figure>
        <img src="../assets/images/${cardRef.image}" alt="${cardRef.textAlt}">
      </figure>
      <h2 data-text-node="${cardRef.textH2}"></h2>
      <p data-text-node="${cardRef.textP}"></p>
    </div>
  </a>`;

  divAlter.insertAdjacentHTML("afterbegin", linhaDiv);
}

function carregarCards(listaImages) {
  listaImages.map((imagem) => cardsCourse(imagem));
}

carregarCards(urlImagens);
