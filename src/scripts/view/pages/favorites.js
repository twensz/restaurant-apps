import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../../component/restaurant-list';
import '../../component/restaurant-sort-input';

const Favorites = {
  render() {
    return `
    <div class="content__inner">
      <h3 class="content__heading">Favorite Restaurant</h3>
      <restaurant-list></restaurant-list>
    </div>
    `;
  },

  async afterRender() {
    const restaurantListElement = document.querySelector('restaurant-list');
    const { error, data } = await FavoriteRestaurantIdb.getRestaurants();
    if (!error) {
      restaurantListElement.restaurants = data;
    }
  },
};

export default Favorites;
