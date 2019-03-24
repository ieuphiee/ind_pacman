export function squaresData() {
  const map_arr = [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1]
  ];
  const squares = [];
  for (let i = 0; i < map_arr.length; i++) {
    let column = [];
    for (let j = 0; j < map_arr[i].length; j++) {
      column.push({
        position: `${i},${j}`,
        value: map_arr[i][j],
        isPacman: i === 0 && j === 0 ? true : false
      });
    }
    squares.push(column);
  }
  return squares;
}
