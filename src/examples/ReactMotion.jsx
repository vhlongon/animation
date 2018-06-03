import React, { Component } from 'react';
import { Motion } from 'react-motion';
import ToggleButton from '../ToggleButton';

const defaultStyle = {
  maxHeight: 0,
  overflowY: 'hidden',
  transition: 'max-height 300ms ease-in-out',
};

class ReactMotion extends Component {
  constructor(props) {
    super(props);
    this.state = { show: props.show || false };
  }

  toogleEnterState = () => {
    this.setState(state => ({
      show: !state.show,
    }));
  };

  render = () => {
    const { show } = this.state;

    return (
      <div>
        <ToggleButton onClick={this.toogleEnterState} isToggled={show} />
        <Motion style={{ h: show ? 3000 : 0 }}>
          {({ h }) => (
            <div
              style={{
                ...defaultStyle,
                maxHeight: `${h}px`,
              }}
            >
              {this.props.children}
            </div>
          )}
        </Motion>
      </div>
    );
  };
}

export default ReactMotion;
