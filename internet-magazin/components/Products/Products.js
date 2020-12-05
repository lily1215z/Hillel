"use strict";

class Products {
    //т.к. Add in cart, Remove from cart, products-element__btn_active будут повторятся нужно вынести в конструктор класса
    constructor() {
        this.classNameActive = "products-element__btn_active";
        this.labelAdd = "Add in cart";
        this.labelRemove = "Remove from cart";
    }

    handleSetLocationStorage(element, id) {
        const { pushProduct, products } = localStorageUtil.putProducts(id);

        if(pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        headerPage.render(products.length);
    }

    render() {
        //получаем данные из хранилища
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = "";
        CATALOG.forEach(({id, name, price, img, descr}) => {
            //добавляем стили и текст для активных кнопок
            let activeClass = "";
            let activeText = "";

            //если indexOf равен -1 значит совпадений не найдено и на кнопку нужно добавить запись Add in cart
            if(productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                //делаем пробел перед классом, чтоб когда добавим в строку 27 был отступ между классами
                activeClass = " " + this.classNameActive;
                activeText = this.labelRemove;
            }
            // в htmlCatalog будим каждый раз добавлять новый контент
            htmlCatalog += `
            <li class="products-element">
            <a href="../../item_info.html?id=1" class="products-element__name">${name}</a>
                <img class="products-element__img" src="${img}">
                <span class="products-element__descr">${descr}</span>
                <span class="products-element__price">💎 Price:${price}$</span>
                <button class="btn products-element__btn${activeClass}" onclick="productsPage.handleSetLocationStorage(this, '${id}')">
                    ${activeText}
                </button>
            </li>
            `;
        });
        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;
        ROOT_PRODUCTS.innerHTML = html;
    }
}
// чтоб console.log отработал нужно сделать экземпляр класса Products 
const productsPage = new Products();
// мы создали экземпляр и теперь можем применить к нему метод рендер
