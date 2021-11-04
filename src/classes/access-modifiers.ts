export {};

class Person {
  // デフォルトはpublic
  name: string;

  // privateはクラス内からのみアクセス可能
  private age: number;

  // protectedはクラス内に加え、サブクラスからもアクセス可能
  protected nationality: string;

  constructor(name: string, age: number, nationality: string) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
  }
}

class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  prifile(): string {
    return `name: ${this.name}, nationality: ${this.nationality}`;
  }
}

let taro = new Person('Taro', 30, 'Japan');
console.log(taro.profile());
console.log(taro.name);
//console.log(taro.age);
