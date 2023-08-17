import React from 'react';
import './container.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import TopBar from '../TopBar/TopBar';

const Container = React.forwardRef(
  (
    {
      newInput,
      handleChange,
      handleKeyDown,
      handleKeyUp,
      userCommands,
      handleClick,
      moveCursor,
      text,
      handleBlur,
      isFocused,
    },
    ref
  ) => {
    return (
      <div
        tabIndex='-1'
        onClick={handleClick}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className='containerTerminal'
      >
        <TopBar text={text} isFocused={isFocused} />

        <div className='containerInnerTerminal'>
          <Header />
          <Main
            newInput={newInput}
            handleChange={handleChange}
            handleKeyUp={handleKeyUp}
            userCommands={userCommands}
            ref={ref}
            moveCursor={moveCursor}
            isFocused={isFocused}
          ></Main>
        </div>
      </div>
    );
  }
);

export default Container;
