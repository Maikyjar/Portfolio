/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello friends 🖥️.",
  title2: "Michael",
  logo_name: "{ Michael A. }",
  full_name: "Michael Alvarez",
  subTitle:
    "Full Stack Developer, Front-end developer , Javascript Engineer, React Developer.",
  resumeLink:
    "https://drive.google.com/file/d/1yAYY-lDTM2TJ6blOwDx22hNMYK8QsZDx/view?usp=sharing",
  mail: "mailto:m@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/Maikyjar",
  linkedin:
    "http://www.linkedin.com/in/michael-eduardo-alvarez-urrea-282a421a9",
  gmail: "m@gmail.com",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using HTML5, CSS3 and Javascript",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend with NodeJS and Express",
        "⚡ Integration of third party services such as Firebase",
        "⚡ Building responsive website front end using ReactJS with Redux",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "E-commerce Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience in design and implementation of ecommerce",
        "⚡ Experience with Continuous Integration",
        "⚡ Experience with Vtex develoment and platform",
      ],
      softwareSkills: [
        {
          skillName: "Vtex",
          fontAwesomeClassname: "simple-icons:vtex",
          style: {
            color: "#fa2080",
          },
        },
        {
          skillName: "Shop Server",
          fontAwesomeClassname: "fluent-mdl2:shop-server",
          style: {
            color: "#f7df1e",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "fa6-brands:square-github",
          style: {
            color: "#343c97",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Henry",
      subtitle: "Full Stack Web Developer",
      logo_path: "Henry.png",
      alt_name: "Henry",
      duration: "2021 - 2022",
      descriptions: [
        "⚡ Backend development with Express structure and methods targeting postgreSQL databases",
        "⚡ Develop complete applications with React and Redux, applying scalable development principles",
        "⚡ Javascript syntax and methods in object-oriented programming, basic and advanced algorithms such as binary search tree",
        "⚡ General structure of the code and its components",
      ],
      website_link: "https://www.soyhenry.com/",
      color_code: "#FFFF01",
    },
    {
      title: "Corporacion Universitaria Minuto de Dios",
      subtitle: "Degree in Public Accounting",
      logo_path: "uniminuto.jpg",
      alt_name: "Uniminuto",
      duration: "2016 - 2020",
      descriptions: [
        "⚡  Develop math, statistics and number skills",
        "⚡ Understanding and development of financial statements in addition to registration, control and analysis",
        "⚡ General Accounting",
        // "⚡ pendding",
      ],
      website_link: "https://www.uniminuto.edu/",
      color_code: "#162644",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "freeCodeCamp",
      subtitle: "Javascript Algorithms and Data Structures",
      logo_path: "freeCodeCamp.png",
      certificate_link:
        "https://www.freecodecamp.org/certification/Michael-A/javascript-algorithms-and-data-structures",
      alt_name: "freeCodeCamp",
      color_code: "#020B32",
    },
    {
      title: "Grasshopper",
      subtitle: "Fundamentos de la codificación",
      logo_path: "GH.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1Y_HPgwqTxsDgbnSD7mQpVVG53vu5MSxs?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#07354E",
    },
    {
      title: "Universidad Sergio Arboleda",
      subtitle: "Fundamentos Programacion con Python",
      logo_path: "sergio-arboleda.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1Y_HPgwqTxsDgbnSD7mQpVVG53vu5MSxs?usp=sharing",
      alt_name: "USA",
      color_code: "#6610f2",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work experience",
  description:
    "I currently have work experience based on my undergraduate degree, for which I know perfectly well the development of a role within a company, teamwork, meeting goals and I am in charge of several processes, I also use many tools and programs in my work daily",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Junior Front End Developer",
          company: "ITGlobers",
          company_url: "https://itglobers.com/",
          logo_path: "itg.jfif",
          duration: "September 2022 - Actually",
          location: "Remote",
          description: `Development and implementation of native and customized components according to design requirements and customer requests, through the management of different technologies according to the specific case.`,
          color: "#480095",
        },
        {
          title: "Accounting Analyst",
          company: "OmniLatam",
          company_url: "https://klym.com/co/",
          logo_path: "klym.jpg",
          duration: "March 2022 - October 2022",
          location: "Remote",
          description: `Omnilatam is a fintech with a presence in three Latin American countries, carrying out factoring, confirming and much more processes. Among my responsibilities is the analysis and management of large amounts of information to reach their respective reconciliation, optimization of processes through the development in Microsoft Excel, Analysis processes and reconciliation of operations through the ERP FlexLine, the injection of information by interface with .csv files and information matrix in Excel.`,
          color: "#FA8072",
        },
        {
          title: "Assistant A Outsourcing Contable",
          company: "Grant Thornton Colombia",
          company_url: "https://www.grantthornton.com.co/",
          logo_path: "GT.jfif",
          duration: "June 2021 - Actually",
          location: "Remote",
          description: `Grant Thornton is a multinational, dedicated to the provision of accounting consulting and auditing services, at this time venturing into accounting outsourcing of which I am a part, within my functions is to carry out and verify closing reconciliations, such as fixed assets, taxes , IFRS 16 and the general reconciliation of all local standard accounts to USGAAP for three local companies that prepare consolidated financial statements and are part of a multinational.
          `,
          color: "#9152EA",
        },
        {
          title: "Accounting Analyst",
          company: "ZTE Colombia SAS",
          company_url: "https://www.zte.com.cn/global/",
          logo_path: "ZTE.jpg",
          duration: "July 2020 - Jun 2021",
          location: "Bogota D.C., Colombia and Remote",
          description: `ZTE is a multinational dedicated to the provision of telecommunications services, through solutions that include the equipment, the engineering structure and the installation for operation in the real field, as an accounting analyst my main responsibilities for the two companies established in Colombia are the analysis and conciliation of the payroll, its balance and result accounts, review and monthly closing, homologation of the registry for the Oracle program, analysis and conciliation of the financial inventory, registry and control of inventory in the Helisa program, homologation of the records in Oracle, revision and counting of physical inventory, analysis of inventory costs, liquidation of imports, state reports, delivery of result reports and basic English management for communication with the foreign administration.
          `,
          color: "#2940CC",
        },
      ],
    },
    {
      title: "Teamwork",
      experiences: [
        {
          title: "Pending",
          company: "Pending",
          company_url: "#",
          logo_path: "Logo2.PNG",
          duration: "Mar 2020 - Nov 2020",
          location: "Bogota",
          description: "In process.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create React Project. Below are some of my projects.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "photo2.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I don't blog, but very soon.",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Countries App",
      url: "https://countries-react-8af4b.web.app/",
      description:
        "This is one of my first projects in the React library, this application is executed consuming two APIs https://restcountries.com/ and http://api.weatherstack.com/ which requires payment to make HTTPS requests, so which should allow non-secure Content in the browser to be able to see the weather of the capital of each country, its development was carried out through the use of Hooks with functional components, I use React Bootstrap for the styles and for the responsive functionality, in addition React Router V6 for routes, Thank you very much for visiting.",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React router",
          iconifyClass: "logos:react-router",
        },
        {
          name: "API",
          iconifyClass: "eos-icons:api",
          color: "#eb1010",
        },
      ],
    },
    {
      id: "1",
      name: "Anecdotes App",
      url: "https://anecdotes-react.web.app/",
      description:
        "This is my first React project which simply has a series of anecdotes that change randomly, which receive votes and the most voted is shown on the screen",
      languages: [
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Bootstrap",
          iconifyClass: "logos:bootstrap",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
