import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';
import ToggleButton from '../ToggleButton';

const duration = 300;

const defaultStyle = {
  maxHeight: 0,
  overflowY: 'hidden',
  transition: `max-height ${duration}ms ease-in-out`,
};

const transitionStyles = {
  entering: { maxHeight: 0 },
  entered: { maxHeight: '3000px' },
};

class ReactTransitionGroup extends Component {
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
        <Transition in={show} timeout={duration}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {this.props.children}
            </div>
          )}
        </Transition>
      </div>
    );
  };
}

export default ReactTransitionGroup;
