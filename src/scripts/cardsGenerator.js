const divAlter = document.querySelector("#elemento-dinamico");

const urlImagens = [
  { image: "music_sheet.jpg", textH2: "title-course-1", textP: "courseLessonsAndTime-1", textAlt: "Photo of music sheets" },
  { image: "music_history.jpeg", textH2: "title-course-2", textP: "courseLessonsAndTime-2", textAlt: "Photo of an Egyptian mural with a drawing of people with ancient instruments" },
  { image: 'drum_percussion.jpg', textH2: "title-course-3", textP: "courseLessonsAndTime-3", textAlt: "Photo of a drum" },
  { image: "jazz.jpeg", textH2: "title-course-4", textP: "courseLessonsAndTime-4", textAlt: "Photo of jazz band" },
  { image: 'violin.jpg', textH2: "title-course-5", textP: "courseLessonsAndTime-5", textAlt: "Photo of a violin" },
  { image: 'trumpet.jpg', textH2: "title-course-6", textP: "courseLessonsAndTime-6", textAlt: "Photo of trumpet player" },
  { image: "keys.jpg", textH2: "title-course-7", textP: "courseLessonsAndTime-7", textAlt: "Photo of music sheets" },
  { image: "guitar.jpg", textH2: "title-course-8", textP: "courseLessonsAndTime-8", textAlt: "Photo of acoustic guitar player" },
];

function cardsCourse(cardRef) {
  const linhaDiv = `<div class="course-info-box">
    <figure>
      <img src="../assets/images/${cardRef.image}" alt="${cardRef.textAlt}">
    </figure>
    <h2 data-text-node="${cardRef.textH2}"></h2>
    <p data-text-node="${cardRef.textP}"></p>
  </div>`;

  divAlter.insertAdjacentHTML("afterbegin", linhaDiv);
}

function carregarCards(listaImages) {
  listaImages.map((imagem) => cardsCourse(imagem));
}

carregarCards(urlImagens);
