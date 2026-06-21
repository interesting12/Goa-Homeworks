function toObj(matrix) {
    const obj = {};
    matrix.forEach(([key, value]) => {
      obj[key] = value;
    });
    return obj;
}



const matrix = [
    ["name", "Luka"],
    ["age", 25],
    ["isStudent", true]
  ];
  
  const result = toObj(matrix);
  console.log(result);


  