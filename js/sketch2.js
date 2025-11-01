const sketchB = (p) => {

    var trail = [];
    //   const easing = .01;

    p.setup = () => {

        const c = p.createCanvas(p.windowWidth, p.windowHeight);
        c.parent('p5-container2');
        c.id('canvas2');
        c.style('z-index', '1');
        c.position(0, 0);
        p.fill(0, 0, 0);

        trail.push([p.width / 2, p.height / 2]);

    };

    p.draw = () => {
        p.clear();


        if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
            trail.push([p.mouseX, p.mouseY]);
        }



        for (let i = 5; i < trail.length; i += 3) {
            const s = 25 * (i / trail.length);
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