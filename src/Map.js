import React from "react";
import Square from "./Square";
import "./Map.css";
import { squaresData } from "./mapData";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: squaresData(),
      currentPosition: { x: 0, y: 0 }
    };
  }

  handleKeyDown = e => {
    const keyCode = e.keyCode;
    const squares = this.state.squares;
    const currentPosition = this.state.currentPosition;
    let newPosition = "";

    switch (keyCode) {
      case 37: // left
        squares[this.state.currentPosition.x][
          this.state.currentPosition.y
        ].isPacman = false;
        newPosition = {
          ...this.state.currentPosition,
          x: this.state.currentPosition.x - 1
        };
        squares[newPosition.x][newPosition.y].isPacman = true;
        break;
      case 38: // up
        squares[this.state.currentPosition.x][
          this.state.currentPosition.y
        ].isPacman = false;
        newPosition = {
          ...this.state.currentPosition,
          y: this.state.currentPosition.y - 1
        };
        squares[newPosition.x][newPosition.y].isPacman = true;
        break;
      case 39: // right
        squares[this.state.currentPosition.x][
          this.state.currentPosition.y
        ].isPacman = false;
        newPosition = {
          ...this.state.currentPosition,
          x: this.state.currentPosition.x + 1
        };
        squares[newPosition.x][newPosition.y].isPacman = true;
        break;
      case 40: // down
        squares[this.state.currentPosition.x][
          this.state.currentPosition.y
        ].isPacman = false;
        newPosition = {
          ...this.state.currentPosition,
          y: this.state.currentPosition.y + 1
        };
        squares[newPosition.x][newPosition.y].isPacman = true;
        break;
      default:
        return;
    }

    this.setState({
      squares: squares,
      currentPosition: newPosition ? newPosition : currentPosition
    });
  };

  render() {
    const draw_squares = this.state.squares.map(col =>
      col.map((square, index) => {
        return (
          <Square
            key={index}
            position={square.position}
            value={square.value}
            isPacman={square.isPacman}
          />
        );
      })
    );

    return (
      <div className="map-wrapper" onKeyDown={this.handleKeyDown} tabIndex="0">
        <div className="map">{draw_squares}</div>
      </div>
    );
  }
}

export default Map;
