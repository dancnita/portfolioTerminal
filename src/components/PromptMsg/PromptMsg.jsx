import React from 'react';
import PromptErr from '../PromptErr/PromptErr';
import About from '../About/About';
import Help from '../Help/Help';
import Message from '../Message/Message';
import Education from '../Education/Education';
import Email from '../Email/Email';
import Socials from '../Socials/Socials';
import Projects from '../Projects/Projects';
import './promptMsg.css';

const PromptMsg = (
  { userCommands, commandsAvailable, errorMsg, promptName },
  ref
) => {
  const dataToDisplay = {
    about: <About />,
    help: <Help />,
    education: <Education />,
    email: <Email />,
    socials: <Socials />,
    projects: <Projects />,
  };

  return (
    <div>
      {userCommands.map((item, index) => {
        if (!commandsAvailable.includes(item)) {
          return (
            <PromptErr
              promptName={promptName}
              errorMsg={errorMsg}
              lastCommand={
                userCommands.length === 0 ? null : userCommands[index]
              }
              key={index}
            />
          );
        } else {
          return commandsAvailable.map((command) => {
            if (item.match(command)) {
              return (
                <div key={index}>
                  <Message
                    text={`${promptName}${
                      userCommands.length === 0 ? null : userCommands[index]
                    }`}
                  />
                  {dataToDisplay[item]}
                </div>
              );
            }
          });
        }
      })}
    </div>
  );
};

export default PromptMsg;
