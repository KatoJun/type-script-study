export {};

let profile1: object = { name: 'kato' };
profile1 = { age: 36 };

let profile2: {} = { name: 'kato' };
profile2 = { age: 36 };

let profile3: {
  name: string;
} = { name: 'kato' };
profile3 = { name: 'jun' };
