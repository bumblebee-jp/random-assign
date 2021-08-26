export const printUsage = (): void => {
    console.log('Usage: random-assign name1,name2,... [extract number (default : 1)]');
};

const randomNumber = (max: number): number => {
    return Math.floor(Math.random() * max);
};

const selectMember = (memberList: string[], assigneeNumber: number): string[] => {
    const selectedMemberList: string[] = [];
    for (let i = 0; i < assigneeNumber; i++) {
        const randomIndex = randomNumber(memberList.length);
        selectedMemberList.push(memberList[randomIndex]);
        memberList.splice(randomIndex, 1);
    }

    return selectedMemberList;
};

export const randomAssign = (
    member: string | undefined,
    extractNumber: string | undefined
): string[] => {
    let memberList: string[] = [];
    if (member) {
        memberList = member.split(',');
    }
    else {
        throw new Error('Error: No input member.');
    }

    let assigneeNumber = 1;
    if (extractNumber) {
        if (
            Number.isInteger(Number(extractNumber)) &&
            Number(extractNumber) >= 1 &&
            Number(extractNumber) <= memberList.length
        ) {
            assigneeNumber = Number(extractNumber);
        }
        else {
            throw new Error(
                'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
            );
        }
    }

    const selectedMemberList = selectMember(memberList, assigneeNumber);
    return selectedMemberList;
};
