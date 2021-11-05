export {};

let name = 'Taro';

name = 'Goro';

let nickName = 'Taro' as const;
nickName = 'Taro';

let profile = {
  name: 'Taro',
  height: 170,
} as const; // as const を書くことで name と height（全てのプロパティ。ネストされたものも含む）がreadonlyプロパティになる

// 以下はエラー
// profile.name = 'Goro';
// profile.height = 180;
