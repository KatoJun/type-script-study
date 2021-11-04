export {};

// const echo = (arg: number) => arg;
// const echo = (arg: string) => arg;

// ジェネリクス関数
const echo = <T>(arg: T): T => arg;
console.log(echo('Hello'));
console.log(echo(100));
console.log(echo(false));

// ジェネリクスクラス
class Mirror<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}
console.log(new Mirror(123).echo());
console.log(new Mirror('ippei').echo());
console.log(new Mirror(true).echo());
