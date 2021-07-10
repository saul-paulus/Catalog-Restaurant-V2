/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import FavoriteRestaurantIDb from '../data/favoriteRestaurant-idb'
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/template-creator'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, katalogRestaurant }) {
    this._likeButtonContainer = likeButtonContainer
    // this._favoriteRestaurant = favoriteRestaurant;
    this._katalogRestaurant = katalogRestaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._katalogRestaurant

    if (await this._isKatalogRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isKatalogRestaurantExist (id) {
    const katalogRestaurant = await FavoriteRestaurantIDb.getKatalogRestaurant(id)
    return !!katalogRestaurant
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDb.putKatalogRestaurant(this._katalogRestaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()
    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestaurantIDb.deleteKatalogRestaurant(this._katalogRestaurant.id)
      this._renderButton()
    })
  }
}
export default LikeButtonInitiator
