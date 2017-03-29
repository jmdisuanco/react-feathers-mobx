import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import FeathersClient from './FeathersClient';
import Messages from './ChatStore';
import App from './App';


render(
  <AppContainer>
    <App appStore={Messages} />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;

    render(
      <AppContainer>
        <NextApp appState={appStore} />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
