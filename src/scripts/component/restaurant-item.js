import { createRestaurantItem } from '../view/templates/templates-creator';

class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.innerHTML = createRestaurantItem(this._restaurant);
  }
}

customElements.define('restaurant-item', RestaurantItem);
