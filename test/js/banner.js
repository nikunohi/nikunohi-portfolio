// Use root-relative paths when serving over a local HTTP server
const aesthetnova = '/typefaces/aesthet-nova.otf';
const textFile = '/assets/textcontent.txt';

let typeface;

const sketchC = (p) => {
    let canvasbanner;
    let rowHeight;
    let totalRows = 1;

    let xLeft;
    let xRight;
    let scrollRate = 1;
    let names;

    let col1, col2;

    p.preload = () => {
        // load text file and create string array of lines
        // each line is an element in the array

        typeface = p.loadFont(aesthetnova);
        p.loadStrings(textFile, processText);
    };

    function processText(data) {
        // combine the array of strings into one String
        // each string separated by a space, " "
        names = p.join(data, " ")
    }


    p.setup = () => {
        canvasbanner = p.createCanvas(p.windowWidth, p.windowHeight * .4);
        xLeft = 0;
        xRight = p.width;
        rowHeight = p.windowHeight * .4;
    }

    p.windowResized = () => {
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };

    p.draw = () => {
        p.clear();
        p.noStroke();

        for (let row = 0; row < totalRows; row++) {
            let y = row * rowHeight;
            col1 = p.color(220);
            col2 = p.color(0);

            if (row % 2 == 0) p.fill(col1);
            else p.fill(col2);
        }
        p.textSize(rowHeight);

        let namesWidth = p.textWidth(names + " ");
        p.textAlign(p.LEFT, p.BOTTOM);
        for (let x = xLeft; x < p.width; x += namesWidth) {
            p.fill(col2);
            for (let i = 1; 1 <= totalRows; i += 2) {
                p.textFont(typeface);
                p.text("SEAN YAGI — GRAPHIC AND MOTION DESIGNER" + " ", x, rowHeight * i + 20);
            }
        }
        xLeft -= scrollRate;
    }

}

new p5(sketchC);




// function executed after loadStrings() completes
// access to that string array is passed in as first argument
// i.e. an event has happened, we get access to this data as a result of that event




// function draw() {
//     clear();
//     // background(220);
//     noStroke();

//     // create the rows
//     for (let row = 0; row < totalRows; row++) {
//         let y = row * rowHeight;
//         col1 = color(220);
//         col2 = color(0);

//         if (row % 2 == 0) fill(col1);
//         else fill(col2);
//         // rect(0, y, width, rowHeight);
//     }

//     textSize(rowHeight);

//     let namesWidth = textWidth(names + " ");

// textAlign(LEFT, BOTTOM);
// for (let x = xLeft; x < width; x += namesWidth) {

//     fill(col2);
//     for (let i = 1; i <= totalRows; i += 2) {
//         text("SEAN YAGI — GRAPHIC AND MOTION DESIGNER" + " ", x, rowHeight * i + 20);
//     }
// }
// xLeft -= scrollRate;

// Scroll Right
// textAlign(RIGHT, BOTTOM);
//     //   for (let x = xRight; x > 0; x -= namesWidth) {

//     //     fill(col1);
//     //     for (let i = 2; i <= totalRows; i += 2) {
//     //       text(names + " ", x, rowHeight * i);
//     //     }
//     //   }
//     //   xRight += scrollRate;
// }