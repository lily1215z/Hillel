"use strict";

const title = document.getElementsByClassName("title");

let HtmlAccordion = function (name, body, opened) {
    this.title = name;
    this.body = body;
    this.state = opened;
};

HtmlAccordion.prototype.open = function() {
    for(let i = 0; i < title.length; i++) {
        title[i].addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("show");
    });
    }
  
};

HtmlAccordion.prototype.close = function() {
    for(let i = 0; i < title.length; i++) {
        title[i].addEventListener("click", function() {
            this.classList.toggle("active");
    });
    }
        
};
  
const htmlAccordion = new HtmlAccordion(document.querySelector("#html"));

htmlAccordion.close();
htmlAccordion.open();

