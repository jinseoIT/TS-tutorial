class Person9 {
  name;
  constructor(name: string) {
    this.name = name;
  }
}

const p9 = new Person9('name');

console.log(p9);

class Person10 {
  name: string = "Mark";
  age: number;

  constructor(age: number) {
    if (age === undefined) {
      this.age = 20;
    } else {
      this.age = age;
    }
  }
}

const p10 = new Person10(39);
console.log(p10);
console.log(p10.age);