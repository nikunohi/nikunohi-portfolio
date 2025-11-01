const draggable = document.getElementById('draggable');

let cnv;
let offsetX, offsetY;

draggable.addEventListener('mousedown', (e) => {
    offsetX = e.clientX - draggable.getBoundingClientRect().left;
    offsetY = e.clientY -draggable.getBoundingClientRect().top;
    cnv.style('z-index', '10');

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
});

function mouseMoveHandler(e) {
    draggable.style.left = `${e.clientX - offsetX}px`;
    draggable.style.top = `${e.clientY - offsetY}px`;
    draggable.style.position = 'absolute';
}

function mouseUpHandler() {
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup',mouseUpHandler);
}