


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
        p.fill(225, 226, 2);
        p.stroke(225, 226, 2);
    };

    p.draw = () => {
        p.clear();
        trail.push([p.mouseX, p.mouseY]);

        for (i = 5; i < trail.length; i += 3) {
            let s = 53 * (i / trail.length);
            let x = trail[i][0];
            let y = trail[i][1];
          
            p.triangle(
                x, y - s / 2,
                x - s / 2, y + s / 2,
                x + s / 2, y + s / 2
            );
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