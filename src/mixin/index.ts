export class Hello {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  say() {
    return `hello ${this.name}`;
  }

  say2() {
    return `hello ${this.name}`;
  }
}
