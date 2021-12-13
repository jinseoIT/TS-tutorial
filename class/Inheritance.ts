class Animal {
  constructor(protected _name: string, private _age: number) { }

  public print(): void {
    console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
  }

  protected printName(): void {
    console.log(this._name, this._age);
  }
}

const p = new Animal('animal', 2);

class Lion extends Animal {
  public gender = 'male';

  constructor(age: number) {
    super('King Leo', age)
    this.printName;
  }
 }

const Leo = new Lion(2);

