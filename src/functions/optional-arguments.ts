export {};

let bmi: (height: number, weight: number, printable?: boolean) => number = (
  height: number,
  weight: number,
  printable?: boolean
): number => {
  const bmi = weight / (height * height);
  if (printable) {
    console.log(`Your bmi is ${bmi}`);
  }
  return bmi;
};

// 要件 bmi(身長、体重、コンソールに出力するかどうか？)
console.log('[1]');
bmi(1.65, 60);

console.log('[2]');
bmi(1.65, 60, true);

console.log('[3]');
bmi(1.65, 60, false);
