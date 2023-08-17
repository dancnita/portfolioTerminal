const messages = {
  welcomeMsg: 'Welcome to my terminal webpage portfolio.',
  commandsHint: "Type 'help' to see a list of available commands.",
  promptName: 'guest@terminal-portfolio:~$\u00A0',
  errorMsg: "Command not found. For a list of commands, type 'help'.",
  linkText: {
    linkText1: 'Click ',
    linkText2: 'here',
    linkText3: ' for a modern version.',
  },
};

const externalLinks = {
  portfolio: '#',
  gitHub: 'https://github.com/dancnita/',
};
const projects = {
  proj1: {
    name: 'Terminal looklike portfolio webapp',
    features: 'under development, react',
    technologies: '',
    github: '',
  },
  proj2: {
    name: 'Local weather web app',
    features: 'responsive UI, modern UI/UX, cross-browser compatibility',
    technologies:
      'React, modular JavaScript, CSS, web APIs, promises, asynchronous scripts',
    github: 'https://github.com/dancnita/loc-weather-app-react',
  },
  proj3: {
    name: 'Task management web app (full stack)',
    features: 'responsive UI, CRUD operations, cross-browser compatibility',
    technologies:
      'React, CSS, Node.js, Express.js, MySQL, REST API, modular design, promises, asynchronous scripts, React Hooks(useSatate/useEffect), MySQL queries, component communication',
    github: 'https://github.com/dancnita/toDoListFullStackSQL',
  },
  proj4: {
    name: 'Calculator app',
    features: 'cross-browser compatibility',
    technologies:
      'React, CSS, modular design, component communication, React events',
    github: 'https://github.com/dancnita/simpleCalculatorReactVite',
  },
};

const commandsAvailable = [
  'help',
  'about',
  'projects',
  'education',
  'socials',
  'email',
];

const commandsAndDescription = {
  about: 'about me',
  education: 'list education background',
  email: 'list email',
  help: 'list available commands',
  projects: 'list coding projects',
  socials: 'list social accounts',
};

const about = {
  line1: "Hey, I'm DCN! Welcome to my terminal like portfolio!",
  line2:
    "I'm a junior developer based in Cluj, Romania who recently found a deep passion about coding (science based background) and developing web applications like this one.",
};

const education = {
  line1: 'Web Development (JavaScript) | 2023',
  line2: 'The Informal School of IT',
  line3: 'PhD in Environmental Sciences | 2012',
  line4: 'Babeş-Bolyai University, Romania',
  line5: 'MSc in Environmental Science | 2009',
  line6: 'Babeş-Bolyai University, Romania',
  line7: 'BSc in Physics | 2008',
  line8: 'Babeş-Bolyai University, Romania',
};

const email = 'dan.c.nita@gmail.com';

const socials = {
  gitHub: 'https://github.com/dancnita/',
};

const valueToMoveCursor = 'X';

export {
  messages,
  externalLinks,
  commandsAvailable,
  commandsAndDescription,
  about,
  valueToMoveCursor,
  education,
  email,
  socials,
  projects,
};
