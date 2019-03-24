import React from 'react';
import Square from './Square';
import './Map.css';
import { squaresData } from './mapData';

function isEqual(a, b) {
  const aProps = Object.getOwnPropertyNames(a);
  const bProps = Object.getOwnPropertyNames(b);
  if (aProps.length !== bProps.length) {
    return false;
  }

  for (var i = 0; i < aProps.length; i++) {
    var propName = aProps[i];

    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  return true;
}

function isWallOrEdge(squares, newPosition) {
  const numOfColumns = squares.length;
  const numOfRows = squares[0].length;
  // check if edge
  if (
    newPosition.x > numOfColumns - 1 ||
    newPosition.x < 0 ||
    newPosition.y > numOfRows - 1 ||
    newPosition.y < 0
  ) {
    return true;
  }
  // else check if wall
  if (!squares[newPosition.x][newPosition.y].value) {
    return true;
  }

  return false;
}

function move(keycode, squares, currentPosition, character) {
  const updatedSquares = squares;
  let newPosition = '';
  switch (keycode) {
    case 37: // left
      newPosition = {
        ...currentPosition,
        x: currentPosition.x - 1
      };
      if (!isWallOrEdge(updatedSquares, newPosition)) {
        if (character === 'pacman') {
          updatedSquares[currentPosition.x][currentPosition.y].isPacman = false;
          updatedSquares[newPosition.x][newPosition.y].isPacman = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
        }
        if (character === 'ghost') {
          updatedSquares[currentPosition.x][currentPosition.y].isGhost = false;
          updatedSquares[currentPosition.x][currentPosition.y].isDot = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
          updatedSquares[newPosition.x][newPosition.y].isGhost = true;
        }
      } else {
        newPosition = currentPosition;
      }
      break;
    case 38: // up
      newPosition = {
        ...currentPosition,
        y: currentPosition.y - 1
      };
      if (!isWallOrEdge(updatedSquares, newPosition)) {
        if (character === 'pacman') {
          updatedSquares[currentPosition.x][currentPosition.y].isPacman = false;
          updatedSquares[newPosition.x][newPosition.y].isPacman = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
        }
        if (character === 'ghost') {
          updatedSquares[currentPosition.x][currentPosition.y].isGhost = false;
          updatedSquares[currentPosition.x][currentPosition.y].isDot = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
          updatedSquares[newPosition.x][newPosition.y].isGhost = true;
        }
      } else {
        newPosition = currentPosition;
      }
      break;
    case 39: // right
      newPosition = {
        ...currentPosition,
        x: currentPosition.x + 1
      };
      if (!isWallOrEdge(updatedSquares, newPosition)) {
        if (character === 'pacman') {
          updatedSquares[currentPosition.x][currentPosition.y].isPacman = false;
          updatedSquares[newPosition.x][newPosition.y].isPacman = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
        }
        if (character === 'ghost') {
          updatedSquares[currentPosition.x][currentPosition.y].isGhost = false;
          updatedSquares[currentPosition.x][currentPosition.y].isDot = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
          updatedSquares[newPosition.x][newPosition.y].isGhost = true;
        }
      } else {
        newPosition = currentPosition;
      }
      break;
    case 40: // down
      newPosition = {
        ...currentPosition,
        y: currentPosition.y + 1
      };
      if (!isWallOrEdge(updatedSquares, newPosition)) {
        if (character === 'pacman') {
          updatedSquares[currentPosition.x][currentPosition.y].isPacman = false;
          updatedSquares[newPosition.x][newPosition.y].isPacman = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
        }
        if (character === 'ghost') {
          updatedSquares[currentPosition.x][currentPosition.y].isGhost = false;
          updatedSquares[currentPosition.x][currentPosition.y].isDot = true;
          updatedSquares[newPosition.x][newPosition.y].isDot = false;
          updatedSquares[newPosition.x][newPosition.y].isGhost = true;
        }
      } else {
        newPosition = currentPosition;
      }
      break;
    default:
      newPosition = currentPosition;
      break;
  }

  return {
    updatedSquares,
    newPosition
  };
}

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: squaresData(),
      currentPacManPosition: { x: 0, y: 0 },
      currentGhostPosition: { x: 1, y: 0 }
    };
  }

  handleKeyDown = e => {
    const keyCode = e.keyCode;
    const { updatedSquares, newPosition } = move(
      keyCode,
      this.state.squares,
      this.state.currentPacManPosition,
      'pacman'
    );

    this.setState({
      squares: updatedSquares,
      currentPacManPosition: newPosition
    });
  };

  render() {
    if (isEqual(this.state.currentGhostPosition, this.state.currentPacManPosition)) {
      console.log('game over');
    }
    const draw_squares = this.state.squares.map(col =>
      col.map((square, index) => {
        return (
          <Square
            key={index}
            positionAsString={square.positionAsString}
            positionAsObj={square.positionAsObj}
            value={square.value}
            isPacman={square.isPacman}
            isDot={square.isDot}
            isGhost={square.isGhost}
          />
        );
      })
    );

    return (
      <div className="map-wrapper" onKeyDown={this.handleKeyDown} tabIndex="0">
        <div className="title">PAC-MAN</div>
        <div className="map">{draw_squares}</div>
      </div>
    );
  }

  componentDidMount() {
    setInterval(() => {
      const possiblePositions = [37, 38, 39, 40];
      const randomDirection =
        possiblePositions[Math.floor(Math.random() * possiblePositions.length)];
      const { updatedSquares, newPosition } = move(
        randomDirection,
        this.state.squares,
        this.state.currentGhostPosition,
        'ghost'
      );
      this.setState({
        squares: updatedSquares,
        currentGhostPosition: newPosition
      });
    }, 1000);
  }
}

export default Map;
