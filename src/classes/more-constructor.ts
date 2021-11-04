export {};

class Person {
  // アクセス修飾子をコンストラクタメソッドの引数につけることでメンバ変数の宣言と初期化を自動で行ってくれる
  constructor(public name: string, protected age: number) {}
}

const me = new Person('Kato', 36);
console.log(me);
