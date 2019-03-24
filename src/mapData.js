export function squaresData() {
  const map_arr = [
    [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1, 0, 0, 1]
  ];
  const squares = [];
  for (let i = 0; i < map_arr.length; i++) {
    let column = [];
    for (let j = 0; j < map_arr[i].length; j++) {
      column.push({
        positionAsString: `${i},${j}`,
        positionAsObj: { x: i, y: j },
        value: map_arr[i][j],
        isPacman: false,
        isDot: map_arr[i][j] ? true : false,
        isGhost: false
      });
    }
    squares.push(column);
  }
  squares[0][0].isDot = false; // reset dot
  squares[0][0].isPacman = true;
  squares[1][0].isDot = false; // reset dot
  squares[1][0].isGhost = true;

  return squares;
}
