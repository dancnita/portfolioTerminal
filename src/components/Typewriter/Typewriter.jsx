import React from 'react';
import { useEffect, useState } from 'react';
import Cursor from '../Cursor/Cursor';

const Typewriter = ({ input, delayTime }) => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (textIndex < input.length) {
      const timeout = setTimeout(() => {
        setText((prevText) => prevText + input[textIndex]);
        setTextIndex((prevTextIndex) => prevTextIndex + 1);
      }, [delayTime]);
      return () => clearTimeout(timeout);
    } else {
      setToggle(!toggle);
    }
  }, [textIndex, delayTime, input]);

  return (
    <div>
      {text}

      {toggle && <Cursor />}
    </div>
  );
};

export default Typewriter;
