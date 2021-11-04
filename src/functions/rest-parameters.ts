export {};

const sum: (...values: number[]) => number = (...values: number[]): number => {
  console.log(values);
  return values.reduce((v1, v2) => v1 + v2);
};

console.log(sum(1, 2, 3, 4, 5));
