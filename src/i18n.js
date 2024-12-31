import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome!",
          "Color Theme": "Color Theme",
          "Font Theme": "Font Theme",
          "Language": "Language",
          "Pick a color theme": "Pick a color theme",
          "Pick a font theme": "Pick a font theme",
          "Pick a language": "Pick a language",
          "Dark Mode": "Dark Mode",
          "Light Mode": "Light Mode",
          "Inter": "Inter",
          "Playfair Display": "Playfair Display",
          "Source Code Pro": "Source Code Pro",
          "English (UK)": "English (UK)",
          "Finnish": "Finnish",
          "Swedish": "Swedish",
          "Close Settings": "Close Settings",
          "Settings": "Settings",
          "Projects": "Projects",
          "Pulse Button": "Pulse Button",
          "Select a clean & classic light theme": "Select a clean & classic light theme",
          "Select a modern dark theme": "Select a modern dark theme",
          "Modern and sleek for clean designs": "Modern and sleek for clean designs",
          "Elegant, classic feel with sophisticated touch": "Elegant, classic feel with sophisticated touch",
          "Technical, ideal for coding and clarity.": "Technical, ideal for coding and clarity.",
          "Use English": "Use English",
          "Use Finnish": "Use Finnish",
          "Use Swedish": "Use Swedish"
        }
      },
      fi: {
        translation: {
          welcome: "Tervetuloa!",
          "Color Theme": "Väriteema",
          "Font Theme": "Fonttiteema",
          "Language": "Kieli",
          "Pick a color theme": "Valitse väriteema",
          "Pick a font theme": "Valitse fonttiteema",
          "Pick a language": "Valitse kieli",
          "Dark Mode": "Tumma tila",
          "Light Mode": "Vaalea tila",
          "Inter": "Inter",
          "Playfair Display": "Playfair Display",
          "Source Code Pro": "Source Code Pro",
          "English (UK)": "Englanti (UK)",
          "Finnish": "Suomi",
          "Swedish": "Ruotsi",
          "Close Settings": "Sulje asetukset",
          "Settings": "Asetukset",
          "Projects": "Projektit",
          "Pulse Button": "Pulssipainike",
          "Select a clean & classic light theme": "Valitse puhdas ja klassinen vaalea teema",
          "Select a modern dark theme": "Valitse moderni tumma teema",
          "Modern and sleek for clean designs": "Moderni ja tyylikäs puhtaisiin suunnitelmiin",
          "Elegant, classic feel with sophisticated touch": "Elegantti, klassinen tunne hienostuneella kosketuksella",
          "Technical, ideal for coding and clarity.": "Tekninen, ihanteellinen koodaukseen ja selkeyteen.",
          "Use English": "Käytä englantia",
          "Use Finnish": "Käytä suomea",
          "Use Swedish": "Käytä ruotsia"
        }
      },
      sv: {
        translation: {
          welcome: "Välkommen!",
          "Color Theme": "Färgtema",
          "Font Theme": "Fonttema",
          "Language": "Språk",
          "Pick a color theme": "Välj ett färgtema",
          "Pick a font theme": "Välj ett fonttema",
          "Pick a language": "Välj ett språk",
          "Dark Mode": "Mörkt läge",
          "Light Mode": "Ljust läge",
          "Inter": "Inter",
          "Playfair Display": "Playfair Display",
          "Source Code Pro": "Source Code Pro",
          "English (UK)": "Engelska (UK)",
          "Finnish": "Finska",
          "Swedish": "Svenska",
          "Close Settings": "Stäng inställningar",
          "Settings": "Inställningar",
          "Projects": "Projekt",
          "Pulse Button": "Pulsknapp",
          "Select a clean & classic light theme": "Välj ett rent och klassiskt ljust tema",
          "Select a modern dark theme": "Välj ett modernt mörkt tema",
          "Modern and sleek for clean designs": "Modern och elegant för rena designer",
          "Elegant, classic feel with sophisticated touch": "Elegant, klassisk känsla med sofistikerad touch",
          "Technical, ideal for coding and clarity.": "Teknisk, idealisk för kodning och klarhet.",
          "Use English": "Använd engelska",
          "Use Finnish": "Använd finska",
          "Use Swedish": "Använd svenska"
        }
      }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;