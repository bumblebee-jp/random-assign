#!/usr/bin/env node

const printUsage = (): void => {
    console.log('Usage: next name1,name2,... [assignee number]');
};

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

if (process.argv[2] === undefined) {
    console.log('The input cannot be empty. Please specify comma seperated list of candidates');
    process.exit(1);
}

if (process.argv.length !== 3) {
    console.log('Please specify only one list of candidates');
    process.exit(1);
}

const membersList: string[] = process.argv[2].split(',');

if (membersList.length === 1) {
    printUsage();
    process.exit(1);
}

let assigneeNumber: number;

if (process.argv[3] === undefined) {
    assigneeNumber = 1;
} else {
    assigneeNumber = Number(process.argv[3]);
}

if (!Number.isInteger(assigneeNumber) || assigneeNumber < 1) {
    printUsage();
    process.exit(1);
}

const memberID = randomNumber(membersList.length);
console.log('Next is ', membersList[memberID]);
