import data from "../../DATA.json";
const restaurants = data.restaurants;

class DataSource {
  static getAllRestaurant() {
    return restaurants;
  }

  static sortRestaurantByName(mode = "asc") {
    if (mode == "asc") {
      return [...restaurants].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return [...restaurants].sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  static sortRestaurantByRating(mode = "asc") {
    if (mode == "asc") {
      return [...restaurants].sort((a, b) => b.rating - a.rating);
    } else {
      return [...restaurants].sort((a, b) => a.rating - b.rating);
    }
  }
}

export default DataSource;
