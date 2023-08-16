import React from 'react';
import { about } from '../../utils/data';
import Message from '../Message/Message';
import './about.css';

const About = () => {
  return (
    <div className='promptMsg'>
      <Message text={about.line1} />
      <Message text={about.line2} />
    </div>
  );
};

export default About;
