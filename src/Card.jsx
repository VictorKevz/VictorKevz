import React, { useContext, useState } from "react";
import profile from "./assets/images/profile-pic1.svg";
import Projects from "./components/ProjectsTab/Projects";
import { profileData } from "./profileData";
import { DataContext } from "./App";

function Card() {
  const [readMore, setReadMore] = useState(false);
  const { tab, dispatchTab,isLight,t } = useContext(DataContext);

  const currentCardTab = tab.currentCardTab;
  const defaultText =
    "I am a disciplined, self-motivated front-end developer specializing in modern, responsive, and accessible web applications. Skilled in JavaScript and React.js ...";
  const allText =
    "I am a disciplined, self-motivated front-end developer specializing in modern, responsive, and accessible web applications. Skilled in JavaScript and React.js, I bring a user-centered approach to creating functional, inclusive digital solutions. My experience co-founding a tech company honed my business acumen and leadership skills, and I stay current with evolving technologies";
  const textToshow = readMore ? allText : defaultText;

  return (
    <section className={`card-wrapper ${currentCardTab !== null && "small"} ${isLight && "light-body"}`}>
      <div className="card-content">
      <div className="left-side">
        <div className="profile-name">
          <figure className="profile-fig">
            <img
              src={profile}
              alt="Profile picture of Victor"
              className="profile-img"
            />
          </figure>
          <h1 className="name">Victor Kuwandira</h1>
        </div>
        <ul className="contanct-info">
          {profileData.contanct.map((item) => (
            <li key={item.id} className="contanct-item">
              <span className="contanct-icon-wrapper">
                <item.icon />
              </span>
              {item.text}
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <ul className={`external-links ${readMore && "increase-mt"}`}>
          {profileData.links.map((link) => (
            <li key={link.id} className="link-item">
              <a href={link.url} target="_blank" className="link-icon">
                <link.icon className="external-icon" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* 
*
*
*
Right side content
*
*
*
*/}
      <div className="right-side">
        <div className="heading-top">
          <h2 className="title">Front-end Developer</h2>
          <p className="parag">{textToshow} </p>
          <button
            type="button"
            className="toggle-text-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </div>
        <div className="heading-bottom">
          <h2 className="title">Explore my Journey</h2>
          <p className="parag">
            Discover the projects I’ve built, milestones achieved, and
            experiences that shaped me.
          </p>
        </div>
        <ul className="tab-list">
          {profileData.tabs.map((tab) => {
            return (
              <li key={tab.id} className="tab-item">
                <button
                  type="button"
                  className="tab-btn"
                  onClick={() => dispatchTab({type:"UPDATE_TAB",payload:{tab:tab.text, key:"currentCardTab"}})}
                >
                  <span className="tab-icon">{<tab.icon/>}</span>{tab.text}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`overlay ${isLight && "light-body"}`}></div>
      </div>
    </section>
  );
}

export default Card;
