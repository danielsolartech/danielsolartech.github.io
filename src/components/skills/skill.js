/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import './skill.scss';

const Skill = ({ name, image, description, year }) => (
  <div className="skill">
    <div className="skill__header">
      <div className="skill__header--image" style={{
        backgroundImage: `url('${image}')`,
      }} />
      <div className="skill__header--info">
        <div className="skill__header--info__name">
          {name}
        </div>
        <div className="skill__header--info__time">
          {year}
        </div>
      </div>
    </div>
    <div className="skill__description">
      {description}
    </div>
  </div>
);

export default Skill;
