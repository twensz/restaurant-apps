import createLikeButtonPresenterWithRestaurant from './helpers/testFactories';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurant-idb';

describe('Unliking the restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it('should show unlike button when the restaurant has been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Unlike this restaurant"]')).toBeTruthy();
  });

  it('should not show like button when the restaurant has not been liked', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="Like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove the restaurant from liked list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect((await FavoriteRestaurantIdb.getRestaurants(1)).data).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="Unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect((await FavoriteRestaurantIdb.getRestaurants()).data).toEqual([]);
  });
});
