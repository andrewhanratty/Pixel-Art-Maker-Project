// Select width input and its value
const m = document.getElementById('input_width').value;
// Select height input and its value
const n = document.getElementById('input_height').value;
// Select the table element to build upon
const canvas = document.getElementById('pixel_canvas');

// Do the variables m and n (created above... globally) apply within this function?
function makeGrid() {
  for(let i = 1; i <= m; i++){
    const row = document.createElement('tr');
    canvas.appendChild(row);
    for(let j = 1; j <= n; j++){
      const cell = document.createElement('td');
      canvas.appendChild(cell);
    }
  }
}

// Select size input
const sizeInput = document.getElementById('sizePicker');
// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('submit', makeGrid);

// Select color input
const colorInput = document.querySelector('.color');
