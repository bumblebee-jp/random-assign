#!/usr/bin/env node
'use strict';

import { randomAssign, printUsage } from './randomAssign';

const member = process.argv[2];
const extractNumber = process.argv[3];
try {
    const selectedMemberList = randomAssign(member, extractNumber);
    console.log('Next is ', selectedMemberList.join(', '));
}
catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    console.log(error.message);
    printUsage();
}
