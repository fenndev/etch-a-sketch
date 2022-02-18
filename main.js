/* Global Variables */ 

let sketchBox = document.querySelector(".sketch-container");
let sketchSize = 960;

/* Event Listeners */

/* Main Code */

function addDivs(divNum) {
    let counter = 0;
    let sketchStyle = sketchBox.style;
    sketchStyle.height = `${sketchSize}px`;
    sketchStyle.width = `${sketchSize}px`;
    let divSize = ((sketchSize / (divNum * divNum)) * divNum);

    do {
        counter++;
        let newDiv = document.createElement("div");
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
    divToChange.style.backgroundColor = 'green';
}

addDivs(24);