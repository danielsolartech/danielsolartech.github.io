/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__left--icon" />
        <div className="header__left--title">
          Daniel Solarte Chaverra
        </div>
      </div>
      <div className="header__right">
        <ul className="header__right--navigator">
          <li className="active"><Link to="/#about-me">
            About Me
          </Link></li>
          <li><Link to="/#projects">
            Projects
          </Link></li>
          <li><Link to="/#skills">
            Skills
          </Link></li>
          <li><Link to="/#contact">
            Contact
          </Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
