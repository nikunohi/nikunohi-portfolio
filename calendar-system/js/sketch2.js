// let canvas2;
// let lox2 = 0;
// let loy2 = 0;
// let easing2 = .01

// function setup() {
//     canvas2 = createCanvas(windowWidth, windowHeight);
//     canvas2.parent('p5-container2');
//     canvas2.position(0, 0);
//     canvas2.style("z-index", -1);
// }


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   clear();


//   lox2 = lox2 + ((mouseX - lox2) * easing2);
//   loy2 = loy2 + ((mouseY - loy2) * easing2);
//   rect(lox2-12.5, loy2-12.5, 100, 20, 50);
// //   text("poster system", lox2, loy2);
//   square(lox2, loy2, 15);




// }


const sketchB = (p) => {

    let lox = 0;
    let loy = 0;
    var trail = [];
    //   const easing = .01;

    p.setup = () => {

        const c = p.createCanvas(p.windowWidth, p.windowHeight);
        c.parent('p5-container2');
        c.id('canvas2');
        c.style('z-index', '1');
        c.position(0, 0);
        p.fill(0, 0, 0);
        
    };

    p.draw = () => {
        p.clear();
        trail.push([p.mouseX, p.mouseY]);
        // lox += (p.mouseX - lox) * easing;
        // loy += (p.mouseY - loy) * easing;
        // p.square(lox, loy, 15);
        for (i = 5; i < trail.length; i+=3) {
            let s = 53 * (i / trail.length);
            p.square(trail[i][0], trail[i][1], s);
        }

        if (trail.length > 20) {
            trail.shift();
        }

    };


    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    };
};

new p5(sketchB);