export const treatment = [
    {
        name: 'Self treatment',
        money: '$50',
        time: '1 mins',
        requirements: [""],
        health: { isIncrease: true, index: "2" },
    },
    {
        name: 'Gym',
        money: '$100/month',
        time: '1 mins',
        requirements: ["at least 16 year old"],
        health: { isIncrease: true, index: "2" },
        happiness: { isIncrease: true, index: "3" },
    },
    {
        name: 'See a doctor',
        money: '$1000',
        requirements: [""],
        health: { isIncrease: true, index: "5" },
    },
    {
        name: 'Meditate',
        money: 'free',
        requirements: [""],
        iq: { isIncrease: true, index: "2" },
        health: { isIncrease: true, index: "3" },
    },
    {
        name: 'Take pills',
        money: '$50',
        time: '1 mins',
        requirements: [""],
        happiness: { isIncrease: true, index: "2" },
        health: { isIncrease: false, index: "3" },
    },
    {
        name: 'Hospital stay',
        money: '$3000',
        time: '2 mins',
        requirements: [""],
        health: { isIncrease: true, index: "2" },
        happiness: { isIncrease: false, index: "4" }
    }
];