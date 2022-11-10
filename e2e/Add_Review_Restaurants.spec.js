const assert = require('assert');

Feature('Add Review Restaurants');

Before(({ I }) => {
  I.amOnPage('');

  I.waitForElement('.restaurant-item__name a', 10);
  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());
});

Scenario('showing add review form', ({ I }) => {
  I.waitForElement('#restaurantAddReviewForm', 10);
  I.seeElement('#restaurantAddReviewForm');
  I.seeElement('#name');
  I.seeElement('#review');
  I.seeElement('#restaurantAddReviewForm button');

  I.seeElement('.restaurant-detail__review-list');
});

Scenario('add restaurant review', async ({ I }) => {
  I.waitForElement('.restaurant-detail__review-item p', 10);

  const review = `e2e ${new Date().toISOString()}`;

  I.fillField('#name', 'twensz');
  I.fillField('#review', review);
  I.click('#restaurantAddReviewForm button');

  I.waitForElement('.restaurant-detail__review-item p', 10);

  const reviewItem = locate('.restaurant-detail__review-item p').last();
  const reviewItemContent = await I.grabTextFrom(reviewItem);
  const reviewItemContentClean = reviewItemContent.split('"').join('').slice(1, -1);

  console.log(reviewItemContentClean, review);
  pause();
  assert.strictEqual(review, reviewItemContentClean);
});
