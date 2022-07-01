const gridContainer = document.querySelector("#container");
const gridSquare = document.createElement("div");
gridSquare.classList.add('grid-square');
gridSquare.textContent = "test";

gridContainer.appendChild(gridSquare);

gridContainer.style.backgroundColor = "lightgreen";