import Home from '../view/pages/home';
import Favorites from '../view/pages/favorites';
import Detail from '../view/pages/detail';

const routes = {
  '/': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
  '/detail/:id/description': Detail,
  '/detail/:id/menu': Detail,
  '/detail/:id/review': Detail,
};

export default routes;
