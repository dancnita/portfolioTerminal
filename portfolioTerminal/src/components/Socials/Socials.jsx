import React from 'react';
import PromptText from '../PromptText/PromptText';
import { socials, externalLinks } from '../../utils/data';
import Message from '../Message/Message';
import './socials.css';
import Link from '../Link/Link';

const Socials = () => {
  return (
    <div>
      {Object.entries(socials).map((item, index) => {
        return (
          //   <div className='socials' key={index}>
          //     <PromptText text={item[0]} />
          //     <a href={item[1]}>{item[1]} </a>
          //   </div>
          <Link
            className='socials'
            text1={item[0]}
            linkSrc={item[1]}
            text2={item[1]}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default Socials;
