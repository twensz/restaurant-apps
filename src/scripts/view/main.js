import DataSource from '../data/data-source';

const main = () => {
  // Hamburger
  const hamburgerElement = document.querySelector('.app-bar__menu');
  const navElement = document.querySelector('.nav');
  const closeNavElementArea = document.querySelectorAll('.hero, main');
  const toggleNavElement = () => {
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('close');
  };
  const closeNavElement = () => {
    navElement.classList.remove('open');
    hamburgerElement.classList.remove('close');
  };

  hamburgerElement.addEventListener('click', toggleNavElement);
  closeNavElementArea.forEach((element) => element.addEventListener('click', closeNavElement));

  // Back to Top
  const backToTopElement = document.querySelector('.back-to-top');
  backToTopElement.addEventListener('click', () => window.scrollTo(0, 0));

  // Restaurants
  let restaurants = DataSource.getAllRestaurant();

  const restaurantListElement = document.querySelector('.resto__list');
  const renderRestaurantItem = () => {
    restaurantListElement.innerHTML = '';

    restaurants.forEach((restaurant) => {
      const restaurantItemElement = document.createElement('article');
      restaurantItemElement.classList.add('resto__item');

      restaurantItemElement.innerHTML = `
      <img src="${restaurant.pictureId}" alt="Restaurant ${restaurant.name} yang berada di kota ${restaurant.city}" class="resto__picture" />
      <div class="resto__info">
        <div class="resto__star">
          <i class="fa-solid fa-star"></i>${restaurant.rating}
        </div>
        <div class="resto__city">${restaurant.city}</div>
        <h4 class="resto__name"> <a href="#">${restaurant.name}</a> </h4>
        <p class="resto__description">${restaurant.description}</p>
      </div>
    `;

      restaurantListElement.appendChild(restaurantItemElement);
    });
  };
  renderRestaurantItem();

  const sortElement = document.querySelector('#sort');
  // eslint-disable-next-line func-names
  const sortRestaurant = function () {
    switch (this.value) {
      case 'alphabet-asc':
        restaurants = DataSource.sortRestaurantByName('asc');
        break;
      case 'alphabet-desc':
        restaurants = DataSource.sortRestaurantByName('desc');
        break;
      case 'rating-asc':
        restaurants = DataSource.sortRestaurantByRating('asc');
        break;
      case 'rating-desc':
        restaurants = DataSource.sortRestaurantByRating('desc');
        break;
      default:
        restaurants = DataSource.getAllRestaurant();
        break;
    }
    renderRestaurantItem();
  };
  sortElement.addEventListener('change', sortRestaurant);
};

export default main;
