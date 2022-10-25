import CONFIG from '../../globals/config';

const createLikeButton = () => `
  <button id="likeButton" aria-label="Like this restaurant">
    <i class="fa-regular fa-heart"></i>
    Like
  </button>
`;

const createLikedButton = () => `
  <button id="likeButton" aria-label="Unlike this restaurant">
    <i class="fa-solid fa-heart"></i>
    Unlike
  </button>
`;

const createRestaurantItem = (restaurant) => `
  <article class="restaurant-item">
    <img src="${CONFIG.BASE_IMAGE_URL}/small/${restaurant.pictureId}" alt="Restaurant ${restaurant.name} yang berada di kota ${restaurant.city}" class="restaurant-item__picture" />
    <div class="restaurant-item__info">
      <div class="restaurant-item__star">
        <i class="fa-solid fa-star"></i>${restaurant.rating}
      </div>
      <div class="restaurant-item__city">${restaurant.city}</div>
      <h4 class="restaurant-item__name"> <a href="#/detail/${restaurant.id}">${restaurant.name}</a> </h4>
      <p class="restaurant-item__description">${restaurant.description}</p>
    </div>
  </article>
`;

const createRestaurantDetail = (restaurant) => `
  <article class="restaurant-detail">
  <img src="${CONFIG.BASE_IMAGE_URL}/large/${restaurant.pictureId}" alt="Restaurant ${restaurant.name} yang berada di kota ${restaurant.city}" class="restaurant-detail__picture" />
  
  <section class="restaurant-detail__header">
      <div class="restaurant-detail__header__top">
        <h2 class="restaurant-detail__header__name">${restaurant.name}</h2>
        <div class="restaurant-detail__header__like-button-container"></div>
      </div>

      <span class="restaurant-detail__header__star">
          <i class="fa-solid fa-star"></i>
          ${restaurant.rating}
      </span>
      <span class="devider"></span>
      <span class="restaurant-detail__header__categories">Categories : ${restaurant.categories.map((categorie) => `<span>${categorie.name}</span>`).join(', ')}</span>
      <span class="devider"></span>
      <span class="restaurant-detail__header__address">
        <i class="fa-solid fa-location-dot"></i>
        ${restaurant.address}, ${restaurant.city}
      </span>
    </section>

    <section class="restaurant-detail__description">
      <h3>Description</h3>
      <p class="restaurant-detail__description__content">${restaurant.description}</p>
    </section>

    <section class="restaurant-detail__menus">
      <h3>Menus</h3>
      <section class="restaurant-detail__menus__foods">
        <h4>Foods</h4>
        <ul>
          ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
      </section>
      <section class="restaurant-detail__menus__drinks">
        <h4>Drinks</h4>
        <ul>
          ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
      </section>
    </section>

    <section class="restaurant-detail__reviews">
      <h3>Reviews</h3>
      <form id="restaurantAddReviewForm" class="restaurant-detail__reviews__review-input">
        <input type="text" id="name" name="name" placeholder="Your name ..." />
        <textarea type="text" id="review" name="review" placeholder="Your review ..."></textarea>
        <button type="submit">Add new review</button>
      </form>
      <div class=restaurant-detail__review-list>
        ${restaurant.customerReviews.map((review) => `
          <div class="restaurant-detail__review-item">
            <p>&quot; ${review.review} &quot;</p>
            <span>- <b>${review.name}</b>, ${review.date}</span>
          </div>
        `).join('')}
      </div>
    </section>
  </article>
`;

const createRestaurantIsEmpty = () => `
  <div class="restaurant-is-empty">
    <i class="fa-regular fa-file-lines"></i>
    <p>Nothing to see here :(</p>
  </div>
`;

const createLoading = () => `
  <div className="loader-container">
    <div className="spinner" />
  </div>
`;

const createCheckYourConnection = () => `
  <div class="check-your-connection">
    <i class="fa-solid fa-circle-exclamation"></i>
    <h6>Failed to get data</h6>
    <p>Please check your conection and try again</p>
  </div>
`;

export {
  createLikeButton,
  createLikedButton,
  createRestaurantItem,
  createRestaurantDetail,
  createRestaurantIsEmpty,
  createLoading,
  createCheckYourConnection,
};
