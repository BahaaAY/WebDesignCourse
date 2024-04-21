"use strict";

// destructring

let arr = ["firstName", "lastName", "major"];

let [firstName, , major] = arr;

// [index, index, index]


console.log(`First Name: ${firstName}`);

console.log(`Major: ${major}`);

// object destructring

let obj = {
  name: "John",
  age: 30,
  job: "developer",
};

let { age, name, job } = obj;

// {key, key, key}

console.log(`Name: ${name}`);

console.log(`Age: ${age}`);

console.log(`Job: ${job}`);

let { age: a, name: n, job: j } = obj;

// {key: newKey, key: newKey, key: newKey}

console.log(`Name: ${n}`);

console.log(`Age: ${a}`);

console.log(`Job: ${j}`);
// default values

let { age: a1 = 25, name: n1 = "Mike", job: j1 = "designer" } = obj;

// {key: newKey = default value, key: newKey =  default value, key: newKey =  default value}

console.log(`Name: ${n1}`);

console.log(`Age: ${a1}`);

console.log(`Job: ${j1}`);

// ...rest operator

let [first, second, ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(`First: ${first}`);

console.log(`Second: ${second}`);

console.log(`Rest: ${rest}`);


//oop
//1- polymorphism
//2- inheritance
//3- encapsulation
//4- abstraction


// inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
    }

    class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    }  

    let student = new Student("John", 25, "Computer Science");

    student.greet();

    console.log(student);

    // encapsulation

    class Car {
        constructor(brand, model, year) {
            this.brand = brand;
            this.model = model;
            this.year = year;
        }
        
        get age() {
            return new Date().getFullYear() - this.year;
        }
        
        set age(value) {
            this.year = new Date().getFullYear() - value;
        }
    }

    let car = new Car("Toyota", "Corolla", 2015);

    console.log(car.age);

    car.age = 2010;

    console.log(car.year);

    // abstraction

    class Animal {
        constructor(name) {
            this.name = name;
        }
        
        speak() {
            throw new Error("Not implemented");
        }
    }
    
    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks`);
        }
    }

    let dog = new Dog("Rex");

    dog.speak();

    // polymorphism

    class Animal {

        constructor(name) {
            this.name = name;
        }
        
        speak() {
            throw new Error("Not implemented");
        }
    }

    class Dog extends Animal {
        speak() {
            console.log(`${this.name} barks`);
        }
    }

    class Cat extends Animal {
        speak() {
            console.log(`${this.name} meows`);
        }
    }

    