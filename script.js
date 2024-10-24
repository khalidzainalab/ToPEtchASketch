const container = document.querySelector(".container");

for (let i = 1; i <= 16 * 16; i++) {
  const div = document.createElement("div");
  div.classList.add("item");
  container.appendChild(div);
}

const squares = document.querySelectorAll(".item");

squares.forEach((square) => {
  square.addEventListener("click", () => {
    square.classList.toggle('active');
  });
});
