import React from 'react';
import Cursor from '../Cursor/Cursor';
import PromptText from '../PromptText/PromptText';
import '../PromptText/promptText.css';
import './promptLine.css';
import { useImperativeHandle, useRef } from 'react';
import Input from '../Input/Input';

//import forwardRef from 'react';

const PromptLine = React.forwardRef(
  (
    {
      newInput,
      handleChange,
      // handleKeyDown,
      handleKeyUp,
      promptName,
      moveCursor,

      isFocused,
    },
    ref
  ) => {
    const promptLineRef = useRef(null);
    const inputAreaRef = useRef(null);

    useImperativeHandle(ref, () => ({
      get promptLineRef() {
        return promptLineRef.current;
      },
      get inputAreaRef() {
        return inputAreaRef.current;
      },
    }));

    return (
      <>
        <Input
          newInput={newInput}
          handleChange={handleChange}
          //handleKeyDown={handleKeyDown}
          handleKeyUp={handleKeyUp}
          ref={inputAreaRef}
        />
        <PromptText className='flex' ref={promptLineRef} text={promptName} />
        <Cursor moveCursor={moveCursor} isFocused={isFocused} />
        <PromptText className='abs' text={newInput} />
      </>
    );
  }
);

export default PromptLine;
