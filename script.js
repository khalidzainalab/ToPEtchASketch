const container = document.querySelector(".container");


for (let i = 1; i <= 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  let sizeCalc = 800/16;
  div.style.width = `${sizeCalc}px`;
  div.style.height = `${sizeCalc}px`;
  container.appendChild(div);
}

const squares = document.querySelectorAll(".item");

function getNewGrid() {
  const squares = document.querySelectorAll(".item");
  squares.forEach((square) => {
    square.remove();
  });

  let col = prompt("Type number of columns");
  let row = prompt("Type number of rows");

  let sizeCalc = 800/col;
  console.log(sizeCalc);

  for (let i = 1; i <= col * row; i++) {
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

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.classList.add("active");
  });
});

const btn = document.querySelector("button");

btn.addEventListener("click", getNewGrid);
