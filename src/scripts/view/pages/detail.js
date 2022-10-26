import { getRestaurant } from '../../data/api-source';
import UrlParser from '../../routes/url-parser';
import '../../component/restaurant-detail';
import { createCheckYourConnection } from '../templates/templates-creator';

const Detail = {
  render() {
    return `
    <div class="content__inner">
      <restaurant-detail></restaurant-detail>
    </div>
    `;
  },

  async afterRender() {
    const restaurantDetailElement = document.querySelector('restaurant-detail');
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await getRestaurant(url.id);

    if (response.status === 'failed') {
      document.querySelector('#content').classList.add('flex-centered');
      document.querySelector('#content').innerHTML = createCheckYourConnection();
      return;
    }

    if (!response.error) {
      restaurantDetailElement.restaurant = response.data;
    }
  },
};

export default Detail;
