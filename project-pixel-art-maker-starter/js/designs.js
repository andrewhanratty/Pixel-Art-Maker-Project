// Select width input and its value
//const m = document.getElementById('input_width').value;
// Select height input and its value
//const n = document.getElementById('input_height').value;
// Select the table element to build upon
const pixelGrid = document.getElementById('pixel_canvas');

// Do the variable m and n (created above... globally) apply within this function?
function makeGrid() {
    console.log("inside makegrid");
    var m = document.getElementById('input_height').value;
    var n = document.getElementById('input_width').value; 
    for(let i = 1; i <= m; i++){
        const row = document.createElement('tr');
        for(let j = 1; j <= n; j++){
            const cell = document.createElement('td');
            row.appendChild(cell);
            }
        pixelGrid.appendChild(row);
    }
}

// Select size input
//const sizeInput = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
//sizeInput.addEventListener('submit', makeGrid);
document.getElementById('sizePicker').addEventListener('submit', function(evt){
    evt.preventDefault();
    makeGrid();
});
// Select color input
const colorInput = document.querySelector('.color');
