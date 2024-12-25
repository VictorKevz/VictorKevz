
  import { v4 as uuidv4 } from "uuid";

import {
  IntegrationInstructions,
  Email,
  GitHub,
  Language,
  LinkedIn,
  LocationOn,
  Person,
  Phone,
  Work,
} from "@mui/icons-material";

export const profileData = {
  contanct: [
    { id: uuidv4(), text: "contact@victorkevz.com", icon: Email },
    { id: uuidv4(), text: "+358 40 463 9819", icon: Phone },
    { id: uuidv4(), text: "Oulu, Finland", icon: LocationOn },
  ],
  links: [
    { id: uuidv4(), url: "#", icon: Language },
    { id: uuidv4(), url: "https://github.com/VictorKevz", icon: GitHub },
    {
      id: uuidv4(),
      url: "https://www.linkedin.com/in/victor-kuwandira/",
      icon: LinkedIn,
    },
  ],
  tabs: [
    { id:uuidv4(),icon: IntegrationInstructions, text: "Projects" },
    { id:uuidv4(),icon: Work, text: "Career" },
    { id:uuidv4(),icon: Person, text: "About me" },
  ],
};
