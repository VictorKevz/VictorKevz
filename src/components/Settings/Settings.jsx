import React, { useContext, useState } from "react";
import "./Settings.css";
import {
  CheckCircle,
  Close,
  RadioButtonChecked,
  SettingsSuggest,
} from "@mui/icons-material";
import { DataContext } from "../../App";
import { settingsData } from "./settingsData";
import { span } from "framer-motion/client";

const Settings = () => {
  const { tab, dispatchTab } = useContext(DataContext);
  const currentObj = settingsData.find((obj) => obj.id === tab.settingsTab);

  return (
    <div className="modal-wrapper settings">
      <div className="settings-wrapper">
        <button
          className="close-btn settings"
          onClick={() => dispatchTab({ type: "TOGGLE_SETTINGS" })}
        >
          <Close className="settings-icon" />
        </button>

        <article className="theme-wrapper">
          <div className="slider">
            {settingsData.map((obj) => {
              const isActive = tab.settingsTab === obj.id;
              return (
                <button
                  key={obj.id}
                  type="button"
                  className={`slider-btn ${isActive && "active-tab"}`}
                  onClick={() =>
                    dispatchTab({
                      type: "UPDATE_TAB",
                      payload: { tab: obj.id, key: "settingsTab" },
                    })
                  }
                >
                  <obj.icon
                    className={`slider-icon ${isActive && "active-icon"}`}
                  />
                  {obj.label}
                </button>
              );
            })}
          </div>
          <header className="theme-header">
            <h2 className="settings-title">{currentObj.label}</h2>
            <p className="settings-parag">{currentObj.parag}</p>
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
                    {currentObj.id === "colorTheme" ? (
                      <span className="color-icon-wrapper">
                        <option.icon className="option-img" />
                      </span>
                    ) : (
                      <span
                        className="font-text-label"
                        style={{ fontFamily: option.name }}
                      >
                        Aa
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
                        {option.text}
                      </h2>
                      <p
                        className="theme-parag"
                        style={
                          currentObj.id === "fontTheme"
                            ? { fontFamily: option.name }
                            : {}
                        }
                      >
                        {option.parag}
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
        </article>
      </div>
    </div>
  );
};

export default Settings;
