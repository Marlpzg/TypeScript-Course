(() => {
    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || '______'}`;
    }

    const name = fullName('Mario');

    console.log(name);
})()