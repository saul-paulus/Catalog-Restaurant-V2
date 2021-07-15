/* eslint-disable no-prototype-builtins */

import { openDB } from 'idb'
import CONFIG from '../globals/config'

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade (database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' })
  }
})

const FavoriteRestaurantIdb = {

  async getKatalogRestaurant (id) {
    if (!id) return
    return (await dbPromise).get(OBJECT_STORE_NAME, id)
  },
  async getAllKatalogRestaurant () {
    return (await dbPromise).getAll(OBJECT_STORE_NAME)
  },
  async putKatalogRestaurant (katalogRestaurant) {
    if (!katalogRestaurant.hasOwnProperty('id')) {
      return
    }
    return (await dbPromise).put(OBJECT_STORE_NAME, katalogRestaurant)
  },
  async deleteKatalogRestaurant (id) {
    if (!id) return
    return (await dbPromise).delete(OBJECT_STORE_NAME, id)
  }
}

export default FavoriteRestaurantIdb
