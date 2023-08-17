import React from 'react';
import PromptLine from '../PromptLine/PromptLine';
import { messages, commandsAvailable } from '../../utils/data';
import PromptMsg from '../PromptMsg/PromptMsg';

const Main = React.forwardRef(
  (
    {
      newInput,
      handleChange,
      //handleKeyDown,
      handleKeyUp,
      userCommands,
      moveCursor,

      isFocused,
    },
    ref
  ) => {
    return (
      <div>
        <PromptMsg
          promptName={messages.promptName}
          userCommands={userCommands}
          commandsAvailable={commandsAvailable}
          errorMsg={messages.errorMsg}
        ></PromptMsg>
        <PromptLine
          newInput={newInput}
          handleChange={handleChange}
          //handleKeyDown={handleKeyDown}
          handleKeyUp={handleKeyUp}
          promptName={messages.promptName}
          ref={ref}
          moveCursor={moveCursor}
          isFocused={isFocused}
        ></PromptLine>
      </div>
    );
  }
);

export default Main;
