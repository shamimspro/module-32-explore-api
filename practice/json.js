const persons = [
    {
        id: 1,
        name: 'shamim sarker',
        age: 30,
        isMale: true,
        degree: 'graduate',
        skill: ['html', 'css', 'bootstrap', 'tailwind', 'javascript']
    },
    {
        id: 2,
        name: 'snigdha sarker',
        age: 24,
        isMale: false,
        degree: 'graduate',
        skill: ['autocad', 'figma', 'ms-office', 'photoshop', 'cooking']
    },
    {
        id: 3,
        name: 'sneha mony',
        age: 14,
        isMale: false,
        degree: 'ssc',
        skill: ['bangla', 'english', 'math', 'physics', 'chemistry']
    }
];

const personsJson = JSON.stringify(persons);
// console.log(typeof persons);
// console.log(typeof personsJson);
// console.log(persons);
// console.log(personsJson);
const personsObj = JSON.parse(personsJson);
console.log(personsObj);