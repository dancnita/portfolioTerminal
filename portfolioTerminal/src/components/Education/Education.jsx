import React from 'react';
import Message from '../Message/Message';
import { education } from '../../utils/data';
import './education.css';

const Education = () => {
  return (
    <div className='promptMsg'>
      {Object.values(education).map((item, index) => {
        return <Message text={item} key={index} />;
      })}
    </div>
  );
};

export default Education;
