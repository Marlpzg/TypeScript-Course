function printToConsole(constructor: Function){
    console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
    if (print) return printToConsole;
    return () => { };
}

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId(): Function {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = (id: number) => {
            if (id < 1 || id > 800) {
                return console.error('ID must be between 1 and 800');
            } else {
                return originalMethod(id);
            }
        };
    }
}

function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                return this;
            },
            set(this, value) {
                Object.defineProperty(this, propertyKey, {
                    value,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}

@blockPrototype
@printToConsoleConditional(true)
export class Pokemon{

    @readonly()
    public publicApi: string = 'https://pokeapi.com'

    constructor(
        public name: string
    ) { }

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log(`Pokemon stored in DB ${id}`);
    }

}