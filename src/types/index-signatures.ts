export {};

// インデックスシグネチャ：オブジェクトの添字アクセスのための型

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}
let profile: Profile = { name: 'tanaka', underTwenty: false };

// How to write index signatures
// { [index: typeForIndex]: typeForValue }
profile.name = 'tanaka';
profile.age = 36;
profile.nationality = 'Japan';
