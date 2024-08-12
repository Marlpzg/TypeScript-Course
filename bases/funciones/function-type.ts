(() => {
    const addNumbers = (numA: number, numB: number): number => numA + numB;
    const greet = (name: string): string => `Hola ${name}`;
    const saveTheWorld = (): string => `El Mundo esta salvado!`;

    //*let myFunction: (a: number, b: number) => number;
    //?let myFunction: (a: string) => string;
    let myFunction: () => string;

    //*myFunction = addNumbers;
    //*console.log(myFunction(1, 2));

    //?myFunction = greet;
    //?console.log(myFunction('Mario'));

    myFunction = saveTheWorld;
    console.log(myFunction());
})()