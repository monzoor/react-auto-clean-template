import { PATHS } from '@constants';

import Home from '@containers/Home';
import Wow from '@containers/Wow';
import NotFound from '@containers/NotFound';

const routes = [
  {
    path: PATHS.HOME,
    component: Home,
  },
  {
    path: PATHS.WOW,
    component: Wow,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
