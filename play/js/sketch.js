



const sketchA = (p) => {

  let lox = 0;
  let loy = 0;
  let goudy;
  const easing = .01;

  p.preload = () => {
    goudy = p.loadFont('../../typefaces/goudybookletter1911.ttf');

  };

  p.setup = () => {

    const c = p.createCanvas(p.windowWidth, p.windowHeight);
    p.frameRate(24);

    p.textFont(goudy);
    p.textSize(15);
    c.parent('p5-container');
    c.id('canvas1');
    c.style('z-index', '4');
    c.position(0, 0);
  };

  p.draw = () => {
    p.clear();
    lox += (p.mouseX - lox) * easing;
    loy += (p.mouseY - loy) * easing;
    p.push();
    p.translate(lox, loy);
    p.rect(-8.5, -12.5, 41, 20.5, 50);
    p.text('Play', 0, 2);
    p.pop();
  };


  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

new p5(sketchA);



