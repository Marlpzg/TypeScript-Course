(() => {
    interface Nameable{
        name: string;
    }

    interface Actionable{
        action(): void;
    }

    interface Talkative {
        talk(msg: string): void;
    }

    class Person implements Nameable, Actionable, Talkative{

        constructor(public name: string){}

        action(): void{
            console.log('Doing something...')
        }

        talk(msg: string): void {
            console.log(msg);
        }
    }

    const myPerson = new Person('Mario');
    myPerson.action();
    myPerson.talk('I\'m talking...')
})()