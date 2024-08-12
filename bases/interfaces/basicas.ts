(() => {
    interface Person {
        name: string,
        age?: number,
        skills: string[],
        getName?: () => string
    }

    let mario: Person = {
        name: "Mario Lopez",
        age: 26,
        skills: ['develop', 'solve problems']
    }

    let juan: Person = {
        name: "Juan Perez",
        age: 33,
        skills: ['exist'],
        getName() {
            return this.name.toUpperCase();
        }
    }

})()