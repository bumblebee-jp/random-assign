import { next } from '../next';

describe('Happy path test', () => {
    let argumentArray: string[] = ['Makoto,Hiro,Iwasaki'];
    it('should be selected one person when no input in second argument', () => {
        expect(['Makoto', 'Hiro', 'Iwasaki']).toEqual(expect.arrayContaining(next(argumentArray)));
    });

    it('should be selected people based on second argument', () => {});
});
