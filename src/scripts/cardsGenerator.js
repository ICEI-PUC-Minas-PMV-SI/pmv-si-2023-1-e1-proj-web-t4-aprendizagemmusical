const divAlter = document.querySelector("#elemento-dinamico");

const urlImagens = [{imagem:'drum_percussion.jpg'}, {imagem:'trumpet.jpg'},{imagem:'violin.jpg'}, {imagem:"guitar.jpg"}, {imagem:"keys.jpg"}, {imagem:"jazz.jpeg"}]

function cardsCourse(nomeImagem){
    const linhaDiv = `<div class="course-info-box">
    <figure>
      <img src="../assets/images/${nomeImagem.imagem}" alt="Photo of an Egyptian mural with a drawing of people with ancient '			instruments">
    </figure>
    <h2 data-text-node="title-course-2"></h2>
    <p data-text-node="courseLessonsAndTime-2"></p>
    </div>`

    divAlter.insertAdjacentHTML("afterbegin", linhaDiv)
}

function carregarCards(listaImages){
    listaImages.map((imagem) => cardsCourse(imagem))
}

carregarCards(urlImagens)