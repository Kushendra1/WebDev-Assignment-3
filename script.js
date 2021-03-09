let numRows = 0;
let numCols = 0;
let colorSelected;

//Adds a Row
function addR() {
  //alert("clicked Add Row")
  const table = document.getElementById("grid"); //storing element grid in an easy to call variable
  const rows = document.createElement("tr"); //same for the row representation

  if (numCols == 0) {
    //case for if the table is empty
    numCols = 1;
  }

  for (let i = 0; i < numCols; i++) {
    //adding boxes to each row
    let box = document.createElement("td"); //first box made
    rows.appendChild(box);
  }

  table.appendChild(rows); //rows are added to the table
  numRows++; //incrementing the number of rows
}

//Adds a Col
function addC() {
  //alert("Clicked Add Col")
  const table = document.getElementById("grid"); //storing element grid in an easy to call variable

  if (numRows == 0) {
    //case for if the table is empty, we need to add a row to the table before adding a col since a row must be present before a col can be
    const rows = document.createElement("tr");
    table.appendChild(rows);
    numRows++;
  }

  for (const row of grid.rows) {
    //makes sure to go through all of the rows
    let box = document.createElement("td"); //first box made
    row.appendChild(box);
  }
  numCols++; //incrementing the number of cols
}

//Removes a Row
function removeR() {
  //alert("Clicked Remove Row")
  if (numRows > 0) {
    //makes sure that table isn't empty and then deleting the cols since cols are dependent on rows
    if (numRows == 1) {
      numCols = 0;
    }
    numRows--;
    let table = document.getElementById("grid"); //storing element grid in an easy to call variable
    let rows = table.lastElementChild; //gets the last row in the table and then removes it
    table.removeChild(rows);
  }
}

//Removes a Col
function removeC() {
  alert("Clicked Remove Col");
}
//Sets global var for selected color
function selected() {
  colorSelected = document.getElementById("selectedID").value;
  console.log(colorSelected);
}

//fills all row and col with selected color
function fill() {
  alert("Clicked Fll All");
}

//fills all uncolored row and col with selected color
function fillU() {
  alert("Clicked Fill All Uncolored");
}

//clears all the colors from all rows and cols
function clearAll() {
  const table = document.getElementById("grid");
  for (const row of table.rows) {
    for (const col of row.cells) {
      col.style.backgroundColor = "";
    }
  }
}
