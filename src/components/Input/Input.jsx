import React from 'react';
import './input.css';

const Input = React.forwardRef(
  ({ newInput, handleChange, handleKeyDown, handleKeyUp }, ref) => {
    return (
      <div>
        <input
          value={newInput}
          onChange={handleChange}
          // onKeyDown={handleKeyDown}
          //
          onKeyUp={handleKeyUp}
          className='hidden'
          type='text'
          maxLength='15'
          ref={ref}
          autoFocus
        />
      </div>
    );
  }
);

export default Input;
