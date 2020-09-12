/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import AboutMe from '../components/aboutMe/aboutMe';
import './home.scss';

const Home = () => {
  return (
    <div className="container container--home">
      <AboutMe />
    </div>
  );
};

export default Home;
