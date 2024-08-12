(() => {
    
    // OG way to define classes
    class Person{
        private id: string;
        private name: string;
        private favColor?: string;

        constructor(id: string, name: string, favColor?: string) {
            this.id = id;
            this.name = name;
            this.favColor = favColor;
        }
    }

    //* New way to define classes
    class PersonNew {
        constructor(
            public  id: string,
            private name: string,
            private favColor?: string
        ) { };

        public bio(): string {
            return `ID: ${this.id} | Name: ${this.name}`
        }

        public static printMessage(message: string): void {
            console.log(message);
        }
    }

    const mario = new Person('1234', 'Mario');
    const juan = new PersonNew('5678', 'Juan', 'Blue');

    console.log(mario);
    console.log(juan.bio());
    
    PersonNew.printMessage('Test static method');
})()