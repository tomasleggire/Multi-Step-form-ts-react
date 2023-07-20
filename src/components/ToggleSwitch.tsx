import React, { useState } from 'react';
import '../styles/ToggleSwitch.css';

function ToggleSwitch() {
  const [toggleState, setToggleState] = useState(false);

  const handleToggle = () => {
    setToggleState(!toggleState);
    console.log('Toggle State:', toggleState ? 'Monthly' : 'Yearly');
  };

  return (
    <div className="toggle-wrapper">
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
