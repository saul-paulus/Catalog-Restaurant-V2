/* eslint-disable no-console */
import KatalogRestaurantSource from '../../data/katalogRestApi-source';
import { createDetailBreadcrumb } from '../template-creator';
import URLParse from '../../routes/url.parser';

const Detail = {
  async render() {
    return `
      <div class="containt-breadcrumb">
        <div id="containt-breadcrumb"></div>
      </div>
      <div class="containt-header-detail">
        <div class ="detail-header">
          <div class="detail-hero">
            <img src="./img/hero-header.jpg" alt="img-detail" class="img-detail" />
            <p class="detail-rating"><span class="fa fa-star checked"></span>  4.6</p>
          </div>
          <div class="containt-detail-title">
            <div class="detail-title">
              <h1>Restaurant Indonesia</h1>
              <h2>Area of Ambon</h2>
              <p>Jln.Lakdya leo wattimena</p>
            </div>
            <div class="detail-description">
              <h2>Description</h3>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, </p>
            </div>
            <div class="detail-categories">
              <h2>Categories</h2>
              <ul>
                <li>Ayama Bakar</li>
                <li>Ikan Bakar</li>
              </ul>
          </div>
          </div>
        </div>
      </div>
      <div class="detail-menus">
        <h1>Menu List</h1>
        <div class="menu">
          <div class="menus-foods">
          </div>
          <div class="menus-drink">
          </div>
        </div>
      </div>
    `;
  },
  async afterRender() {
    const url = URLParse.parseActiveUrlWithoutCombiner();
    const getDetailById = await KatalogRestaurantSource.detailRestaurant(url.id);

    const containtBreadcrumb = document.querySelector('#containt-breadcrumb');

    const getDetailRestaurant = getDetailById.restaurant;

    containtBreadcrumb.innerHTML = createDetailBreadcrumb(getDetailRestaurant);

    console.log(getDetailRestaurant);
  },
};
export default Detail;
