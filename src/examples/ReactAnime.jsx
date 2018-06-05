import React, { Component, Fragment } from 'react';
import anime from 'animejs';
import ToggleButton from '../ToggleButton';

class ReactAnime extends Component {
  constructor(props) {
    super(props);
    this.state = { show: null };
    this.node = null;
    this.animation = null;
  }

  componentDidMount = () => {
    this.animation = anime({
      duration: 300,
      targets: this.node,
      maxHeight: '1500px',
      autoplay: false,
      easing: 'easeInOutBack',
    });
  };

  getRef = node => {
    this.node = node;
  };

  toogleEnterState = () => {
    this.setState(
      state => ({
        show: !state.show,
      }),
      () => {
        this.animation.play();
        this.animation.reverse();
      }
    );
  };

  render() {
    const { show } = this.state;

    return (
      <Fragment>
        <ToggleButton onClick={this.toogleEnterState} isToggled={show} />
        <div ref={this.getRef} style={{ overflowY: 'hidden' }}>
          <div>{this.props.children}</div>
        </div>
      </Fragment>
    );
  }
}

export default ReactAnime;
