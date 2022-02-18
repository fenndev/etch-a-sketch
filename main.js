/* Global Variables */ 

let sketchBox = document.querySelector(".sketch-container");
let resetButton = document.querySelector(".reset-btn");

/* Event Listeners */

resetButton.addEventListener('click', () => {
    resetSketch();
});

/* Main Code */

playGame();

function playGame() {
    let sketchSize = setSketchSize();
    let divNums = promptForGrid();
    addDivs(divNums, sketchSize);
}

function setSketchSize() {
    let newSketchSize = +prompt("What size should the sketch body be? Must be larger than 300px but smaller than 701px.");
    if(newSketchSize != undefined && !isNaN(newSketchSize) && Number.isInteger(newSketchSize)) {
        if(newSketchSize % 2 != 0 || newSketchSize % 5 != 0) {
            alert("Must be an even number or divisible by 5!");
            setSketchSize();
        }
        else if(newSketchSize > 700) {
            alert("Must be smaller than 700px.");
            setSketchSize();
        }
        else if(newSketchSize < 399) {
            alert("Must be larger than 400.");
            setSketchSize();
        }
        else {
            return newSketchSize;
        }
    }
}

function addDivs(divNum, sketchSize) {
    let counter = 0;
    let sketchStyle = sketchBox.style;
    sketchStyle.height = `${sketchSize}px`;
    sketchStyle.width = `${sketchSize}px`;
    let divSize = ((sketchSize / (divNum * divNum)) * divNum);
    do {
        counter++;
        let newDiv = document.createElement("div");
        newDiv.classList.add("added");
        newDiv.addEventListener('mouseover', () => {
            hoverChange(newDiv);
        });
        let divStyle = newDiv.style;
        divStyle.height = `${divSize}px`;
        divStyle.width = `${divSize}px`;
        divStyle.backgroundColor = 'Black';
        divStyle.opacity = 0;
        sketchBox.appendChild(newDiv);
    } while(counter < (divNum * divNum));
}

function hoverChange(divToChange) {
    let newOpacity = +divToChange.style.opacity + 0.1;
    divToChange.style.opacity = newOpacity;
}

function resetSketch() {
    let addedDivs = document.querySelectorAll(".added");
    addedDivs.forEach(selectedDiv => {
        selectedDiv.remove();
    });
    promptForGrid();
}

function promptForGrid() {
    let gridDivNums = +prompt("How many squares per side of the grid? Must be less than 100.");
    if(gridDivNums != undefined && !isNaN(gridDivNums) && Number.isInteger(gridDivNums)) {
        if(gridDivNums <= 0) {
            alert("Must be greater than 0.");
            promptForGrid();
        }
        else if(gridDivNums >= 100) {
            alert("Must be less than 100.");
            promptForGrid();
        }
        else
            return gridDivNums;
    }
    else {
        alert("Must be a valid number.");
        promptForGrid();
    }
}