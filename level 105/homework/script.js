// 1) შევქმნათ ფუნქცია, რომელიც დააბრუნებს გადაცემული მატრიცის ( 2D მასივის ) ჯამს. მაგ:
// [[1,3],[1,4], [4,1],[2,2]] —> 18

function matrixSum(matrix) {
    return matrix.reduce((sum, row) => sum + row.reduce((rowSum, num) => rowSum + num, 0), 0);
  }
  
  const matrix1 = [[1, 3], [1, 4], [4, 1], [2, 2]];
  console.log(matrixSum(matrix1)); 

// 2) შევქმნათ ფუნქცია რომელიც გადაცემულ nxn მატრიცას გაუცვლის რიგებს და სვეტებს
function transposeMatrix(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
  }
  
  const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(transposeMatrix(matrix2)); 

// 3) შევქმნათ ფუნქცია რომელიც გადაცემულდ nXn მატრიცის დიაგონალურად განწყობილი ელემენტების ჯამს დააბრუნებს (უნდა დაბრუნდეს ორი რიცხვი).
function diagonalSums(matrix) {
    let mainDiagonal = 0, secondaryDiagonal = 0;
    const n = matrix.length;
  
    for (let i = 0; i < n; i++) {
      mainDiagonal += matrix[i][i];
      secondaryDiagonal += matrix[i][n - i - 1];
    }
  
    return [mainDiagonal, secondaryDiagonal];
  }
  
  const matrix3 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  console.log(diagonalSums(matrix3)); // [15, 15]
  
  