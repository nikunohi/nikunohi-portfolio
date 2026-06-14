



const sketchA = (p) => {

  let lox = 0;
  let loy = 0;
  const easing = .01;

  p.setup = () => {

    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(24);
    c.parent('p5-container');
    c.id('canvas1');
    c.style('z-index', '2');
    c.position(0, 0);
  };

  p.draw = () => {
    p.clear();
    lox += (p.mouseX - lox) * easing;
    loy += (p.mouseY - loy) * easing;
    p.rect(lox - 12.5, loy - 12.5, 104, 18, 50);
    p.text('Poster-System', lox, loy+1);
  };


  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketchA);



