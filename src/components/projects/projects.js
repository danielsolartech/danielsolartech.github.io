/**
 * Copyright (c) Daniel Solarte Chaverra
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import projectsData from './projectsData';
import ProjectCard from './projectCard';
import ProjectInfo from './projectInfo';
import './projects.scss';

const Projects = ({ observer }) => {
  const [element, setElement] = React.useState(null);
  const [page, setPage] = React.useState(1);
  const [projectActive, setProjectActive] = React.useState(-1);
  const projectsPerPage = 6;

  React.useEffect(() => {
    if (element) {
      observer.observe(element);
    }
  }, [element]);

  React.useEffect(() => {
    if (projectActive >= projectsData.length) {
      projectActive = -1;
    }

    document.body.style.overflow = projectActive >= 0 ? 'hidden' : 'auto';
  }, [projectActive]);

  return (
    <>
      {(projectActive >= 0 && projectActive < projectsData.length) && (
        <ProjectInfo {...projectsData[projectActive]} onClick={() => setProjectActive(-1)} />
      )}
      <section className="projects" ref={setElement} data-page="projects">
        <h1 className="projects__title">Projects</h1>
        <div className="projects__grid">
          {projectsData.slice(0, projectsPerPage * page).map((project, i) => (
            <ProjectCard {...project} key={`project_${i + 1}`} onClick={() => setProjectActive(i)} />
          ))}
        </div>
        {((projectsPerPage * page + 1) <= projectsData.length) && <button className="projects__more" onClick={() => {
          setPage(page + 1);
        }}>Load more projects</button>}
      </section>
    </>
  );
};

export default Projects;
