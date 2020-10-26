"use strict";

let comments = [];
const btn = document.querySelector(".btn");
const commentName = document.querySelector(".name");
const commentBody = document.querySelector(".comment");
const commentField = document.querySelector(".list-section");
let time = moment().format("MMM Do YYYY"); 

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: time.valueOf()
    };
    commentName.value = "";//Нужно очистить форму
    commentBody.value = "";
    comments.push(comment);//обьект comment добавляю в массив
    saveComments();
    showComments();
    
});
 
function saveComments() {//нужно сохранить все в localStorage
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {//функция для сохранения комментов, чтоб они сохранялись на странице
    if(localStorage.getItem("comments")) {
        comments = JSON.parse(localStorage.getItem("comments"));
    } //если внутри в localStorage есть, то нужно это вывести 
    showComments();
}
loadComments();

function showComments() { //вывести на экран
    let out = "";
    //в качестве аргумента forEach передаем функцию с аргументом item
    comments.forEach(function(item) { //item - это элемент обьекта comment, если таких комментов много то он по очереди выбирет
        out += `<p>${item.name}</p>`;
        out += `<p>${item.body}</p>`;
        out += `<p>${item.time}</p>`;
    });
    commentField.innerHTML = out;
}
