export const treatment = [
    {
        name: 'Self treatment',
        money: '50',
        time: '1 mins',
        health: { isIncrease: true, index: "2" },
    },
    {
        name: 'Gym',
        money: '100',
        time: '1 mins',
        requirements: ["At least 16 year old"],
        health: { isIncrease: true, index: "2" },
        happiness: { isIncrease: true, index: "3" },
    },
    {
        name: 'See a doctor',
        money: '1000',
        health: { isIncrease: true, index: "5" },
    },
    {
        name: 'Meditate',
        money: 'Free',
        iq: { isIncrease: true, index: "2" },
        health: { isIncrease: true, index: "3" },
    },
    {
        name: 'Take pills',
        money: '50',
        time: '1 mins',
        happiness: { isIncrease: true, index: "2" },
        health: { isIncrease: false, index: "3" },
    },
    {
        name: 'Hospital stay',
        money: '3000',
        time: '2 mins',
        health: { isIncrease: true, index: "2" },
        happiness: { isIncrease: false, index: "4" }
    }
];