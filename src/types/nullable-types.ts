export {};

let profile: { name: string; age: number | null } = {
  name: 'Tanaka',
  age: null,
};

/**
 * nullableにする方法1
 * Union型を使う
 */

/**
 * nullableにする方法2
 * tsconfig.jsonの strictNullChecks を falseにする
 */
// どんな型にもnullを入れることが可能となるが
// 秩序のないコードとなるため基本的に strictNullChecks の設定はtrueのままコーディングすべし。
