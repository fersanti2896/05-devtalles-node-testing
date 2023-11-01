import { getUUID } from '../../src/plugins/get-id.plugin';

describe('Test in the get-id.', () => { 
    test('getUUID sould return a UUID.', () => { 
        const uuid = getUUID();

        expect( typeof uuid ).toBe( 'string' );
        expect( uuid.length ).toBe( 36 );
    });
});