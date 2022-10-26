import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';
import FooterInitiator from '../utils/footer-initiator';

class App {
  constructor({
    button, drawer, content, loader, backToTopButton,
  }) {
    this.button = button;
    this.drawer = drawer;
    this.content = content;
    this.loader = loader;
    this.backToTopButton = backToTopButton;

    this.initialAppShell();
  }

  initialAppShell() {
    DrawerInitiator.init({
      button: this.button,
      drawer: this.drawer,
      content: this.content,
    });

    FooterInitiator.init({
      backToTopButton: this.backToTopButton,
    });
  }

  showLoading() {
    this.loader.style.display = 'flex';
  }

  hideLoading() {
    this.loader.style.display = 'none';
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this.showLoading();
    this.content.removeAttribute('class');
    this.content.innerHTML = page.render();
    await page.afterRender();
    this.hideLoading();
  }
}

export default App;
