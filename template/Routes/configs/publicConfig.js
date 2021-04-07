import { PATHS } from '@constants';

import Home from '@containers/Home';
import Page1 from '@containers/Page1';
import NotFound from '@containers/NotFound';

const routes = [
  {
    path: PATHS.HOME,
    component: Home,
    exact: true,
  },
  {
    path: PATHS.PAGE1,
    component: Page1,
  },
  {
    path: '*',
    component: NotFound,
  },
];

export default routes;
