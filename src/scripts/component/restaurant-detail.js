import { addRestaurantReview } from '../data/api-source';
import LikeButtonInitiator from '../utils/like-button-initiator';
import { createRestaurantDetail } from '../view/templates/templates-creator';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  async _render() {
    this.innerHTML = createRestaurantDetail(this._restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: this.querySelector('.restaurant-detail__header__like-button-container'),
      restaurant: this._restaurant,
    });

    this.querySelector('#restaurantAddReviewForm').addEventListener('submit', async (event) => {
      event.preventDefault();

      const data = {
        id: this._restaurant.id,
        name: this.querySelector('#restaurantAddReviewForm #name').value,
        review: this.querySelector('#restaurantAddReviewForm #review').value,
      };

      await addRestaurantReview(data);
      window.location.reload(true);
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
