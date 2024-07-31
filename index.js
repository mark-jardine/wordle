document.addEventListener("DOMContentLoaded", onload);

const gridTilesHTML = [];
function onload() {
    // Create html for rows and tiles
    // 6 rows, 5 tiles per row
    const gridHTML = document.getElementById("grid");

    // generate html for rows
    for (let i = 0; i < 6; ++i) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridHTML.appendChild(row);

        gridTilesHTML[i] = row;

        // generate html for tiles
        for (let j = 0; j < 5; ++j) {
            let tile = document.createElement("div");
            tile.classList.add("tile");
            row.appendChild(tile);

            gridTilesHTML[i][j] = tile;
        }
    }
}

const grid = Array.from({ length: 6 }, () => Array(5).fill(""));
// Col, Row are zero-indexed
let currentCol = 0;
let currentRow = 0;

// Keydown handler
document.addEventListener("keydown", (e) => {
    // Check for enter -> check guess
    // Check for backspace -> decrease current column, or erase value in current col

    //Otherwise, write to current tile, and increment current column
    grid[currentRow][currentCol] = e.key;
    currentCol < 4 ? currentCol++ : (currentCol = currentCol);
    updateGridHtml();
});

function updateGridHtml() {
    for (let row = 0; row < 6; ++row) {
        for (let col = 0; col < 5; ++col) {
            gridTilesHTML[row][col].innerText = grid[row][col];
        }
    }
}
