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
  try {
    const response = await fetch(`${BASE_URL}/detail/${id}`);
    const responseJson = await response.json();

    if (responseJson.error) {
      return { error: true, status: 'success', data: null };
    }
    return { error: false, status: 'success', data: responseJson.restaurant };
  } catch (error) {
    return { status: 'failed' };
  }
}

async function addRestaurantReview({ id, name, review }) {
  try {
    const response = await fetch(`${BASE_URL}/review`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, name, review }),
    });
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.error) {
      return { error: true, status: 'success' };
    }
    return { error: false, status: 'success' };
  } catch (error) {
    return { status: 'failed' };
  }
}

export { getRestaurants, getRestaurant, addRestaurantReview };
