(() => {
    const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
        let result = `${firstName} ${lastName || '______'}`;
        if (upper) result = result.toUpperCase();
        return result;
    }

    const name = fullName('Mario', 'Lopez',  true);

    console.log(name);
})()