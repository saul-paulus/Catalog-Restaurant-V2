import CONFIG from '../globals/config';

const createHeader = () => `
<div class="header-title">
    <h1>Meet, Eat & Enjoy</h1>
    <h1>The Deliciuous Meals</h1>
</div>
<div class="header-description">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto reprehenderit quae dicta? Perferendis vel iste dolore quos eligendi qui nihil assumenda voluptatum, id, praesentium inventore! Minima, quod. Aspernatur, quae blanditiis.</p>
</div>
<div class="header-tombol">
    <a href="">Our recomendation</a>
</div>     
`;

const createListKatalog = (listKatalog) => `
<div class="main-card">
    <div class="containt-img">
        <img src="${CONFIG.BASE_URL_IMG_S}/${listKatalog.pictureId}">
        <div class="tombol-detail">
            <a class="text-detail" href="${`/#/detail/${listKatalog.id}`}" target="_blank">Details</a>
        </div>
    </div>
    <h1>Area of ${listKatalog.city}</h1>
    <p class="rating"><span class="fa fa-star checked"></span> ${listKatalog.rating}</p>
    <p class="description">${listKatalog.description}</p>
</div>
`;

const createDetailBreadcrumb = (details) => `
<ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li>${details.city}</li>
</ul>
`;

export { createHeader, createListKatalog, createDetailBreadcrumb };
