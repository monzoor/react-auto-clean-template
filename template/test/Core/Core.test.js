import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';

import renderWithRouter from '../utils/render';

import App from '../../Core';
import store from '../../Core/Store';

test('full app rendering/navigating', () => {
  renderWithRouter(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  expect(screen.getByText(/this is home/i)).toBeInTheDocument();

  const leftClick = { button: 0 };
  userEvent.click(screen.getByText(/wow/i), leftClick);

  expect(screen.getByText(/this is wow/i)).toBeInTheDocument();
});

test('landing on a bad page', () => {
  renderWithRouter(<App />, { route: '/something-that-does-not-match' });

  expect(screen.getByText(/this is 404/i)).toBeInTheDocument();
});
