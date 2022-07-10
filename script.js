const gridContainer = document.querySelector("#container");
let gridDimension = 16;
const defaultSquareColor = "#cacfd5";

function buildGrid() {
  for (let i = 0; i < gridDimension; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    gridContainer.appendChild(gridRow);
    for (let j = 0; j < gridDimension; j++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-square");
      gridRow.appendChild(gridSquare);
      gridSquare.style.height = 800 / gridDimension + "px";
      gridSquare.style.backgroundColor = defaultSquareColor;
    }
  }
}

buildGrid();

function addHover() {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = "#606e81";
    });
  });
}

addHover();

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
  resetGrid();
});

function resetGrid() {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.backgroundColor = defaultSquareColor;
  });
}

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click", () => {
  gridDimension = 70;
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  buildGrid();
  addHover();
});
