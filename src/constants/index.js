import {
    database,
    programmer,
    project,
    leader,
    testing,
    researcher,
    programming,
    cloud,
    javascript,
    python,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nextjs,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    mmu,
    idrive,
    pos,
    xss,
    elearning,
    rise,
    weather,
    forex,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: programmer,
    },
    {
      title: "Full-Stack Engineer",
      icon: programming,
    },
    {
      title: "Tech Lead",
      icon: leader,
    },
    {
      title: "AI Researcher",
      icon: researcher,
    },
    {
      title: "Testing & Debugging",
      icon: testing,
    },
    {
      title: "Database Administration",
      icon: database,
    },
    {
      title: "Cloud Management",
      icon: cloud,
    },
    {
      title: "Project Management",
      icon: project,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Business Service Representative",
      company_name: "iDrive Manchester (Professional Services)",
      icon: idrive,
      iconBg: "#ffffff",
      date: "Jan 2023 - Ongoing",
      points: [
        "Responded to customer enquiries with professional, knowledgeable service and support, via phone and email.",
        "Listened actively to offer accurate information about business services and best solution to customer needs.",
        "Improved operational efficiency for stakeholders, enhancing day-to-day task performance.",
        "Monitored administrative processes to uphold high-quality standards and ensured compliance with SLAs.",
        "Prepared financial reports/models, provided insights and recommendations based on analysis of key metrics.",
        "Provided administrative support for strategic initiatives and projects.",
        "Documented department data and compiled accurate reports in MS Excel.",
        "Monitored progress and report on the implementation of strategic goals.",
        "Managed calendars, scheduled, and coordinated driving test bookings/appointments.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Manchester Metropolitan University",
      icon: mmu,
      iconBg: "#ffffff",
      date: "Jan 2024 - May 2024",
      points: [
        "Multilingual Lexical Simplification Pipeline (MLSP) Shared Task. Python + pandas' library.",
        "Conducted extensive research on Multilingual Lexical Simplification Pipelines (MLSP).",
        "Analysed large datasets, drawing meaningful conclusions, and providing actionable recommendations.",
        "Engaged in a Data-Labelling Task for an International AI/NLP Competition hosted at BEA 2024.",
        "Verified and entered information into data storage and data retrieval systems for processing.",
        "Quality assured data supplied by internal and external stakeholders to maintain accurate databases.",
        "Reviewed 300 phrases and 300 terms to be evaluated per their complexity level.",
        "Provided an average of 1-3 alternatives/suggestions per term stated in the Dataset.",
        "Concluded with <750 instances per individual across 8 languages in collaboration with 12+ institutions.",
      ],
    },
  ];

  const projects = [
    {
      name: "E-Learning Platform",
      description:
        "E-Learning platform developed using the MERN stack, designed to enhance the educational experience for professionals and tech enthusiasts through innovative technology and user-centric design.",  
        tags: [
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "yellow-text-gradient",
        },
        {
          name: "ReactJS",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "red-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "pink-text-gradient",
        },
      ],
      image: elearning,
      source_code_link: "https://github.com/sufiyan3r",
    },
    {
      name: "POS (Point-of-Sale) Sys",
      description:
        "WindowsForms Desktop application using C# in .NET, tailored to meet the specific needs of a Coffee Store. This application serves as a comprehensive Point of Sale system, enhancing operational efficiency and customer service.",
      
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET",
          color: "green-text-gradient",
        },
        {
          name: "WindowsForms",
          color: "red-text-gradient",
        },
        {
          name: "MySQL",
          color: "pink-text-gradient",
        },
      ],
      image: pos,
      source_code_link: "https://github.com/sufiyan3r/pos-system",
    },
    {
      name: "Rise MMU Portfolio",
      description:
        "A comprehensive Portfolio dedicated to the Rise Programme at Manchester Metropolitan University which comprises of the diverse and various extracurricular activities engaged in to acquire exposure into modern digital skills.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: rise,
      source_code_link: "https://sr-rise-portfolio.netlify.app/",
    },
    {
      name: "MAUI Weather App",
      description:
        "Android Cross-Platform Mobile Application developed using .NET MAUI in C# and XAML, aimed at providing an engaging and informative weather forecasting experience.",
        tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET MAUI",
          color: "green-text-gradient",
        },
        {
          name: "JSON & REST API",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/sufiyan3r",
    },
    {
      name: "Forex Currency Tracker",
      description:
        "Android Cross-Platform Mobile Application developed using .NET MAUI in C# and XAML, aimed at providing Forex Data for Professional Traders and Market Analysts.",
        tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: ".NET MAUI",
          color: "green-text-gradient",
        },
        {
          name: "JSON & REST API",
          color: "pink-text-gradient",
        },
      ],
      image: forex,
      source_code_link: "https://github.com/sufiyan3r",
    },
    {
      name: "Cross Site Scripting (XSS)",
      description:
        "An informative and interactive website designed to educate audiences about Cross-Site Scripting (Reflected XSS), focusing on its risks, causes, and preventive measures.",
        tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: xss,
      source_code_link: "https://reflected-xss.netlify.app/",
    },
  ];
  
  export { services, technologies, experiences, projects };