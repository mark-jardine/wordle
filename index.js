document.addEventListener("DOMContentLoaded", onload);

function onload() {
    // Create rows and tiles
    // 6 rows, 5 tiles per row
    console.log("onload");
    const grid = document.getElementById("grid");

    for (let i = 0; i < 6; ++i) {
        let row = document.createElement("div");
        row.classList.add("row");
        grid.appendChild(row);
    }
}
