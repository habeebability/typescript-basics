// Basic primitive types
let myVariable: number = 20;
let myName: string = "Max";
let someBoolean: boolean = true;

//Type any
let x: any = 10;
x = "String";

// Type inference
let someNumber = 10;

// initialize before declaration
let myNumber: number;
myNumber = 10;

// Arrays
let myArray: number[] = [1, 2, 4];
let myArray2: Array<number> = [1, 2, 4];

let myArray3: any[] = [1, "String", true];

myArray.push(5);

// Tuples (fixed length and fixed type)  special type of array
let myTuple: [string, number] = ["String", 10];

// Tuple Array
let employee: [string, number][];
employee = [
  ["max", 1],
  ["manu", 2],
  ["anna", 3],
];

// Union
let id: number | string = 10;

// Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Objects
const user: {
  id: number;
  name: string;
  phoneNumber: number;
} = {
  id: 1,
  name: "Max",
  phoneNumber: 090980029902,
};

type User2 = {
  id: number;
  name: string;
  phoneNumber: number;
};

const user2: User2 = {
  id: 1,
  name: "Max",
  phoneNumber: 090980029902,
};

// Interfaces

// Type Assertion : you want to treat an entity as a different type
let cid: any = 1;

// first method for type assertion
// let customerid = <number>cid;

// second method for type assertion
let customerid = cid as number;

// Functions
// function with return value
function addNum(x: number, y: number): number {
  return x + y;
}
// function without return value - void
function log(message: string | number): void {
  console.log(message);
}

console.log(addNum(1, 2));

// Interfaces its a custom type more for object

interface UserInterface {
  readonly id: number;
  name: string;
  age?: number; // optional property
}

const user3: UserInterface = {
  id: 1,
  name: "Max",
};

// types can be used with union and primitives but interfaces can be used with non primitives

type Point = number | string;
let p1: Point = 1;

// readonly property

// interface can be used with functions
interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  age?: number; // optional property
  register(): string;
}
// classes
class Person4 implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}
class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered`;
  }
}

const habeeb = new Person(1, "Habeeb");

console.log(habeeb.register());

// access modifiers - public, private, protected
// public - default
// private - only accessible within the class
// protected - only accessible within the class and its subclasses
class Person2 {
  protected id: number;
  private name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const person1 = new Person(1, "Max");

console.log(person1.name);

// subclass - extends - inherit from a class
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Habeeb", "Developer");

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let stringArray = getArray<string>(["tunji", "habeeb", "adekunle"]);

numArray.push(1);

console.log(emp);
console.log(emp.register());

console.log("myVariable: " + myVariable);
console.log("myName: " + myName);
console.log("someNumber: " + someNumber);
console.log("someBoolean: " + someBoolean);
console.log("x: " + x);
console.log("myNumber: " + myNumber);
console.log("myArray: " + myArray);
console.log("myArray2: " + myArray2);
console.log("Direction1.Up: " + Direction1.Up);
console.log("Direction1.Down: " + Direction1.Down);
console.log("Direction1.Left: " + Direction1.Left);
console.log("Direction2.Up: " + Direction2.Up);
console.log("Direction2.Down: " + Direction2.Down);
