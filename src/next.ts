const printUsage = (): void => {
    // console.log('Usage: next name1,name2,... [assignee number]');
    console.log('Usage: next name1,name2,... ');
};

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

export const next = (argumentArray: string[]): string[] => {
    // if (argumentArray[2] === undefined) {
    //     console.log('The input cannot be empty. Please specify comma seperated list of candidates');
    //     process.exit(1);
    // }

    // if (argumentArray.length !== 3) {
    //     console.log('Please specify only one list of candidates');
    //     process.exit(1);
    // }

    // console.log('argumentArray[3]', argumentArray[0]);

    const membersList: string[] = argumentArray[0].split(',');

    if (membersList.length === 1) {
        printUsage();
        process.exit(1);
    }

    let assigneeNumber: number;

    if (argumentArray[1] === undefined) {
        // console.log(argumentArray[3]);
        assigneeNumber = 1;
    } else {
        assigneeNumber = Number(argumentArray[1]);
    }

    if (!Number.isInteger(assigneeNumber) || assigneeNumber < 1) {
        printUsage();
        process.exit(1);
    }

    const memberID = randomNumber(membersList.length);
    return [membersList[memberID]];
};

//main(argumentArray);
