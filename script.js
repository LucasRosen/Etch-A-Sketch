var curColor = "#ffffff";
const gridContainer = document.querySelector("#grid-container");


function newGrid() {
    let size = parseInt(prompt("Enter size of new grid. Value must be between 2-100"));
    
    if (isNaN(size) || size < 2 || size > 100) {
        newGrid();
    } else {
        removeGrid();
        generateGrid(size);
    }
}

function generateGrid(gridSize) {
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

    addSquareClickEvent();
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function addSquareClickEvent() {
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("click", () => {
            paint(square);
        });
    }
}


const btnNewGrid = document.querySelector("#btn-newgrid");
btnNewGrid.addEventListener("click", newGrid);


// Color
function paint(square) {
    square.style.backgroundColor = curColor;
}

const colorBtns = document.querySelectorAll(".color");
for (btn of colorBtns) {
    btn.addEventListener("input", (e) => {
        curColor = e.target.value;
    });

    btn.addEventListener("click", (e) => {
        curColor = e.target.value;
    });
}