import React from 'react';
import Message from '../Message/Message';
import PromptText from '../PromptText/PromptText';
import { commandsAndDescription } from '../../utils/data';
import './help.css';

const Help = () => {
  return (
    <div>
      {Object.keys(commandsAndDescription).map((item, index) => {
        return (
          <p className='displayInfo' key={index}>
            <PromptText text={item} />
            <PromptText text={commandsAndDescription[item]} />
          </p>
        );
      })}
    </div>
  );
};

export default Help;
