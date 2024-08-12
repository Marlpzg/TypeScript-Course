(() => {
    type ProblemSet = {
        pA: string,
        pB: string,
        pC: string,
        difficulty: number,
        timeLimit: number
    };

    const icpcProblems: ProblemSet = {
        pA: 'A new problem',
        pB: 'Back to basics',
        pC: 'Counting frogs',
        difficulty: 4,
        timeLimit: 2.5
    };

    const { pA, timeLimit } = icpcProblems;
    console.log(pA.toUpperCase(), timeLimit.toPrecision(3));

    const teacherData: [string, number, boolean] = ['Mario', 250.0, true];

    const [, salary, isActive] = teacherData;
    console.log({ salary, isActive })

})()