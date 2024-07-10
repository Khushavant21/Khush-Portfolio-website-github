import {
  mobile,
  backend,
  web,
  cimage,
  cppimage,
  java,
  python,
  postgres,
  spring,
  bootstrap,
  k8s,
  jenkins,
  graffana,
  aws,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  rupeek,
  rocketchat,
  manas,
  webchat,
  weather,
  hivetalk,
  graphql,
  prisma
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
];

export const profileLinks = [
  {
    id: 'twitter',
    url: 'https://twitter.com/Khushavant21',
    icon: 'logo-twitter'
  },
  {
    id: 'github',
    url: 'https://github.com/Khushavant21',
    icon: 'logo-github'
  },
  {
    id: 'linkedin',
    url: 'https://www.linkedin.com/in/khushavant-wagh-b579831a6/',
    icon: 'logo-linkedin'
  }
]

const services = [
  {
    title: 'Full Stack Developer',
    icon: web
  },
  {
    title: 'React Js Developer',
    icon: backend
  },
  {
    title: 'Technical Content writer ',
    icon: mobile
  }
];

const technologies = [
  {
    name: 'C',
    icon: cimage
  },
  {
    name: 'CPP',
    icon: cppimage
  },
  {
    name: 'Java',
    icon: java
  },
  {
    name: 'Python',
    icon: python
  },
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascript
  },
  {
    name: 'TypeScript',
    icon: typescript
  },
  {
    name: 'Spring',
    icon: spring
  },
  // {
  //   name: 'GraphQl',
  //   icon: graphql
  // },
  {
    name: 'React JS',
    icon: reactjs
  },
  // {
  //   name: 'Prisma',
  //   icon: prisma
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Bootstrap',
    icon: bootstrap
  },
  {
    name: 'Node JS',
    icon: nodejs
  },
  {
    name: 'MongoDB',
    icon: mongodb
  },
  // {
  //   name: 'Postgres',
  //   icon: postgres
  // },
  {
    name: 'git',
    icon: git
  },
  {
    name: 'docker',
    icon: docker
  },
  // {
  //   name: 'K8s',
  //   icon: k8s
  // },
  // {
  //   name: 'Jenkins',
  //   icon: jenkins
  // },
  // {
  //   name: 'Graffana',
  //   icon: graffana
  // },
  {
    name: 'AWS',
    icon: aws
  },
];

const experiences = [
  {
    title: 'Software Developer Intern',
    company_name: 'Numetry Technologies Private Limited',
    icon: rocketchat,
    iconBg: '#fff',
    date: 'January 2024 - Present',
    points: [
       'Working with ReactJS Framewotk to creating scalable and efficient web applications.',
      'Expert in ReactJS, JavaScript, Redux, React Router, and modern frontend tools.',
      'Experienced in implementing state management using Redux and Context API and working with databases such as MongoDB, MySQL, and PostgreSQL.',
      //'link-https://github.com/search?q=type%3Apr+author%3Aimf-ali+is%3Amerged+repo%3ARocketChat%2FEmbeddedChat&type=pullrequests'
    ]
  },
  {
    title: 'Technical Content Writer ',
    company_name: 'GeeksForGeeks',
    icon: rupeek,
    iconBg: '#fff',
    date: 'April 2023 - December 2023',
    points: [
      'Internship at GeeksforGeeks mainly focused on writing and uploading technical articles on Data Structures and Algorithms (DSA), Python, and JavaScript.',
      'Responsibilities included writing and improving articles on various technologies.',
      'Gained significant experience as a technical content writer during the internship.',
      'Technical writing skills and expanded knowledge in related subjects through practical experience.'
    ]
  },
  // {
  //   title: 'SDE I',
  //   company_name: 'Rupeek Fintech Private Limited',
  //   icon: rupeek,
  //   iconBg: '#fff',
  //   date: 'July 2022 - Present',
  //   points: [
  //     'Developed a new microservice to manage the assets and their life cycle from the point of appraisal till they are released back to the customers.',
  //     'Developed these APIs using Spring Boot, PostgreSQL and AWS.',
  //     'Developed REST APIs for the process of KYC, bank and nominee addition into the existing system.',
  //     'Developed these APIs using Spring Boot, Node.js, PostgreSQL and AWS.'
  //   ]
  // },
];

const testimonials = [
  {
    testimonial:
      'test',
    name: 'test',
    designation: 'test',
    company: 'test',
    image: 'imgurl'
  },
];

const projects = [
  {
    name: 'Chat App Application',
    description:
      'The real-time chat application utilizes React for frontend development with HTML and CSS. Its backend is built using JavaScript and Node.js. React Native facilitates message sending and receiving in real-time. This tech stack ensures seamless communication, offering a dynamic user experience across platforms with efficient data handling.',
    tags: [
      {
        name: 'HTML/CSS',
        color: 'green-text-gradient'
      },
      {
        name: 'Javascript',
        color: 'blue-text-gradient'
      },
      {
        name: 'React Native',
        color: 'green-text-gradient'
      },
      {
        name: 'Chat Engine',
        color: 'blue-text-gradient'
      },
    ],
    image: manas,
    source_code_link: 'https://github.com/Khushavant21/Chat-App3-real-time-'
  },
  {
    name: 'Tours and Travels Booking System',
    description:
      'This web application streamlines booking and travel arrangements, employing HTML, CSS, and Bootstrap for frontend development. It utilizes JavaScript, NodeJS, and ReactJS for backend functionality, ensuring a seamless user experience in browsing and booking travel services with efficiency and ease.',
    tags: [
      {
        name: 'HTML/CSS',
        color: 'green-text-gradient'
      },
      {
        name: 'JS',
        color: 'pink-text-gradient'
      },
      {
        name: 'NodeJS',
        color: 'blue-text-gradient'
      },
      {
        name: 'ReactJS',
        color: 'green-text-gradient'
      }
    ],
    image: weather,
    source_code_link: 'https://github.com/Khushavant21/Tours-and-travel-systen'
  },
  {
    name: 'Space Theme using NextJS',
    description:
      'Create a space-themed website using Next.js, utilizing frontend technologies like HTML and CSS. Employ JavaScript and Node.js on the backend, leveraging Next.js for server-side rendering. Implement dynamic functionality and seamless navigation, ensuring an immersive user experience with interactive elements.',
    tags: [
      {
        name: 'HTML/CSS',
        color: 'green-text-gradient'
      },
      {
        name: 'JS+TypeScript',
        color: 'pink-text-gradient'
      },
      {
        name: 'NextJS',
        color: 'blue-text-gradient'
      },
      {
        name: 'MongoDB',
        color: 'blue-text-gradient'
      }
    ],
    image: hivetalk,
    source_code_link: 'https://github.com/imf-ali/HiveTalk-backend'
  },
  // {
  //   name: 'Web Chat',
  //   description:
  //     'A simple application where users can live chat. Users can create room and join it. People can also send their location.',
  //   tags: [
  //     {
  //       name: 'nodejs',
  //       color: 'green-text-gradient'
  //     },
  //     {
  //       name: 'html',
  //       color: 'pink-text-gradient'
  //     },
  //     {
  //       name: 'css',
  //       color: 'blue-text-gradient'
  //     }
  //   ],
  //   image: webchat,
  //   source_code_link: 'https://github.com/imf-ali/Web-Chat-App'
  // }
];

export { services, technologies, experiences, testimonials, projects };
