import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ivan Matić', // e.g: 'Name | Developer'
  lang: 'hr', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Ivan',
  subtitle: 'and welcome to my portfolio website',
  cta: 'About Me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I recently graduated at Faculty of Electrical engineering, Mechanical engineering and Naval Architecture(FESB) in Split, Croatia and obtained Master's degree in Computer Engineering. I have a good knowledge of English and A2 certificate of German language. My goal is to join the software-development world as a junior developer.",
  paragraphTwo:
    'I am junior JavaScript developer with a good knowledge of ES6, CSS and basic of ReactJS, Atfer graduation I started working more with JavaScript and ReactJS, and developed a couple of interesting projects which you can see below.',
  paragraphThree:
    "I'm extremely eager to work and learn and I would be really excited to work in an environment that would push me in a full-stack direction. During my collage, I also had lot of experience with using C, C++, C#, Arduino and Python.",
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.PNG',
    title: 'Forkify web-app',
    info:
      'Forkify is JavaScript application that interacts with the food2fork API to fetch and display recipe food data. This app uses modern JavaScript tools and ES6 modules. The user can search for a specific recipe, bookmark the favorite one and add own specific recipe.',
    info2: '',
    url: 'https://forkifyrecipeapp.netlify.app',
    repo: 'https://github.com/imatic7/forkifyapp',
  },
  {
    id: nanoid(),
    img: 'project2.PNG',
    title: 'To do list ReactJS-App',
    info:
      "Simple ReactJS app with using hooks useState, useRef and useEffect. You can add todo's, remove and edit them. Also you can mark complited-one with clicking on them.",
    info2: '',
    url: 'https://imatic7.github.io/React-TodoList/',
    repo: 'https://github.com/imatic7/React-TodoList', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'You have a question for me? Feel free to contact me via E-Mail',
  btn: 'Click Here',
  email: 'imatic01@fesb.hr',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ivan-matić-0ab70b205/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/imatic7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
