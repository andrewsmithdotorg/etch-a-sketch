const gridContainer = document.querySelector("#container");
let gridDimension = 16;

for (let i = 0; i < 16; i++) {
const gridSquare = document.createElement("div");
gridSquare.classList.add('grid-square');
gridContainer.appendChild(gridSquare);
gridSquare.style.height = (800/gridDimension)+"px";
}