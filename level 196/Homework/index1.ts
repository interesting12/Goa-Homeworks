function getArea(radius: number): number;
function getArea(length: number, width: number): number;

function getArea(a: number, b?: number): number {
  if (b === undefined) {
    return Math.PI * a * a;
  }

  return a * b;
}

console.log(getArea(5));      // Circle area
console.log(getArea(10, 4));  // Rectangle area