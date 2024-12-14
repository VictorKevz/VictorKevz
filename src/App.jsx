import { createContext, useReducer } from "react";
import "./App.css";
import Card from "./Card";
import Projects from "./components/ProjectsTab/Projects";

export const DataContext = createContext();

const tabReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TAB":
      const { tab,key } = action.payload;
      return {
        ...state,
        [key]: tab,
      };
    case "CLOSE_TAB":
      return {
        ...state,
        currentCardTab: null,
        currentProjectsTab:"api"
        
      };

    default:
      return state;
  }
};
function App() {
  const initialData = {
    currentCardTab: null,
    currentProjectsTab:"api"
    
  };
  const [tab, dispatchTab] = useReducer(tabReducer, initialData);
  return (
    <DataContext.Provider value={{ tab, dispatchTab }}>
      <main className="outer-container">
        <Card />
        {tab.currentCardTab === "Projects" && <Projects />}

       
      </main>
    </DataContext.Provider>
  );
}

export default App;
