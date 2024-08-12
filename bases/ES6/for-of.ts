(() => {
    type Car = {
        brand: string,
        model: string
    };

    const corolla: Car = {
        brand: 'Toyota',
        model: 'Corolla'
    };

    const elantra: Car = {
        brand: 'Hyundai',
        model: 'Elantra'
    };

    const picanto: Car = {
        brand: 'KIA',
        model: 'Picanto'
    };

    const cars: Car[] = [corolla, elantra, picanto];

    for (const car of cars) {
        console.log(car)
    }

})()