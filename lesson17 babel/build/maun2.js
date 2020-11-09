"use strict";

var people = document.querySelector(".people");
var films = document.querySelector(".films");
var planets = document.querySelector(".planets");
var wiki = document.querySelector(".wiki");
var block = document.querySelector(".block");
var urlPeople = "https://swapi.dev/api/people/";
var urlFilms = "https://swapi.dev/api/films/";
var urlPlanets = "https://swapi.dev/api/planets/";
var message = {
  loading: "img/spinner.svg",
  success: "Thank you. Soon we write you",
  failure: "It is going wrang"
};
var load = document.createElement("img");

function showLoader() {
  load.src = message.loading;
  load.style.cssText = "\n    display: block;\n    margin: 0 auto;\n    width: 300px;\n    ";
  block.append(load);
}

function closeLoader() {
  return load.remove();
}

people.addEventListener("click", function () {
  showLoader();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urlPeople, true);
  var json = JSON.stringify(urlPeople);
  xhr.send(json);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.response).results;
        closeLoader();

        for (var i = 0; i < data.length; i++) {
          document.body.innerHTML += "<div>".concat(data[i].name, "</div>");
        }

        console.log(data);
      } else {
        alert("Error");
      }
    }
  };
});
films.addEventListener("click", function () {
  showLoader();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urlFilms, true);
  var json = JSON.stringify(urlFilms);
  xhr.send(json);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.response).results;
        closeLoader();

        for (var i = 0; i < data.length; i++) {
          document.body.innerHTML += "<div>".concat(data[i].title, "</div>");
        }

        console.log(data);
      } else {
        alert("Error");
      }
    }
  };
});
planets.addEventListener("click", function () {
  showLoader();
  var xhr = new XMLHttpRequest();
  xhr.open("GET", urlPlanets, true);
  var json = JSON.stringify(urlPlanets);
  xhr.send(json);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status < 300) {
        var data = JSON.parse(xhr.response).results;
        closeLoader();

        for (var i = 0; i < data.length; i++) {
          document.body.innerHTML += "<div>".concat(data[i].name, "</div>");
        }

        console.log(data);
      } else {
        alert("Error");
      }
    }
  };
});

function asyncHttp(value) {
  console.log(value);
}

block.addEventListener("click", function (e) {
  asyncHttp(e.target.textContent.trim());
});
