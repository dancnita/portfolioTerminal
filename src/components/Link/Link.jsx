import React from 'react';
import './link.css';

const Link = ({ className, text1, text2, text3 = null, linkSrc }) => {
  return (
    <p className={className}>
      <span>{text1}</span>
      <a href={linkSrc} className='link' target='_blank'>
        {text2}
      </a>
      {text3 === null ? null : <span>{text3}</span>}
    </p>
  );
};

export default Link;
