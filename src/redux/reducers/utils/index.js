export const Add_number_to_array = (matrix, action) => {
  let tmpMatrix = [...matrix];
  for (let i = 0; i < 50; i++) {
    tmpMatrix[action.cell_information.i][i] = !tmpMatrix[
      action.cell_information.i
    ][i]
      ? 1
      : tmpMatrix[action.cell_information.i][i] + 1;

    if (i !== action.cell_information.i) {
      tmpMatrix[i][action.cell_information.j] = !tmpMatrix[i][
        action.cell_information.j
      ]
        ? 1
        : tmpMatrix[i][action.cell_information.j] + 1;
    }
  }
  return tmpMatrix;
};

export const detect_fibonacci = (
  matrix,
  cell_information_i,
  cell_information_j
) => {
  let fibonacciPositions_Vertical = [];
  let fibonacciPositions_Horizontaly = [];
  //Horizontal
  let tmpJ;
  let tmpI;

  for (let i = 0; i < 50; i++) {
    for (let j = cell_information_j - 5; j < cell_information_j + 5; j++) {
      if (j < 0 || j > 49) continue;
      if (
        (matrix[i][j] + matrix[i][j + 1] === matrix[i][j + 2]) &
        (fibonacciPositions_Vertical.length === 0)
      ) {
        fibonacciPositions_Vertical.push(j, j + 1, j + 2);
        tmpJ = j + 1;
      } else if (matrix[i][j] + matrix[i][j + 1] === matrix[i][j + 2]) {
        fibonacciPositions_Vertical.push(j + 2);
      } else if (
        (matrix[i][j] + matrix[i][j + 1] !== matrix[i][j + 2]) &
        (fibonacciPositions_Vertical.length > 0)
      ) {
        j = tmpJ;
        fibonacciPositions_Vertical = [];
      }
      if (fibonacciPositions_Vertical.length > 4) {
        fibonacciPositions_Vertical.forEach((item) => {
          matrix[i][item] = undefined;
        });
      }
    }
  }
  for (let j = 0; j < 50; j++) {
    for (let i = cell_information_i - 5; i < cell_information_i + 5; i++) {
      if (i < 0 || i+2 > 49) break;
      if (
        (matrix[i][j] + matrix[i + 1][j] === matrix[i + 2][j]) &
        (fibonacciPositions_Horizontaly.length === 0)
      ) {
        fibonacciPositions_Horizontaly.push(i, i + 1, i + 2);
        tmpI = i + 1;
      } else if (matrix[i][j] + matrix[i + 1][j] === matrix[i + 2][j]) {
        fibonacciPositions_Horizontaly.push(i + 2);
      } else if (
        (matrix[i][j] + matrix[i + 1][j] !== matrix[i + 2][j]) &
        (fibonacciPositions_Horizontaly.length > 0)
      ) {
        i = tmpI;
        fibonacciPositions_Horizontaly = [];
      }
      if (fibonacciPositions_Horizontaly.length > 4) {
        fibonacciPositions_Horizontaly.forEach(
          (item) => (matrix[item][j] = undefined)
        );
      }
    }
  }

   return matrix;
  // return
};
