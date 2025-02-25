import React, { useState } from 'react';
import './ToggleButton.css';

export default function ToggleButton() {
  const [isToggled, setIsToggled] = useState(true);
  const handleChange = () => {
    setIsToggled(!isToggled);
  };
  return(

        <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' :'off'}`}>
          {isToggled ? 'Tryb jasny' : 'Tryb ciemny'}
        </button>
  );
}