let currentColor = "black";

let sBtn = false;
let eBtn = false;
let wBtn = false;

makeMap();

function makeMap() {
  let map = document.getElementById("pixelMap");

  for (let i = 0; i < 50; i++) {
    let rows = document.createElement("tr");
    rows.id = "row" + i;

    map.appendChild(rows);

    let rowWidth = document.getElementById("row" + i);

    for (let j = 0; j < 50; j++) {
      let width = document.createElement("td");
      width.id = "cell" + i * 10 + j;
      rowWidth.appendChild(width);
    }
  }

  document.querySelectorAll("td").forEach((cell) => {
    cell.addEventListener("click", (evt) => {
      cell.style.backgroundColor = "white";
    });
  });
}

function resetMap() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      let cells = document.getElementById("cell" + i * 10 + j);
      cells.style.backgroundColor = "grey";
    }
  }
}

function paintCell(){}

function selectedButton(num) {
  if (num == 1) {
    sBtn = true;
    eBtn = false;
    wBtn = false;
  }
  if (num == 2) {
    sBtn = false;
    eBtn = true;
    wBtn = false;
  }
  if (num == 3) {
    sBtn = false;
    eBtn = false;
    wBtn = true;
  }
  paintCell();
}
