import './restaurant-item';

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'restaurant__list');
  }

  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  _render() {
    this.innerHTML = '';

    this._restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('restaurant-item');
      restaurantItemElement.restaurant = restaurant;

      this.appendChild(restaurantItemElement);
    });
  }
}

customElements.define('restaurant-list', RestaurantList);
