import { createContext, useReducer } from "react";
import "./App.css";
import Card from "./Card";
import Projects from "./components/ProjectsTab/Projects";
import Settings from "./components/Settings/Settings";
import { s } from "framer-motion/client";
import PulseButton from "./components/PulseButton/PulseButton";

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
  const initialData = {
    currentCardTab: null,
    currentProjectsTab: "api",
    showSettings: false,
    settingsTab:"colorTheme",
    fontTheme:'"Inter", serif',
    colorTheme:"dark",
  };
  const [tab, dispatchTab] = useReducer(tabReducer, initialData);
  const isLight = tab.colorTheme === "light";
  return (
    <DataContext.Provider value={{ tab, dispatchTab,isLight }}>
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
