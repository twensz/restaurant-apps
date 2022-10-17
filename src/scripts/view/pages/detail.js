import { getRestaurant } from '../../data/api-source';
import UrlParser from '../../routes/url-parser';
import '../../component/restaurant-detail';

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
    const { error, data } = await getRestaurant(url.id);

    if (!error) {
      restaurantDetailElement.restaurant = data;
      restaurantDetailElement.body = url.verb || null;
    }
  },
};

export default Detail;
