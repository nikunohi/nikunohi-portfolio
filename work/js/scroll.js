let horizontal = document.getElementById("image-row");


horizontal.addEventListener("wheel", (e)=>{
e.preventDefault();
horizontal.scrollLeft += e.deltaY;
})