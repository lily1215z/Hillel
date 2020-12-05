"use strict";


class Category {

    render() {
        let html = "";
        category.forEach(({path, name}) => {
            html += `<a href="${path}" class="category-item">${name}</a>`;
        });

        ROOT_CATEGORY.innerHTML = html;
    }

  
}

const categoryPage = new Category();