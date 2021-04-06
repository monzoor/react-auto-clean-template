import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './Store';
import '../styles/main.scss';

import BaseLayout from './Layout/Base';

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <BaseLayout />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};

export default App;
