export type WorkExperience = {
    company: string;
    role: string;
    duration: string;
    logo: string;
    url: string;
    responsibilities: string[];
  };
  
  const workData: WorkExperience[] = [
    {
      company: "Block Majority",
      role: "Junior Software Engineer",
      duration: "August 2023 ~ present",
      logo: "/images/BM-square.png",
      url: "https://blockmajority.io/",
      responsibilities: [
        "Smart contract development/deployment (solidity/truffle/hardhat).",
        "Produced responsive websites compatible with multiple browsers and display sizes.",
        "Optimized web applications for speed, scalability and security.",
        "Collected, defined and translated user requirements into project designs and implementation plans.",
        "Took concepts, produced design mockups and prototypes to strengthen designs, enhance user experiences and improve site interactions.",
      ],
    },
    {
      company: "Flur Labs",
      role: "Front End Developer",
      duration: "August 2022 ~ December 2022",
      logo: "/images/FLURLABS-LOGO.png",
      url: "https://x.com/FlurLabs",
      responsibilities: [
        "Dapp development - predominantly frontend.",
        "Smart contract development/deployment (solidity/truffle/hardhat).",
        "Worked with in-house UI designers to translate figma designs into frontend code.",
        "Coded using Next.js, HTML, CSS and Javascript to develop features for both mobile and desktop platforms.",
      ],
    },
  ];
  
  export default workData;