import React from 'react';

const ToggleButton = ({ onClick, isToggled }) => (
  <button onClick={onClick}>Toggle {isToggled ? '⤴' : '⤵'}</button>
);

export default ToggleButton;
