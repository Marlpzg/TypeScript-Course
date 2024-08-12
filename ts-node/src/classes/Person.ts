import skills from "../data/skills";

export class Person{
    constructor(
        public name: string,
        public age: number,
        public skillId: number
    ) { }
    
    get skill(): string {
        return skills.find( skill => skill.id === this.skillId )?.desc || 'Not Found'
    }
}

export class PersonVariant {
    constructor(
        public name: string,
        public age: number,
        public gender: string
    ) { }
}