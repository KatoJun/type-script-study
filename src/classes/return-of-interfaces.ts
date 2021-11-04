export {};

class Mahotsukai {}
class Souryo {}
class Taro extends Mahotsukai {}

interface Kenja {
  ionazun(): void;
}
interface Senshi {
  kougeki(): void;
}
class Jiro implements Kenja, Senshi {
  ionazun() {
    console.log('ionazun');
  }
  kougeki() {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
