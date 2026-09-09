// import aesthetNovaLink from '../../typefaces/aesthet-nova.otf';

const sketchD = (p) => {
    let d;
    let aesthetnova;
    let rowHeight;
    let totalRows = 1;
    let xLeft;
    let xRight;
    let scrollRate = 1;
    let names;

    let col1, col2;

    p.preload = () => {
        p.loadStrings('../assets/textcontent.txt', processText);
    }

    function processText(data) {
        names = p.join(data, " ")
    }

    p.setup = () => {

        d = p.createCanvas(p.windowWidth, p.windowHeight * .4);
        d.parent('p5-container');
        d.id('canvas1');
        d.style('z-index', '5');
        d.style('position', 'fixed');
        d.style('bottom', '0');
        d.style('left', '0');

        xLeft = 0;
        xRight = p.width;
        rowHeight = p.windowHeight * .4;
        // centerCanvas(d);


    };

    p.draw = () => {
        p.clear();
        p.noStroke();
        // p.background(220);

        for (let row = 0; row < totalRows; row++) {
            let y = row * rowHeight;
            col1 = p.color(220);
            col2 = p.color(0);

            if (row % 2 == 0) p.fill(col1);
            else fill(col2);
        }

        p.textSize(rowHeight);

        let namesWidth = p.textWidth("ALL WORKS INCLUDING THIS SITE CREATED BY SEAN YAGI - GRAPHIC AND MOTION DESIGNER" + "     ");

        p.textAlign(p.LEFT, p.BOTTOM);
        for (let x = xLeft; x < p.width; x += namesWidth) {
            p.fill(col2);
            for (let i = 1; i <= totalRows; i += 2) {
                p.textFont("goudybookletter1911");
                for(let i = 0; i < p.text.length; i++) {
                                    p.text("ALL WORKS INCLUDING THIS SITE  CREATED BY SEAN YAGI - GRAPHIC AND MOTION DESIGNER" + "     ", x, rowHeight * i + 20);

                }
            }
        }
        xLeft -= scrollRate;

        p.textAlign(p.RIGHT, p.BOTTOM);
    };



    p.windowResized = () => {
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight * .4);
        rowHeight = p.windowHeight * .4;
        p.textSize(rowHeight);

    };
};

new p5(sketchD);
