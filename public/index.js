"use strict";
// Basic primitive types
let myVariable = 20;
let myName = "Max";
let someBoolean = true;
//Type any
let x = 10;
x = "String";
// Type inference
let someNumber = 10;
// initialize before declaration
let myNumber;
myNumber = 10;
// Arrays
let myArray = [1, 2, 4];
let myArray2 = [1, 2, 4];
let myArray3 = [1, "String", true];
myArray.push(5);
// Tuples (fixed length and fixed type)  special type of array
let myTuple = ["String", 10];
// Tuple Array
let employee;
employee = [
    ["max", 1],
    ["manu", 2],
    ["anna", 3],
];
// Union
let id = 10;
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "DOWN";
    Direction2["Left"] = "LEFT";
    Direction2["Right"] = "RIGHT";
})(Direction2 || (Direction2 = {}));
// Objects
const user = {
    id: 1,
    name: "Max",
    phoneNumber: 090980029902,
};
const user2 = {
    id: 1,
    name: "Max",
    phoneNumber: 090980029902,
};
// Interfaces
// Type Assertion : you want to treat an entity as a different type
let cid = 1;
// first method for type assertion
// let customerid = <number>cid;
// second method for type assertion
let customerid = cid;
// Functions
// function with return value
function addNum(x, y) {
    return x + y;
}
// function without return value - void
function log(message) {
    console.log(message);
}
console.log(addNum(1, 2));
const user3 = {
    id: 1,
    name: "Max",
};
let p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
// classes
class Person4 {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
class Person {
    constructor(id, name) {
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
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const person1 = new Person(1, "Max");
console.log(person1.name);
// subclass - extends - inherit from a class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Habeeb", "Developer");
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["tunji", "habeeb", "adekunle"]);
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
