const gridContainer = document.querySelector("#container");
let gridDimension = 16;
const defaultSquareColor = "#cacfd5";
const startingPaintColor = "#606e81";
let currentPaintColor = startingPaintColor;

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

function colorSquares(color) {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  })
}

function addHover(color) {
  const squares = document.querySelectorAll(".grid-square");
  squares.forEach((square) => {
    square.addEventListener("mouseenter", () => {
      square.style.backgroundColor = color;
    });
  });
}

addHover(startingPaintColor);

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", () => {
  colorSquares(defaultSquareColor);
  addHover(startingPaintColor);
});

const resizeButton = document.querySelector("#resize-button");
resizeButton.addEventListener("click", () => {
  gridDimension = getNewSize();
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  buildGrid();
  addHover(startingPaintColor);
});

function getNewSize() {
  let newSize = prompt("Pick a new size for the grid:");
  while (isNaN(newSize) || newSize < 1 || newSize > 100 || newSize % 1 != 0) {
    newSize = prompt(
      "Hmm.  There's something wrong with your input.  Please enter a whole number between 1 and 100."
    );
  }
  return newSize;
}

const blueSwatch = document.querySelector("#palette-blue");
blueSwatch.addEventListener("click", () => {
  addHover("blue");
})

const pinkSwatch = document.querySelector("#palette-pink");
pinkSwatch.addEventListener("click", () => {
  addHover("pink");
})

const redSwatch = document.querySelector("#palette-red");
redSwatch.addEventListener("click", () => {
  addHover("red");
})

const greenSwatch = document.querySelector("#palette-green");
greenSwatch.addEventListener("click", () => {
  addHover("green");
})

const yellowSwatch = document.querySelector("#palette-yellow");
yellowSwatch.addEventListener("click", () => {
  addHover("yellow");
})

const orangeSwatch = document.querySelector("#palette-orange");
orangeSwatch.addEventListener("click", () => {
  addHover("orange");
})