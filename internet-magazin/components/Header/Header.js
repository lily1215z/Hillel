"use strict";

class Header {
    // handlerOpenShoppingPage() {
    //     shoppingPage.render();
    // } так было в видео

    render(count) {
        // const html = `<div class="header-counter" onclick="headerPage.handlerOpenShoppingPage();">${count}</div>`;
        const html = `<div class="header-counter">${count}</div>`;
        ROOT_COUNTER.innerHTML = html;
    }
   

}

//делаем экземпляр класса
const headerPage = new Header();


//показывает число после обновления стр. Чтоб он сразу менял кол-во, то его нужно также вызывать его из компонента products. Пошла в products

//при клике на картинку карзины - открывалась корзина
cartOpen.addEventListener("click", () => {
    shoppingPage.render();
});
