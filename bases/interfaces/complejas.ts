(() => {

    interface Address {
        city: string,
        country: string
    }

    interface Client {
        name: string,
        age: number,
        address?: Address,
        doSomething(parameter: string): string
    }

    const client: Client = {
        name: 'Mario',
        age: 26,
        address: {
            city: 'San Salvador',
            country: 'El Salvador'
        },
        doSomething(parameter: string): string {
            return `Using parameter ${parameter}`
        }
    }
})()