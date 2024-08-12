(() => {
    abstract class Person {
        constructor(
            public name: string,
            public lastName: string,
        ) { }

        abstract requestTools(): void;
    }

    class Employee extends Person{
        work(): void {
            console.log('Working...');
        }

        requestTools(): void {
            console.log('I need a computer...');
        }
    }

    class Doctor extends Person{
        cure(): void {
            console.log('Curing...');
        }

        requestTools(): void {
            console.log('I need a medic kit...');
        }
    }

    const mario = new Employee('Mario', 'Lopez');
    const ronald = new Doctor('Ronald', 'Lopez');

    const printName = (instance: Person): void => {
        console.log('Printing name: '+instance.name);
    }

    printName(mario);
    mario.requestTools();
    
    printName(ronald);
    ronald.requestTools();

})()