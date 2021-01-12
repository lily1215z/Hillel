"use strict";

class Error {

    render() {
        const html = `
            <div class="error-message">
                <h3>😵No access</h3>
                <p>Let's try yet</p>
            </div>
        `;

        ROOT_ERROR.innerHTML = html;
    }
}

const errorPage = new Error();

//переходим в файл index.js и в catch нужно вызвать этот компонент
// .catch(error => {
//     //чистим спинер, чтоб он не крутился, т.к. будит сообщение об ошибке
//     spinnerPage.handleClear();
//     errorPage.render();
// });