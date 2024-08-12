(() => {
    class Person {
        constructor(
            public name: string,
            public lastName: string,
        ) {
            console.log('Person constructor called');
        }

        protected getFullName(): string {
            return `${this.name} ${this.lastName}`;
        }
    }

    class Employee extends Person {
        constructor(
            name: string,
            lastName: string,
            public salary: number
        ) {
            super(name, lastName);
            console.log('Employee constructor called');
        }

        get getName(): string { return this.name }
        get getlastName(): string { return this.lastName }

        set setName(name: string) { this.name = name }
        set setLastName(lastName: string) { this.lastName = lastName }

        public getFullName(): string {
            return `Employee full name: ${super.getFullName()}`;
        }
    }

    const mario = new Employee('Mario', 'Lopez', 240.0);
    
    //console.log(mario);
    //console.log(mario.getFullName());

    //console.log(mario.getName);
    //mario.setLastName = 'Guevara';

    //console.log(mario.getlastName);

})()