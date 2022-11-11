const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.waitForElement('.restaurant-is-empty');
  I.seeElement('.restaurant-is-empty');
  I.see('Nothing to see here :(', 'p');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-is-empty');
  I.seeElement('.restaurant-is-empty');
  I.see('Nothing to see here :(', 'p');
  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');
  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.scrollTo('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorites');
  I.waitForElement('.restaurant-item', 10);
  I.seeElement('.restaurant-item');
  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__name a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});