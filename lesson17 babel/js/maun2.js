"use strict";

const people = document.querySelector(".people");
const films = document.querySelector(".films");
const planets = document.querySelector(".planets");
const wiki = document.querySelector(".wiki");
const block = document.querySelector(".block");

const urlPeople = "https://swapi.dev/api/people/";
const urlFilms = "https://swapi.dev/api/films/";
const urlPlanets = "https://swapi.dev/api/planets/";

const message = {
    loading: "img/spinner.svg",
    success: "Thank you. Soon we write you",
    failure: "It is going wrang"
};

const load = document.createElement("img");

function showLoader() {
    load.src = message.loading;
    load.style.cssText = `
    display: block;
    margin: 0 auto;
    width: 300px;
    `;
    block.append(load);
}
function closeLoader() {
    return load.remove();
}

people.addEventListener("click", function() {
    showLoader();
    const xhr = new XMLHttpRequest();

        xhr.open("GET", urlPeople, true);
        const json = JSON.stringify(urlPeople);
        xhr.send(json);
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.response).results;
                    closeLoader();
                    for (let i = 0; i < data.length; i++) {
                        document.body.innerHTML += `<div>${data[i].name}</div>`;
                    }
                    console.log(data);
                } else {
                    alert("Error");
                }
            }
        };
});

films.addEventListener("click", function() {
    showLoader();
    const xhr = new XMLHttpRequest();

        xhr.open("GET", urlFilms, true);
        const json = JSON.stringify(urlFilms);
        xhr.send(json);
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.response).results;
                    closeLoader();
                    for (let i = 0; i < data.length; i++) {
                        document.body.innerHTML += `<div>${data[i].title}</div>`;
                    }
                    console.log(data);
                } else {
                    alert("Error");
                }
            }
        };
});

planets.addEventListener("click", function() {
    showLoader();
    const xhr = new XMLHttpRequest();

        xhr.open("GET", urlPlanets, true);
        const json = JSON.stringify(urlPlanets);
        xhr.send(json);
       
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.response).results;
                    closeLoader();
                    for (let i = 0; i < data.length; i++) {
                        document.body.innerHTML += `<div>${data[i].name}</div>`;
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
block.addEventListener("click", function(e) {
    asyncHttp(e.target.textContent.trim());
});

