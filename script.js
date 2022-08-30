const NUMBER_OF_COLUMNS = 32;

/**
 * @function createGrid
 * @description Creates a grid with columns x columns pixels
 * @param {number} columns
 */
function createGrid(columns) {
  const container = document.querySelector("div.container");

  // create rows
  for(let i = 0; i < columns; i++) {
    const row = document.createElement("div");
    row.className = "row";
  
    // create and append row-items
    for (let j = 0; j < columns; j++) {
      const rowItem = document.createElement("div");
      rowItem.className = "row-item";
      row.appendChild(rowItem);
    }
  
    // append row to grid container
    container.appendChild(row);
  }
}

createGrid(NUMBER_OF_COLUMNS);
