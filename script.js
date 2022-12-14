let curColor = "#000000";
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
        square.addEventListener("mousedown", (e) => {
            isDrawing = true;
            paint(e.target);
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

const colorBtns = document.querySelectorAll("input[type=color]");
for (btn of colorBtns) {
    btn.addEventListener("input", (e) => {
        curColor = e.target.value;
        curColorDisplay.style.backgroundColor = curColor;
    });

    btn.addEventListener("click", (e) => {
        curColor = e.target.value;
        curColorDisplay.style.backgroundColor = curColor;
    });
}


const curColorDisplay = document.createElement("div");
curColorDisplay.classList.add("curColorDisplay");
curColorDisplay.style.cssText = `
width: 4%; 
aspect-ratio: 10 / 10;
background-color: ${curColor}; 
border: 2px solid black; 
border-radius: 50%; 
padding: px;`;

document.body.appendChild(curColorDisplay);