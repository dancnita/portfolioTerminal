import React from 'react';
import Link from '../Link/Link';
import { projects } from '../../utils/data';
import Message from '../Message/Message';
import './projects.css';

const Projects = () => {
  return (
    <div>
      {Object.values(projects).map((item, index) => {
        return (
          //   <div className='socials' key={index}>
          //     <PromptText text={item[0]} />
          //     <a href={item[1]}>{item[1]} </a>
          //   </div>
          <div key={index} className='projects'>
            <Message className='projTitle' text={item.name} />
            <Message text={Object.keys(item)[1]} />
            <Message className='projDescription' text={item.features} />
            <Message text={Object.keys(item)[2]} />
            <Message className='projDescription' text={item.technologies} />
            <Link
              className='projectsLink'
              text1={Object.keys(item)[3]}
              linkSrc={item.github}
              text2={item.github}
            />
            {/* <Message text={item.github} /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
