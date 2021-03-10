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
  let table = document.getElementById("grid"); //storing element grid in an easy to call variable
  if (numRows > 0) {
    //makes sure that table isn't empty and then deleting the cols since cols are dependent on rows
    if (numRows == 1) {
      numCols = 0;
    }
    numRows--;
    
    let rows = table.lastElementChild; //gets the last row in the table and then removes it
    table.removeChild(rows);
  }
}

//Removes a Col
function removeC() {
    //makes sure that table isn't empty and then deleting the cols since cols are dependent on rows
    let table = document.getElementById("grid");//storing element grid in an easy to call variable
    if (numCols > 0) {
        numCols--;
        
        for (let i = 0; i < numRows; i++) {
            let rows = table.rows[i];
            rows.deleteCell(rows.cells.length -1);
        }
    }
    //if col is 0, reset the table and rows
    if (numCols == 0) {
      numRows = 0;
      table.innerHTML = "";
    }
}

//Sets global var for selected color
function selected() {
    colorSelected = document.getElementById("selectedID").value;
// console.log(colorSelected);
}

//fills all row and col with selected color
function fill() {
  const table = document.getElementById("grid");//get grid
  for (const row of table.rows) {// for each row
    for (const col of row.cells) {// for each cell
      col.style.backgroundColor = colorSelected; // change color of cell
    }
  }
}

//fills all uncolored row and col with selected color
function fillU() {
  const table = document.getElementById("grid");//get grid
  for (const row of table.rows) {//for each row
    for (const col of row.cells) {//for each cell
      if (col.style.backgroundColor == "" || col.style.backgroundColor == "white") {//if uncolored
        col.style.backgroundColor = colorSelected;//change color of cell
      }
    }
  }
}

//clears all the colors from all rows and cols
function clearAll() {
  const table = document.getElementById("grid");//get grid
  for (const row of table.rows) {//for each row
    for (const col of row.cells) {//for each cell
      col.style.backgroundColor = "";//clear color
    }
  }
}
