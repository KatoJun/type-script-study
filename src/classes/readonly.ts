export {};

class VisaCard {
  // 読み取り専用
  // publicは省略可能だが、readonlyだけでpublicになることが自明ではないので省略しない方が良いとspeakerは考えるとのこと。
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('tanaka');
console.log(myVisaCard.owner);
//myVisaCard.owner = 'Tanaka';
