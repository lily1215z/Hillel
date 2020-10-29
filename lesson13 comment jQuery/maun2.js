"use strict";

$(function() {
    const commentName = $(".name");
    const commentBody = $(".comment");
    const commentField = $(".list-section");
    let time = moment().format("MMM Do YYYY"); 

    let comments = [];
    $(".btn").on("click", function(e) {
        e.preventDefault();
        let comment = {
            name: commentName.val(),
            body: commentBody.val(),
            time: time.valueOf()
        };
        console.log(comment);
        commentName.val("");
        commentBody.val("");
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
        $.each(comments, function(item) {
            out += `<p class="color-name">${item.name}</p>`;
            // $(".list-section").append("<p>" + item.name.value + "</p>");
            out += `<p class="color-body">${item.body}</p>`;
            out += `<p class="color-time">${item.time}</p>`;
        });
        commentField.html(out);
    }

});
