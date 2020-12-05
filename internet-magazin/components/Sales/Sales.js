"use strict";


class Sales {

    render() {
        let html = "";
        catalogSales.forEach(({image, title, description, sale, start_date, end_date}) => {
            html += `
                <div class="sales__item" style="background-image: url(${image});">
                    <h3 class="sales__title">${title}</h3>
                    <p class="sales__descr">${description}</p>
                    <div class="sales__persent">${sale}</div>
                    <span class="sales__startdate">from ${start_date}</span>
                    <span class="sales__enddate">to ${end_date}</span>
                </div>
            `;
        });

        ROOT_SALES.innerHTML = html;
    }
}

const salesPage = new Sales();