export function showHome() {
    let content = document.querySelector(".content");
    let paragraphs = `
      <div class="paragraph">
        <p class="paragraph-text" data-text-node="introHome"></p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text" data-text-node="introTeory"></p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text" data-text-node="introExercises"></p>
      </div>
      <div class="paragraph">
        <p class="paragraph-text" data-text-node="introPlayground">No playground, você terá a oportunidade de explorar ainda mais o mundo das diagramações musicais. Aprenda a interpretar e teste as escalas musicais.</p>
      </div>
    `;
  
    content.insertAdjacentHTML("beforeend", paragraphs);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showHome();
  });
  
  
  