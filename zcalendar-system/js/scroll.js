const horizontal = document.getElementById('image-row');

horizontal.addEventListener('wheel', (e) => {
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    e.preventDefault();
    horizontal.scrollLeft += e.deltaY;
  }
}, { passive: false });