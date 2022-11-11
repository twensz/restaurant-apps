import { getRestaurants } from '../../data/api-source';
import '../../component/restaurant-list';
import { createSkeletonRestaurantItem } from '../templates/templates-creator';

const Home = {
  render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <picture>
          <source media="(max-width: 600px)" srcset="./images/hero-image-small.jpg">
          <img src="./images/hero-image.jpg" alt="Hero image">
        </picture>
        <div class="hero__title"><h2>Menampilkan restaurant terbaik di penjuru indonesia</h2></div>
      </div>
    </div>
    
    <div class="content__inner">
      <h3 class="content__heading">All Restaurant</h3>
      <restaurant-list>
        ${createSkeletonRestaurantItem(10)}
      </restaurant-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    const { error, data } = await getRestaurants();
    if (!error) {
      restaurantListElement.restaurants = data;
    }
  },
};

export default Home;
