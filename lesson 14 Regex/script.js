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

    if(commentName.value === "" || commentBody.value === "") {
        return;  
    }

    if(comment.name.match(/^[A-Z][a-z]+\s[A-Z][a-z]+\s[A-Z][a-z]+$/g)) { 
    } else { 
        commentName.value = "";  
        commentBody.value = "";  
        alert("Ohh, I'm sorry, try arain");  
        return;  
    }

    commentName.value = "";  
    commentBody.value = "";
    comments.push(comment);
    saveComments();
    showComments();
});
 
function saveComments() {
    localStorage.setItem("comments", JSON.stringify(comments));
}

function loadComments() {
    if(localStorage.getItem("comments")) {
        comments = JSON.parse(localStorage.getItem("comments"));
    } 
    showComments();
}
loadComments();

function showComments() { 
    let out = "";
    const url = /https?:\/\/.+?\.\w+(:\d+)?\.?[a-z]+\//g;
    const tag = /<[a-z]+>.*?<\/[a-z]+>/gi;
    const fontWeight = /\*\*.+?\*\*/g;
    const wordDel = /\-\-.+?\-\-/g;
    const fontStyle = /\_\_.*?\_\_/g;
    comments.forEach(function(item) { 
        out += `<p class="one">${item.name}</p>`;
        //out += `<p class="two">${item.body.replace(url, "<a href=$& target='blank'>$&</a>").replace(tag, "").replace(fontWeight, "<span style='font-weight:900';>$&</span>").replace(wordDel, "<del>$&</del>").replace(fontStyle, "<span style='font-style:italic';>$&</span>")}</p>`;
        out += `<p class="two">${item.body
            .replace(url, "<a href=$& target='blank'>$&</a>")
            .replace(tag, "")
            .replace(fontWeight, "<span style='font-weight:900';>$&</span>")
            .replace(wordDel, "<del>$&</del>")
            .replace(fontStyle, "<span style='font-style:italic';>$&</span>")}</p>`;
        out += `<p class="three">${item.time}</p>`;
    });
    commentField.innerHTML = out;
}
