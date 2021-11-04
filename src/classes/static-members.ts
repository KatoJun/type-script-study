export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Tanaka';

  static work() {
    return `Hey, guys! This is ${this.firstName}! are you interested in TypeScript? Let's dive into TypeScript`;
  }
}

const me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
