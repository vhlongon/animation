import React, { Component } from 'react';
import { Animate } from 'react-move';
import ToggleButton from '../ToggleButton';

const duration = 300;

const defaultStyle = {
  overflowY: 'hidden',
  transition: `max-height ${duration}ms ease-in-out`,
};

class ReactMove extends Component {
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
        <Animate
          start={{
            h: 0,
          }}
          update={{
            h: [show ? 3000 : 0],
            timing: { duration },
          }}
        >
          {({ h }) => (
            <div style={{ ...defaultStyle, maxHeight: `${h}px` }}>{this.props.children}</div>
          )}
        </Animate>
      </div>
    );
  };
}

export default ReactMove;
