import React from 'react';
import './topBar.css';

const TopBar = ({ text, isFocused }) => {
  return (
    <>
      <div className={isFocused ? 'topBar' : `topBar topBarBlur`}>
        <span className='topBarText'>{text}</span>
      </div>
    </>
  );
};

export default TopBar;
