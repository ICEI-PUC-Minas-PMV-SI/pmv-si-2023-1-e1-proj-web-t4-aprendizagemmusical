import englishTranslation from "../assets/json/englishTranslation.json" assert { type: 'json' };
import portugueseTranslation from "../assets/json/portugueseTranslation.json" assert { type: 'json' };

let englishTranslationBtn = document.getElementById('englishTranslation');
let portugueseTranslationBtn = document.getElementById('portugueseTranslation');

function setInitialLanguage() {
	if(hasUserPreferredLanguage()) {
		setInitialLanguageBasedOnLocalStorage();
		return;
	}
	if(navigator.language === "en-US") {
		changeLanguageEnglish();
		return;
	}
	if(navigator.language === "pt-BR") {
		changeLanguagePortuguese();
		return;
	}
}

//setInitialLanguage's helper functions
function hasUserPreferredLanguage() {
	if(localStorage.getItem("userPreferredLanguage")) {
		return true;
	}
	return false;
}

function setInitialLanguageBasedOnLocalStorage() {
	console.log(localStorage.getItem("userPreferredLanguage"));
	if(localStorage.getItem("userPreferredLanguage") == "enus") {
		changeLanguageEnglish();
		return;
	} 
	if(localStorage.getItem("userPreferredLanguage") == "ptbr") {
		changeLanguagePortuguese();
		return;
	}
	changeLanguageEnglish();
}

function changeLanguagePortuguese(){
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = portugueseTranslation[element.getAttribute("data-text-node")];
	});
}

function changeLanguageEnglish(){
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = englishTranslation[element.getAttribute("data-text-node")];
	});
}

//event listeners
englishTranslationBtn.addEventListener("click", changeLanguageEnglishOnDemand);
portugueseTranslationBtn.addEventListener("click", changeLanguagePortugueseOnDemand);

//event listeners' helper functions 
function changeLanguagePortugueseOnDemand(e){
	e.preventDefault();
	localStorage.setItem("userPreferredLanguage", e.target.value);
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = portugueseTranslation[element.getAttribute("data-text-node")];
	});
}

function changeLanguageEnglishOnDemand(e){
	e.preventDefault();
	localStorage.setItem("userPreferredLanguage", e.target.value);
	document.querySelectorAll('[data-text-node]').forEach(element => {
		element.innerText = englishTranslation[element.getAttribute("data-text-node")];
	});
}

export { setInitialLanguage };
console.log("ui translation module loaded");