const BASE_URL = 'https://restaurant-api.dicoding.dev';

async function getRestaurants() {
  const response = await fetch(`${BASE_URL}/list`);
  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.restaurants };
}

async function getRestaurant(id) {
  const response = await fetch(`${BASE_URL}/detail/${id}`);
  const responseJson = await response.json();

  if (responseJson.error) {
    return { error: true, data: null };
  }
  return { error: false, data: responseJson.restaurant };
}

export { getRestaurants, getRestaurant };
