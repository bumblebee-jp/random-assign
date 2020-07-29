#!/usr/bin/env node

const membersList: string[] = process.argv[2].split(',');

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

const memberID = randomNumber(membersList.length);
console.log('Next is ', membersList[memberID]);
