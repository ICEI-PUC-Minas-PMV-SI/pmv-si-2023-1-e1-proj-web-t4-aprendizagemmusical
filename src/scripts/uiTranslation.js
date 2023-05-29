import englishTranslation from "../assets/json/englishTranslation.json" assert { type: 'json' };
import portugueseTranslation from "../assets/json/portugueseTranslation.json" assert { type: 'json' };

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

export { setInitialLanguage };
console.log("ui translation module loaded");