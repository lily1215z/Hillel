"use strict";

const form = document.querySelector(".form");
const nikName = document.querySelector(".name");
const commentText = document.querySelector(".comment");
const btn = document.querySelector(".btn");
const section = document.querySelector(".list-section");

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

function createElement(value) {
    const item = document.createElement("div");
    const removeBtn = createDelBtn(item);
    item.className = "list";
    item.textContent = value;
    item.appendChild(removeBtn);
    section.appendChild(item); 
}

document.forms.form.addEventListener("submit", function(e) {
    e.preventDefault();

    itemsArray.push(commentText.value);
    // for(let i = 0; i < form.length; i++) {
    //     itemsArray.push(form[i].value);
    // }
    localStorage.setItem("items", JSON.stringify(itemsArray));
    createElement(commentText.value);
    commentText.value = "";
    // createElement(itemsArray);
    // itemsArray = ""; 
});
    data.forEach(item => {
        createElement(item);
});

function createDelBtn(node) {
    const btnDel = document.createElement("button");
    btnDel.className = "btn-del";
    btnDel.textContent = "del";
    btnDel.addEventListener("click", () => {
        node.remove();
    });
    return btnDel;
}

