export {};

let name: any = 'Tanaka';

// 型アサーションはasを使う方法と<>を使う方法があるが、<>はJSXの記法とよく似ているため非推奨。
//let length = name.length as number
let length = (name as string).length;
//let length = (<string>name).length

// 以下はエラーとなる
//length = 'foo';
