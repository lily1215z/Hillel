"use strict";

class Shopping {
    handleClear() {
        ROOT_SHOPPING.innerHTML = "";
    }

    render () {
        const productsStore  = localStorageUtil.getProducts();
        let htmlCatalog = "";
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price, img }) => {
            if(productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <div class="cart-section">
                        
                        <div class="cart-box">
                            <img src="${img}">
                            <p class="cart-title">${name}</p>
                            <div class="cart-price">${price}$</div>
                            <div>
                                <button class="plus" data-id="art">+</button>
                                <button class="minus" data-id="art">-</button>
                            </div>
                            <button class="cart-del"></button>
                        </div>
                    </div>
                `;
                sumCatalog += price;
            }
        });

        const html = `
        <div class="cart-block">
        <button class="close" onclick="shoppingPage.handleClear()"></button>
            <h4 class="cart-title--main">Shopping bag</h4>
            ${htmlCatalog}
            <span class="cart-sum">💰Total suma:</span>
            <span class="cart-sum">${sumCatalog}$</span>
            <button class="btn">BUY</button>
        </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();

