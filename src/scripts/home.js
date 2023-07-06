import * as uiTranslation from './uiTranslation.js';
import { changeLanguageEnglish } from './uiTranslation.js';
import { changeLanguagePortuguese } from './uiTranslation.js';

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
    uiTranslation.translateElementsRecursively(document.querySelector(".content"));
    
    if(navigator.language === "en-US") {
      changeLanguageEnglish()}
    
    else {changeLanguagePortuguese();}
  
  }

  document.addEventListener("DOMContentLoaded", () => {
    showHome();
  });
  

  
  