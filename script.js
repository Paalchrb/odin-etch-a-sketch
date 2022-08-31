const NUMBER_OF_COLUMNS = 32;


/**
 * @function handleMouseEnter
 * @description Append the active class to the target of mouseover
 * @param {MouseEvent} e 
 */
function handleMouseEnter(e) {
  const rowItem = e.target;
  rowItem.className = "row-item active"
}


/**
 * @function handleMouseLeave
 * @description REmove the active class from the target of mouseleave
 * @param {MouseEvent} e 
 */
function handleMouseLeave(e) {
  const rowItem = e.target;
  rowItem.className = "row-item"
}


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
      rowItem.addEventListener('mouseenter', handleMouseEnter);
      rowItem.addEventListener('mouseleave', handleMouseLeave);
      row.appendChild(rowItem);
    }
  
    // append row to grid container
    container.appendChild(row);
  }
}

createGrid(NUMBER_OF_COLUMNS);
