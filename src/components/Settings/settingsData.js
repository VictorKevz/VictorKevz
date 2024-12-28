import { ColorLens, DarkMode, LightMode, TypeSpecimen } from "@mui/icons-material";
import { v4 as uuidv4 } from "uuid";
export const settingsData = [
  {
    id: "colorTheme",
    label: "Color Theme",
    icon: ColorLens,
    parag: "Pick a color theme",
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
    parag: "Pick a font theme",
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
        text: "Source Code Pro",
        parag:"Technical, ideal for coding and clarity."
      },
    ],
  },
];
