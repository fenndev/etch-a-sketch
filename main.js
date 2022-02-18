/* Global Variables */ 

let sketchBox = document.querySelector(".sketch-container");
let resetButton = document.querySelector(".reset-btn");
let sketchSize = 960;

/* Event Listeners */

resetButton.addEventListener('click', () => {
    resetSketch();
});

/* Main Code */

addDivs(16);

function addDivs(divNum) {
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
        sketchBox.appendChild(newDiv);
    } while(counter < (divNum * divNum));
}

function hoverChange(divToChange) {
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    divToChange.style.backgroundColor = randomColor;
}

function resetSketch() {
    let addedDivs = document.querySelectorAll(".added");
    addedDivs.forEach(selectedDiv => {
        selectedDiv.remove();
    });
    promptForNewGrid();
}

function promptForNewGrid() {
    let gridDivNums = +prompt("How many squares per side of the new grid? Must be less than 100.");
    if(gridDivNums != undefined && !isNaN(gridDivNums)) {
        if(gridDivNums <= 0) {
            alert("Must be greater than 0.");
            promptForNewGrid();
        }
        else if(gridDivNums >= 100) {
            alert("Must be less than 100.");
            promptForNewGrid();
        }
        else
            addDivs(gridDivNums);
    }
    else {
        alert("Must be a valid number.");
        promptForNewGrid();
    }
}