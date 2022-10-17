const createLikeButton = () => `
  <button id="likeButton" aria-label="Like this restaurant">
    <i class="fa-regular fa-heart"></i>
    Like
  </button>
`;

const createLikedButton = () => `
  <button id="likeButton" aria-label="Unlike this restaurant">
    <i class="fa-solid fa-heart"></i>
    Unlike
  </button>
`;

export { createLikeButton, createLikedButton };
