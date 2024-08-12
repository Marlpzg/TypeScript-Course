(() => {
    const fullName = (firstName: string, ...args: string[]): string => {
        return `${firstName} ${args.join(' ')}`;
    }

    console.log(fullName('Mario', 'Isaac', 'Lopez'));
})()