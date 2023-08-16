import React from 'react';
import './cursor.css';

const Cursor = ({ moveCursor }) => {
  //const test = -0.5;
  //console.log(moveCursor);
  return (
    // <span style={{ left: `${moveCursor + 0.58}em` }} className='cursor'>
    //   █
    // </span>
    <>
      <span className='moveCursor'>
        {moveCursor}
        <span className='cursor'>█</span>
      </span>
    </>
  );
};

export default Cursor;
