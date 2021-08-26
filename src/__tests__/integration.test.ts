import { randomAssign } from '../randomAssign';

describe('Integration test', () => {
    const member = 'Makoto,Hiro,Aki,Iwasaki';
    const memberList = ['Makoto', 'Hiro', 'Aki', 'Iwasaki'];
    describe('Happy path test', () => {
        describe('No input extract number', () => {
            it('should be selected one person when no input extract number', () => {
                const selectedMemberList = randomAssign(member, undefined);
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(1);
            });
        });

        describe('Input extract number', () => {
            it('should be selected one person when extract number is 1', () => {
                const selectedMemberList = randomAssign(member, '1');
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(1);
            });

            it('should be selected one person when extract number is 1.0', () => {
                const selectedMemberList = randomAssign(member, '1.0');
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(1);
            });

            it('should be selected two persons when extract number is 2', () => {
                const selectedMemberList = randomAssign(member, '2');
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(2);
            });

            it('should be selected three persons when extract number is 3', () => {
                const selectedMemberList = randomAssign(member, '3');
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(3);
            });

            it('should be selected four persons when extract number is 4', () => {
                const selectedMemberList = randomAssign(member, '4');
                expect(memberList).toEqual(expect.arrayContaining(selectedMemberList));
                expect(selectedMemberList).toHaveLength(4);
            });
        });
    });

    describe('Unhappy path test', () => {
        describe('No input member', () => {
            it('should throw error when no input member', () => {
                expect(() => randomAssign(undefined, undefined)).toThrowError(
                    new Error('Error: No input member.')
                );
            });
        });

        describe('Invalid extract number', () => {
            it('should throw error when extract number is not integer', () => {
                expect(() => randomAssign(member, 'a')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );

                expect(() => randomAssign(member, '-')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );

                expect(() => randomAssign(member, '2.5')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );
            });

            it('should throw error when extract number is less than 1', () => {
                expect(() => randomAssign(member, '0')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );

                expect(() => randomAssign(member, '-2')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );
            });

            it('should throw error when extract number is greater than the number of members', () => {
                expect(() => randomAssign(member, '5')).toThrowError(
                    new Error(
                        'Error: Invalid extract number. Extract number must be integer between 1 and the number of members.'
                    )
                );
            });
        });
    });
});
