// useEffect(() => {
//   function handleKeyDown(e) {
//     //e.key === 'Enter' ? console.log(e.key) : null;
//     if (checkUserInput(e.key) === 'Enter') {
//       handleComand(input);
//     } else if (checkUserInput(e.key)) {
//       setInput((input) => [...input, e.key]);
//     }
//     console.log(`input: ${input}, command: ${command}`);
//   }

//   function handleComand(input) {
//     setCommand(input);
//     setInput('');
//   }

//   document.body.style.minHeight = '100vh';

//   document.body.addEventListener('keydown', handleKeyDown);

//   return () => {
//     document.body.removeEventListener('keydown', handleKeyDown);
//   };
// }, [input, command]);

// const checkUserInput = (inputKey) => {
//   //check user keyboard input => filter enter/shift etc keys
//   //const allKeyboardKeysRegex = /^(?=.{0,1}$)(.*?)/;

//   return inputKey === 'Enter' ? inputKey : inputKey.length > 1 ? false : true;
// };
