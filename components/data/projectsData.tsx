interface Project {
  id: string;
  image: string;
  alt: string;
  title: string;
  year: string;
  link: string;
  description: string[];
}

export const projects: Project[] = [
  {
    id: "aspx",
    image: "/images/aspx.png",
    alt: "aspx group",
    title: "ASPX GROUP",
    year: "2025",
    link: "https://aspx.vercel.app/",
    description: [
      "Company website for ASPX Group.",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Built using Typescript, Next.js, and Tailwind CSS/shadcn.",
      "Data is fetched from a database - Nest.js deployed on Render.",
    ],
  },
  {
    id: "bm",
    image: "/images/BM-square.png",
    alt: "block majority",
    title: "Block Majority",
    year: "2025",
    link: "https://www.blockmajority.io/",
    description: [
      "Revamped company website for Block Majority (Web3 company).",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Built using Webflow and custom Javascript injections.",
    ],
  },
  {
    id: "myriad",
    image: "/images/LEON.png",
    alt: "myriad industries",
    title: "Myriad Industries",
    year: "2024",
    link: "https://myriad-industries-leon.vercel.app/",
    description: [
      "A minimal portfolio website for Leon Koumouris (architect and university tutor).",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Built using Cursor, Next.js, Javascript + Tailwind CSS",
    ],
  },
  {
    id: "dlabs",
    image: "/images/DLABS.png",
    alt: "delicious labs",
    title: "Delicious Labs",
    year: "2022",
    link: "https://delicious-labs-sandy.vercel.app/",
    description: [
      "Main website for Delicious Labs, a Web3 collective.",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Implements horizontal scrolling instead of the traditional scroll direction.",
      "Built using VSCode, Next.js, Javascript + Tailwind CSS",
    ],
  },
  {
    id: "bored",
    image: "/images/BORED.png",
    alt: "bored token (memecoin)",
    title: "Bored Token",
    year: "2022",
    link: "https://boredtoken-steel.vercel.app/",
    description: [
      "Official website for Bored Token - ERC20 token launched by flur.eth (founder of Flur Labs).",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Built using VSCode, Next.js, Javascript + Tailwind CSS",
    ],
  },
  {
    id: "fttc",
    image: "/images/FTTC.jpg",
    alt: "fttc token (memecoin)",
    title: "FTTC Token",
    year: "2022",
    link: "https://ftx-classic-amber.vercel.app/",
    description: [
      "Official website for FTX Classic - ERC20 token launched by flur.eth (founder of Flur Labs).",
      "Responsive website compatible with multiple browsers and display sizes.",
      "Built using VSCode, Next.js, Javascript + Tailwind CSS",
    ],
  },
];

export default projects;
