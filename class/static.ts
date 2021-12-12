class Person13 {
  private static CITY = "Seoul";
  public hello() {
    console.log('안녕하세요', Person13.CITY);
  }
  public change() {
    Person13.CITY = 'LA';
  }
}

const p13 = new Person13();
const pp13 = new Person13();
p13.hello(); // Seoul
pp13.change(); // static properties change
p13.hello(); // LA