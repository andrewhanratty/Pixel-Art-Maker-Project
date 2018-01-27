
// Select the table element to build upon
const pixelGrid = document.getElementById('pixel_canvas');

function makeGrid() {
  console.log("inside makegrid");
  var m = document.getElementById('input_width').value;
  var n = document.getElementById('input_height').value;
  for(let i = 1; i <= m; i++){
    const row = document.createElement('tr', );
    for(let j = 1; j <= n; j++){
      const cell = document.createElement('td');
      cell.classList.add('aSquare');
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
var colorPick = document.getElementById('colorPicker').value;

// Select individual cell
var square = document.querySelector('.aSquare');

// Alter the background color of a cell
const cellColor = function(e){
  e.target.square.setAttribute('style', 'background-color: colorPick');
}

square.addEventListener('click', cellColor);

// Select Reset button
const clearGrid = document.getElementById('clear_grid');
// Assign event listener to Reset button, when clicked it removes the table contents
clearGrid.addEventListener('click', function(){
  pixelGrid.remove();
});
