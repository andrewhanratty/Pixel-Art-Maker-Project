
// Select the table element to build upon
const pixelGrid = document.getElementById('pixel_canvas');

// Create a function that makes the grid
function makeGrid() {
//  deleteGrid();
  console.log("inside makegrid");
  var m = document.getElementById('input_width').value;
  var n = document.getElementById('input_height').value;
  for(let i = 1; i <= m; i++){
    const row = document.createElement('tr');
    for(let j = 1; j <= n; j++){
      const cell = document.createElement('td');
      cell.classList.add('aSquare');
      row.appendChild(cell);
      }
    pixelGrid.appendChild(row);
  }
}

// Create function that deletes all of the rows and columns
function deleteGrid() {
// var tbl = document.getElementById('pixel_canvas'); (This has the same value as the variable called pixelGrid)
// Use 'let' to create the variable len, since the value will change
  let rows = document.getElementsByTagName('tr');
  let len = pixelGrid.rows.length;
  for(let r = 0; r < len; r++){
// .deleteRow(-1) deletes the last row of the table
    pixelGrid.deleteRow(-1);
  }
}

// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(evt){
// apply preventDefault because the page's default will be to page-refresh
  evt.preventDefault();
  makeGrid();
});

document.getElementById('clear_grid').addEventListener('click', deleteGrid);
// Select the Reset button
//const clearGrid = document.getElementById('clear_grid');
// Add an event listener for clicks on the reset button that triggers the deleteRowCol function
//clearGrid.addEventListener('click', deleteRowCol);


// Select color input
//var colorPick = document.getElementById('colorPicker').value;

// Select individual cell
//var square = document.querySelector('.aSquare');

// Alter the background color of a cell
//const cellColor = function(e){
//  e.target.square.setAttribute('style', 'background-color: colorPick');
//}

//square.addEventListener('click', cellColor);
