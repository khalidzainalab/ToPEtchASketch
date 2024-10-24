const container = document.querySelector(".container");
const heightWidth = 800;

function removeGrid() {
  const squares = document.querySelectorAll(".item");
  squares.forEach((square) => {
    square.remove();
  });
}

function createGrid(gridVal, sizeCalc) {
  for (let i = 1; i <= gridVal * gridVal; i++) {
    const div = document.createElement("div");
    div.classList.add("item");
    div.style.flexBasis = `${sizeCalc}px`;
    div.style.height = `${sizeCalc}px`;

    div.addEventListener("mouseover", () => {
      div.classList.add("active");
    });

    container.appendChild(div);
  }
}

function getNewGrid() {
  removeGrid();

  let gridVal = prompt("Type number of rows/columns e.g. 6");

  if (gridVal < 0 || gridVal > 100){
    alert('Must be between 1 - 100');
    return createGrid(16, defaultSize);
  }

  let sizeCalc = heightWidth / gridVal;
  console.log(sizeCalc);

  createGrid(gridVal, sizeCalc);
}

const squares = document.querySelectorAll(".item");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("active");
  });
});

/* default */

const defaultSize = heightWidth / 16; //default 16x16;
console.log(defaultSize);

createGrid(16, defaultSize);

const btn = document.querySelector("button");

btn.addEventListener("click", getNewGrid);
