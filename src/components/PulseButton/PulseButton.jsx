import React, { useContext } from 'react'
import { DataContext } from '../../App'
import { SettingsSuggest } from '@mui/icons-material'
import './PulseButton.css'
function PulseButton() {
    const{tab,dispatchTab} = useContext(DataContext)
  return (
    <div className="pulse-container">
        <div
        className="pulse-wrapper"
        onClick={() => dispatchTab({ type: "TOGGLE_SETTINGS" })}
      >
        <button className="pulse-button">
          <SettingsSuggest className="settings-icon" />
        </button>
    </div>
    </div>
  )
}

export default PulseButton