(() => {
    class Singleton {
        private static instance: Singleton;

        private constructor(public value: string) {
            console.log('Singleton instance created!');
        }

        static getInstance(value?: string): Singleton {
            if (!this.instance) {
                this.instance = new Singleton(value || 'Default');
            }

            console.log('Returning singleton instance');
            return this.instance;
        }

        changeValue(value: string): void{
            console.log('Singleton value changed!!!!!')
            this.value = value;
        }
    }

    let singletonInstance: Singleton = Singleton.getInstance();

    singletonInstance = Singleton.getInstance('NEW VALUE'); // Instance already exists
    console.log('Singleton value: ' + singletonInstance.value);
    
    singletonInstance.changeValue('Updated value');
    singletonInstance = Singleton.getInstance('NEW VALUE X2'); // Instance already exists
    console.log('Singleton value: ' + singletonInstance.value);
    
})()