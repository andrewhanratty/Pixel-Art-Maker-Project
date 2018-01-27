
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

//document.getElementById('clear_grid').addEventListener('mouseover', function(event) {
//    event.target.style.color = "orange";)
//})
// Select color input
let pickColor = document.getElementById('colorPicker').value;

// Create an on/off function for colorchanging.
let colorChanger = function(e){
  if(e.target.style.backgroundColor != 'white') {
    e.target.style.backgroundColor = 'white';
  } else {
    e.target.style.backgroundColor = pickColor;
  }
}
// Create event listener for changing td color when clicked
pixelGrid.addEventListener('click', colorChanger);
