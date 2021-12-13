/* Generics with extends */
// 그냥 T 보다는 extends로 타입을 명시하는걸 추천
class PersonExtends<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new PersonExtends("Mark");
new PersonExtends(39);
//new PersonExtends(true);