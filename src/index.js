/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Router from './router';
import './general.scss';

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router />
    </AppContainer>,
    document.getElementById('web'),
  );
};

render();

if (module.hot) {
  module.hot.accept('./router', render);
}
