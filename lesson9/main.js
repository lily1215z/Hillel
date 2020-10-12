"use strict";  

let position = 0;
const sliderToShow = 1;
const sliderToScroll = 1;
const container = document.querySelector(".slider-container");
const track = document.querySelector(".slider-track");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
const items = document.querySelectorAll(".slider-item");
const itemsCount = items.length;
const itemWidth = container.clientWidth / sliderToShow;
const movePosition = sliderToScroll * itemWidth;

btnNext.addEventListener("click", () => {
    const itemLeft = itemsCount - (Math.abs(position) + sliderToShow * itemWidth) / itemWidth;
    position -= itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth; 

    setPosition();
});

btnPrev.addEventListener("click", () => {
    const itemLeft = Math.abs(position) / itemWidth;
    position += itemLeft >= sliderToScroll ? movePosition : itemLeft * itemWidth; 

    setPosition();
});

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
};

const bigPhoto = function() {
    const modal = document.createElement("img"),
        removeButton = createBtnClose(modal);
    modal.src = "../lesson9/img/09.jpg";
    modal.id = "modal";
    document.body.appendChild(modal);
    modal.before(removeButton);
    removeButton.id = "removeButton";
};

function createBtnClose(photo) {
    const button = document.createElement("button");
    button.innerText = "Close";
    button.addEventListener("click", function() {
        photo.remove();
        button.remove();
    });
    return button; 
}

for (let i = 0 ; i < items.length; i++) {
    items[i].addEventListener('click' , bigPhoto); 
}
