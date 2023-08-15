import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useState, useEffect, useRef } from 'react';
import './App.css';
import { valueToMoveCursor } from './utils/data';
import Typewriter from './components/Typewriter/Typewriter';

//on up arrow  shoe commands?
function App() {
  const [newInput, setNewInput] = useState('');
  const [command, setCommand] = useState([]);
  const [moveCursor, setMoveCursor] = useState(null);
  const [count, setCount] = useState(0);

  const promptLineInputAreaRefs = useRef(null);

  const handleKeyDown = (e) => {
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

  function handleClick() {
    promptLineInputAreaRefs.current.inputAreaRef.focus();
  }

  useEffect(() => {
    promptLineInputAreaRefs.current.inputAreaRef.focus();
    //any other way to access body/window? not the  vanilla way?
    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
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
    <div>
      <Header></Header>
      <Main
        newInput={newInput}
        handleChange={handleNewInput}
        handleKeyDown={handleKeyDown}
        handleKeyUp={handleKeyUp}
        userCommands={command}
        ref={promptLineInputAreaRefs}
        moveCursor={moveCursor}
      ></Main>
    </div>
  );
}

export default App;
