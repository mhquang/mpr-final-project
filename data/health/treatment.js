export const treatment = [
    {
        name: 'Self treatment',
        money: 50,
        time: "2000",
        health: { isIncrease: true, index: "2" },
    },
    {
        name: 'Meditate',
        money: "Free",
        time: "2000",
        iq: { isIncrease: true, index: "2" },
        health: { isIncrease: true, index: "3" },
    },
    {
        name: 'Take pills',
        money: 50,
        time: "2000",
        happiness: { isIncrease: true, index: "2" },
        health: { isIncrease: false, index: "3" },
    },
    {
        name: 'See a doctor',
        money: 1000,
        time: "2000",
        health: { isIncrease: true, index: "5" },
    },
    {
        name: 'Hospital stay',
        money: 3000,
        time: "2000",
        health: { isIncrease: true, index: "2" },
        happiness: { isIncrease: false, index: "4" }
    },
    {
        name: 'Experimental treatment',
        money: 44000,
        time: "2000",
        requirements: [],
        health: { isIncrease: true, index: "40" },
    },
    {
        name: 'Elixir of Youth',
        money: 2000000,
        time: "2000",
        requirements: ["At least 50 year old"],
        health: { isIncrease: true, index: "90" },
    },
];