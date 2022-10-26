import { createRestaurantIsEmpty } from '../view/templates/templates-creator';
import './restaurant-item';

class RestaurantList extends HTMLElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    this.innerHTML = '';

    if (this._restaurants.length <= 0) {
      this.innerHTML = createRestaurantIsEmpty();
      return;
    }

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
