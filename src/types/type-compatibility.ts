export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;

//fooIncompatible = barIncompatible

let fooString: string;
let barString: string = 'string';
fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

// 構造的部分型（AnimalとPersonに直接の関係はなくとも持っているプロパティが同じなら代入可能）
let me: Animal;
me = new Person(36, 'tanaka');
