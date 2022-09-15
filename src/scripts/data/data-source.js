import data from "../../DATA.json";
const restaurant = data.restaurants;

class DataSource {
  static getAllRestaurant() {
    return restaurant;
  }

  static sortRestaurantByName(mode = "asc") {
    if (mode == "asc") {
      return [...restaurant].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return [...restaurant].sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  static sortRestaurantByRating(mode = "asc") {
    if (mode == "asc") {
      return [...restaurant].sort((a, b) => b.rating - a.rating);
    } else {
      return [...restaurant].sort((a, b) => a.rating - b.rating);
    }
  }

  static async getRecipe() {
    try {
      const response = await fetch("www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata");
      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.error(error);
    }
  }
}

export default DataSource;
