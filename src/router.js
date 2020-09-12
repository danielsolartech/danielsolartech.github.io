/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home';

const Router = () => (
  <BrowserRouter>
    <Header />

    <Switch>
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
