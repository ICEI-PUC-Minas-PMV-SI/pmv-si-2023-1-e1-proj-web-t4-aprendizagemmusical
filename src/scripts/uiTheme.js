let changeThemeBtn = document.getElementById('changeTheme');

function changeTheme(e) {
  e.preventDefault();
  //change colors
  changeNodeText(e.target);
}
function changeNodeText(node) {
  node.innerText = (node.innerText === "dark") ? "light" : "dark";
}
changeThemeBtn.addEventListener("click", changeTheme);

console.log("ui theme loaded");
