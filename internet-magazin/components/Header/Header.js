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
cartOpen.addEventListener("click", (e) => {
    shoppingPage.render();
    // if(e.target.classList.contains("to-cart")) {
    //     let articul = e.target.dataset["articul"];
    //     if(data[articul] !== undefined) {
    //         data[articul]["count"]++;
    //     }
    //     else {
    //         data[articul] = cart[articul];
    //         data[articul]["count"] = 1;
    //     }
    //     localStorage.setItem("cart", JSON.stringify(data));
    // }
    // в Products.js lj,fdbnm data-articul="${id}" и class="to-cart" и еще что-то
});
