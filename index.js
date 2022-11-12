function makeMap() {
  let map = document.getElementById("pixelMap");

  for (let i = 0; i < 10; i++) {
    let rows = document.createElement("tr");
    rows.id = "row" + i;

    map.appendChild(rows);

    let rowWidth = document.getElementById("row" + i);

    for (let j = 0; j < 10; j++) {
      let width = document.createElement("td");
      rowWidth.appendChild(width);
    }
  }
}
