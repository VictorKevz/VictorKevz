import React, { useContext } from "react";
import { DataContext } from "../../App";
import { Close } from "@mui/icons-material";
import "./projects.css";
import { projectsData } from "./projectsData";
function Projects() {
  const { tab, dispatchTab } = useContext(DataContext);
  const keyTab = tab.currentProjectsTab;
  return (
    <article className="modal-wrapper">
      <div className="modal-container">
        <header className="projects-header">
          <h2 className="modal-title">My Projects</h2>
          <p className="projects-parag">
            Here are some projects I’ve completed, including challenges from
            FEM, DevChallenges, and personal initiatives.
          </p>
        </header>
        <div className="projects-tabs-wrapper">
          <header className="tabs-header">
            <ul className="projects-tab-list">
              {projectsData.links.map((tab) => {
                const isActive = keyTab === tab.name;
                return (
                  <li
                    key={tab.id}
                    className={`projects-tab-item ${isActive && "active"}`}
                    onClick={() =>
                        dispatchTab({
                          type: "UPDATE_TAB",
                          payload: { tab: tab.name, key: "currentProjectsTab" },
                        })
                      }
                  >
                    <button
                      type="button"
                      className="projects-tab-btn"
                     
                    >
                      {tab.text}
                    </button>
                  </li>
                );
              })}
            </ul>
          </header>
          <div className="tabs-grid">
            {projectsData[keyTab].map((obj) => (
              <div key={obj.id} className="project-card">
                <header className="card-header">
                  <img
                    src={obj.image}
                    alt={`Image of the project ${obj.title}`}
                    className="card-img"
                  />
                </header>
                <div className="details">
                <h3 className="project-name">{obj.title}</h3>
                <p className="parag">{obj.parag}</p>
                </div>
                <div className="cta-wrapper">
                <a href={obj.live} className="project-link" target="_blank">
                  Live site
                </a>
                <a href={obj.repo} className="project-link" target="_blank">
                  Repository
                </a>
                </div>
                <ul className="tech-stack-list">
                  {obj?.techStack?.map((icon,i) => (
                    <li key={i} className="tech-stack-item">
                      <img src={icon} alt="" className="tech-stack-img" />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <button
        type="button"
        className="close-btn"
        onClick={() => dispatchTab({ type: "CLOSE_TAB" })}
      >
        <Close />
      </button>
    </article>
  );
}

export default Projects;
