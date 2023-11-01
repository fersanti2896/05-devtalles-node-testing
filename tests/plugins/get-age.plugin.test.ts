import { getAge } from '../../src/plugins/get-age.plugin';

describe('Test in the plugin get-age.', () => { 
    test('getAge() sould return the age of a person.', () => { 
        const birthdate = '1996-12-16';
        const age = getAge(birthdate);

        expect( typeof age ).toBe('number');
    });

    test('getAge() should return current age.', () => { 
        const birthdate = '1996-12-16';
        const age = getAge(birthdate);
        const calculatedAge = new Date().getFullYear() - new Date(birthdate).getFullYear();

        expect( age ).toBe( calculatedAge );
    });
});