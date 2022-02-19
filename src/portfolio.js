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
  logo_name: "{ Michael A.}",
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
        "⚡ Creating application backend with Node",
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
      title: "Cloud Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Corporacion Universitaria Minuto de Dios",
      subtitle: "Degree in Public Accounting",
      logo_path: "Henry.png",
      alt_name: "SSEC",
      duration: "2016 - 2020",
      descriptions: [
        "⚡  I am currently culminating in HENRY one of the best Bootcamp in Latam",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.soyhenry.com/",
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
      alt_name: "Reply",
      color_code: "#07354E",
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
        {
          title: "Accounting Analyst",
          company: "Stanton SAS",
          company_url: "https://www.brahma.co/",
          logo_path: "Stanton.jfif",
          duration: "Sep 2018 - July 2020",
          location: "Bogota D.C., Colombia",
          description: `Within my responsibilities and skills to perform is:
          - registration and settlement of national and district taxes
          - district magnetic media and national exogenous information
          - management of Siesa Enterprise accounting and financial ERP
          - general accounting records of more than 10 operating companies that are part of the corporate group
          - Account reconciliation and account analysis
          - reconciliation between companies, accounts payable and receivable
          - bank reconciliations of bank accounts of the companies of the corporate group
          - registration of payroll, social security, parafiscal contributions and social benefits, in one of the companies which has a payroll of around 300 employees
          - control and management of the accounting file in general.`,
          color: "#CD2424",
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
      url: "https://countries-react-app.web.app/",
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
      ],
    },
    {
      id: "1",
      name: "In process",
      url: "#",
      description: "In process.",
      languages: [
        {
          name: "In process",
          iconifyClass: "bi:router",
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
