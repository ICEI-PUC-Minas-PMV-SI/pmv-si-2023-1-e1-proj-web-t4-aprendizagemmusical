export function showHome() {
    let content = document.querySelector(".content");
    let paragraphs = `
      <div class="paragraph">
        <p class="paragraph-text">Seja você um iniciante curioso ou um músico experiente em busca de aprimoramento, nosso aplicativo está aqui para ajudá-lo a desenvolver suas habilidades musicais!</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">Na seção de teoria, você encontrará uma coleção abrangente de artigos que irão consolidar seus conhecimentos musicais.</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">Desde fundamentos básicos até conceitos avançados.</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">Em nossa seção de exercícios, você poderá colocar em prática o que aprendeu.</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">Com uma variedade de atividades interativas, desde treinamento auditivo até exercícios de identificação de intervalos.</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">No playground, você terá a oportunidade de explorar ainda mais o mundo das diagramações musicais.</p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text">Aprenda a interpretar e teste as escalas musicais.</p>
      </div>
    `;
  
    content.insertAdjacentHTML("beforeend", paragraphs);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showHome();
  });
  
  
  