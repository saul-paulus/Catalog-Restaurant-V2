/* eslint-disable no-console */
import FavoriteRestaurantIdb from '../../data/favoriteRestaurant-idb'
import { createListKatalog } from '../template-creator'

const Favorite = {
  async render () {
    // eslint-disable-next-line quotes
    return `
    <div class="containt-card favorite-card" id="favorite-card">
     
    </div>
    `
  },

  async afterRender () {
    //   fungsi in akan dipanggi; setelah render
    const katalogRestaurant = await FavoriteRestaurantIdb.getAllKatalogRestaurant()

    const favoriteCard = document.querySelector('#favorite-card')
    console.log(katalogRestaurant)

    katalogRestaurant.forEach((katalogFavorite) => {
      console.log(katalogFavorite)

      favoriteCard.innerHTML += createListKatalog(katalogFavorite)
    })
  }
}

export default Favorite
