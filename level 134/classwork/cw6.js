function getSortedNamesByScore(arr) {
    return arr
      .sort((a, b) => b.score - a.score)
      .map(obj => obj.name);
}

const students = [
    { name: "Nika", score: 85 },
    { name: "Ana", score: 92 },
    { name: "Luka", score: 78 }
  ];
  
  const sortedNames = getSortedNamesByScore(students);
  console.log(sortedNames);
  