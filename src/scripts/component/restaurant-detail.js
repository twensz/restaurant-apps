import LikeButtonInitiator from '../utils/like-button-initiator';

class RestaurantDetail extends HTMLElement {
  set restaurant(restaurant) {
    this._restaurant = restaurant;
    this._render();
  }

  set body(body) {
    this._body = body;
    this._render();
  }

  _descriptionContent() {
    return `<p class="restaurant-detail__body__description">${this._restaurant.description}</p>`;
  }

  _menuContent() {
    return `
      <div class="restaurant-detail__body__menu">
        <div>
          <h4>Foods</h4>
          <ul>
            ${this._restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>

        <div>
          <h4>Drinks</h4>
          <ul>
            ${this._restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>

      </div>
    `;
  }

  _reviewContent() {
    return `
      <div class="restaurant-detail__body__review">
        ${this._restaurant.customerReviews.map((review) => `
          <div class="restaurant-detail__body__review-item">
            <p>&quot; ${review.review} &quot;</p>
            <span>- <b>${review.name}</b>, ${review.date}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  _renderBody() {
    if (this._body === 'menu') {
      return this._menuContent();
    }
    if (this._body === 'review') {
      return this._reviewContent();
    }

    return this._descriptionContent();
  }

  async _render() {
    this.innerHTML = `
      <article class="restaurant-detail">
        <img src="https://restaurant-api.dicoding.dev/images/large/${this._restaurant.pictureId}" alt="Restaurant ${this._restaurant.name} yang berada di kota ${this._restaurant.city}" class="restaurant-detail__picture" />
        <div class="restaurant-detail__header">
          <div class="restaurant-detail__name-container">
            <h2 class="restaurant-detail__name">${this._restaurant.name}</h2>
            <div class="restaurant-detail__like-button-container"></div>
          </div>
          <span class="restaurant-detail__star">
              <i class="fa-solid fa-star"></i>
              ${this._restaurant.rating}
          </span>
          <span class="devider"></span>
          <span class="restaurant-detail__categories">Categories : ${this._restaurant.categories.map((categorie) => `<span>${categorie.name}</span>`).join(', ')}</span>
          <span class="devider"></span>
          <span class="restaurant-detail__address">
            <i class="fa-solid fa-location-dot"></i>
            ${this._restaurant.address}, ${this._restaurant.city}
          </span>
        </div>
        <nav class="restaurant-detail__nav">
          <ul>
            <li class=${this._body === 'description' ? 'active' : ''}><a href="#/detail/${this._restaurant.id}/description">Description</a></li>
            <li class=${this._body === 'menu' ? 'active' : ''}><a href="#/detail/${this._restaurant.id}/menu">Menu</a></li>
            <li class=${this._body === 'review' ? 'active' : ''}><a href="#/detail/${this._restaurant.id}/review">Review</a></li>
          </ul>
        </nav>
        <div class="restaurant-detail__body">
          ${this._renderBody()}
        </div>
      </article>
    `;

    LikeButtonInitiator.init({
      likeButtonContainer: this.querySelector('.restaurant-detail__like-button-container'),
      restaurant: this._restaurant,
    });
  }
}

customElements.define('restaurant-detail', RestaurantDetail);
