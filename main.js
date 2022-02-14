/* Global Variables */ 

let containerBox = document.querySelector(".container");
let viewHeight = screen.height;
let viewWidth = screen.width;

/* Event Listeners */

/* Main Code */

function addDivs(divNum) {
    let counter = 0;
    do {
        counter++;
        let newDiv = document.createElement("div");
        containerBox.appendChild(newDiv);
    } while(counter < divNum);
}