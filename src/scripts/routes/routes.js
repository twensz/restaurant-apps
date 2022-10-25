import Home from '../view/pages/home';
import Favorites from '../view/pages/favorites';
import Detail from '../view/pages/detail';

const routes = {
  '/': Home,
  '/favorites': Favorites,
  '/detail/:id': Detail,
};

export default routes;
