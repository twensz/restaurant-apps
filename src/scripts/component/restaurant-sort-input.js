import DataSource from '../data/data-source';

class RestaurantSortInput extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'sort-input-restaurant');
    this._render();
  }

  _onChangeEvent() {
    const restaurantListElement = document.querySelector('restaurant-list');

    switch (this.value) {
      case 'alphabet-asc':
        restaurantListElement.restaurants = DataSource.sortRestaurantByName('asc');
        break;
      case 'alphabet-desc':
        restaurantListElement.restaurants = DataSource.sortRestaurantByName('desc');
        break;
      case 'rating-asc':
        restaurantListElement.restaurants = DataSource.sortRestaurantByRating('asc');
        break;
      case 'rating-desc':
        restaurantListElement.restaurants = DataSource.sortRestaurantByRating('desc');
        break;
      default:
        restaurantListElement.restaurants = DataSource.getAllRestaurant();
        break;
    }
  }

  _render() {
    this.innerHTML = `
      <span class="restaurant-sort-input__title">Sort by</span>
      <select class="restaurant-sort-input__input" id="restaurantSortInput">
        <option class="restaurant-sort-input__option" value="default">Default</option>
        <option class="restaurant-sort-input__option" value="alphabet-asc">Alphabet (A - Z)</option>
        <option class="restaurant-sort-input__option" value="alphabet-desc">Alphabet (Z - A)</option>
        <option class="restaurant-sort-input__option" value="rating-asc">Rating (High to Low)</option>
        <option class="restaurant-sort-input__option" value="rating-desc">Rating (Low to High)</option>
      </select>
    `;

    this.querySelector('#restaurantSortInput').addEventListener('change', this._onChangeEvent);
  }
}

customElements.define('restaurant-sort-input', RestaurantSortInput);
