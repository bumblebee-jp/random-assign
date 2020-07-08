const membersList = ['Makoto', 'Hiro', 'Philip', 'Iwasaki', 'Aki', 'Masayuki'];

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

const memberID = randomNumber(membersList.length);
console.log('Next is ', membersList[memberID]);
