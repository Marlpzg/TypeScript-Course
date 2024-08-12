"use strict";
(() => {
    let mario = {
        name: "Mario Lopez",
        age: 26,
        skills: ['develop', 'solve problems']
    };
    let juan = {
        name: "Juan Perez",
        age: 33,
        skills: ['exist'],
        getName() {
            return this.name.toUpperCase();
        }
    };
})();
(() => {
    class Person {
        constructor(name) {
            this.name = name;
        }
        action() {
            console.log('Doing something...');
        }
        talk(msg) {
            console.log(msg);
        }
    }
    const myPerson = new Person('Mario');
    myPerson.action();
    myPerson.talk('I\'m talking...');
})();
(() => {
    const client = {
        name: 'Mario',
        age: 26,
        address: {
            city: 'San Salvador',
            country: 'El Salvador'
        },
        doSomething(parameter) {
            return `Using parameter ${parameter}`;
        }
    };
})();
(() => {
    let addNumbers;
    addNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=main.js.map