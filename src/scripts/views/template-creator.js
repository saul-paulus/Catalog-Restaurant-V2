/* eslint-disable max-len */
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
            <a class="text-detail" href="${`/#/detail/${listKatalog.id}`}">Details</a>
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

const createDetailHeader = (details) => `
<div class="containt-header-detail">
    <div class ="detail-header">
        <div class="detail-hero">
            <img src="./img/hero-header.jpg" alt="img-detail" class="img-detail" />
            <p class="detail-rating"><span class="fa fa-star checked"></span> ${details.rating}</p>
        </div>
        <div class="containt-detail-title">
            <div class="detail-title">
                <h1>${details.name}</h1>
                <h2>${details.city}</h2>
                <p>${details.address}</p>
            </div>
            <div class="detail-description">
                <h2>Description</h3>
                <p>${details.description}</p>
            </div>
            <div class="detail-categories">
              <h2>Categories</h2>
            <ul>${details.categories.map((categorie) => `
                <li>${categorie.name}</li>`).join('')}</ul>
            </div>
        </div>
    </div>
</div>
<div class="detail-menus">
    <h1>Menu List</h1>
    <div class="menu">
        <div class="menus-foods">
            <h2>Foods</h2>
            <img src="./img/foods.jpeg" alt="img-foods">
            <ul>${details.menus.foods.map((food) => `
                <li>${food.name}</li>`).join('')}
            </ul>
        </div>
        <div class="menus-drink">
            <h2>Drinks</h2>
            <img src="./img/drink.jpeg" alt="img-foods">
            <ul>${details.menus.drinks.map((drink) => `
            <li>${drink.name}</li>`).join('')}
            </ul>
        </div>
    </div>
</div>

<div class="containt-detail-review">
    <h1>Reviews</h1>
    ${details.customerReviews.map((review) => `
    <div class="review-card">
        <img src="./img/avatar-review.png" alt="review-img" />
        <div class="review">
            <h3>${review.name}</h3>
            <p class="review-description">${review.review}</p>
            <p class="review-tgl">${review.date}</p>
        </div> 
    </div>
    `)}
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this katalogRestaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this katalogRestaurant"" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createHeader, createListKatalog, createDetailBreadcrumb, createDetailHeader, createLikeButtonTemplate, createLikedButtonTemplate,
};
