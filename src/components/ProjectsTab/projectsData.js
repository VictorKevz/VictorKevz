import { v4 as uuidv4 } from "uuid";
import reactIcon from "../../assets/icons/react.svg";
import htmltIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import gitIcon from "../../assets/icons/git.svg";
import viteIcon from "../../assets/icons/vite.svg";
import framerIcon from "../../assets/icons/framer-motion.svg";
import routerIcon from "../../assets/icons/react-router.svg";

import techRide from "../../assets/images/techRide.svg";
import helpChef from "../../assets/images/helpChef.svg";
import countryRank from "../../assets/images/countryRank.svg";
import form from "../../assets/images/form.svg";

export const projectsData = {
  links: [
    { id: uuidv4(), text: "API-oriented", name: "api" },
    { id: uuidv4(), text: "Logic & Design", name: "designLogic" },
  ],
  api: [
    {
      id: uuidv4(),
      title: "Tech & Ride",
      parag: "E-commerce Tech store.",
      repo: "https://github.com/VictorKevz/tech-ride-eCommerce-site.git",
      live: "https://victorkevz.github.io/tech-ride-eCommerce-site/",
      techStack: [
        viteIcon,
        reactIcon,
        htmltIcon,
        cssIcon,
        gitIcon,
        framerIcon,
        routerIcon,
      ],
      image: techRide,
    },
    {
      id: uuidv4(),
      title: "Help-Chef",
      parag: "A recipe discovery app.",
      repo: "https://github.com/VictorKevz/Help-Chef-App.git",
      live: "https://victorkevz.github.io/Help-Chef-App/",
      techStack: [
        viteIcon,
        reactIcon,
        htmltIcon,
        cssIcon,
        gitIcon,
        framerIcon,
        routerIcon,
      ],
      image: helpChef,
    },
    {
      id: uuidv4(),
      title: "Country-Rank",
      parag: "Country ranking App.",
      repo: "https://github.com/VictorKevz/country-rank.git",
      live: "https://victorkevz.github.io/country-rank/",
      techStack: [
        viteIcon,
        reactIcon,
        htmltIcon,
        cssIcon,
        gitIcon,
        framerIcon,
        routerIcon,
      ],
      image: countryRank,
    },
  ],
  designLogic: [
    {
      id: uuidv4(),
      title: "Multi-step Form",
      parag: "Interactive complex state form",
      repo: "https://github.com/VictorKevz/multistep-form.git",
      live: "https://victorkevz.github.io/multistep-form/",
      techStack: [viteIcon, reactIcon, htmltIcon, cssIcon, gitIcon, framerIcon],
      image: form,
    },
  ],
};