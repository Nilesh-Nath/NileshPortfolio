import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  bootstrap,
  html,
  css,
  reactjs,
  next,
  tailwind,
  nodejs,
  metamask,
  git,
  linux,
  hardhat,
  neohs,
  ChainCloud,
  DecentraVote,
  CuddlesAiSiteImg,
  Solidity,
  Neohlogo,
  CloudChain,
  DecentraLogo,
  cuddlesAI,
  Dexlogo,
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Development",
    icon: web,
  },
  {
    title: "Dapps",
    icon: mobile,
  },
  {
    title: "Nfts",
    icon: backend,
  },
  {
    title: "Defi",
    icon: creator,
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
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "Solidity",
    icon: Solidity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "hardhat",
    icon: hardhat,
  },
];

const experiences = [
  {
    title: "Neoh's NFT",
    company_name: "Frontend Website",
    icon: Neohlogo,
    iconBg: "#383E56",
    date: "Aug 2021 - Sept 2021",
    points: [
      "Neoh’s NFT is a frontend design project for an NFT marketplace.",
      "It is done in pure vanilla HTML, CSS and JS, without any external libraries or frameworks.",
      "It showcases my skills on vanilla HTML, CSS and JS, as well as Bootstrap framework of CSS.",
      "It has cool animations that make the website more attractive and interactive.",
    ],
  },
  {
    title: "CloudChain",
    company_name: "Fullstack Decentralized Drive",
    icon: CloudChain,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Jul 2023",
    points: [
      "ChainCloud is a DApp that allows users to upload their data to the blockchain using IPFS and Pinata, and grant or revoke permission for other users to access their data.",
      "It is built on the blockchain using Solidity for smart contract development, Hardhat for contract deployment and testing, and Next.js for frontend development.",
      "It integrates Moralis Provider and web3uikit for seamless interaction with the blockchain and user authentication.",
      "It has five smart contract functions: upload, PermsAllow, PermsRevoke, displayData, and showAccess.",
    ],
  },
  {
    title: "DecentraVote",
    company_name: "Fullstack Voting Dapp",
    icon: DecentraLogo,
    iconBg: "#383E56",
    date: "Jul 2023 - Jul 2023",
    points: [
      "DecentraVote is a decentralized voting platform built on the Ethereum blockchain using Solidity, Hardhat, and JavaScript.",
      "It allows authorized individuals to add candidates to the campaign based on specific criteria, and eligible voters to register and cast their votes securely on the blockchain.",
      "It uses Chainlink keepers to trigger the winner selection process after the campaign’s end, ensuring a transparent and fair voting outcome.",
      "It has four smart contract functions: adding candidates, voter registration, voting, and campaign reopening.",
    ],
  },
  {
    title: "CuddlesAI",
    company_name: "AI Powered NFT Minter",
    icon: cuddlesAI,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Aug 2023",
    points: [
      "CuddlesAI is an AI tool that allows users to generate and mint NFTs based on their descriptions using the Hugging Face API, IPFS, Pinata, and a smart contract.",
      "Users can generate NFTs from any description they want, and refresh to get new options if they are not satisfied with the results.",
      "Users can mint their chosen NFTs as ERC721 tokens on the Sepolia testnet, and view them on OpenSea. They need to connect their Metamask account to mint NFTs.",
      "The project uses Next.js for frontend development, and Solidity and Hardhat for backend smart contract development.",
    ],
  },
  {
    title: "Dex",
    company_name: "Decentralized Token Exchange",
    icon: Dexlogo,
    iconBg: "#383E56",
    date: "Aug 2023 - present",
    points: [
      "The project is a decentralized exchange platform that allows users to trade cryptocurrencies and tokens without intermediaries.",
      "The frontend is developed using Next.js, a React framework that enables fast and scalable web development.",
      "The backend smart contract is written in Solidity, a popular language for Ethereum-based applications. It uses packages like OpenZeppelin for security and standardization.",
      "The project uses Hardhat, a development environment for Ethereum, to deploy and test the smart contract using JavaScript.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Neoh's NFT",
    description:
      "Neoh’s NFT is a frontend design project for an NFT marketplace.It is done in pure vanilla HTML, CSS and JS, without any external libraries or Js frameworks.",
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
      {
        name: "BootStrap",
        color: "white",
      },
    ],
    image: neohs,
    source_code_link:
      "https://github.com/Nilesh-Nath/Fully-Responsive-BootStrap-Website",
  },
  {
    name: "ChainCloud",
    description:
      "ChainCloud is a decentralized application (DApp) for securely uploading and sharing data on the blockchain.Where you have power of whome to share your data with.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "IPFS",
        color: "green-text-gradient",
      },
      {
        name: "Moralis",
        color: "pink-text-gradient",
      },
    ],
    image: ChainCloud,
    source_code_link: "https://github.com/Nilesh-Nath/ChainCloud",
  },
  {
    name: "DecentraVote",
    description:
      "DecentraVote is a blockchain voting platform built on Ethereum.It ensures transparent and secure elections by leveraging smart contracts and Chainlink keepers.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Chainlink",
        color: "green-text-gradient",
      },
      {
        name: "Dapp",
        color: "pink-text-gradient",
      },
    ],
    image: DecentraVote,
    source_code_link: "https://github.com/Nilesh-Nath/DecentraVote",
  },
  {
    name: "CuddlesAI",
    description:
      "An AI-powered NFT generation tool that lets users create, visualize, and mint unique NFTs based on provided descriptions.",
    tags: [
      {
        name: "Nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "AI",
        color: "green-text-gradient",
      },
      {
        name: "NFT",
        color: "pink-text-gradient",
      },
    ],
    image: CuddlesAiSiteImg,
    source_code_link: "https://github.com/Nilesh-Nath/CuddlesAI",
  },
];

export { services, technologies, experiences, testimonials, projects };
