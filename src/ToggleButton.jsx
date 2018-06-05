import React from 'react';

const ToggleButton = ({ onClick, isToggled }) => (
  <button onClick={onClick}>Toggle example {isToggled ? '⤴' : '⤵'}</button>
);

export default ToggleButton;
