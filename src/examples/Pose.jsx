import React, { Component, Fragment } from 'react';
import posed from 'react-pose';
import ToggleButton from '../ToggleButton';

const defaultStyle = {
  overflowY: 'hidden',
};

const PosedExample = posed.div({
  open: { maxHeight: '1000px', transition: { duration: 300 } },
  closed: { maxHeight: 0, transition: { duration: 300 } },
});

class Pose extends Component {
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
      <Fragment>
        <ToggleButton onClick={this.toogleEnterState} isToggled={show} />
        <PosedExample
          style={{
            ...defaultStyle,
          }}
          pose={show ? 'open' : 'closed'}
        >
          {this.props.children}
        </PosedExample>
      </Fragment>
    );
  };
}

export default Pose;
