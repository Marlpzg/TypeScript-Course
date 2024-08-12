(() => {
    let avenger: any = 123;
    let exists;

    avenger = 'spiderman';
    //console.log(avenger.toUpperCase());
    console.log((avenger as string).toUpperCase());

    avenger = 123.456;
    console.log((<number>avenger).toFixed(2));
})()