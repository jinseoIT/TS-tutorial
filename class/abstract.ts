abstract class AbstractPerson {
  protected _name: string = "Mark";

  abstract setName(name: string): void;
}

// new AbstractPerson()

class Person20 extends AbstractPerson {
  setName(name: string): void {
    this._name = name;
  }
}

const c1 = new Person20();
c1.setName('Jane');