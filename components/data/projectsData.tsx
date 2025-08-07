interface Project {
  id: string;
  image: string;
  alt: string;
  title: string;
  year: string;
  link: string;
  github: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "aspx",
    image: "/images/aspx.png",
    alt: "aspx group",
    title: "ASPX Group",
    year: "2025",
    link: "https://aspx.vercel.app/",
    github: "",
    description: [
      "Developed a comprehensive company website for ASPX Group, a forward-thinking organization focused on innovative solutions.",
      "Designed a fully responsive website, ensuring seamless compatibility across multiple browsers and a wide range of display sizes, from mobile devices to large desktop screens.",
      "Built using modern technologies including TypeScript, Next.js for server-side rendering and static site generation, and Tailwind CSS with shadcn components for a polished, scalable UI.",
      "Integrated dynamic data fetching from a backend database, powered by a Nest.js API deployed on Render, enabling real-time content updates and efficient data management.",
      "Optimized for performance with lazy loading, image optimization, and minimal client-side JavaScript to enhance user experience and SEO.",
    ],
  },
  {
    id: "bm",
    image: "/images/BM-square.png",
    alt: "block majority",
    title: "Block Majority",
    year: "2025",
    link: "https://www.blockmajority.io/",
    github: "",
    description: [
      "Revamped the company website for Block Majority, a Web3 company specializing in blockchain solutions and decentralized technologies.",
      "Created a responsive design that adapts seamlessly to various screen sizes and browsers, ensuring accessibility and a consistent user experience.",
      "Utilized Webflow for rapid development and design flexibility, combined with custom JavaScript injections to implement advanced interactivity and dynamic features.",
      "Focused on a modern, user-friendly interface with smooth animations and intuitive navigation to highlight the company’s innovative Web3 offerings.",
    ],
  },
  {
    id: "myriad",
    image: "/images/LEON.png",
    alt: "myriad industries",
    title: "Myriad Industries",
    year: "2024",
    link: "https://myriad-industries-leon.vercel.app/",
    github: "",
    description: [
      "Designed a sleek, minimal portfolio website for Leon Koumouris, an architect and university tutor, to showcase his professional work and academic contributions.",
      "Ensured full responsiveness, making the website compatible with multiple browsers and optimized for devices ranging from smartphones to large monitors.",
      "Built using Cursor for efficient code editing, Next.js for fast and scalable rendering, JavaScript for interactivity, and Tailwind CSS for a clean, modern design system.",
      "Incorporated a minimalist aesthetic with a focus on typography and whitespace to reflect the client’s architectural style and professional ethos.",
      "Optimized for fast load times and accessibility, with careful attention to SEO to increase visibility for the client’s portfolio.",
    ],
  },
  {
    id: "dlabs",
    image: "/images/DLABS.png",
    alt: "delicious labs",
    title: "Delicious Labs",
    year: "2022",
    link: "https://delicious-labs-sandy.vercel.app/",
    github: "",
    description: [
      "Developed the main website for Delicious Labs, a Web3 collective focused on decentralized applications and blockchain innovation.",
      "Designed a responsive website compatible with multiple browsers and screen sizes, ensuring accessibility and a consistent experience across devices.",
      "Implemented a unique horizontal scrolling layout to create an engaging and unconventional user experience, setting the site apart from traditional vertical-scroll websites.",
      "Built using VSCode for development, Next.js for efficient rendering, JavaScript for dynamic functionality, and Tailwind CSS for a cohesive and modern design.",
      "Optimized for performance with techniques like code splitting and lazy loading, ensuring fast load times and smooth scrolling interactions.",
    ],
  }
];

export default projects;