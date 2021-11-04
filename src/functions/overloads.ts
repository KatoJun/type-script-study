export {};

// 型制約 はシグネチャで担保されるので
// numberとstring以外の引数はdouble関数に渡ってこないことが保証される
function double(value: number): number;
function double(value: string): string;

// 実装の方の型はanyで受け取る
function double(value: any): any {
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}

console.log(double(100));
console.log(double('Go '));
