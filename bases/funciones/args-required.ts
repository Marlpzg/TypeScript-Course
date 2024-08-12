(() => {
    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Mario', 'Lopez');

    console.log(name);
})()