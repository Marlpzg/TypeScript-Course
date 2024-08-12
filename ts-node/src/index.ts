import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
charmander.savePokemonToDB(50);
//(Pokemon.prototype as any).customName = 'Pikachu';
charmander.publicApi = 'test';