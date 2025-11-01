



// let canvas;
// let lox = 0;
// let loy = 0;
// let easing = .01




// function setup() {
//   canvas = createCanvas(windowWidth, windowHeight);
//   canvas.parent('p5-container');
//   canvas.position(0, 0);


//   canvas.style("z-index", 1);

// }

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   clear();


//   lox = lox + ((mouseX - lox) * easing);
//   loy = loy + ((mouseY - loy) * easing);
//   rect(lox-12.5, loy-12.5, 100, 20, 50);
//   text("poster system", lox, loy);


// }




const sketchA = (p) => {

  let lox = 0;
  let loy = 0;
  const easing = .01;

  p.setup = () => {

    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    c.parent('p5-container');
    c.id('canvas1');
    c.style('z-index', '-1');
    c.position(0, 0);
  };

  p.draw = () => {
    p.clear();
    lox += (p.mouseX - lox) * easing;
    loy += (p.mouseY - loy) * easing;
    p.rect(lox - 12.5, loy - 12.5, 100, 18, 50);
    p.text('poster-system', lox, loy);
  };


  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketchA);



