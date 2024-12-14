import { v4 as uuidv4 } from "uuid";
import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  LocationOn,
  Phone,
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
    tabs: ["Projects", "Career", "About me"],
  };