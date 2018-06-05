import React, { Component } from 'react';
import { Spring } from 'react-spring';
import ToggleButton from '../ToggleButton';

const defaultStyle = {
  overflowY: 'hidden',
};

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
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
        <Spring from={{ h: 0 }} to={{ h: show ? 1200 : 0 }}>
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
        </Spring>
      </div>
    );
  };
}

export default componentName;
