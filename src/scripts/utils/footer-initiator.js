const FooterInitiator = {
  init({ backToTopButton }) {
    backToTopButton.addEventListener('click', () => window.scrollTo(0, 0));
  },
};

export default FooterInitiator;
