/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Skill from './skill';
import './skills.scss';

const data = [
  {
    name: 'Rust',
    image: require('../../../public/skills/rust.png').default,
    description: 'Traits, structs, functions and pointers.',
    year: 2020,
  },
  {
    name: 'Go',
    image: require('../../../public/skills/go.png').default,
    description: 'Structs, pointers, slices and maps.',
    year: 2020,
  },
  {
    name: 'Heroku',
    image: require('../../../public/skills/heroku.png').default,
    description: 'Deploying Discord bots and websites.',
    year: 2020,
  },
  {
    name: 'Figma',
    image: require('../../../public/skills/figma.png').default,
    description: 'Apps design and plugins.',
    year: 2020,
  },
  {
    name: 'Deno',
    image: require('../../../public/skills/deno.png').default,
    description: 'Deno concepts.',
    year: 2020,
  },
  {
    name: 'Ionic',
    image: require('../../../public/skills/ionic.png').default,
    description: 'Hibrid mobile apps like a music player.',
    year: 2020,
  },
  {
    name: 'SocketIO',
    image: require('../../../public/skills/socketio.svg').default,
    description: 'Web apps in real time like a chat.',
    year: 2020,
  },
  {
    name: 'MongoDB',
    image: require('../../../public/skills/mongodb.png').default,
    description: 'Documents and virtual methods.',
    year: 2019,
  },
  {
    name: 'TypeScript',
    image: require('../../../public/skills/typescript.svg').default,
    description: 'Classes, generics, interfaces and types.',
    year: 2019,
  },
  {
    name: 'SASS',
    image: require('../../../public/skills/sass.png').default,
    description: 'Mixins, variables, includes and imports.',
    year: 2019
  },
  {
    name: 'Redux',
    image: require('../../../public/skills/redux.png').default,
    description: 'Global states with React.',
    year: 2019,
  },
  {
    name: 'ReactJS',
    image: require('../../../public/skills/reactjs.png').default,
    description: 'Hooks, components, states and routes.',
    year: 2019,
  },
  {
    name: 'NodeJS',
    image: require('../../../public/skills/nodejs.png').default,
    description: 'DiscordJS, ExpressJS, Jest and Mocha.',
    year: 2019,
  },
  {
    name: 'Visual Studio Code',
    image: require('../../../public/skills/vscode.png').default,
    description: 'Code editor.',
    year: 2019,
  },
  {
    name: 'Git',
    image: require('../../../public/skills/git.png').default,
    description: 'GitHub Actions, pull requests, brahches, pushes and commits.',
    year: 2019,
  },
  {
    name: 'MySQL',
    image: require('../../../public/skills/mysql.png').default,
    description: 'Relational tables, procedures and constraints.',
    year: 2018,
  },
  {
    name: 'Bootstrap',
    image: require('../../../public/skills/bootstrap.png').default,
    description: 'Modals, layout, toasts, navbar, carousel and forms.',
    year: 2018,
  },
  {
    name: 'jQuery',
    image: require('../../../public/skills/jquery.png').default,
    description: 'DOM manipulation.',
    year: 2018,
  },
  {
    name: 'JavaScript',
    image: require('../../../public/skills/javascript.png').default,
    description: 'Local Storage, cookies, PWA, DOM, Intersection Observer and ES6.',
    year: 2018,
  },
  {
    name: 'CSS3',
    image: require('../../../public/skills/css3.png').default,
    description: 'Animations, responsive design and basic elements.',
    year: 2017,
  },
  {
    name: 'HTML5',
    image: require('../../../public/skills/html5.png').default,
    description: 'Canvas API, SEO and basic elements.',
    year: 2017,
  },
];

const Skills = ({ observer }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [element, setElement] = React.useState(null);

  const skillsPerPage = 9;

  React.useEffect(() => {
    if (element) {
      observer.observe(element);
    }
  }, [element]);

  return (
    <section className="skills" ref={setElement} data-page="skills">
      <h1 className="skills__title">Skills</h1>
      <div className="skills__grid">
        {data.sort((a,b ) => (
          a.year < b.year ? 1 : a.year > b.year ? -1 : 0
        )).slice(0, skillsPerPage * currentPage).map((skillData, i) => (
          <Skill {...skillData} key={`skill_${i + 1}`} />
        ))}
      </div>
      {((skillsPerPage * currentPage + 1) <= data.length) && <button className="skills__more" onClick={() => {
        setCurrentPage(currentPage + 1);
      }}>
        Load more
      </button>}
    </section>
  );
};

export default Skills;
