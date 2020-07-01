const membersList = ['Makoto', 'Hiro', 'Philip', 'Iwasaki'];

function randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
}

const returnedValue = randomNumber(0, membersList.length);
console.log('Next is ', membersList[returnedValue]);
