import React, { useContext, useState, useEffect } from "react";
import "./Settings.css";
import { CheckCircle, Close, RadioButtonChecked } from "@mui/icons-material";
import { DataContext } from "../../App";
import { settingsData } from "./settingsData";
import { AnimatePresence, motion } from "framer-motion";
import { modalVariants, tabVariants } from "../../variants";
import i18n from "../../i18n";

const Settings = () => {
  const { tab, dispatchTab, t } = useContext(DataContext);
  const [direction, setDirection] = useState(true);

  const currentObj = settingsData.find((obj) => obj.id === tab.settingsTab);

  useEffect(() => {
    i18n.changeLanguage(tab.language);
  }, [tab.language]);

  useEffect(() => {
    localStorage.setItem("colorTheme", JSON.stringify(tab.colorTheme));
    localStorage.setItem("fontTheme", JSON.stringify(tab.fontTheme));
    localStorage.setItem("language", JSON.stringify(tab.language));
  }, [tab.language, tab.colorTheme, tab.fontTheme]);
  return (
    <div className="modal-wrapper settings">
      <motion.div
        className="settings-wrapper"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        key={tab.showSettings}
      >
        <header className="settings-header">
          <h2 className="settings-heading">{t("Settings")}</h2>
          <button
            className="close-btn settings"
            onClick={() => dispatchTab({ type: "TOGGLE_SETTINGS" })}
          >
            <Close className="settings-icon" />
          </button>
        </header>

        <article className="theme-wrapper">
          <div className="slider">
            {settingsData.map((obj) => {
              const isActive = tab.settingsTab === obj.id;
              return (
                <button
                  key={obj.id}
                  type="button"
                  className={`slider-btn ${isActive && "active-tab"}`}
                  onClick={() => {
                    dispatchTab({
                      type: "UPDATE_TAB",
                      payload: { tab: obj.id, key: "settingsTab" },
                    });
                    setDirection(!direction);
                  }}
                >
                  <obj.icon
                    className={`slider-icon ${isActive && "active-icon"}`}
                  />
                  <span className="slider-text">{t(obj.label)}</span>
                </button>
              );
            })}
          </div>
          <motion.div 
          className="theme-content-wrapper"
          variants={tabVariants(direction)}
        initial="hidden"
        animate="visible"
        key={tab.settingsTab}
        exit="exit"
          >
          <header className="theme-header">
            <h2 className="settings-title">{t(currentObj.label)}</h2>
            <p className="settings-parag">{t(currentObj.parag)}</p>
          </header>
          <div className="options-wrapper">
            {currentObj.options.map((option) => {
              const isActive = tab[currentObj.id] === option.name;
              return (
                <button
                  key={option.id}
                  type="button"
                  className={`option-btn ${isActive && "active-option"}`}
                  onClick={() =>
                    dispatchTab({
                      type: "UPDATE_TAB",
                      payload: { tab: option.name, key: currentObj.id },
                    })
                  }
                >
                  <span className="theme-option-wrapper">
                    {currentObj.id === "colorTheme" && (
                      <span className="color-icon-wrapper">
                        <option.icon className="option-icon" />
                      </span>
                    )}

                    {currentObj.id === "fontTheme" && (
                      <span
                        className="font-text-label"
                        style={{ fontFamily: option.name }}
                      >
                        Aa
                      </span>
                    )}

                    {currentObj.id === "language" && (
                      <span className="language-icon-wrapper">
                        <img src={option.icon} className="option-img" />
                      </span>
                    )}

                    <span className="text-wrapper">
                      <h2
                        className="theme-label"
                        style={
                          currentObj.id === "fontTheme"
                            ? { fontFamily: option.name }
                            : {}
                        }
                      >
                        {t(option.text)}
                      </h2>
                      <p
                        className="theme-parag"
                        style={
                          currentObj.id === "fontTheme"
                            ? { fontFamily: option.name }
                            : {}
                        }
                      >
                        {t(option.parag)}
                      </p>
                    </span>
                  </span>

                  <span className="option-status">
                    {isActive ? (
                      <CheckCircle className="check-icon" />
                    ) : (
                      <RadioButtonChecked className="checked-icon" />
                    )}
                  </span>
                </button>
              );
            })}
          </div>
          </motion.div>
        </article>
      </motion.div>
    </div>
  );
};

export default Settings;
