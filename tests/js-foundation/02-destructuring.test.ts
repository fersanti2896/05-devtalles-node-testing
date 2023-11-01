import { characters } from '../../src/js-foundation/02-destructuring';

describe('Test in the 02-Destructuring', () => { 
    test('characters should contain Flash, Superman', () => { 
        expect( characters ).toContain('Flash');
        expect( characters ).toContain('Superman');
    });

    test('first character should be Flahs and second Superman', () => { 
        const [ flash, superman ] = characters;

        expect( flash ).toBe('Flash');
        expect( superman ).toBe('Superman');
    })
});
