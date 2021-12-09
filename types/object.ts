const person1 = { name: 'Mark', age: 39 };

declare function create(o: object | null): void;

create({ prop: 0 });
create(null);