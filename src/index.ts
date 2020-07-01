const membersList = ['Makoto', 'Hiro', 'Philip', 'Iwasaki'];

const randomNumber = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
};

const memberID = randomNumber(0, membersList.length);
console.log('Next is ', membersList[memberID]);
