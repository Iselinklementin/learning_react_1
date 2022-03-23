import Community from "../../images/semesterp.jpg";
import Gamehub from "../../images/gamehub.jpg";
import Travels from "../../images/exam.jpg";
import Milky from "../../images/milky.jpg";
import Cinderella from "../../images/cinderella.jpg";
import hoytlavt from "../../images/h&l.jpg";
import Bjerke from "../../images/bjerke.jpg";
import FormatEiendom from "../../images/fe.jpg";
import CinderellaMockup from "../../images/cinderella-mockup.jpg";
import HoytLavtMockup from "../../images/rollups.jpg";
import FormatEiendomMockup from "../../images/fe-magazine-1.jpg";

export const developerList = ["Sass", "React", "Bootstrap", "WordPress API", "Strapi API"];

export const addresses = [
  {
    firstName: "Iselin",
    lastName: "Haugen",
    address: "Codestreet, 3231 Sandefjord, Vestfold",
    phone: "000 00 000",
  },
];

export const CarouselProjects = [
  {
    id: 1,
    name: "Cinderella",
    alt: "Cinderella mockup",
    src: [CinderellaMockup],
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    name: "Høyt & Lavt",
    alt: "HoytLavt mockup",
    src: [HoytLavtMockup],
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    name: "Format Eiendom",
    alt: "Format Eiendom mockup",
    src: [FormatEiendomMockup],
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
];

// Im using the same object I made for my portfolio earlier this year

export const websiteProjects = [
  {
    id: 1,
    name: "Science Museum",
    alt: "Girl trying VR-glasses",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Javascript", id: 1 },
      { name: "CSS", id: 2 },
    ],
    src: [Community],
    weblink: "https://iselin-haugen-semesterproject1-portfolio21.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-semesterproject1",
  },
  {
    id: 2,
    name: "Gamehub",
    alt: "Planet illustration",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [{ name: "Plain HTML / CSS", id: 3 }],
    src: [Gamehub],
    weblink: "https://iselin-haugen-gamehub-portfolio21.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-gamehub",
  },
  {
    id: 3,
    name: "Explore Travels",
    alt: "A boat in sunset",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Javascript", id: 4 },
      { name: "CSS", id: 5 },
      { name: "Wordpress API", id: 6 },
    ],
    src: [Travels],
    weblink: "https://iselin-haugen-projectexam1-portfolio.netlify.app",
    git: "https://github.com/Iselinklementin/portfolio-project-exam-1",
  },
  {
    id: 4,
    name: "Milky",
    alt: "Milk",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Heroku", id: 7 },
      { name: "JS", id: 8 },
      { name: "Sass", id: 9 },
      { name: "Cloudinary", id: 10 },
    ],
    src: [Milky],
    weblink: "https://iselin-milky.netlify.app",
    git: "https://github.com/Iselinklementin/sp2",
  },
];

export const portfolioProjects = [
  {
    id: 1,
    name: "Cinderella",
    alt: "Cabin in the mountains",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Product design", id: 1 },
      { name: "Trade Fair", id: 2 },
      { name: "Campaigns", id: 3 },
    ],
    src: [Cinderella],
  },
  {
    id: 2,
    name: "Høyt & Lavt",
    alt: "Boy crawling inside a pipe",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Rollups", id: 4 },
      { name: "Flyers", id: 5 },
      { name: "Advertising", id: 6 },
    ],
    src: [hoytlavt],
  },
  {
    id: 3,
    name: "Bjerke Spekemat",
    alt: "Food",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Packaging", id: 7 },
      { name: "Brochure", id: 8 },
      { name: "Rollups", id: 9 },
    ],
    src: [Bjerke],
  },
  {
    id: 4,
    name: "Format Eiendom",
    alt: "New apartements",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
    tags: [
      { name: "Brochure", id: 10 },
      { name: "Advertising", id: 11 },
      { name: "Logodesign", id: 12 },
    ],
    src: [FormatEiendom],
  },
];
