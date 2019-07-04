import React from 'react'
import './index.css'

class ToggleButton extends React.Component {
  render() {
    return (
      <div className="toggle-button-wrapper">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"/>
        </label>
      </div>
    )
  }
}
export default ToggleButton
