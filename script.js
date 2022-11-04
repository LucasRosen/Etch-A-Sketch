let curColor = "#ffffff";
let isDrawing = false;
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

    addSquareMouseEvents();
}

function removeGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function addSquareMouseEvents() {
    const squares = document.querySelectorAll(".square");
    for (const square of squares) {
        square.addEventListener("mousedown", () => {
            isDrawing = true;
        });

        square.addEventListener("mouseup", () => {
            isDrawing = false;
        })

        square.addEventListener("mousemove", (e) => {
            if (isDrawing) {
                paint(e.target);
            }
        });
    }
}


const btnNewGrid = document.querySelector("#btn-newgrid");
btnNewGrid.addEventListener("click", newGrid);


// Color
function paint(square) {
    square.style.backgroundColor = curColor;
}

gridContainer.addEventListener("mouseleave", () => {
    isDrawing = false;
});

const colorBtns = document.querySelectorAll(".color");
for (btn of colorBtns) {
    btn.addEventListener("input", (e) => {
        curColor = e.target.value;
    });

    btn.addEventListener("click", (e) => {
        curColor = e.target.value;
    });
}