import React from 'react';
import Logo from '../Logo/Logo/';
import Link from '../Link/Link';
import { messages, externalLinks } from '../../utils/data.js';
import Message from '../Message/Message';
import Typewriter from '../Typewriter/Typewriter';

const Header = () => {
  const linkText1 = messages.linkText.linkText1;
  const linkText2 = messages.linkText.linkText2;
  const linkText3 = messages.linkText.linkText3;
  return (
    <>
      <Logo></Logo>
      {/* <Typewriter input={messages.welcomeMsg} delayTime={100} /> */}
      <Message text={messages.welcomeMsg} />
      <Link
        text1={linkText1}
        text2={linkText2}
        text3={linkText3}
        linkSrc={externalLinks.portfolio}
      />
      <Message text={messages.commandsHint} />
    </>
  );
};

export default Header;
