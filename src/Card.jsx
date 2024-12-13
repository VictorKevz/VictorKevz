import {
  Email,
  GitHub,
  Language,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import profile from "./assets/images/profile-pic1.svg";
function Card() {
  const [readMore, setReadMore] = useState(false);
  const defaultText =
    "I am a disciplined, self-motivated front-end developer specializing in modern, responsive, and accessible web applications. Skilled in JavaScript and React.js ...";
  const allText =
    "I am a disciplined, self-motivated front-end developer specializing in modern, responsive, and accessible web applications. Skilled in JavaScript and React.js, I bring a user-centered approach to creating functional, inclusive digital solutions. My experience co-founding a tech company honed my business acumen and leadership skills, and I stay current with evolving technologies";
  const textToshow = readMore ? allText : defaultText;
  const profileData = {
    contanct: [
      { id: uuidv4(), text: "contact@victorkevz.com", icon: Email },
      { id: uuidv4(), text: "+358 40 463 9819", icon: Phone },
      { id: uuidv4(), text: "Oulu, Finland", icon: LocationOn },
    ],
    links: [
      { id: uuidv4(), url: "https://wwww.victorkevz.com", icon: Language },
      { id: uuidv4(), url: "https://github.com/VictorKevz", icon: GitHub },
      {
        id: uuidv4(),
        url: "https://www.linkedin.com/in/victor-kuwandira/",
        icon: LinkedIn,
      },
    ],
    tabs: ["Projects", "Career", "About me"],
  };

  return (
    <section className="card-wrapper">
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
                <link.icon />
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
          <h2 className="title">Front-end developer</h2>
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
          {profileData.tabs.map((tab, i) => {
            return (
              <li key={i} className="tab-item">
                {tab}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Card;
