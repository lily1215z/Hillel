"use strict";

const input = document.getElementsByClassName("text")[0];
const btn = document.getElementsByClassName("button")[0];
const listToDo = document.querySelector(".list-todo");
const listDone = document.querySelector(".list-done");

btn.addEventListener("click", () => {  
    if(input.value === "") {  
        return;    
    }  
    createDelElements(input.value);
    input.value = "";                
});

function createDelElements(value) {
    const taskItem = document.createElement("li");
    const removeBtn = createDelBtn(taskItem);  
    taskItem.className = "item";
    taskItem.textContent = value;  

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.className = "task-checkbox";

    taskCheckbox.addEventListener("change", () => {
        listToDo.after(listDone);
        listDone.appendChild(taskItem);

        if(!taskCheckbox.checked) {
            listToDo.appendChild(taskItem);
        }
    });

    taskItem.appendChild(removeBtn);
    taskItem.appendChild(taskCheckbox);
    listToDo.appendChild(taskItem);
}

function createDelBtn(node) {
    const btnDel = document.createElement("button");
    btnDel.textContent = "Del"; 
    btnDel.className = "btn-del";

    btnDel.addEventListener("click", () => {
        node.remove();
    });
    return btnDel;
}










////////////////////////////////////////
 //blockList.innerHTML += `<p>${input.value}</p>`; //это несуществующий ДОМ, он будит работать, но если нужно работать дальше с ДОМ и вешать обработчики событий то нужно переписать код

///////////////////////////////////
// const modal = document.getElementById("modal").innerText;
// const one = modal.replace("{{link}}", "https://miro.medium.com/max/2048/1*eZFtYZASoJzJUi2ZoUBIDQ.jpeg");
// document.getElementsByTagName("p")[0].innerHTML = one;



// const two = modal.replace("{{item}}", "https://wonder-day.com/wp-content/uploads/2020/05/wonder-day-images-brawl-stars-120.jpg");
// document.getElementsByTagName("p")[1].innerHTML = two;
////////////////////////////////////
// const items = 20;
// const ul = document.querySelector("ul");

// //ul.innerHTML = "<a href='https://google.com'>test</a>";
// console.log(ul.innerHTML);


// ul.children[0].addEventListener("click", (e) => {
//     e.target.innerText = "test";
// });

// for(let i = 0; i < items; i++) {
//     ul.innerHTML += `<li>${i}</li>`;
// }

/////////////////////////////////////
//когда создаем много элементов в скрипте можем создать функцию, которая помагает создавать сразу имя и класс.
// Можно еще аргументы расширить и вписывать, но нам хватит и этого
// function createElement(elemName, className) {
//     const elem = document.createElement(elemName);
//     elem.className = className;

//     return elem;
// }

// const imgContainer = createElement("div", "img-container"); //создали эл "div" с классом "img-container"
// const image = createElement("img", "image");
//document.body.appenChild(imgContainer).appenChild(image);

/////////////////////////
//есть массив и при клике меняем ее при смене src
// const images = [ //массив путей
//     "../test/img/01.jpg",  //создали картинки динамически, не в html
//     "../test/img/02.jpg",
//     "../test/img/03.jpg",
//     "../test/img/04.jpg",
//     "../test/img/05.jpg",
//     "../test/img/06.jpg",
//     "../test/img/07.jpg",
//     "../test/img/08.jpg",
//     "../test/img/09.jpg",
//     "../test/img/10.jpg",
//     "../test/img/11.jpg",
//     "../test/img/12.jpg",
// ];

// const prevBtn = document.getElementsByTagName("button")[0],
//     nextBtn = document.getElementsByTagName("button")[1],
//     slider = document.getElementById("slider"),
//     dots = document.getElementById("dots");

// let activeSlide = 0;

// const image = document.createElement("img"); //создается картинка
// image.src = images[activeSlide]; //и сразу ставится ей src из массива images и берется эл. массива activeSlide, в дааном случае при инициализации первая [0]
// slider.appendChild(image); //и добавляем в DOM, в блок slider

// function goTo(index) {
//     image.src = images[index]; //эта функция меняет src картинки на src из images на index который передается
// }

// prevBtn.addEventListener("click", function() { //при клике назад если эл > 0, тогда делаем goTo
//     if(activeSlide > 0) {  //и передаем текущий слайд минус 1
//         goTo(--activeSlide);
//     }
// });

// nextBtn.addEventListener("click", function() {  
//     if(activeSlide < images.length - 1) {  //тоже самое пока не достигнем длины всего массива
//         goTo(++activeSlide);
//     }
// });

// //создаем миниатюру
// for (let i = 0; i < images.length; i++) { //пробегаемся по каждой картинки 
//     const img = document.createElement("img"); //и при каждой литерации создаем новую картинку
//     img.src = images[i]; //передаем в нее индекс который равен текущей литерации

//     const dot = document.createElement("button"); //создали кнопку, в кот лежит фото миниатюрное
//     dot.addEventListener("click", function() {
//         goTo((activeSlide = i)); //присвоение происходит в момент передачи аргумента goTo
//         // лучше прописать так:
//         //activeSlide = i;
//         //goTo(activeSlide);
//     });

//     dots.appendChild(dot).appendChild(img); //в dots добавляем саму кнопку и в кнопку потом картинку. Это влаживать блок в блок, в блок
// } //append более новый и лучше его использовать вместо appendChild. И тогда нужно разделять и псиать в разных строках.
// // dot.append(img);
// // dots.append(dot);

// image.addEventListener("click", function() {  //открывает большую картинку
//     const wrapper = document.createElement("div"), //затемненная обл вокруг картинки
//         modal = document.createElement("div"),  //рамка белая вокруг картинки
//         modalImages = document.createElement("img");

//     wrapper.className = "modal";  //добавили класс
//     modalImages.src = images.src;

//     wrapper.addEventListener("click", wrapper.remove); //при клике на внешнюю обл вызываем метод remove для нее 
//     modal.addEventListener("click", function(event) { //по клику на картинку остаанвливаем клик и при нажатии на картинку картинка не закрывается
//         event.stopPropagation();
//     });
//     document.body.appendChild(wrapper).appendChild(modal).appendChild(modalImages); //добавляем все в DOM
// });

////////////////

// const prevBtn = document.getElementsByTagName("button")[0],
//     nextBtn = document.getElementsByTagName("button")[1],
//     images = document.getElementsByTagName("div")[0];

//     let activeSlide = 0; //хранится текущий активный слайдер, 0 - это первый

//     prevBtn.onclick = function() {
//         if(activeSlide > 0) { //если есть какой-то предыдущий слайд, кот может переключиться
//             images.children[activeSlide].style = "display: none"; //смотрим предыдущиц эктив слайдер, кот был только что активный. Вначале его отключаем
//             images.children[--activeSlide].style = "display: block"; //делаем декримент, обращаемся к предыдущему элементу и делаем display: block
//             //когда мы на 0 элементе и кликаем на prevBtn мы никуда не попадем
//         }
//     };

//     nextBtn.onclick = function() {
//         if(activeSlide < images.children.length - 1) {
//             images.children[activeSlide].style = "display: none";
//             images.children[++activeSlide].style = "display: block";
//         }
//     };


//////////////////////////////
// document.getElementById("el1").addEventListener("click", function() {
//     alert("el1");
// });

// document.getElementById("el2").addEventListener("click", function() {
//     alert("el2");
// }, true);

// document.getElementById("el3").addEventListener("click", function(event) {
//     //event.stopPropagation();
//     event.stopImmediatePropagation();
//     alert("el3");
// },
// // {
// //     capture: true,
// //     once: true,
// //     passive: true,
// // }
// );
// //кликнув на 3-ем элементе мы спустились вниз, вызвали обработчик событий, потом возвращаясь назад в фазе 
// //всплытия мы вызываем все обработчики событий для родительских элементов. т.е. кликая по внутреннему элементу 
// //мы кликаем и по внутренемму и по внешнему элементу
// //если используем event.stopPropagation(); то будит нажиматься только эл3, и выше идти не будит.
// //stopPropagation() остановит всплытие, как будто мы не нажимали на внешние элементы
// //идем до момента у кого есть stopPropagation() и дальше уже сигнал не передается
// //2й способ: preventDefaulte() останавливает выполнения тснадртного поведения.
// //3й способ: stopImmediatePropagation() он раб примерно так же как и 1й . Он останавливает всплытие, но в случае со stopPropagation()
// //др.обработчики событий для этого нода document.getElementById("el3") они тоже сработают
// //stopImmediatePropagation() остановит и для других обработчиков на этом же элементе, кот идут за ним.
// document.getElementById("el3").addEventListener("click", function(event) {
//     alert("el3,2");
// });

//мы реагируем на один и тот же самый элемент двумя обработчиками событий. В одном показываем alert("el3"); В другом показываем другой 
//alert("el3,2");Но в первом есть еще и stopPropagation
//вызвались обработчики события из элемента3 все, те которые выше - не вызвались из-за stopPropagation, но свои вызвались
//т.к. stopPropagation останавливает паблик для родителей но не для других обработчиков событий этого же элемента
//stopImmediatePropagation() раб та же как и stopPropagation() + еще останавливает др обработчики кот. в коде идут дальше
//вначале идет alert("el3"); и в нем stopImmediatePropagation(); потом по коду alert("el3,2"); Сработает только el3
//если поменять местами, el3,2 первое, а ниже по коду el3 с stopImmediatePropagation(), то выйдет 3,2 потом 3

//подходим к тому что addEventListener имеет 3 параметра: строка с событием, сам колбек, булеан. Если мы напишет true
//то это будит значит что события должен вызваться не на этапе всплытия (bubbling), а на этапе погружения(capture).
//при таком раскладе вызовется первый элемент2 а потом 3, т.е родитель будит первым, потом сама кнопка на которую жали.a1//т.е. в обратной последовательности.
// false стоит по дефолту. Вместо булеан там можно передать обьект.И есть еще свойство once, тоже булеан и обработчик события обработает 1 раз.
//если нужно 2 или 3, то нужно создать счетчик, чтоб считать и считать сколько раз была запущена функция и ограничить например тремя выходами. 
//есть еще passive/ И если passive: true тогда мы игрнорируем дефолтное состояние. спорное свойство т.к. можно и без него



//////////////////////////////////


//console.log(open("target: blank", "test", "width=200, height=200"));


// const list = document.getElementById("links-list"),  
//     addLinkButton = document.getElementById("add-link"), 
//     removeAllLinkButton = document.getElementById("remove-links"); 

// list.addEventListener("click", function(event){
//     if(event.target.localName === "button") {
//         //event.path[1].remove();
//         //event.target.closest("li").remove();
//         // console.log(event.target.parentNode);
//         // console.log(event.target.parentElement);
//         // event.target.parentElement.remove();
//         const ul = event.target.parentElement.parentElement;
//         // console.log(li.nextSibling);
//         // console.log(li.nextElementSibling);
//         //li.nextElementSibling.remove();
//         ul.childNodes.forEach((item) => {
//             item.remove();
//         });
//     }
// });

//     function createLink(href) { 
//         const element = document.createElement("li"), 
//             link = document.createElement("a"), 
//             removeButton = createDeleteButton(element); 

//         link.href = processLink(href); 
//         link.innerText = href; 
//         link.target = "blank"; 

//         element.appendChild(link); 
//         element.appendChild(document.createTextNode(" ")); 
//         element.appendChild(removeButton); 

//         return element;
//     }

//     function createDeleteButton(node) {  
//         const element = document.createElement("button");

//         element.innerText = "Удалить";
//         // element.addEventListener("click", function() { 
//         //     node.remove();
//         // });
//         return element;
//     }

//     function addLink() {  
//         const answer = prompt("Please enter a link");

//         if(answer) {  
//             list.appendChild(createLink(answer)); 
//         }
//     }

//     function removeAllLinks() {  
//         list.innerHTML = " ";
//     }

//    function processLink(string) { 
//     if(string.indexOf("http://") && string.indexOf("https://")) { 
//         return "http://" + string; 
//     }   
//     return string; 
// }

// addLinkButton.addEventListener("click", addLink);
// removeAllLinkButton.addEventListener("click", removeAllLinks); 

