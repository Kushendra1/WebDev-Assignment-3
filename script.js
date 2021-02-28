let numRows = 0;
let numCols = 0;
let colorSelected;


//Adds a Row
function addR() {
  alert("clicked Add Row")
  const table = document.getElementById("grid");
  const rows = document.createElement("tr");

  if (numCols == 0) {
    numCols = 1;
  }

  for (let i = 0; i < numCols; i++) {
    let box = document.createElement("td");
    rows.appendChild(box);
  }

  table.appendChild(rows);
  numRows++;
};

//Adds a Col
function addC() {
  alert("Clicked Add Col")
  const table = document.getElementById("grid");
  const cols = document.createElement("tr");

  if (numRows == 0) {
    numRows = 1;
  }

  for (let i = 0; i < numRows; i++) {
    let box = document.createElement("td");
    cols.appendChild(box);
  }
  table.appendChild(cols);
  numCols++;
}

//Removes a Row
function removeR() {
  alert("Clicked Remove Row")
}
//Removes a Col
function removeC() {
  alert("Clicked Remove Col")
}
//Sets global var for selected color
function selected() {
  colorSelected = document.getElementById('selectedID').value;
  console.log(colorSelected);
}

//fills all row and col with selected color
function fill() {
  alert("Clicked Fll All")
}

//fills all uncolored row and col with selected color
function fillU() {
  alert("Clicked Fill All Uncolored")
}

//clears all the colors from all rows and cols
function clearAll() {
  alert("Clicked Clear All")
}
