import React from 'react';
import Message from '../Message/Message';
import { email } from '../../utils/data';

const Email = () => {
  return (
    <div>
      <Message className='promptMsg' text={email} />
    </div>
  );
};

export default Email;
