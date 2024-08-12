(() => {
    const error = (message?: string): string | never => {
        
        if(message) throw new Error(message);

        return 'Hola';
    }

    error('Aiudaaa!');
    error();
})()