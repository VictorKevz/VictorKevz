import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../App";
import { Close } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import "./projects.css";
import { projectsData } from "./projectsData";
import { modalVariants, tabVariants } from "../../variants";
function Projects() {
  const { tab, dispatchTab } = useContext(DataContext);
  const keyTab = tab.currentProjectsTab;
  const [direction, setDirection] = useState(true);
  // Ref for detecting clicks outside the modal
  const modalRef = useRef(null);

  // Close modal on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatchTab({ type: "CLOSE_TAB" });
      }
    }

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatchTab]);

  return (
    <article className="modal-wrapper projects">
      <AnimatePresence mode="wait">
        <motion.div
          className="modal-container"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          
          key={tab.currentCardTab}
          ref={modalRef}
        >
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
                      className={`projects-tab-item `}
                      onClick={() =>{
                        dispatchTab({
                          type: "UPDATE_TAB",
                          payload: { tab: tab.name, key: "currentProjectsTab" },
                        })
                        setDirection(!direction)
                      }
                        
                      }
                    >
                      <button
                        type="button"
                        className={`projects-tab-btn ${isActive && "active"}`}
                      >
                        {tab.text}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </header>
            <AnimatePresence mode="wait">
            <motion.div
              className="tabs-grid"
              variants={tabVariants(direction)}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={keyTab}
            >
              {projectsData[keyTab].map((obj) => (
                <div key={obj.id} className="project-card">
                  <header className="card-header">
                    <img src={obj.image} alt="" className="card-img" />
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
                    {obj?.techStack?.map((icon, i) => (
                      <li key={i} className="tech-stack-item">
                        <img src={icon} alt="" className="tech-stack-img" />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
            </AnimatePresence>
          </div>
          <button
            type="button"
            className="close-btn"
            onClick={() => dispatchTab({ type: "CLOSE_TAB" })}
          >
            <Close />
          </button>
        </motion.div>
      </AnimatePresence>
    </article>
  );
}

export default Projects;
