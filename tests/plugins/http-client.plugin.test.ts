import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('Test in the http-client.', () => { 
    test('httpClientPlugin.get() should return a string.', async() => { 
        const data = await httpClientPlugin.get('https://jsonplaceholder.typicode.com/todos/1');

        expect( data ).toEqual({
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: expect.any(Boolean)
        });
    });

    test('httpClientPlugin should have POST, PUT and DELETE methods.', () => { 
        expect( typeof httpClientPlugin.post ).toBe('function');
        expect( typeof httpClientPlugin.put ).toBe('function');
        expect( typeof httpClientPlugin.delete ).toBe('function');
    });
});