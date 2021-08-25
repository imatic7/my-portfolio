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
    'I am junior JavaScript developer with a good knowledge of ES6, CSS and basic of ReactJS, After graduation I started working more with JavaScript and ReactJS, and developed a few interesting projects which you can see below.',
  paragraphThree:
    "I'm extremely eager to work and learn, and I would be really excited to work in an environment that would push me in a full-stack direction. During my collage, I also had lot of experience with using C, C++, C#, Arduino and Python.",
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
  {
    id: nanoid(),
    img: 'Project3.PNG',
    title: 'Random Color Generator ReactJS App',
    info:
      'ReactJS app with a button that get random color from API and display color list in hex. List have drag and drop function with highlighted last added color. ',
    info2: '',

    url: 'https://imatic01-randomcolor.netlify.app',
    repo: 'https://github.com/imatic7/RandomColor', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project4.PNG',
    title: 'User-Management ReactJS App',
    info:
      'ReactJS app with 3 pages(Home, Login and Dashboard). Formik-lib is used on Login-form and Yup for login-validation. For successful login and user list to display on dashboard I used FatchAPI method. You can find login information on reqres.in',
    info2: '',

    url: 'https://imatic01-usermanagementapp.netlify.app',
    repo: 'https://github.com/imatic7/User-management-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project5.PNG',
    title: 'Notes ReactJS App',
    info:
      'App for plan and store notes on your browser. I create NotesProvider for notes storage and UseNotes custom hook to add, remove, edit and save notes. You can use react markdown format for writing notes. ',
    info2: '',

    url: 'https://imatic01-notesapp.netlify.app',
    repo: 'https://github.com/imatic7/NotesAPP', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'You have a question for me? Feel free to contact me via E-Mail',
  btn: 'Click Here',
  email: 'imatic1207@gmail.com',
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
