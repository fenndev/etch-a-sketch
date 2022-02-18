/* Global Variables */ 

let containerBox = document.querySelector(".container");
let sketchSize = 960;

/* Event Listeners */

/* Main Code */

function addDivs(divNum) {
    let counter = 0;
    let divSize = sketchSize / divNum;
    do {
        counter++;
        let newDiv = document.createElement("div");
        let divStyle = newDiv.style;
        divStyle.height = `${divSize}px`;
        divStyle.width = `${divSize}px`;
        containerBox.appendChild(newDiv);
    } while(counter < divNum);
}

function calcSize(divNum) {
    divSize = viewWidth / divNum;
}

addDivs(16);