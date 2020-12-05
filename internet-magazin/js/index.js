"use strict";

function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render();
    salesPage.render();
    categoryPage.render();
}
//запускаем спинер
spinnerPage.render();
let CATALOG = [];


//fetch возвращает промис поэтому использовать можем then/catch
fetch('server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;

    //setTimeout принимает 2 аргумента, 1- коллбек функция и сколько будит выполняться setTimeout
    //setTimeout пишем исключительно для просмотра работоспособности спиннера, в настоящем проекте - нельзя
    setTimeout(() => {
        //убираем спинер,т.к. данные пришли и сложились в переменной CATALOG
        spinnerPage.handleClear();
        render();
    }, 2000);
    // .Math.random()
    
}) 
.catch(error => {
    //чистим спинер, чтоб он не крутился, т.к. будит сообщение об ошибке
    spinnerPage.handleClear();
    errorPage.render();
});

//--------Вызываем Акции
let catalogSales = [];

fetch('server/sales.json')
    .then(res => res.json())
    .then(body => {
        catalogSales = body;
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
});

//--------Вызываем Категории
let category = [];

fetch('server/category.json')
    .then(res => res.json())
    .then(body => {
        category = body;
        render();
    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
});
