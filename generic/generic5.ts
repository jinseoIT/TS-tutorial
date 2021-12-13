/* Generics Class */
class Person21<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

//new Person21("Mark");
//new Person21<string>("Kain");
new Person21<string, number>("Mark", 29);