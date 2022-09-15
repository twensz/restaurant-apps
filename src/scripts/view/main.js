import DataSource from "../data/data-source";

const main = () => {
  // hamburger button
  const hamburgerElement = document.querySelector(".app-bar__menu");
  const navElement = document.querySelector(".nav");
  hamburgerElement.addEventListener("click", function () {
    navElement.classList.toggle("open");
    hamburgerElement.classList.toggle("close");
  });
  document.querySelector(".hero").addEventListener("click", function () {
    navElement.classList.remove("open");
    hamburgerElement.classList.remove("close");
  });
  document.querySelector("main").addEventListener("click", function () {
    navElement.classList.remove("open");
    hamburgerElement.classList.remove("close");
  });

  // back to top button
  document.querySelector(".back-to-top").addEventListener("click", function () {
    window.scrollTo(0, 0);
  });

  // resto data
  let restaurant = DataSource.sortRestaurantByName("desc");

  const restoListElement = document.querySelector(".resto__list");
  function renderRestoItem() {
    restoListElement.innerHTML = ``;

    restaurant.forEach((resto) => {
      const restoItemELement = document.createElement("article");
      restoItemELement.classList.add("resto__item");

      restoItemELement.innerHTML = `
      <img src="${resto.pictureId}" alt="Restaurant ${resto.name} yang berada di kota ${resto.city}" class="resto__picture" />
      <div class="resto__info">
        <div class="resto__star">
          <i class="fa-solid fa-star"></i>${resto.rating}
        </div>
        <div class="resto__city">${resto.city}</div>
        <h4 class="resto__name"> <a href="#">${resto.name}</a> </h4>
        <p class="resto__description">${resto.description}</p>
      </div>
    `;

      restoListElement.appendChild(restoItemELement);
    });
  }

  const sortButton = document.querySelector("#sort");
  sortButton.addEventListener("change", function () {
    if (this.value == "alphabet-asc") {
      restaurant = DataSource.sortRestaurantByName("asc");
      console.log(restaurant);
      renderRestoItem();
    } else if (this.value == "alphabet-desc") {
      restaurant = DataSource.sortRestaurantByName("desc");
      console.log(restaurant);
      renderRestoItem();
    } else if (this.value == "rating-asc") {
      restaurant = DataSource.sortRestaurantByRating("asc");
      console.log(restaurant);
      renderRestoItem();
    } else if (this.value == "rating-desc") {
      restaurant = DataSource.sortRestaurantByRating("desc");
      console.log(restaurant);
      renderRestoItem();
    } else {
      restaurant = DataSource.getAllRestaurant();
      console.log(restaurant);
      renderRestoItem();
    }
  });

  renderRestoItem();
};

export default main;
