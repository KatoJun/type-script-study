export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Tanaka',
  age: 36,
};
me.age++;

console.log(me);

// Readonlyを使うと全てのプロパティがreadonlyとなる
type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: 'Taro',
  age: 38,
};
