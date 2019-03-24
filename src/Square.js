import React from 'react';
import './Square.css';

class Square extends React.Component {
  render() {
    const borw = this.props.value ? 'white-square' : 'black-square';
    const isPacman = () => {
      if (this.props.isPacman) {
        return (
          <span className="pacman">
            <img src={require('./assets/pacman.gif')} />
          </span>
        );
      }
      if (this.props.isDot) {
        return (
          <span className="dot">
            <img src={require('./assets/dot.png')} />
          </span>
        );
      }
      if (this.props.isGhost) {
        return (
          <span className="ghost">
            <img src={require('./assets/blinky2.gif')} />
          </span>
        );
      }
    };
    return (
      <span className={`bordered-square ${borw}`}>
        {/* {this.props.isPacman ? <Pacman position={this.props.positionAsObj} /> : 'O'} */}
        {isPacman()}
      </span>
    );
  }
}

export default Square;
