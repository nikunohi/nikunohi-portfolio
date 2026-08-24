// import aesthetNovaLink from '../../typefaces/aesthet-nova.otf';

const sketchD = (p) => {
    let d;
    let aesthetnova;
    let rowHeight;
    let totalRows = 1;
    let xLeft;
    let xRight;
    let scrollRate = 4.7;
    let names;

    let col1, col2;

    p.preload = () => {
        p.loadStrings('../assets/textcontent.txt', processText);
    }

    function processText(data) {
        names = p.join(data, " ")
    }

    p.setup = () => {

        d = p.createCanvas(p.windowWidth, p.windowHeight * .1);
        d.parent('p5-container2');
        d.id('canvas1');
        d.style('z-index', '5');
        d.style('position', 'fixed');
        d.style('bottom', '-1dvh');
        d.style('left', '0');
        

        xLeft = 0;
        xRight = p.width;
        rowHeight = p.windowHeight * .1;
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

        let namesWidth = p.textWidth("....You want to hire me reeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal bad......" + "                                                         ");

        p.textAlign(p.LEFT, p.BOTTOM);
        for (let x = xLeft; x < p.width; x += namesWidth) {
            p.fill(col2);
            for (let i = 1; i <= totalRows; i += 2) {
                p.textFont("hedvig");
                for (let i = 0; i < p.text.length; i++) {
                    p.text("....You want to hire me reeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaal bad......" + "                                                         ", x, rowHeight * i);

                }
            }
        }
        xLeft -= scrollRate;

        p.textAlign(p.RIGHT, p.BOTTOM);
    };



    p.windowResized = () => {
        p.pixelDensity(window.devicePixelRatio);
        p.resizeCanvas(p.windowWidth, p.windowHeight * .1);
        rowHeight = p.windowHeight * .1;
        p.textSize(rowHeight);

    };
};

new p5(sketchD);
