import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';
import { createLikeButton, createLikedButton } from '../view/templates/templates-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._render();
  },

  async _render() {
    const { id } = this._restaurant;

    if (await this._isRestaurantLiked(id)) {
      await this._renderLiked();
    } else {
      await this._renderLike();
    }
  },

  async _isRestaurantLiked(id) {
    const { error } = await FavoriteRestaurantIdb.getRestaurant(id);
    return !error;
  },

  async _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButton();

    document.querySelector('#likeButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._render();
    });
  },

  async _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButton();

    document.querySelector('#likeButton').addEventListener('click', async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._render();
    });
  },
};

export default LikeButtonInitiator;
