export class Hello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  say() {
    return `hello ${this.name}`;
  }

  say2() {
    return `hello2 ${this.name}`;
  }

  run() {
    console.log(`run 11`);
  }

  run10() {
    console.log(`run 10`);
  }

  run21() {
    console.log(`run 21`);
  }
}
