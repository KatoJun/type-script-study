export {};

// 数値のenum
enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// 文字列のenum
enum Colors {
  Red = '#FF0000',
  White = '#FFFFFF',
  Green = '#008000',
  Blue = '#0000FF',
  //Yellow = '#FFFF00',
  Black = '#000000',
}
let green = Colors.Green;
console.log({ green });

// 途中でenumの要素を追加できる
enum Colors {
  Yellow = '#FFFF00',
  Gray = '#808080',
}
Colors.Yellow;
