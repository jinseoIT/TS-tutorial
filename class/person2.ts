class Person11 {
  public constructor(public _name: string, private age: number) { }
  
  get name() {
    console.log('get');
    return this._name;
  }
  set name(n: string) {
    console.log("set");
    this._name = n;
  }
}

const p11: Person11 = new Person11("Mark", 39);
console.log(p11.name); // get을 하는 함수 getter 
p11.name = 'sang' // set을 하는 함수 setter 

class Person12  {
  public readonly name: string = "Mark";
  private readonly country: string = "Korea";

  public constructor(public _name: string, private age: number) {
    this.country = "Korea";
   }
}