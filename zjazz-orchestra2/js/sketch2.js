


const sketchB = (p) => {

    let lox = 0;
    let loy = 0;
    var trail = [];

    p.setup = () => {

        const c = p.createCanvas(p.windowWidth, p.windowHeight);
        c.parent('p5-container2');
        c.id('canvas2');
        c.style('z-index', '1');
        c.position(0, 0);
        p.fill(79, 47, 104);
        p.stroke(79, 47, 104);
        
    };

    p.draw = () => {
        p.clear();
        trail.push([p.mouseX, p.mouseY]);
        // lox += (p.mouseX - lox) * easing;
        // loy += (p.mouseY - loy) * easing;
        // p.square(lox, loy, 15);
        for (i = 5; i < trail.length; i+=3) {
            let s = 30 * (i / trail.length);
            p.circle(trail[i][0], trail[i][1], s);
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