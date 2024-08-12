(() => {
    let person: {
        name: string,
        age?: number,
        skills: string[],
        getName?: () => string
    } = {
        name: "Mario Lopez",
        age: 26,
        skills: ['develop', 'solve problems']
    }

    person = {
        name: "Test",
        age: 100,
        skills: ['unknown'],
        getName() {
            return this.name;
        }
    }

})()