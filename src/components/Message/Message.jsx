import React from 'react';
import './message.css';

const Message = ({ text, style, className }) => {
  return (
    <p className={className} style={style}>
      {text}
    </p>
  );
};

export default Message;
