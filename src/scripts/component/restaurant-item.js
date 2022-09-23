class RestaurantItem extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  _render() {
    this.innerHTML = `
    <article class="restaurant__item">
      <img src="${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name} yang berada di kota ${this._restaurant.city}" class="restaurant__picture" />
      <div class="restaurant__info">
        <div class="restaurant__star">
          <i class="fa-solid fa-star"></i>${this._restaurant.rating}
        </div>
        <div class="restaurant__city">${this._restaurant.city}</div>
        <h4 class="restaurant__name"> <a href="#">${this._restaurant.name}</a> </h4>
        <p class="restaurant__description">${this._restaurant.description}</p>
      </div>
    </article>
    `;
  }
}

customElements.define('restaurant-item', RestaurantItem);
