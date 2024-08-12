(() => {
    class Person {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }

    class Employee extends Person {
        salary;
        constructor(name, age, salary) {
            super(name, age);
            this.salary = salary;
        }
    }

    const mario = new Employee('Mario', 26, 240.0);
    console.log(mario.salary);
})()