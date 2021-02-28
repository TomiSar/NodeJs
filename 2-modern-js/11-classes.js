class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Hello ${this.name}!`);
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }
    greet() {
        console.log(`Hello ${this.name} from ${this.level}!`);
    }
}

const obj1 = new Person("Max");
const obj2 = new Student("Tina", "1st Grade");
const obj3 = new Student("Mary", "3rd Grade");

obj3.greet = () => console.log("I am special!");

obj1.greet();
obj2.greet();
obj3.greet();