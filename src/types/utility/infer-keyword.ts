export {};

function add(a: number, b: number) {
  return a + b;
}
console.log(add(1, 2));

type ReturnTypeFromAdd = ReturnType<typeof add>;

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R // inferを使うことで、条件の一部として任意の型（ジェネリクス型）を使うことができる
  ? R
  : any;
