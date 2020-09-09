#!/usr/bin/env node

import { next } from './next';

const selectedMember = next([process.argv[2]]);
console.log('Next is ', selectedMember[0]);
