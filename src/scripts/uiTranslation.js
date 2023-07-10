import englishTranslation from "../assets/json/englishTranslation.json" assert { type: "json" };
import portugueseTranslation from "../assets/json/portugueseTranslation.json" assert { type: "json" };

let englishTranslationBtn = document.getElementById("englishTranslation");
let portugueseTranslationBtn = document.getElementById("portugueseTranslation");

function setInitialLanguage() {
  if (hasUserPreferredLanguage()) {
    setInitialLanguageBasedOnLocalStorage();
    return;
  }
  if (navigator.language === "en-US") {
    changeLanguageEnglish();
    return;
  }
  if (navigator.language === "pt-BR") {
    changeLanguagePortuguese();
    return;
  }
}

//setInitialLanguage's helper functions
export function hasUserPreferredLanguage() {
  if (localStorage.getItem("userPreferredLanguage")) {
    return true;
  }
  return false;
}

export function defaultLanguage() {
  if (!hasUserPreferredLanguage()) {
    if (navigator.language === "en-US") {
      changeLanguageEnglish();
    } else {
      changeLanguagePortuguese();
    }
  }
}

function getLocalStorageLanguage() {
  if (hasUserPreferredLanguage()) {
    return localStorage.getItem("userPreferredLanguage");
  }
  return "enus";
}

function setInitialLanguageBasedOnLocalStorage() {
  if (localStorage.getItem("userPreferredLanguage") == "enus") {
    changeLanguageEnglish();
    return;
  }
  if (localStorage.getItem("userPreferredLanguage") == "ptbr") {
    changeLanguagePortuguese();
    return;
  }
  changeLanguageEnglish();
}

export function changeLanguagePortuguese() {
  document.querySelectorAll("[data-text-node]").forEach((element) => {
    element.innerText =
      portugueseTranslation[element.getAttribute("data-text-node")];
  });
  setDocumentRootLangAttribute();
}

export function changeLanguageEnglish() {
  document.querySelectorAll("[data-text-node]").forEach((element) => {
    element.innerText =
      englishTranslation[element.getAttribute("data-text-node")];
  });
  setDocumentRootLangAttribute();
}

export function setDocumentRootLangAttribute() {
  let lang = localStorage.getItem("userPreferredLanguage");
  if (lang) {
    lang = lang.substring(0, 2);
  } else {
    lang = navigator.language.substring(0, 2);
  }

  let root = document.querySelector("html");
  if (root.hasAttribute("lang")) {
    root.removeAttribute("lang");
  }
  root.setAttribute("lang", lang);
}

//event listeners
englishTranslationBtn.addEventListener("click", changeLanguageEnglishOnDemand);
portugueseTranslationBtn.addEventListener(
  "click",
  changeLanguagePortugueseOnDemand
);

//event listeners' helper functions
function changeLanguagePortugueseOnDemand(e) {
  e.preventDefault();
  localStorage.setItem("userPreferredLanguage", e.target.value);
  document.querySelectorAll("[data-text-node]").forEach((element) => {
    element.innerText =
      portugueseTranslation[element.getAttribute("data-text-node")];
  });
  setDocumentRootLangAttribute();
}

function changeLanguageEnglishOnDemand(e) {
  e.preventDefault();
  localStorage.setItem("userPreferredLanguage", e.target.value);
  document.querySelectorAll("[data-text-node]").forEach((element) => {
    element.innerText =
      englishTranslation[element.getAttribute("data-text-node")];
  });
  setDocumentRootLangAttribute();
}

export function translateElement(element) {
  element.innerText =
    getLocalStorageLanguage() == "enus"
      ? englishTranslation[element.getAttribute("data-text-node")]
      : portugueseTranslation[element.getAttribute("data-text-node")];
}

export function translateElements(elementArray) {
  elementArray.forEach((element) => {
    if (getLocalStorageLanguage() == "enus") {
      element.innerText =
        englishTranslation[element.getAttribute("data-text-node")];
    }
    if (getLocalStorageLanguage() == "ptbr") {
      element.innerText =
        portugueseTranslation[element.getAttribute("data-text-node")];
    }
  });
}

export function translateElementsRecursively(element) {
  let elementArray = Array.from(element.querySelectorAll("[data-text-node]"));
  elementArray.forEach((element) => {
    if (getLocalStorageLanguage() == "enus") {
      element.innerText =
        englishTranslation[element.getAttribute("data-text-node")];
    }
    if (getLocalStorageLanguage() == "ptbr") {
      element.innerText =
        portugueseTranslation[element.getAttribute("data-text-node")];
    }
  });
}

export { setInitialLanguage };
console.log("uiTranslation.js LOADED");
