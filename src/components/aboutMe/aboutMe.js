/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './aboutMe.scss';

const AboutMe = () => (
  <section className="aboutMe" id="aboutMe">
    <div className="aboutMe__content">
      <div className="aboutMe__content__avatar" />
      <div className="aboutMe__content__info">
        <h1>About me</h1>
        <p>
          Multiplataform software developer with 2 years of experience in
          backend and frontend process with JavaScript, TypeScript, Rust,
          NodeJS, Deno, Ionic and Go.
        </p>
        <p>
          Besides, i've made works as freelancer with mobile apps or web apps,
          and bots for Discord communities.
        </p>
        <p>
          "The life is an adventure without end."
        </p>
      </div>
    </div>
    <div className="aboutMe__country">
      <div className="aboutMe__country__flag" />
      <div className="aboutMe__country__span">
        Medellín, Colombia
      </div>
    </div>
  </section>
);

export default AboutMe;
