const gridSize = 16;

const gridContainer = document.querySelector("#grid-container");

/* Columns */
for (i = 0; i < gridSize; i++) {
    const column = document.createElement("div");
    column.classList.add("column");
    gridContainer.appendChild(column);

    /* Rows */
    for (j = 0; j < gridSize; j++) {
        const square = document.createElement("div");
        square.classList.add("square");
        column.appendChild(square);
    }
}