
// Select the table element to build upon
const pixelGrid = document.getElementById('pixel_canvas');

function makeGrid() {
  console.log("inside makegrid");
  var m = document.getElementById('input_width').value;
  var n = document.getElementById('input_height').value;
  for(let i = 1; i <= m; i++){
    const row = document.createElement('tr');
    for(let j = 1; j <= n; j++){
      const cell = document.createElement('td');
      row.appendChild(cell);
      }
    pixelGrid.appendChild(row);
  }
}

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(evt){
// apply preventDefault because the page's default will be to page-refresh
  evt.preventDefault();
  makeGrid();
});

// Select color input
let colorPicker = document.getElementById('colorPicker');

// Alter the background color of a cell
let changeCell = function(event){
  event.cell.style.backgroundColor = 'colorPicker'.value;
}

cell.addEventListener('click', changeCell);

// Select Reset button
const clearGrid = getElementById('clear_grid');
// Assign event listener to Reset button, when clicked it removes the table contents
clearGrid.addEventListener('click', function(){
  pixelGrid.remove();
});
