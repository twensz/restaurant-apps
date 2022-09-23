/* eslint-disable max-len */
import DataSource from '../data/data-source';
import '../component/restaurant-list';
import '../component/sort-restaurant';

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

  // Restaurant ELement
  const restaurantListElement = document.querySelector('restaurant-list');
  restaurantListElement.restaurants = DataSource.getAllRestaurant();

  // Sort Restaurant Element
  const sortRestaurantElement = document.querySelector('sort-restaurant');
  const onChangeEvent = function () {
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
  };
  sortRestaurantElement.onChangeEvent = onChangeEvent;
};

export default main;
