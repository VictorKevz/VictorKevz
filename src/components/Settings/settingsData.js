import { ColorLens, DarkMode, LightMode, Translate, TypeSpecimen } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
import uk from "../../assets/images/uk.png"
import finland from "../../assets/images/finland.png"
import sweden from "../../assets/images/sweden.png"
export const settingsData = [
  {
    id: "colorTheme",
    label: "Color Theme",
    icon: ColorLens,
    parag: "Please, choose your preferred theme.",
    options: [
      {
        id: uuidv4(),
        name: "dark",
        text: "Dark Mode",
        parag: "Select a clean & classic light theme",
        icon: DarkMode,
      },
      {
        id: uuidv4(),
        name: "light",
        text: "Light Mode",
        parag: "Select a modern dark theme",
        icon: LightMode,
      },
    ],
  },
  {
    id: "fontTheme",
    label: "Font Theme",
    parag: "Please, choose your preferred font.",
    icon: TypeSpecimen,
    options: [
      {
        id: uuidv4(),
        name: '"Inter", serif',
        text: "Inter",
        parag:"Modern and sleek for clean designs"
      },
      {
        id: uuidv4(),
        name: '"Playfair Display", serif',
        text: "Playfair Display",
        parag:"Elegant, classic feel with sophisticated touch"
      },
      {
        id: uuidv4(),
        name: '"Source Code Pro", serif',
        text: "Source Code",
        parag:"Technical, ideal for coding and clarity."
      },
    ],
  },
  {
    id: "language",
    label: "Language",
    parag: "Please, choose your preferred language.",
    icon: Translate,
    options: [
      {
        id: uuidv4(),
        name: 'en',
        text: "English (UK)",
        parag:"Use english",
        icon:uk
      },
      {
        id: uuidv4(),
        name: 'fi',
        text: "Finnish",
        parag:"Use Finnish",
        icon:finland
      },
      {
        id: uuidv4(),
        name: 'sv',
        text: "Swedish",
        parag:"Use Swedish",
        icon:sweden
      },
    ],
  },
];
