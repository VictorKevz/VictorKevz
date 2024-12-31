import { createContext, useReducer } from "react";
import "./App.css";
import Card from "./Card";
import Projects from "./components/ProjectsTab/Projects";
import Settings from "./components/Settings/Settings";
import PulseButton from "./components/PulseButton/PulseButton";
import { useTranslation } from "react-i18next";

export const DataContext = createContext();

const tabReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TAB":
      const { tab, key } = action.payload;
      return {
        ...state,
        [key]: tab,
      };
    case "CLOSE_TAB":
      return {
        ...state,
        currentCardTab: null,
        currentProjectsTab: "api",
      };
    case "TOGGLE_SETTINGS":
      return {
        ...state,
        showSettings: !state.showSettings,
      };
    default:
      return state;
  }
};
function App() {
  const savedColorTheme = JSON.parse(localStorage.getItem("colorTheme"));
  const savedFontTheme = JSON.parse(localStorage.getItem("fontTheme"));
  const savedLanguage = JSON.parse(localStorage.getItem("language"));
  const initialData = {
    currentCardTab: null,
    currentProjectsTab: "api",
    showSettings: false,
    settingsTab:"colorTheme",
    fontTheme: savedFontTheme || '"Inter", sans-serif',
    colorTheme: savedColorTheme || "light",
    language: savedLanguage || "en",
  };
  const [tab, dispatchTab] = useReducer(tabReducer, initialData);
  const isLight = tab.colorTheme === "light";

  const{t} = useTranslation();
  return (
    <DataContext.Provider value={{ tab, dispatchTab,isLight,t }}>
      <main className={`outer-container ${isLight && "light-body"}`} style={{fontFamily:tab.fontTheme}}>
        <Card />
        {tab.currentCardTab === "Projects" && <Projects />}
        {tab.showSettings && <Settings />}

        <PulseButton />
      </main>
    </DataContext.Provider>
  );
}

export default App;
