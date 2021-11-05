export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu(); // unknownは型安全なany型

let sumAny = numberAny + 10; // anyにnumberの10を足してもエラーにならない
//let sumUnknown = numberUnknown + 10; // unknownにnumberの10を足そうとするとエラーになる（unknownなので数値じゃないかもしれないよ）

if (typeof numberUnknown === 'number') {
  // type guard
  let sumUnknown = numberUnknown + 10;
}
