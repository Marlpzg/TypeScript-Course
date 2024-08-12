(() => {
    const hero: string = 'Flash';

    const returnName = (): string => {
        return hero;
    }

    const activateBatSignal = (): string => {
        return "BATMAAAN!";
    }

    const heroName: string = returnName();

})()