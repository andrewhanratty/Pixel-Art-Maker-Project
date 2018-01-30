
// Select the table element to build upon
const pixelGrid = document.getElementById('pixel_canvas');
let color = document.getElementById("colorPicker");
// Create a function that makes the grid

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

let addEvent = function(cell) {
  cell.addEventListener('click', function() {
    if(cell.style.backgroundColor != 'white') {
       cell.style.backgroundColor = 'white';
     } else {
        cell.style.backgroundColor = color.value;
     }
  });
}

function makeGrid() {
  deleteGrid();
  console.log("inside makegrid");
  var m = document.getElementById('input_width').value;
  var n = document.getElementById('input_height').value;
  for(let i = 1; i <= m; i++){
    const row = document.createElement('tr');
    for(let j = 1; j <= n; j++){
      const cell = document.createElement('td');
      cell.classList.add('aSquare');
      row.appendChild(cell);
      cell.addEventListener('click', addEvent(cell));
      }
    pixelGrid.appendChild(row);
  }
}
// When size is submitted by the user, call makeGrid()
document.getElementById('sizePicker').addEventListener('submit', function(evt){
// apply preventDefault because submit's default will be to first refresh the page
  evt.preventDefault();
  makeGrid();
});

// Create an event listener that clears grid when Reset button is clicked
//document.getElementById('clear_grid').addEventListener('click', deleteGrid);

// Select color input and its value
//let pickColor = document.getElementById('colorPicker');
//let colr = pickColor.value;

// Create an event listener that returns the colorpicker's color value to black
// when Reset button is clicked.
document.getElementById('clear_grid').addEventListener('click', function(){
  pickColor.value = "black";
});

// Detect changes in colorpicker's value and apply
//pickColor.addEventListener("change", function(e) {
//    colr = e.target.value;
//});

// Create an on/off function for removing color.
//let colorChanger = function(e){
// if(e.target.style.backgroundColor != 'white') {
//    e.target.style.backgroundColor = 'white';
//  } else {
//    e.target.style.backgroundColor = colr;
//  }
//}

// Create event listener for changing td color when clicked
//pixelGrid.addEventListener('click', colorChanger);
