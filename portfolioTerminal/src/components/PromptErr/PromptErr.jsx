import React from 'react';
import Message from '../Message/Message';
import './promptErr.css';

const PromptErr = ({ lastCommand, errorMsg, promptName }) => {
  return (
    <div>
      <Message text={`${promptName}${lastCommand}`} />
      <Message className='errMsgClassColor' text={errorMsg} />
    </div>
  );
};

export default PromptErr;
