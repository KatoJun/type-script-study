export {};

namespace Japanese {
  // 外からアクセスできるようにするために export が必要
  export class Person {
    constructor(public name: string) {}
  }

  // namespaceの入れ子も可能。ただし外からアクセスできるように export をつける必要がある
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

const me = new Japanese.Person('Tanaka');
console.log(me.name);

const meTokyo = new Japanese.Tokyo.Person('Tanaka in Tokyo');
console.log(meTokyo.name);

const meOsaka = new Japanese.Osaka.Person('Tanaka in Osaka');
console.log(meOsaka.name);

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const mj = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(mj);
