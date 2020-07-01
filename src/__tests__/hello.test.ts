import {Hello} from '../hello'

describe('Hello', () => {

    describe('getName()', () => {
        it('should return name that is passed in the constructor', () => {

            const hello = new Hello('Friend');
            expect(hello.getName()).toBe('Friend')
        });
    });

    describe('greeting()', () => {
        it('should print Hello World', () => {

            const consoleLogSpy = jest.spyOn(console, 'log');
            const hello = new Hello('World');
            hello.greeting();

            expect(consoleLogSpy).toHaveBeenCalledTimes(1);
            expect(consoleLogSpy).toHaveBeenLastCalledWith('Hello', 'World');

        });
    });

});
