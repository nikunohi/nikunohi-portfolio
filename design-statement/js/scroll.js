// let horizontal = document.getElementById("image-row");


// horizontal.addEventListener("wheel", (e)=>{
// e.preventDefault();
// horizontal.scrollLeft += e.deltaY;
// })

const horizontal = document.getElementById("image-row");

if (horizontal) { 
  horizontal.addEventListener("wheel", (e) => {
 
    if (e.deltaY === 0) return;

    e.preventDefault(); 
    horizontal.scrollLeft += e.deltaY * 1; 
  }, { passive: false }); 
}