(() => {
    const numbers: number[] = [1, 2, 3];
    const words: string[] = ['hello', 'world'];

    numbers.push(4);
    
    words.forEach(word => word.toUpperCase());
    numbers.forEach(v => console.log(v));
})()