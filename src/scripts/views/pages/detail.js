/* eslint-disable no-console */
import KatalogRestaurantSource from '../../data/katalogRestApi-source';
import { createDetailBreadcrumb, createDetailHeader } from '../template-creator';
import URLParse from '../../routes/url.parser';

const Detail = {
  async render() {
    return `
      <div class="containt-breadcrumb">
        <div id="containt-breadcrumb"></div>
      </div>
      <div id="containt-header"></div>
      <div id="likeButtonContainer"></div>
      
    `;
  },
  async afterRender() {
    const url = URLParse.parseActiveUrlWithoutCombiner();
    const getDetailById = await KatalogRestaurantSource.detailRestaurant(url.id);

    const containtBreadcrumb = document.querySelector('#containt-breadcrumb');
    const containtHeader = document.querySelector('#containt-header');
    const getDetailRestaurant = getDetailById.restaurant;
    containtBreadcrumb.innerHTML = createDetailBreadcrumb(getDetailRestaurant);
    containtHeader.innerHTML += createDetailHeader(getDetailRestaurant);
  },
};
export default Detail;
