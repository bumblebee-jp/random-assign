#!/usr/bin/env node

if (process.argv[2] === undefined) {
    console.log('The input cannot be empty. Please specify comma seperated list of candidates');
    process.exit(1);
}

if (process.argv.length !== 3) {
    console.log('Please specify only one list of candidates');
    process.exit(1);
}

const membersList: string[] = process.argv[2].split(',');

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

if (membersList.length === 1) {
    console.log('Please insert at least 2 participants');
    process.exit(1);
}

const memberID = randomNumber(membersList.length);
console.log('Next is ', membersList[memberID]);
