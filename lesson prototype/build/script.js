"use strict";

var title = document.getElementsByClassName("title");

var HtmlAccordion = function HtmlAccordion(name, body, opened) {
  this.title = name;
  this.body = body;
  this.state = opened;
};

HtmlAccordion.prototype.open = function () {
  for (var i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("show");
    });
  }
};

HtmlAccordion.prototype.close = function () {
  for (var i = 0; i < title.length; i++) {
    title[i].addEventListener("click", function () {
      this.classList.toggle("active");
    });
  }
};

var htmlAccordion = new HtmlAccordion(document.querySelector("#html"));
htmlAccordion.close();
htmlAccordion.open();
