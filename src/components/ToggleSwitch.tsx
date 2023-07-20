import React, { useState } from 'react';
import '../styles/ToggleSwitch.css';

function ToggleSwitch() {
  const [toggleState, setToggleState] = useState(true);

  const handleToggle = () => {
    setToggleState(!toggleState);
    console.log('Toggle State:', toggleState ? 'Yearly' : 'Monthly');
  };

  return (
    <div className="toggle-wrapper">
      <div className={`label ${toggleState ? 'selected' : ''}`}>Monthly</div>
      <label className="switch">
        <input type="checkbox" onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <div className={`label year ${toggleState ? '' : 'selected'}`}>
        Yearly
      </div>
    </div>
  );
}

export default ToggleSwitch;
