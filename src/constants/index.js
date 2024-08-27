import {
  portfolioIcon1,
  portfolioIcon2,
  portfolioIcon3,
  cardBackground,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Portfolio",
    url: "#portfolio",
  },
  {
    id: "1",
    title: "Arena Survival",
    url: "#arena-survival",
  },
  {
    id: "2",
    title: "ASL Smart Tutor",
    url: "#asl-smart-tutor",
  },

  {
    id: "3",
    title: "Personal Website",
    url: "#personal-website",
  },
  {
    id: "4",
    title: "Future Projects",
    url: "#future-projects",
  },
  {
    id: "5",
    title: "Github",
    url: "https://github.com/twitte2",
    onlyMobile: true,
  },
];

export const projects = [
  {
    id: "0",
    title: "Arena Survival",
    condensedTitle: "arena-survival",
    text: "My very first game including all of the core components that make up a video game!",
    iconUrl: portfolioIcon1,
    imageUrl: cardBackground,
    light: true,
  },
  {
    id: "1",
    title: "ASL Smart Tutor",
    condensedTitle: "asl-smart-tutor",
    text: "An application designed to teach the user the ASL alphabet through the use of a camera and machine learning to read the users hand.",
    iconUrl: portfolioIcon2,
    imageUrl: cardBackground,
  },

  {
    id: "2",
    title: "Personal Website",
    condensedTitle: "personal-website",
    text: "The very website you are using right now! Includes many small details to show off the fun things I have learned through the use of the React framework!",
    iconUrl: portfolioIcon3,
    imageUrl: cardBackground,
  },
];
