function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(
  a: number | string,
  b: number | string
): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }

  return String(a) + String(b);
}

console.log(combine(5, 7));         // 12
console.log(combine("Hello ", "World")); // Hello World