(() => {
    enum AudioLevel {
        Min = 1,
        Med,
        Max = 10
    }

    let currentAudio = AudioLevel.Max;

    console.log({ currentAudio })
    console.log({ AudioLevel });
})()