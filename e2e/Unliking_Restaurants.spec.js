Feature('Unliking Restaurants');

Before(async ({ I }) => {
  I.amOnPage('');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');
  const firstRestaurant = locate('.restaurant-item__name a').first();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorites');
});

Scenario('showing liked restaurants', ({ I }) => {
  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');
  I.click('.restaurant-item__name a');

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('#/favorites');
  I.seeElement('.restaurant-is-empty');
  I.see('Nothing to see here :(', 'p');
});