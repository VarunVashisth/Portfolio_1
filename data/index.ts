export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I specialize in building robust, scalable backend systems",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Open to remote opportunities and flexible work arrangements",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "Constantly improving my ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Backend developer passionate about clean code, system design, and scalability.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently developing microservices and API architectures",
    description: "Building Systems",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Looking to collaborate on exciting backend projects?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered Code Assistant with Real-time Analysis",
    des: "an intelligent AI coding assistant featuring real-time code analysis and contextual suggestions using modular backend architecture. Integrated conversational AI capabilities to enhance developer productivity through intelligent code recommendations.",
    img: "/chatbot.svg",
    iconLists: [
      "/tensorflow.svg",
      "/aws.svg",
      "/dock.svg",
      "/openai.svg",
      "/lang.svg",
    ],
    link: "https://github.com/yourusername/project1",
  },
  {
    id: 2,
    title: "Dispute Management Platform with Role-Based Workflows",
    des: "a dispute management platform with structured workflows, role-based access control, and scalable backend architecture for efficient case tracking and resolution processes.",
    img: "/linear.png",
    iconLists: [
      "/tensorflow.svg",
      "/azure.svg",
      "/dock.svg",
      "/openai.svg",
      "/lang.svg",
    ],
    link: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Project Management System with Workflow Automation",
    des: "a scalable project management platform featuring workflow tracking, task scheduling, automated APIs, and efficient backend services for task assignment and collaboration.",
    img: "/wiki.jpg",
    iconLists: [
      "/tensorflow.svg",
      "/aws.svg",
      "/dock.svg",
      "/openai.svg",
      "/lang.svg",
    ],
    link: "https://github.com/yourusername/project3",
  },
  {
    id: 4,
    title: "Habit Tracker Application with Analytics & Progress Monitoring",
    des: "a habit tracking application with streak tracking, analytics dashboard, progress monitoring, and scalable backend architecture for user data and performance insights.",
    img: "/driver.svg",
    iconLists: [
      "/tensorflow.svg",
      "/azure.svg",
      "/dock.svg",
      "/openai.svg",
      "/lang.svg",
    ],
    link: "https://github.com/yourusername/project4",
  },
];

export const testimonials = [
  // NOTE: Testimonials section removed as requested
  // If you want to add testimonials later, uncomment and fill in
];

export const companies = [
  {
    id: 1,
    name: "Nest.js",
    img: "cloud.svg",
    nameImg: "/Nest.js.svg",
  },
  {
    id: 2,
    name: "FastAPI",
    img: "/FastAPI_logo 1.svg",
    nameImg: "/FastAPI_logo 1 (1).svg"
  },
  {
    id: 3,
    name: "Kubernetes",
    img: "/Kubernetes_logo_without_workmark.svg",
    nameImg: "/Kubernetes.svg",
  },
  {
    id: 4,
    name: "Graphql",
    img: "/GraphQL_Logo.svg",
    nameImg: "/Graphql.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Projects & System Building",
    desc: "Built multiple full-stack backend projects including an AI-powered code assistant, project management system, habit tracker, and dispute management platform using Node.js, Python, and scalable database architecture.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Freelance UI/UX Designer",
    desc: "Worked on freelance UI/UX design projects, creating user-centered interfaces and design systems. Gained strong understanding of user experience, product thinking, and frontend-backend collaboration.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Self-Driven Learning & Hackathons ",
    desc: "Actively building real-world projects, practicing Data Structures & Algorithms on LeetCode, and participating in hackathons. Focused on backend development, system design, and AI integration.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open to Backend Internship Opportunities",
    desc: "Currently seeking backend/software engineering internship roles. Passionate about building scalable systems, writing clean APIs, and solving real-world problems through technology.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/VarunVashisth",
  },
  {
    id: 2,
    img: "/medium.svg",
    link: "https://medium.com/@yourmedium",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/varun-vashisth-a17b08290/",
  },
];
