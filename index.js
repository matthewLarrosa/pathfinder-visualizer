function makeGrid(){
    let gridCanvas = document.getElementById('pixelCanvas');

    for(let i = 0; i < 10; i++){
        let row = document.getElementById('tr');
        row.id = "row" + 1;
    }
    gridCanvas.appendChild(row);
}