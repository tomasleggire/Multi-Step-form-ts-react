import React from 'react';
import '../styles/ToggleSwitch.css';

interface MyProps {
  toggleStateSwitch: boolean;
  handleToggleSwitch: () => void;
}

function ToggleSwitch(props: MyProps) {
  return (
    <div className="toggle-wrapper">
      <div className={`label ${props.toggleStateSwitch ? 'selected' : ''}`}>
        Monthly
      </div>
      <label className="switch">
        <input type="checkbox" onChange={props.handleToggleSwitch} />
        <span className="slider round"></span>
      </label>
      <div
        className={`label year ${props.toggleStateSwitch ? '' : 'selected'}`}
      >
        Yearly
      </div>
    </div>
  );
}

export default ToggleSwitch;
