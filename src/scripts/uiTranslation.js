import englishTranslation from "../assets/json/englishTranslation.json" assert { type: 'json' };
import portugueseTranslation from "../assets/json/portugueseTranslation.json" assert { type: 'json' };

let englishTranslationBtn = document.getElementById('englishTranslation');
let portugueseTranslationBtn = document.getElementById('portugueseTranslation');

englishTranslationBtn.addEventListener("click", changeLanguagePortuguese);
portugueseTranslationBtn.addEventListener("click", changeLanguageEnglish);

function setInitialLanguage() {
	document.querySelectorAll('[data-text-node]').forEach(element => {
		if (navigator.language === "en-US") {
			element.innerText = englishTranslation[element.getAttribute("data-text-node")];
			return;
		}
		if (navigator.language === "pt-BR") {
			element.innerText = portugueseTranslation[element.getAttribute("data-text-node")];
			return;
		}
	});
}

function changeLanguagePortuguese(e){
	e.preventDefault();
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = englishTranslation[element.getAttribute("data-text-node")];
	});
}

function changeLanguageEnglish(e){
	e.preventDefault();
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = portugueseTranslation[element.getAttribute("data-text-node")];
	});
}
export { setInitialLanguage };
console.log("ui translation module loaded");