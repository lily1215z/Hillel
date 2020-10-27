"use strict";

$(function() {

    const btn = $(".btn");
    const commentName = $(".name");
    const commentBody = $(".comment");
    const commentField = $(".list-section");
    let time = moment().format("MMM Do YYYY"); 

    let comments = [];
    btn.on("click", function(e) {
        e.preventDefault();
        let comment = {
            name: commentName.value,
            body: commentBody.value,
            time: time.valueOf()
        };
        commentBody.value = "";
        commentName.value = "";
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
        let out ="";
        $.each(comments, function(item) {
            out += `<p>${item.name}</p>`;
            out += `<p>${item.body}</p>`;
            out += `<p>${item.time}</p>`;
        });
        commentField.html = out;
    }

});
