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
        <p class="paragraph-text" data-text-node="introPlayground"></p>
      </div>
    `;
  
    content.insertAdjacentHTML("beforeend", paragraphs);
  }

  document.addEventListener("DOMContentLoaded", () => {
    showHome();
  });
  
  
  