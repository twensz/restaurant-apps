import { getRestaurants } from '../../data/api-source';
import '../../component/restaurant-list';
import '../../component/restaurant-sort-input';

const Home = {
  render() {
    return `
    <div class="hero">
      <div class="hero__inner">
        <h2 class="hero__title">Menampilkan restaurant terbaik di penjuru indonesia</h2>
      </div>
    </div>
    
    <div class="content__inner">
      <h3 class="content__heading">All Restaurant</h3>
      <restaurant-list></restaurant-list>
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
