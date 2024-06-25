const carouse1 = document.querySelector(".carouse1"),
firstImg = carouse1.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevٍScrollLeft;
let firstImgwidth = firstImg.clientWidth + 20

arrowIcons.forEach(icon => {
    icon.addEventListener("click", ()=>{
        carouse1.scrollleft += icon.id =="left"? -firstImgwidth : firstImgwidth;
    });
});

const dragstart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevٍScrollLeft = carouse1.scrollleft;
}

const dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carouse1.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carouse1.scrollleft = prevٍScrollLeft - positionDiff;
}

const dragStop = () =>{
    isDragStart = false;
    carouse1.classList.remove("dragging");
}

carouse1.addEventListener("mousedown", dragstart);
carouse1.addEventListener("mousemove", dragging);
carouse1.addEventListener("mouseup", dragStop);
