interface IPerson {
  name: string;
  age: number;
}

const person22: IPerson = {
  name: 'Mark',
  age: 39,
};

type Keys = keyof IPerson;

const keys: Keys = "name";

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"] | IPerson["age"]
// => string | number
function getProp<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

getProp(person, 'name')

function setProp<T, K extends keyof T>(
  obj: T,
  key: keyof T,
  value: T[keyof T]): void {
  obj[key] = value;
}

setProp(person, "name", "Anna");