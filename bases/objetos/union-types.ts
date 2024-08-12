(() => {
    type Person = {
        name: string,
        age?: number,
        skills: string[],
        getName?: () => string
    }

    let myCustomVariable: (string | number | Person) = 'Mario';
    console.log(typeof myCustomVariable);

    myCustomVariable = 10;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: "Juan",
        age: 41,
        skills: [],
    };
    console.log(typeof myCustomVariable);
})()