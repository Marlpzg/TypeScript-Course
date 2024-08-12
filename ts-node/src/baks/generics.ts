import { genericFunction, genericFunctionArrow, printObject } from "./../generics/generics";
import { Villain, Hero } from "./../interfaces";


//import { Person } from "./classes/Person";
//import { Person, PersonVariant as NewPerson } from "./classes/Person";
//import * as PersonClasses from "./classes/Person";
//import skills, { Skill } from "./data/skills";

//const mario = new Person('Mario', 26, 2);
//console.log( mario.skill );
//const juan = new PersonClasses.Person('Juan', 50, 'M');

//console.log(skills[0]);

//printObject(123);
//printObject('Hola Mundo');
//printObject(new Date());
//printObject([1, 2, 3, 4, 5, 6]);
//printObject({ a: 1, b: 2, c: 3 });

//console.log(genericFunctionArrow(3.14159).toFixed(2));
//console.log(genericFunction(new Date()).getTime());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade',
    dangerLevel: 130
}

console.log(genericFunction<Villain>(deadpool).name)