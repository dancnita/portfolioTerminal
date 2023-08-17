// import Header from './components/Header/Header';
// import Main from './components/Main/Main';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { valueToMoveCursor, messages } from './utils/data';
import Container from './components/Container/Container';
// import Typewriter from './components/Typewriter/Typewriter';

function App() {
  const [newInput, setNewInput] = useState('');
  const [command, setCommand] = useState([]);
  const [moveCursor, setMoveCursor] = useState(null);
  const [count, setCount] = useState(0);
  const [isFocused, setIsFocused] = useState(false);

  const promptLineInputAreaRefs = useRef(null);

  const handleKeyDown = (e) => {
    promptLineInputAreaRefs.current.inputAreaRef.focus({
      preventScroll: true,
    });
    promptLineInputAreaRefs.current.promptLineRef.scrollIntoView();
    e.key === 'Enter'
      ? handleEnterPress()
      : e.key === 'ArrowUp'
      ? getUsedCommandsUp(e)
      : e.key === 'ArrowDown'
      ? getUsedCommandsDown(e)
      : null;
  };

  const getUsedCommandsUp = (e) => {
    e.preventDefault();
    if (count >= command.length) return;
    const result = count + 1;
    const updatedInput = `${command[command.length - result]}`;
    updateCountAndInput(result, setCount, setNewInput, updatedInput);
  };

  const getUsedCommandsDown = (e) => {
    e.preventDefault();
    if (count <= 0) return;
    const result = count - 1;
    const updatedInput = count === 1 ? '' : command[command.length - result];
    updateCountAndInput(result, setCount, setNewInput, updatedInput);
  };

  const updateCountAndInput = (result, setCount, setNewInput, updatedInput) => {
    setCount(result);
    setNewInput(updatedInput);
  };

  const handleEnterPress = () => {
    const lastCommand = newInput;
    setCommand((currentCommands) => {
      return [...currentCommands, lastCommand];
    });
    setCount(0);
    setNewInput(() => '');
  };

  const handleKeyUp = (e) => {
    setMoveCursor(
      valueToMoveCursor.repeat(
        e.target.selectionStart
        // e.target.selectionStart === 0 ? 1 : e.target.selectionStart
      )
    );
  };

  function handleBlur(e) {
    console.log('first');
    e.relatedTarget === null ? setIsFocused(false) : null;

    // setIsFocused(false);
    //set focus
    //on blur set focus false
  }
  function handleClick() {
    console.log('click container');
    setIsFocused(true);
    // promptLineInputAreaRefs.current.inputAreaRef.focus({
    //   preventScroll: true,
    // });
  }

  useEffect(() => {
    promptLineInputAreaRefs.current.inputAreaRef.focus();
    setIsFocused(true);
    // promptLineInputAreaRefs.current.inputAreaRef === document.activeElement
    //   ? console.log('active')
    //   : console.log('notActive');

    //any other way to access body/window? not the  vanilla way?
    // document.body.addEventListener('click', handleClick);

    // return () => {
    //   document.body.removeEventListener('click', handleClick);
    // };
  }, []);

  useEffect(() => {
    //{ behavior: 'smooth' }
    promptLineInputAreaRefs.current.promptLineRef.scrollIntoView({
      behavior: 'smooth',
    });
  }, [command]);

  const handleNewInput = (e) => {
    //firstInput=== ' ' - > losing whitespaces on display
    const result = e.target.value;
    setNewInput(result.split(' ').join('\u00A0'));
  };

  return (
    <div style={{ overflow: 'hidden' }}>
      <Container
        text={messages.promptName}
        handleClick={handleClick}
        newInput={newInput}
        handleChange={handleNewInput}
        handleKeyDown={handleKeyDown}
        handleKeyUp={handleKeyUp}
        userCommands={command}
        ref={promptLineInputAreaRefs}
        moveCursor={moveCursor}
        handleBlur={handleBlur}
        isFocused={isFocused}
      ></Container>
      {/* <Header />
      <Main
        newInput={newInput}
        handleChange={handleNewInput}
        handleKeyDown={handleKeyDown}
        handleKeyUp={handleKeyUp}
        userCommands={command}
        ref={promptLineInputAreaRefs}
        moveCursor={moveCursor}
      ></Main> */}
    </div>
  );
}

export default App;
