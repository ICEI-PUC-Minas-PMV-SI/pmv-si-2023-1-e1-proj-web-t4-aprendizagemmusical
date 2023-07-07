let changeThemeBtn = document.getElementById('changeTheme');
changeThemeBtn.addEventListener("click", changeTheme);
function setInitialTheme() {
	const root = document.documentElement;
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme) {
    root.classList.add(savedTheme);
    setNodeValue(changeThemeBtn, savedTheme);
		return;
	}
	
  let currentTheme;
	if (root.classList.length == 0) {
		currentTheme = "light";
	}

	root.classList.add(currentTheme);
	localStorage.setItem('theme', currentTheme);
  setNodeValue(changeThemeBtn, savedTheme == null ? "light" : savedTheme);
}

// change theme on demand
function changeTheme(e) {
  e.preventDefault();
  
  const root = document.documentElement;

  if(e.target.value === "light" || e.target.value == ""){
    setNodeValue(e.target, "dark");
  } else {
    setNodeValue(e.target, "light");
  }
  let themeArray = ['light', 'dark'];
	root.classList.remove(...themeArray);
  root.classList.add(e.target.value);
  localStorage.setItem('theme', e.target.value);

  if(document.querySelector("div.playground")) {  
    handlePlaygroundPageChangeTheme();
  }
}

function setNodeValue(node, currentTheme) {
  node.value = currentTheme;
  changeNodeContent(node);
}

function changeNodeContent(node) {
  node.replaceChildren();
  let img = document.createElement("img");
  img.setAttribute("title", "change theme");
  if(node.value === "light") {
    img.setAttribute("src", "/src/assets/images/svg/moon.svg");
  } else {
    img.setAttribute("src", "/src/assets/images/svg/sun.svg");
  }
  if(node.children.length == 0) {
    node.appendChild(img);
  }
}

function handlePlaygroundPageChangeTheme() {
  let selectedTheme = localStorage.getItem("theme") == undefined ? "dark" : localStorage.getItem("theme");
  let fretElement = document.getElementsByClassName("fret");

  Object.values(fretElement).forEach(fret => {
    let noteElement = fret.getElementsByClassName("note");
    Object.values(noteElement).forEach(note => {
      note.style.backgroundColor = note.style.backgroundColor.replace(note.style.backgroundColor.split("-")[2], selectedTheme);
    })
  })
}
export { setInitialTheme }
console.log("uiTheme.js LOADED");
