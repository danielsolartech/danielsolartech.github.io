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
  const [currentPage, setCurrentPage] = React.useState('about-me');

  const pages = document.location.pathname.split('/').slice(1);

  if (pages[0].length && currentPage != pages[0]) {
    setCurrentPage(pages[0]);
  }

  function isPage(page) {
    if (currentPage === page) {
      return 'active';
    }

    return '';
  }

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
          <li className={isPage('about-me')}><Link to="/about-me" onClick={() => setCurrentPage('about-me')}>
            About Me
          </Link></li>
          <li className={isPage('projects')}><Link to="/projects" onClick={() => setCurrentPage('projects')}>
            Projects
          </Link></li>
          <li className={isPage('skills')}><Link to="/skills" onClick={() => setCurrentPage('skills')}>
            Skills
          </Link></li>
          <li className={isPage('contact')}><Link to="/contact" onClick={() => setCurrentPage('contact')}>
            Contact
          </Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
