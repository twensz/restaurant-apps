class SortRestaurant extends HTMLElement {
  connectedCallback() {
    this.setAttribute('class', 'sort');
    this._render();
  }

  set onChangeEvent(onChangeEvent) {
    this._onChangeEvent = onChangeEvent;
    this._render();
  }

  _render() {
    this.innerHTML = `
      <div class="sort__inner">
        <span class="sort__title">Sort by</span>
        <select class="sort__input" id="sort">
          <option class="sort__option" value="default">Default</option>
          <option class="sort__option" value="alphabet-asc">Alphabet (A - Z)</option>
          <option class="sort__option" value="alphabet-desc">Alphabet (Z - A)</option>
          <option class="sort__option" value="rating-asc">Rating (High to Low)</option>
          <option class="sort__option" value="rating-desc">Rating (Low to High)</option>
        </select>
      </div>
    `;

    this.querySelector('#sort').addEventListener('change', this._onChangeEvent);
  }
}

customElements.define('sort-restaurant', SortRestaurant);
