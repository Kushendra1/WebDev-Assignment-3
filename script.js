let numRows = 0;
let numCols = 0;
let colorSelected;


//Adds a Row
function addR() {
  alert("clicked Add Row")
}
//Adds a Col
function addC() {
  alert("Clicked Add Col")
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
